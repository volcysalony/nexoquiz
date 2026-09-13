import Link from "next/link";

import {
  NexoQuizLogo,
} from "@/components/brand/NexoQuizLogo";

export function MarketingFooter() {
  return (
    <footer
      className="
        border-t
        border-[#e7dfc9]
        bg-[#fffdf8]
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          px-5
          py-14
          md:grid-cols-[1.5fr_repeat(4,1fr)]
          md:px-8
        "
      >
        <div>
          <Link
            href="/"
            aria-label="NexoQuiz"
          >
            <NexoQuizLogo
              symbolSize={34}
            />
          </Link>

          <p
            className="
              mt-4
              max-w-60
              text-sm
              leading-6
              text-nexo-text-secondary
            "
          >
            Uma plataforma para transformar quizzes estruturados em vídeos prontos para publicar.
          </p>
        </div>

        <FooterColumn
          title="Produto"
          links={[
            {
              label:
                "Recursos",
              href:
                "#recursos",
            },
            {
              label:
                "Modelos",
              href:
                "#modelos",
            },
            {
              label:
                "Como funciona",
              href:
                "#como-funciona",
            },
            {
              label:
                "Preços",
              href:
                "#precos",
            },
          ]}
        />

        <FooterColumn
          title="Empresa"
          links={[
            {
              label:
                "Sobre nós",
              href:
                "#",
            },
            {
              label:
                "Blog",
              href:
                "#",
            },
            {
              label:
                "Carreiras",
              href:
                "#",
            },
          ]}
        />

        <FooterColumn
          title="Suporte"
          links={[
            {
              label:
                "Central de ajuda",
              href:
                "#",
            },
            {
              label:
                "Tutoriais",
              href:
                "#",
            },
            {
              label:
                "Contato",
              href:
                "#",
            },
          ]}
        />

        <FooterColumn
          title="Legal"
          links={[
            {
              label:
                "Termos de uso",
              href:
                "#",
            },
            {
              label:
                "Privacidade",
              href:
                "#",
            },
            {
              label:
                "Cookies",
              href:
                "#",
            },
          ]}
        />
      </div>

      <div
        className="
          border-t
          border-[#ece4d2]
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-6
            text-center
            text-xs
            text-[#858d84]
            md:px-8
          "
        >
          © 2026 NexoQuiz. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;

  links: Array<{
    label: string;
    href: string;
  }>;
}) {
  return (
    <div>
      <h3
        className="
          text-sm
          font-extrabold
          text-nexo-green
        "
      >
        {title}
      </h3>

      <div
        className="
          mt-4
          space-y-3
        "
      >
        {links.map(
          (
            link
          ) => (
            <Link
              key={
                link.label
              }
              href={
                link.href
              }
              className="
                block
                text-sm
                text-nexo-text-secondary
                transition-colors
                hover:text-nexo-green
              "
            >
              {
                link.label
              }
            </Link>
          )
        )}
      </div>
    </div>
  );
}