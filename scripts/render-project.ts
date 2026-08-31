import {
  prisma,
} from "../src/database/prisma";

import {
  renderProject,
} from "../src/features/renders/renderProject";

async function main() {
  console.log("");
  console.log(
    "🔎 Procurando projeto no banco..."
  );

  const project =
    await prisma.project.findFirst({
      orderBy: {
        createdAt:
          "asc",
      },

      select: {
        id:
          true,

        title:
          true,

        questions: {
          select: {
            id:
              true,
          },

          take:
            1,
        },
      },
    });

  if (!project) {
    throw new Error(
      "Nenhum projeto encontrado no banco."
    );
  }

  if (
    project.questions.length ===
    0
  ) {
    throw new Error(
      `O projeto "${project.title}" não possui perguntas para renderizar.`
    );
  }

  console.log(
    `✅ Projeto encontrado: ${project.title}`
  );

  /*
   * =====================================================
   * EVITA DUPLICAR RENDER ATIVO
   * =====================================================
   */

  const activeRender =
    await prisma.render.findFirst({
      where: {
        projectId:
          project.id,

        status: {
          in: [
            "PENDING",
            "RENDERING",
          ],
        },
      },

      orderBy: {
        createdAt:
          "desc",
      },
    });

  if (activeRender) {
    throw new Error(
      `Já existe uma renderização ativa para este projeto: ${activeRender.id}`
    );
  }

  /*
   * =====================================================
   * CRIA O REGISTRO DE RENDER
   * =====================================================
   */

  const render =
    await prisma.render.create({
      data: {
        projectId:
          project.id,

        status:
          "PENDING",

        progress:
          0,
      },
    });

  console.log(
    `🎬 Render criado: ${render.id}`
  );

  /*
   * =====================================================
   * EXECUTA O MESMO PIPELINE USADO PELA API
   * =====================================================
   */

  const result =
    await renderProject(
      project.id,
      render.id
    );

  console.log("");

  console.log(
    "✅ Renderização concluída."
  );

  console.log(
    `📁 Arquivo: ${result.outputPath}`
  );
}

main()
  .catch(
    (
      error
    ) => {
      console.error("");

      console.error(
        "❌ Falha na renderização:"
      );

      console.error(
        error
      );

      process.exit(
        1
      );
    }
  )
  .finally(
    async () => {
      await prisma.$disconnect();
    }
  );