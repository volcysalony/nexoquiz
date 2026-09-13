import Link from "next/link";

import {
  AudioLines,
  FileInput,
  ImagePlus,
  LayoutGrid,
  Mic2,
  MonitorPlay,
  Palette,
  Smartphone,
  Sparkles,
  UploadCloud,
  Video,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileInput,
    title:
      "Adicione suas perguntas",
    description:
      "Crie suas perguntas manualmente ou importe várias de uma vez.",
  },
  {
    number: "02",
    icon: Mic2,
    title:
      "Escolha seu áudio",
    description:
      "Use voz, envie um áudio ou grave diretamente pelo navegador.",
  },
  {
    number: "03",
    icon: Palette,
    title:
      "Personalize seu vídeo",
    description:
      "Escolha templates, cores, fontes, backgrounds e animações.",
  },
  {
    number: "04",
    icon: Video,
    title:
      "Gere e baixe",
    description:
      "Visualize, gere seu vídeo e baixe no formato escolhido.",
  },
];

const features = [
  {
    icon: FileInput,
    title:
      "Importação de perguntas",
    description:
      "Cole suas perguntas e respostas ou importe várias de uma vez.",
    status:
      "Disponível",
  },
  {
    icon: AudioLines,
    title:
      "Voz com IA",
    description:
      "Narrações naturais para diferentes estilos de quiz.",
    status:
      "Em breve",
  },
  {
    icon: UploadCloud,
    title:
      "Upload de áudio",
    description:
      "Envie seus próprios áudios e organize tudo no projeto.",
    status:
      "Em breve",
  },
  {
    icon: Mic2,
    title:
      "Gravação de voz",
    description:
      "Grave diretamente no navegador de forma simples e rápida.",
    status:
      "Em breve",
  },
  {
    icon: LayoutGrid,
    title:
      "Templates profissionais",
    description:
      "Modelos reutilizáveis para criar vídeos consistentes.",
    status:
      "Em desenvolvimento",
    id:
      "modelos",
  },
  {
    icon: MonitorPlay,
    title:
      "Formatos 9:16 e 16:9",
    description:
      "Crie para Shorts, Reels, TikTok, YouTube e apresentações.",
    status:
      "Disponível",
  },
];

export function LandingSections() {
  return (
    <>
      {/* HOW IT WORKS */}

      <section
        id="como-funciona"
        className="
          border-t
          border-[#ede5d0]
          bg-[#fffdf8]
          py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            md:px-8
          "
        >
          <SectionHeading
            eyebrow="Passo a passo"
            title="Como funciona"
            highlight="funciona"
          />

          <div
            className="
              mt-12
              grid
              gap-5
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {steps.map(
              (
                step
              ) => {
                const Icon =
                  step.icon;

                return (
                  <article
                    key={
                      step.number
                    }
                    className="
                      rounded-2xl
                      border
                      border-[#e5deca]
                      bg-[#fffefa]
                      p-6
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#eaf0e1]
                        text-nexo-green
                      "
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.8}
                      />
                    </div>

                    <span
                      className="
                        mt-5
                        inline-flex
                        rounded-full
                        bg-[#e7eedf]
                        px-2.5
                        py-1
                        text-[10px]
                        font-black
                        text-nexo-green
                      "
                    >
                      {
                        step.number
                      }
                    </span>

                    <h3
                      className="
                        mt-4
                        text-lg
                        font-extrabold
                        tracking-tight
                        text-nexo-green
                      "
                    >
                      {
                        step.title
                      }
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-nexo-text-secondary
                      "
                    >
                      {
                        step.description
                      }
                    </p>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        id="recursos"
        className="
          bg-[#fffdf8]
          py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            md:px-8
          "
        >
          <SectionHeading
            eyebrow="Recursos principais"
            title="Tudo que você precisa em um só lugar"
            highlight="só lugar"
          />

          <div
            className="
              mt-12
              grid
              gap-4
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {features.map(
              (
                feature
              ) => {
                const Icon =
                  feature.icon;

                return (
                  <article
                    key={
                      feature.title
                    }
                    id={
                      feature.id
                    }
                    className="
                      rounded-2xl
                      border
                      border-[#e8e0cc]
                      bg-white
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#e8efdf]
                          text-nexo-green
                        "
                      >
                        <Icon
                          size={23}
                          strokeWidth={1.8}
                        />
                      </div>

                      <div>
                        <div
                          className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                          "
                        >
                          <h3
                            className="
                              font-extrabold
                              text-nexo-green
                            "
                          >
                            {
                              feature.title
                            }
                          </h3>

                          <span
                            className={`
                              rounded-full
                              px-2
                              py-1
                              text-[9px]
                              font-extrabold
                              ${
                                feature.status ===
                                "Disponível"
                                  ? "bg-[#e4f1e4] text-[#246738]"
                                  : "bg-[#f3eedf] text-[#7a715b]"
                              }
                            `}
                          >
                            {
                              feature.status
                            }
                          </span>
                        </div>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-nexo-text-secondary
                          "
                        >
                          {
                            feature.description
                          }
                        </p>
                      </div>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* FORMATS */}

      <section
        className="
          bg-[#fffdf8]
          py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            md:px-8
          "
        >
          <SectionHeading
            eyebrow="Formatos que se adaptam a você"
            title="Crie para qualquer plataforma"
            highlight="qualquer plataforma"
          />

          <div
            className="
              mt-12
              grid
              overflow-hidden
              rounded-3xl
              border
              border-[#e6deca]
              bg-white
              lg:grid-cols-2
            "
          >
            <FormatCard
              type="vertical"
            />

            <FormatCard
              type="horizontal"
            />
          </div>
        </div>
      </section>

      {/* PRICING STRATEGY */}

      <section
        id="precos"
        className="
          bg-[#fffdf8]
          pb-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            md:px-8
          "
        >
          <div
            className="
              grid
              gap-8
              rounded-3xl
              bg-nexo-green
              px-7
              py-10
              text-white
              lg:grid-cols-[1fr_auto]
              lg:items-center
              lg:px-12
              lg:py-12
            "
          >
            <div>
              <span
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-widest
                  text-[#d4e7d2]
                "
              >
                Teste gratuito
              </span>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  text-4xl
                  font-extrabold
                  tracking-tight
                  md:text-5xl
                "
              >
                Seu próximo quiz começa{" "}
                <span className="text-nexo-yellow">
                  aqui.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-[#d7e5d8]
                "
              >
                Monte até 5 perguntas gratuitamente. Para gerar e baixar o vídeo de teste, será necessário criar sua conta.
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  font-semibold
                  text-[#bdd6c1]
                "
              >
                O primeiro render gratuito terá marca d&apos;água NexoQuiz.
              </p>
            </div>

            <div>
              <Link
                href="/demo"
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-nexo-yellow
                  px-7
                  text-sm
                  font-extrabold
                  text-[#17351f]
                  transition-transform
                  hover:-translate-y-0.5
                "
              >
                Testar grátis
              </Link>

              <p
                className="
                  mt-3
                  text-center
                  text-[11px]
                  text-[#c4d9c7]
                "
              >
                Sem cartão de crédito
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  highlight,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
}) {
  const parts =
    title.split(
      highlight
    );

  return (
    <div className="text-center">
      <p
        className="
          text-[11px]
          font-black
          uppercase
          tracking-[0.16em]
          text-nexo-green
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          mt-3
          text-3xl
          font-extrabold
          tracking-tight
          text-nexo-green
          md:text-4xl
        "
      >
        {parts[0]}

        <span
          className="
            decoration-nexo-yellow
            decoration-[5px]
            underline
            underline-offset-4
          "
        >
          {highlight}
        </span>

        {parts[1]}
      </h2>
    </div>
  );
}

function FormatCard({
  type,
}: {
  type:
    | "vertical"
    | "horizontal";
}) {
  const vertical =
    type ===
    "vertical";

  return (
    <article
      className={`
        grid
        gap-7
        p-7
        md:grid-cols-[160px_1fr]
        md:items-center
        lg:p-9
        ${
          vertical
            ? "border-b border-[#e8e0cc] lg:border-r lg:border-b-0"
            : ""
        }
      `}
    >
      <div>
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#edf1e6]
            text-nexo-green
          "
        >
          {vertical ? (
            <Smartphone
              size={23}
            />
          ) : (
            <MonitorPlay
              size={23}
            />
          )}
        </div>

        <h3
          className="
            mt-5
            text-xl
            font-extrabold
            text-nexo-green
          "
        >
          {vertical
            ? "Vertical 9:16"
            : "Horizontal 16:9"}
        </h3>

        <p
          className="
            mt-2
            text-sm
            font-bold
            text-[#536258]
          "
        >
          {vertical
            ? "1080 × 1920"
            : "1920 × 1080"}
        </p>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-nexo-text-secondary
          "
        >
          {vertical
            ? "Perfeito para Shorts, TikTok, Reels e Stories."
            : "Ideal para YouTube, aulas, apresentações e conteúdo horizontal."}
        </p>
      </div>

      <div
        className="
          flex
          min-h-64
          items-center
          justify-center
          rounded-2xl
          bg-[#f3efdf]
          p-5
        "
      >
        {vertical ? (
          <div
            className="
              aspect-9/16
              h-56
              rounded-xl
              bg-[#071521]
              p-3
              shadow-xl
            "
          >
            <QuizVideoMini />
          </div>
        ) : (
          <div
            className="
              aspect-video
              w-full
              max-w-sm
              rounded-xl
              bg-[#071521]
              p-4
              shadow-xl
            "
          >
            <QuizVideoMini
              horizontal
            />
          </div>
        )}
      </div>
    </article>
  );
}

function QuizVideoMini({
  horizontal = false,
}: {
  horizontal?: boolean;
}) {
  return (
    <div className="h-full text-white">
      <div
        className="
          text-[7px]
          font-black
          uppercase
          tracking-wide
        "
      >
        Quiz de História
      </div>

      <p
        className={`
          mt-3
          font-black
          leading-tight
          ${
            horizontal
              ? "max-w-44 text-[13px]"
              : "text-[10px]"
          }
        `}
      >
        Em que ano foi proclamada a Independência do Brasil?
      </p>

      <div
        className={`
          mt-4
          bg-[#08742d]
          ${
            horizontal
              ? "h-16 w-32"
              : "h-16"
          }
        `}
      />

      <div
        className="
          mt-4
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-nexo-yellow
          text-sm
          font-black
        "
      >
        5
      </div>
    </div>
  );
}