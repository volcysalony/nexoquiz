import Image from "next/image";

type Props = {
  showName?: boolean;
  priority?: boolean;
  symbolSize?: number;
};

export function NexoQuizLogo({
  showName = true,
  priority = false,
  symbolSize = 42,
}: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3
      "
    >
      <Image
        src="/brand/nexoquiz-symbol.png"
        alt=""
        aria-hidden="true"
        width={symbolSize}
        height={symbolSize}
        priority={priority}
        className="
          shrink-0
          object-contain
        "
      />

      {showName && (
        <span
          className="
            text-[21px]
            font-extrabold
            tracking-[-0.035em]
            text-nexo-green
          "
        >
          NexoQuiz
        </span>
      )}
    </div>
  );
}