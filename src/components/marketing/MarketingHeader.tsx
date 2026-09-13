import Link from "next/link";

import {
  NexoQuizLogo,
} from "@/components/brand/NexoQuizLogo";

export function MarketingHeader() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-[#e7dfc8]/80
        bg-[#fffdf7]/95
        backdrop-blur
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-20
          max-w-7xl
          items-center
          justify-between
          gap-8
          px-5
          md:px-8
        "
      >
        <Link
          href="/"
          aria-label="NexoQuiz — Página inicial"
          className="
            shrink-0
            rounded-xl
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-nexo-green
            focus-visible:ring-offset-2
          "
        >
          <NexoQuizLogo
            priority
            symbolSize={38}
          />
        </Link>

        <nav
          aria-label="Navegação pública"
          className="
            hidden
            items-center
            gap-8
            lg:flex
          "
        >
          <a
            href="#recursos"
            className="
              text-sm
              font-bold
              text-[#344738]
              transition-colors
              hover:text-nexo-green
            "
          >
            Recursos
          </a>

          <a
            href="#modelos"
            className="
              text-sm
              font-bold
              text-[#344738]
              transition-colors
              hover:text-nexo-green
            "
          >
            Modelos
          </a>

          <a
            href="#como-funciona"
            className="
              text-sm
              font-bold
              text-[#344738]
              transition-colors
              hover:text-nexo-green
            "
          >
            Como funciona
          </a>

          <a
            href="#precos"
            className="
              text-sm
              font-bold
              text-[#344738]
              transition-colors
              hover:text-nexo-green
            "
          >
            Preços
          </a>
        </nav>

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
          "
        >
          <Link
            href="/login"
            className="
              hidden
              min-h-11
              items-center
              justify-center
              rounded-xl
              px-4
              text-sm
              font-extrabold
              text-nexo-green
              transition-colors
              hover:bg-[#f1ecdc]
              sm:inline-flex
            "
          >
            Entrar
          </Link>

          <Link
            href="/cadastro"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-xl
              bg-nexo-green
              px-4
              text-sm
              font-extrabold
              text-white
              transition-colors
              hover:bg-nexo-green-hover
              sm:px-5
            "
          >
            Criar grátis
          </Link>
        </div>
      </div>
    </header>
  );
}