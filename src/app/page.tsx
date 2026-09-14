import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  HeroProductPreview,
} from "@/components/marketing/HeroProductPreview";

import {
  LandingSections,
} from "@/components/marketing/LandingSections";

import {
  MarketingFooter,
} from "@/components/marketing/MarketingFooter";

import {
  MarketingHeader,
} from "@/components/marketing/MarketingHeader";

export default function HomePage() {
  return (
    <div
      className="
        min-h-screen
        bg-[#fffdf8]
        text-nexo-text
      "
    >
      <MarketingHeader />

      <main>
        {/* HERO */}

        <section
          className="
            overflow-hidden
            bg-[#fffdf8]
            py-8
            lg:py-10
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-7xl
              items-center
              gap-10
              px-5
              md:px-8
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >
            {/* HERO CONTENT */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#f3efdf]
                  px-4
                  py-2
                  text-xs
                  font-extrabold
                  text-nexo-green
                "
              >
                <Sparkles
                  size={14}
                  strokeWidth={2}
                />

                Simples, rápido e profissional
              </div>

              <h1
                className="
                  mt-6
                  max-w-xl
                  text-5xl
                  font-extrabold
                  leading-none
                  tracking-tighter
                  text-nexo-green
                  sm:text-6xl
                "
              >
                Crie vídeos de quiz em{" "}
                <span
                  className="
                    decoration-8
                    decoration-nexo-yellow
                    underline
                    underline-offset-4
                  "
                >
                  minutos.
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-lg
                  leading-8
                  text-nexo-text-secondary
                "
              >
                Transforme perguntas e respostas em vídeos
                profissionais para YouTube, Shorts, TikTok e Reels
                — sem precisar editar manualmente.
              </p>

              {/* ACTIONS */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-3
                "
              >
                <Link
                  href="/demo"
                  className="
                    inline-flex
                    min-h-14
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-nexo-green
                    px-6
                    text-sm
                    font-extrabold
                    text-white
                    transition
                    hover:-translate-y-0.5
                    hover:bg-nexo-green-hover
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-nexo-green
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#fffdf8]
                  "
                >
                  Testar grátis

                  <ArrowRight
                    size={17}
                    strokeWidth={2.2}
                  />
                </Link>

                <a
                  href="#como-funciona"
                  className="
                    inline-flex
                    min-h-14
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#d9d2be]
                    bg-white
                    px-6
                    text-sm
                    font-extrabold
                    text-nexo-green
                    transition-colors
                    hover:bg-[#f7f2e4]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-nexo-green
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#fffdf8]
                  "
                >
                  <Play
                    size={16}
                    strokeWidth={2}
                  />

                  Ver como funciona
                </a>
              </div>

              {/* TRUST ITEMS */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                  text-xs
                  font-semibold
                  text-[#617064]
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                  "
                >
                  <ShieldCheck
                    size={15}
                    className="text-nexo-green"
                  />

                  Sem cartão de crédito
                </span>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="text-nexo-green"
                  />

                  Até 5 perguntas no teste
                </span>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="text-nexo-green"
                  />

                  Preview antes do cadastro
                </span>
              </div>
            </div>

            {/* PRODUCT PREVIEW */}

            <HeroProductPreview />
          </div>
        </section>

        <LandingSections />
      </main>

      <MarketingFooter />
    </div>
  );
}