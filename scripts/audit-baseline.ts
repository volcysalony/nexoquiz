import assert from "node:assert/strict";

import {
  prisma,
} from "../src/database/prisma";

import {
  getProjectForRender,
} from "../src/features/projects/getProjectForRender";

async function main() {
  console.log("");
  console.log(
    "======================================"
  );

  console.log(
    " NEXOQUIZ — AUDITORIA DE BASELINE"
  );

  console.log(
    "======================================"
  );

  console.log("");

  const project =
    await prisma.project.findFirst({
      orderBy: {
        createdAt:
          "asc",
      },
    });

  if (!project) {
    throw new Error(
      "Nenhum projeto foi encontrado no banco local."
    );
  }

  console.log(
    `Projeto: ${project.title}`
  );

  console.log(
    `Formato: ${project.format}`
  );

  console.log(
    `Resolução: ${project.width}x${project.height}`
  );

  console.log(
    `FPS: ${project.fps}`
  );

  console.log("");

  /*
   * ==========================================
   * CONTRATO USADO PELO REMOTION
   * ==========================================
   */

  const quiz =
    await getProjectForRender(
      project.id
    );

  assert.ok(
    quiz.questions.length >
      0,
    "O projeto precisa possuir perguntas."
  );

  /*
   * ==========================================
   * TIMING
   * ==========================================
   */

  const secondsPerQuestion =
    quiz.introSeconds +
    quiz.countdownSeconds +
    quiz.revealSeconds;

  const totalSeconds =
    quiz.questions.length *
    secondsPerQuestion;

  const totalFrames =
    Math.ceil(
      totalSeconds *
        quiz.fps
    );

  console.log(
    "TIMING"
  );

  console.log(
    `Intro: ${quiz.introSeconds}s`
  );

  console.log(
    `Contagem: ${quiz.countdownSeconds}s`
  );

  console.log(
    `Revelação: ${quiz.revealSeconds}s`
  );

  console.log(
    `Tempo por pergunta: ${secondsPerQuestion}s`
  );

  console.log(
    `Duração total: ${totalSeconds}s`
  );

  console.log(
    `Frames totais: ${totalFrames}`
  );

  console.log("");

  /*
   * ==========================================
   * PERGUNTAS
   * ==========================================
   */

  console.log(
    `PERGUNTAS: ${quiz.questions.length}`
  );

  console.log("");

  for (
    let index = 0;
    index <
    quiz.questions.length;
    index++
  ) {
    const question =
      quiz.questions[
        index
      ];

    assert.equal(
      question.options.length,
      3,
      `Pergunta ${index + 1} não possui exatamente três alternativas.`
    );

    assert.ok(
      question.correctAnswer >=
        0 &&
        question.correctAnswer <=
          2,
      `Pergunta ${index + 1} possui resposta correta inválida.`
    );

    const answerMode =
      question.answerMode ??
      "TEXT";

    assert.ok(
      [
        "TEXT",
        "IMAGE",
        "IMAGE_TEXT",
      ].includes(
        answerMode
      ),
      `Pergunta ${index + 1} possui answerMode inválido.`
    );

    console.log(
      `${index + 1}. ${question.question}`
    );

    console.log(
      `   modo: ${answerMode}`
    );

    console.log(
      `   alternativas: ${question.options.length}`
    );

    console.log(
      `   correta: ${String.fromCharCode(
        65 +
          question.correctAnswer
      )}`
    );

    console.log(
      `   imagem da pergunta: ${
        question.image
          ? "sim"
          : "não"
      }`
    );

    console.log("");
  }

  /*
   * ==========================================
   * RESULTADO
   * ==========================================
   */

  console.log(
    "======================================"
  );

  console.log(
    "✅ BASELINE FUNCIONAL VALIDADO"
  );

  console.log(
    "======================================"
  );

  console.log("");

  console.log(
    "O redesign poderá prosseguir sem alterar este contrato."
  );

  console.log("");
}

main()
  .catch(
    (
      error
    ) => {
      console.error("");

      console.error(
        "❌ BASELINE FALHOU"
      );

      console.error("");

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