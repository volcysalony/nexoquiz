type TemplateVariant =
  | "YELLOW"
  | "GREEN"
  | "CREAM";

type Props = {
  variant: TemplateVariant;
};

const styles = {
  YELLOW: {
    card:
      "bg-[#f9c815] text-[#073f1b]",

    option:
      "bg-[#fff0a7]",

    selected:
      "bg-[#13823a] text-white",

    badge:
      "border-[#165d2e] text-[#165d2e]",
  },

  GREEN: {
    card:
      "bg-[#064e1a] text-white",

    option:
      "bg-white/10",

    selected:
      "bg-[#14a345] text-white",

    badge:
      "border-[#f5c928] text-[#f5c928]",
  },

  CREAM: {
    card:
      "bg-[#fffdf5] text-[#17351e]",

    option:
      "bg-[#efecdf]",

    selected:
      "bg-[#f5c928] text-[#17351e]",

    badge:
      "border-[#0d5c2c] text-[#0d5c2c]",
  },
} satisfies Record<
  TemplateVariant,
  {
    card: string;
    option: string;
    selected: string;
    badge: string;
  }
>;

export function TemplatePreviewCard({
  variant,
}: Props) {
  const style =
    styles[variant];

  return (
    <article
      className={`
        relative
        overflow-hidden
        rounded-[14px]
        border
        border-black/5
        p-5
        shadow-[0_12px_28px_rgba(45,54,39,0.08)]
        ${style.card}
      `}
    >
      <span
        className="
          absolute
          top-3
          right-3
          rounded-full
          bg-black/5
          px-2
          py-1
          text-[9px]
          font-bold
          uppercase
          tracking-[0.08em]
        "
      >
        Em breve
      </span>

      <div
        className="
          flex
          items-center
          justify-between
          gap-3
        "
      >
        <p
          className="
            text-[9px]
            font-black
            uppercase
            tracking-[0.05em]
          "
        >
          Quiz de História
        </p>

        <span
          className={`
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border-2
            text-[11px]
            font-black
            ${style.badge}
          `}
        >
          5
        </span>
      </div>

      <p
        className="
          mt-3
          max-w-[210px]
          text-[13px]
          font-extrabold
          leading-[1.25]
        "
      >
        Em que ano foi proclamada a Independência do Brasil?
      </p>

      <div className="mt-4 space-y-2">
        {[
          {
            letter: "A",
            text: "1500",
          },
          {
            letter: "B",
            text: "1822",
          },
          {
            letter: "C",
            text: "1889",
          },
        ].map(
          (
            option
          ) => {
            const selected =
              option.letter ===
              "B";

            return (
              <div
                key={
                  option.letter
                }
                className={`
                  flex
                  min-h-7
                  items-center
                  gap-2
                  rounded-md
                  px-2
                  text-[10px]
                  font-bold
                  ${
                    selected
                      ? style.selected
                      : style.option
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
                    text-[8px]
                    font-black
                    text-[#17351e]
                  "
                >
                  {
                    option.letter
                  }
                </span>

                {
                  option.text
                }
              </div>
            );
          }
        )}
      </div>
    </article>
  );
}