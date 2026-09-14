import {
  Check,
  Image as ImageIcon,
  Music2,
  Palette,
  Settings,
  SlidersHorizontal,
  Volume2,
} from "lucide-react";

export function HeroProductPreview() {
  return (
    <div
      aria-label="Prévia visual do editor NexoQuiz"
      className="
        overflow-hidden
        rounded-3xl
        border
        border-[#e1dac4]
        bg-[#fffdf7]
        shadow-[0_30px_90px_rgba(70,78,57,0.12)]
      "
    >
      {/* TOP BAR */}

      <div
        className="
          flex
          min-h-12
          items-center
          justify-between
          gap-4
          border-b
          border-[#ebe4d1]
          px-4
          sm:px-5
        "
      >
        <div
          className="
            flex
            min-w-0
            items-center
            gap-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-[11px]
              font-extrabold
              text-nexo-green
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-md
                bg-nexo-green
                text-[9px]
                font-black
                text-white
              "
            >
              N
            </span>

            NexoQuiz
          </div>

          <span
            className="
              hidden
              truncate
              text-xs
              font-bold
              text-[#384a3b]
              sm:block
            "
          >
            Quiz de História
          </span>

          <span
            className="
              hidden
              items-center
              gap-1
              text-[10px]
              font-semibold
              text-[#6f7a6f]
              md:flex
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#5da86e]
              "
            />

            Salvo automaticamente
          </span>
        </div>

        <div
          className="
            flex
            shrink-0
            gap-2
          "
        >
          <span
            className="
              rounded-lg
              border
              border-[#ded8c6]
              px-3
              py-2
              text-[10px]
              font-extrabold
              text-[#39463b]
            "
          >
            Preview
          </span>

          <span
            className="
              rounded-lg
              bg-nexo-green
              px-3
              py-2
              text-[10px]
              font-extrabold
              text-white
            "
          >
            Gerar vídeo
          </span>
        </div>
      </div>

      {/* EDITOR */}

      <div
        className="
          grid
          min-h-90
          md:grid-cols-[140px_minmax(0,1fr)_220px]
        "
      >
        {/* MINI SIDEBAR */}

        <div
          className="
            hidden
            border-r
            border-[#ebe4d1]
            p-3
            md:block
          "
        >
          <div
            className="
              rounded-lg
              bg-[#fff3c8]
              px-3
              py-2.5
              text-[10px]
              font-extrabold
              text-nexo-green
            "
          >
            Conteúdo
          </div>

          {[
            {
              icon: Volume2,
              label: "Áudio",
            },
            {
              icon: Palette,
              label: "Design",
            },
            {
              icon: Music2,
              label: "Mídia",
            },
            {
              icon: Settings,
              label: "Configurações",
            },
          ].map(
            ({
              icon: Icon,
              label,
            }) => (
              <div
                key={label}
                className="
                  mt-1
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  px-3
                  py-2.5
                  text-[10px]
                  font-semibold
                  text-[#657067]
                "
              >
                <Icon
                  size={13}
                  strokeWidth={1.8}
                />

                {label}
              </div>
            )
          )}
        </div>

        {/* QUESTION EDITOR */}

        <div
          className="
            border-r
            border-[#ebe4d1]
            p-5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-wider
                text-nexo-green
              "
            >
              Pergunta 04 de 18
            </span>

            <SlidersHorizontal
              size={15}
              className="text-[#849087]"
            />
          </div>

          {/* QUESTION */}

          <div className="mt-4">
            <p
              className="
                text-[9px]
                font-extrabold
                text-[#435046]
              "
            >
              Pergunta
            </p>

            <div
              className="
                mt-2
                rounded-lg
                border
                border-[#e0dac7]
                bg-white
                p-3
                text-[11px]
                font-semibold
                leading-5
                text-[#334438]
              "
            >
              Em que ano foi proclamada a Independência do
              Brasil?
            </div>
          </div>

          {/* ANSWERS */}

          <div className="mt-4">
            <p
              className="
                text-[9px]
                font-extrabold
                text-[#435046]
              "
            >
              Alternativas
            </p>

            <div className="mt-2 space-y-2">
              {[
                {
                  letter: "A",
                  text: "1500",
                },
                {
                  letter: "B",
                  text: "1822",
                  selected: true,
                },
                {
                  letter: "C",
                  text: "1889",
                },
              ].map(
                (
                  option
                ) => (
                  <div
                    key={
                      option.letter
                    }
                    className={`
                      flex
                      min-h-10
                      items-center
                      gap-3
                      rounded-lg
                      border
                      px-3
                      ${
                        option.selected
                          ? "border-[#bad7bf] bg-[#f0f7ef]"
                          : "border-[#e0dac7] bg-white"
                      }
                    `}
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-md
                        bg-[#eff1e8]
                        text-[9px]
                        font-black
                        text-nexo-green
                      "
                    >
                      {option.letter}
                    </span>

                    <span
                      className="
                        flex-1
                        text-[10px]
                        font-semibold
                        text-[#39483d]
                      "
                    >
                      {option.text}
                    </span>

                    {option.selected && (
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="text-nexo-green"
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* CORRECT ANSWER */}

          <div className="mt-4">
            <p
              className="
                text-[9px]
                font-extrabold
                text-[#435046]
              "
            >
              Resposta correta
            </p>

            <div
              className="
                mt-2
                flex
                gap-2
              "
            >
              {[
                "A",
                "B",
                "C",
              ].map(
                (
                  item
                ) => (
                  <span
                    key={item}
                    className={`
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      text-[10px]
                      font-black
                      ${
                        item ===
                        "B"
                          ? "bg-[#dcebdc] text-nexo-green"
                          : "border border-[#e2dcc9] bg-white text-[#68716a]"
                      }
                    `}
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* IMAGE */}

          <div className="mt-4">
            <p
              className="
                text-[9px]
                font-extrabold
                text-[#435046]
              "
            >
              Imagem

              <span
                className="
                  ml-1
                  font-medium
                  text-[#8a918a]
                "
              >
                (opcional)
              </span>
            </p>

            <div
              className="
                mt-2
                flex
                h-16
                max-w-44
                items-center
                justify-center
                overflow-hidden
                rounded-lg
                bg-[#0b6c2a]
              "
            >
              <BrazilFlag />
            </div>
          </div>
        </div>

        {/* VIDEO PREVIEW */}

        <div
          className="
            hidden
            items-center
            justify-center
            bg-[#faf6e9]
            p-4
            md:flex
          "
        >
          <div
            className="
              w-full
              max-w-44
              overflow-hidden
              rounded-2xl
              bg-[#071521]
              p-4
              shadow-[0_16px_35px_rgba(21,34,27,0.18)]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                text-[7px]
                font-extrabold
                text-white/80
              "
            >
              <span>
                QUIZ DE HISTÓRIA
              </span>

              <span>
                04/18
              </span>
            </div>

            <p
              className="
                mt-4
                text-center
                text-[12px]
                font-black
                leading-tight
                text-white
              "
            >
              EM QUE ANO FOI PROCLAMADA A INDEPENDÊNCIA DO
              BRASIL?
            </p>

            <div
              className="
                mt-4
                flex
                h-16
                items-center
                justify-center
                overflow-hidden
                rounded-md
                bg-[#08742d]
              "
            >
              <BrazilFlag />
            </div>

            <div
              className="
                mx-auto
                mt-3
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border-4
                border-nexo-yellow
                text-lg
                font-black
                text-white
              "
            >
              5
            </div>

            <div
              className="
                mt-3
                space-y-2
              "
            >
              <MiniAnswer
                letter="A"
                text="1500"
              />

              <MiniAnswer
                letter="B"
                text="1822"
                selected
              />

              <MiniAnswer
                letter="C"
                text="1889"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}

      <div
        className="
          hidden
          min-h-12
          items-center
          gap-2
          border-t
          border-[#ebe4d1]
          px-4
          md:flex
        "
      >
        {[
          "Intro",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "...",
          "Final",
        ].map(
          (
            item
          ) => (
            <span
              key={item}
              className={`
                flex
                min-h-8
                min-w-10
                items-center
                justify-center
                rounded-lg
                border
                px-3
                text-[9px]
                font-bold
                ${
                  item ===
                  "04"
                    ? "border-nexo-yellow bg-[#fff7d7] text-nexo-green"
                    : "border-[#e0dac7] bg-white text-[#758077]"
                }
              `}
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
}

function MiniAnswer({
  letter,
  text,
  selected = false,
}: {
  letter: string;
  text: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`
        flex
        min-h-7
        items-center
        gap-2
        rounded-md
        px-2
        text-[8px]
        font-bold
        text-white
        ${
          selected
            ? "bg-[#0d7a31]"
            : "bg-white/10"
        }
      `}
    >
      <span
        className="
          flex
          h-4
          w-4
          items-center
          justify-center
          rounded
          bg-white
          text-[7px]
          font-black
          text-[#17301f]
        "
      >
        {letter}
      </span>

      {text}
    </div>
  );
}

function BrazilFlag() {
  return (
    <div
      className="
        relative
        h-12
        w-20
        overflow-hidden
        rounded-sm
        bg-[#08752e]
      "
    >
      <div
        className="
          absolute
          top-1/2
          left-1/2
          h-9
          w-9
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          bg-[#f4cb25]
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          h-5
          w-5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#24559b]
        "
      />
    </div>
  );
}