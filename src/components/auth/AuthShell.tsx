import type {
  ReactNode,
} from "react";

import Link from "next/link";

import {
  Cloud,
  ShieldCheck,
  Zap,
} from "lucide-react";

import {
  NexoQuizLogo,
} from "@/components/brand/NexoQuizLogo";

import {
  HeroProductPreview,
} from "@/components/marketing/HeroProductPreview";

type Props = {
  children: ReactNode;
};

export function AuthShell({
  children,
}: Props) {
  return (
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
          grid
          min-h-screen
          max-w-screen-2xl
          xl:grid-cols-5
        "
      >
        {/* AUTH AREA */}

        <section
          className="
            flex
            min-h-screen
            flex-col
            px-6
            py-5
            sm:px-10
            xl:col-span-2
            xl:px-14
            xl:py-6
          "
        >
          {/* BRAND */}

          <header>
            <Link
              href="/"
              aria-label="NexoQuiz — Página inicial"
              className="
                inline-flex
                rounded-xl
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-nexo-green
                focus-visible:ring-offset-2
                focus-visible:ring-offset-nexo-bg
              "
            >
              <NexoQuizLogo
                priority
                symbolSize={38}
              />
            </Link>
          </header>

          {/* AUTH CONTENT */}

          <div
            className="
              flex
              flex-1
              items-center
              justify-center
              py-5
            "
          >
            <div
              className="
                w-full
                max-w-md
              "
            >
              {children}
            </div>
          </div>
        </section>

        {/* PRODUCT SIDE */}

        <section
          className="
            hidden
            border-l
            border-nexo-border
            bg-nexo-surface
            xl:col-span-3
            xl:flex
            xl:flex-col
            xl:justify-center
            xl:p-8
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-4xl
            "
          >
            <div
              className="
                mb-5
                flex
                justify-end
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-nexo-border
                  bg-nexo-surface-strong
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-nexo-text-secondary
                "
              >
                <ShieldCheck
                  size={16}
                  className="text-nexo-green"
                />

                Seus projetos em um único lugar
              </div>
            </div>

            <HeroProductPreview />

            {/* BENEFITS */}

            <div
              className="
                mt-6
                grid
                grid-cols-3
                gap-5
              "
            >
              <ProductBenefit
                icon={Zap}
                title="Crie mais rápido"
                description="Transforme perguntas estruturadas em vídeos com menos trabalho manual."
              />

              <ProductBenefit
                icon={ShieldCheck}
                title="Fluxo organizado"
                description="Perguntas, visual, preview e renderização dentro do mesmo projeto."
              />

              <ProductBenefit
                icon={Cloud}
                title="Pronto para publicar"
                description="Crie conteúdos para Shorts, Reels, TikTok e YouTube."
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

type BenefitProps = {
  icon: typeof Zap;
  title: string;
  description: string;
};

function ProductBenefit({
  icon: Icon,
  title,
  description,
}: BenefitProps) {
  return (
    <article
      className="
        flex
        gap-3
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#e9efdf]
          text-nexo-green
        "
      >
        <Icon
          size={20}
          strokeWidth={1.8}
        />
      </div>

      <div>
        <h2
          className="
            text-sm
            font-extrabold
            text-nexo-green
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-1
            text-xs
            leading-5
            text-nexo-text-secondary
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}