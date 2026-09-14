import {
  Image as ImageIcon,
  Play,
} from "lucide-react";

export function QuizPreviewIllustration() {
  return (
    <div
      aria-hidden="true"
      className="
        relative
        hidden
        min-h-[430px]
        items-center
        justify-center
        lg:flex
      "
    >
      {/* CÍRCULO DE FUNDO */}

      <div
        className="
          absolute
          h-[390px]
          w-[390px]
          rounded-full
          bg-[#f1ecd9]
        "
      />

      {/* DETALHE DE PONTOS */}

      <div
        className="
          absolute
          right-2
          bottom-16
          grid
          grid-cols-6
          gap-3
          opacity-35
        "
      >
        {Array.from({
          length: 30,
        }).map((_, index) => (
          <span
            key={index}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#d6cfb5]
            "
          />
        ))}
      </div>

      {/* CARD DO QUIZ */}

      <div
        className="
          relative
          z-10
          w-[300px]
          overflow-hidden
          rounded-[20px]
          border
          border-[#ded6bc]
          bg-[#fffdf5]
          shadow-[0_24px_60px_rgba(62,70,46,0.08)]
        "
      >
        {/* BROWSER BAR */}

        <div
          className="
            flex
            h-9
            items-center
            gap-1.5
            border-b
            border-[#e9e2cd]
            bg-[#f8f3e4]
            px-4
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#ddd5b8]" />
          <span className="h-2 w-2 rounded-full bg-[#ddd5b8]" />
          <span className="h-2 w-2 rounded-full bg-[#ddd5b8]" />
        </div>

        <div className="p-7">
          <p
            className="
              text-center
              text-xs
              font-extrabold
              tracking-[0.04em]
              text-nexo-green
            "
          >
            QUIZ DE HISTÓRIA
          </p>

          {/* IMAGEM */}

          <div
            className="
              mt-5
              flex
              h-28
              items-center
              justify-center
              rounded-xl
              bg-[#efeddf]
            "
          >
            <ImageIcon
              size={40}
              strokeWidth={1.5}
              className="text-[#d0cdbb]"
            />
          </div>

          {/* CONTADOR */}

          <div
            className="
              mt-5
              h-1.5
              overflow-hidden
              rounded-full
              bg-[#eee9d9]
            "
          >
            <div
              className="
                h-full
                w-2/5
                rounded-full
                bg-nexo-yellow
              "
            />
          </div>

          {/* ALTERNATIVAS */}

          <div className="mt-5 space-y-3">
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e8ead8]
                  text-xs
                  font-extrabold
                  text-nexo-green
                "
              >
                A
              </span>

              <div
                className="
                  h-3
                  flex-1
                  rounded-full
                  bg-[#eae7d8]
                "
              />
            </div>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-nexo-green
                  text-xs
                  font-extrabold
                  text-white
                "
              >
                B
              </span>

              <div
                className="
                  h-3
                  flex-1
                  rounded-full
                  bg-[#8bc49d]
                "
              />
            </div>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e8ead8]
                  text-xs
                  font-extrabold
                  text-nexo-green
                "
              >
                C
              </span>

              <div
                className="
                  h-3
                  flex-1
                  rounded-full
                  bg-[#eae7d8]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* PLAY */}

      <div
        className="
          absolute
          right-[7%]
          z-20
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-[#fff0ad]
          shadow-[0_16px_40px_rgba(111,93,17,0.12)]
        "
      >
        <Play
          size={29}
          fill="currentColor"
          className="
            ml-1
            text-nexo-green
          "
        />
      </div>

      {/* RAIOS */}

      <div
        className="
          absolute
          top-[70px]
          right-[5%]
          space-y-2
          text-nexo-yellow
        "
      >
        <span
          className="
            block
            h-1
            w-7
            rotate-[-65deg]
            rounded-full
            bg-current
          "
        />

        <span
          className="
            ml-5
            block
            h-1
            w-7
            rotate-[-35deg]
            rounded-full
            bg-current
          "
        />

        <span
          className="
            ml-8
            block
            h-1
            w-6
            rotate-[8deg]
            rounded-full
            bg-current
          "
        />
      </div>
    </div>
  );
}