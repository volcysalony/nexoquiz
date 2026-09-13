import Link from "next/link";

import {
  ArrowRight,
  Palette,
  PenLine,
  Play,
  Plus,
  Video,
} from "lucide-react";

import {
  prisma,
} from "@/database/prisma";

import {
  AppShell,
} from "@/components/layout/AppShell";

import {
  QuizPreviewIllustration,
} from "@/components/dashboard/QuizPreviewIllustration";

import {
  TemplatePreviewCard,
} from "@/components/dashboard/TemplatePreviewCard";

export const dynamic =
  "force-dynamic";

function getProjectStatus(
  status:
    | string
    | undefined
) {
  switch (status) {
    case "COMPLETED":
      return {
        label:
          "Pronto",

        className:
          "bg-[#e3f3e7] text-[#176534]",
      };

    case "PENDING":
    case "RENDERING":
      return {
        label:
          "Processando",

        className:
          "bg-[#fff1bd] text-[#765c00]",
      };

    case "FAILED":
      return {
        label:
          "Revisar",

        className:
          "bg-[#fbe5df] text-[#a33a2c]",
      };

    default:
      return {
        label:
          "Rascunho",

        className:
          "bg-[#ece8da] text-[#667064]",
      };
  }
}

export default async function HomePage() {
  const projects =
    await prisma.project.findMany({
      orderBy: {
        updatedAt:
          "desc",
      },

      take:
        4,

      include: {
        _count: {
          select: {
            questions:
              true,
          },
        },

        renders: {
          orderBy: {
            createdAt:
              "desc",
          },

          take:
            1,

          select: {
            status:
              true,
          },
        },
      },
    });

  const hasProjects =
    projects.length >
    0;

  return (
    <AppShell>
      <main
        className="
          min-h-screen
          bg-nexo-bg
          text-nexo-text
        "
      >
        <div
          className="
            mx-auto
            max-w-[1320px]
            px-6
            py-8
            md:px-8
            lg:px-12
            lg:py-10
            xl:px-16
          "
        >
          {/* HERO */}

          <section
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)]
            "
          >
            <div
              className="
                max-w-[650px]
              "
            >
              {/* EYEBROW */}

              <div
                className="
                  inline-flex
                  flex-col
                  items-start
                "
              >
                <span
                  className="
                    text-[13px]
                    font-extrabold
                    uppercase
                    tracking-[0.08em]
                    text-nexo-green
                  "
                >
                  Início
                </span>

                <span
                  className="
                    mt-3
                    h-1
                    w-10
                    rounded-full
                    bg-nexo-yellow
                  "
                />
              </div>

              {/* HEADLINE */}

              {hasProjects ? (
                <h1
                  className="
                    mt-10
                    max-w-[620px]
                    text-[clamp(3rem,5.8vw,5.25rem)]
                    font-extrabold
                    leading-[0.98]
                    tracking-[-0.055em]
                    text-nexo-green
                  "
                >
                  Continue de onde{" "}
                  <span
                    className="
                      text-nexo-yellow
                    "
                  >
                    parou.
                  </span>
                </h1>
              ) : (
                <h1
                  className="
                    mt-10
                    max-w-[620px]
                    text-[clamp(3rem,5.8vw,5.25rem)]
                    font-extrabold
                    leading-[0.98]
                    tracking-[-0.055em]
                    text-nexo-green
                  "
                >
                  Seu primeiro quiz começa{" "}
                  <span
                    className="
                      text-nexo-yellow
                    "
                  >
                    aqui.
                  </span>
                </h1>
              )}

              <p
                className="
                  mt-7
                  max-w-[600px]
                  text-lg
                  leading-8
                  text-nexo-text-secondary
                  md:text-xl
                "
              >
                {hasProjects
                  ? "Continue editando seus quizzes ou crie um novo vídeo a partir de uma ideia."
                  : "Adicione suas perguntas, escolha um visual e deixe o NexoQuiz montar o vídeo."}
              </p>

              <Link
                href="/projetos/novo"
                className="
                  mt-8
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-nexo-green
                  px-7
                  py-4
                  text-[16px]
                  font-extrabold
                  text-white
                  transition
                  duration-150
                  hover:bg-nexo-green-hover
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-nexo-green
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-nexo-bg
                "
              >
                <Plus
                  size={21}
                  strokeWidth={
                    2.4
                  }
                />

                {hasProjects
                  ? "Criar novo vídeo"
                  : "Criar meu primeiro vídeo"}
              </Link>
            </div>

            <QuizPreviewIllustration />
          </section>

          {/* COMO FUNCIONA */}

          <section
            className="
              mt-8
              lg:mt-2
            "
          >
            <h2
              className="
                text-[23px]
                font-extrabold
                tracking-[-0.025em]
                text-nexo-green
              "
            >
              Como funciona
            </h2>

            <div
              className="
                mt-6
                grid
                gap-6
                md:grid-cols-3
                lg:max-w-[820px]
              "
            >
              {/* 01 */}

              <article
                className="
                  relative
                  pr-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-6
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f0ecd9]
                      text-nexo-green
                    "
                  >
                    <span
                      className="
                        absolute
                        top-1
                        text-xs
                        font-extrabold
                      "
                    >
                      01
                    </span>

                    <PenLine
                      size={29}
                      strokeWidth={
                        1.9
                      }
                    />
                  </div>

                  <div
                    className="
                      hidden
                      h-px
                      flex-1
                      border-t-2
                      border-dashed
                      border-[#ded7be]
                      md:block
                    "
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-[16px]
                    font-extrabold
                    text-[#1f2d22]
                  "
                >
                  Perguntas
                </h3>

                <p
                  className="
                    mt-1
                    max-w-[190px]
                    text-sm
                    leading-6
                    text-nexo-text-secondary
                  "
                >
                  Adicione suas perguntas e alternativas.
                </p>
              </article>

              {/* 02 */}

              <article
                className="
                  relative
                  pr-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-6
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f0ecd9]
                      text-nexo-green
                    "
                  >
                    <span
                      className="
                        absolute
                        top-1
                        text-xs
                        font-extrabold
                      "
                    >
                      02
                    </span>

                    <Palette
                      size={30}
                      strokeWidth={
                        1.9
                      }
                    />
                  </div>

                  <div
                    className="
                      hidden
                      h-px
                      flex-1
                      border-t-2
                      border-dashed
                      border-[#ded7be]
                      md:block
                    "
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-[16px]
                    font-extrabold
                    text-[#1f2d22]
                  "
                >
                  Personalização
                </h3>

                <p
                  className="
                    mt-1
                    max-w-[220px]
                    text-sm
                    leading-6
                    text-nexo-text-secondary
                  "
                >
                  Escolha o visual, cores, fonte, música e narração.
                </p>
              </article>

              {/* 03 */}

              <article>
                <div
                  className="
                    flex
                    items-center
                    gap-6
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f0ecd9]
                      text-nexo-green
                    "
                  >
                    <span
                      className="
                        absolute
                        top-1
                        text-xs
                        font-extrabold
                      "
                    >
                      03
                    </span>

                    <Video
                      size={30}
                      strokeWidth={
                        1.9
                      }
                    />
                  </div>
                </div>

                <h3
                  className="
                    mt-4
                    text-[16px]
                    font-extrabold
                    text-[#1f2d22]
                  "
                >
                  Vídeo pronto
                </h3>

                <p
                  className="
                    mt-1
                    max-w-[190px]
                    text-sm
                    leading-6
                    text-nexo-text-secondary
                  "
                >
                  Gere seu vídeo e baixe em alta qualidade.
                </p>
              </article>
            </div>
          </section>

          {/* PROJETOS RECENTES */}

          {hasProjects && (
            <section
              className="
                mt-12
                border-t
                border-nexo-border
                pt-8
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  items-end
                  justify-between
                  gap-4
                "
              >
                <div>
                  <h2
                    className="
                      text-[23px]
                      font-extrabold
                      tracking-[-0.025em]
                      text-nexo-green
                    "
                  >
                    Projetos recentes
                  </h2>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-nexo-text-secondary
                    "
                  >
                    Continue trabalhando nos seus últimos quizzes.
                  </p>
                </div>

                <Link
                  href="/projetos"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    font-bold
                    text-nexo-green
                    hover:underline
                  "
                >
                  Ver todos

                  <ArrowRight
                    size={16}
                  />
                </Link>
              </div>

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-2
                  xl:grid-cols-4
                "
              >
                {projects.map(
                  (
                    project
                  ) => {
                    const status =
                      getProjectStatus(
                        project
                          .renders[0]
                          ?.status
                      );

                    return (
                      <article
                        key={
                          project.id
                        }
                        className="
                          flex
                          min-h-[210px]
                          flex-col
                          rounded-2xl
                          border
                          border-nexo-border
                          bg-nexo-surface
                          p-5
                          transition
                          duration-150
                          hover:-translate-y-0.5
                          hover:border-nexo-border-strong
                          hover:shadow-[0_12px_30px_rgba(55,65,48,0.07)]
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                          "
                        >
                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-[#e5eadc]
                              text-nexo-green
                            "
                          >
                            <Play
                              size={18}
                              strokeWidth={
                                2.2
                              }
                            />
                          </div>

                          <span
                            className={`
                              rounded-full
                              px-2.5
                              py-1
                              text-[11px]
                              font-bold
                              ${status.className}
                            `}
                          >
                            {
                              status.label
                            }
                          </span>
                        </div>

                        <h3
                          className="
                            mt-5
                            line-clamp-2
                            text-lg
                            font-extrabold
                            tracking-[-0.02em]
                            text-[#1e3023]
                          "
                        >
                          {
                            project.title
                          }
                        </h3>

                        <p
                          className="
                            mt-2
                            text-xs
                            leading-5
                            text-nexo-text-muted
                          "
                        >
                          {
                            project
                              ._count
                              .questions
                          }{" "}
                          pergunta
                          {project
                            ._count
                            .questions ===
                          1
                            ? ""
                            : "s"}
                          {" · "}
                          {project.format ===
                          "HORIZONTAL"
                            ? "16:9"
                            : "9:16"}
                          {" · "}
                          {
                            project.fps
                          }{" "}
                          FPS
                        </p>

                        <Link
                          href={`/projetos/${project.id}`}
                          className="
                            mt-auto
                            inline-flex
                            items-center
                            gap-1.5
                            pt-5
                            text-sm
                            font-extrabold
                            text-nexo-green
                            hover:underline
                          "
                        >
                          Continuar editando

                          <ArrowRight
                            size={
                              15
                            }
                          />
                        </Link>
                      </article>
                    );
                  }
                )}
              </div>
            </section>
          )}

          {/* MODELOS */}

          <section
            className="
              mt-12
              border-t
              border-nexo-border
              pt-7
              pb-10
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
              "
            >
              <div>
                <h2
                  className="
                    text-[21px]
                    font-extrabold
                    tracking-[-0.02em]
                    text-nexo-green
                  "
                >
                  Ou comece com um modelo
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-nexo-text-secondary
                  "
                >
                  Novos estilos de vídeo estão sendo preparados.
                </p>
              </div>

              <span
                className="
                  rounded-full
                  bg-[#eee8d2]
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-[#657062]
                "
              >
                Em desenvolvimento
              </span>
            </div>

            <div
              className="
                mt-6
                grid
                max-w-[820px]
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              <TemplatePreviewCard variant="YELLOW" />

              <TemplatePreviewCard variant="GREEN" />

              <TemplatePreviewCard variant="CREAM" />
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}