import Link from "next/link";

import {
  AudioLines,
  CircleUserRound,
  FolderKanban,
  Gauge,
  Image,
  Layers3,
  Music,
  Plus,
  Settings,
  Sparkles,
  WalletCards,
} from "lucide-react";

type NavigationItem = {
  label:
    string;

  href:
    string;

  icon:
    typeof Gauge;
};

const primaryNavigation: NavigationItem[] =
  [
    {
      label:
        "Início",

      href:
        "/",

      icon:
        Gauge,
    },

    {
      label:
        "Projetos",

      href:
        "/projetos",

      icon:
        FolderKanban,
    },

    {
      label:
        "Modelos",

      href:
        "/modelos",

      icon:
        Layers3,
    },
  ];

const libraryNavigation: NavigationItem[] =
  [
    {
      label:
        "Imagens",

      href:
        "/biblioteca/imagens",

      icon:
        Image,
    },

    {
      label:
        "Áudios",

      href:
        "/biblioteca/audios",

      icon:
        AudioLines,
    },

    {
      label:
        "Músicas",

      href:
        "/biblioteca/musicas",

      icon:
        Music,
    },
  ];

const accountNavigation: NavigationItem[] =
  [
    {
      label:
        "Perfil",

      href:
        "/perfil",

      icon:
        CircleUserRound,
    },

    {
      label:
        "Plano e uso",

      href:
        "/plano-e-uso",

      icon:
        WalletCards,
    },

    {
      label:
        "Configurações",

      href:
        "/configuracoes",

      icon:
        Settings,
    },
  ];

function SidebarLink({
  item,
}: {
  item:
    NavigationItem;
}) {
  const Icon =
    item.icon;

  return (
    <Link
      href={
        item.href
      }
      className="
        group
        flex
        min-h-11
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        text-[14px]
        font-semibold
        text-[#5c665c]
        transition-colors
        duration-150
        hover:bg-[#ede5cf]
        hover:text-[var(--nexo-green)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--nexo-green)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--nexo-surface)]
      "
    >
      <Icon
        size={18}
        strokeWidth={1.9}
        className="
          shrink-0
          text-[#788178]
          transition-colors
          group-hover:text-[var(--nexo-green)]
        "
      />

      <span>
        {item.label}
      </span>
    </Link>
  );
}

export function AppSidebar() {
  return (
    <aside
      className="
        fixed
        inset-y-0
        left-0
        z-40
        hidden
        w-[252px]
        flex-col
        border-r
        border-[var(--nexo-border)]
        bg-[var(--nexo-surface)]
        lg:flex
      "
    >
      {/* BRAND */}

      <div
        className="
          px-5
          pb-5
          pt-6
        "
      >
        <Link
          href="/"
          aria-label="NexoQuiz — Início"
          className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--nexo-green)]
          "
        >
          <div
            aria-hidden="true"
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-[13px]
              bg-[var(--nexo-green)]
              text-[var(--nexo-yellow)]
            "
          >
            <Sparkles
              size={19}
              strokeWidth={2.4}
            />

            <span
              className="
                absolute
                -bottom-2
                -right-2
                h-5
                w-5
                rounded-full
                bg-[var(--nexo-yellow)]
              "
            />
          </div>

          <div
            className="
              text-[21px]
              font-extrabold
              tracking-[-0.035em]
              text-[var(--nexo-green)]
            "
          >
            NexoQuiz
          </div>
        </Link>

        <Link
          href="/projetos/novo"
          className="
            mt-7
            flex
            min-h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-[14px]
            bg-[var(--nexo-green)]
            px-4
            py-3
            text-sm
            font-extrabold
            text-white
            transition
            duration-150
            hover:bg-[var(--nexo-green-hover)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--nexo-green)]
            focus-visible:ring-offset-2
          "
        >
          <Plus
            size={18}
            strokeWidth={2.5}
          />

          Criar vídeo
        </Link>
      </div>

      {/* NAVIGATION */}

      <nav
        aria-label="Navegação principal"
        className="
          nexo-scrollbar
          flex-1
          overflow-y-auto
          px-3
          pb-5
        "
      >
        <div
          className="
            space-y-1
          "
        >
          {primaryNavigation.map(
            (
              item
            ) => (
              <SidebarLink
                key={
                  item.href
                }
                item={
                  item
                }
              />
            )
          )}
        </div>

        <div
          className="
            mt-7
          "
        >
          <p
            className="
              px-3
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              text-[#8e9589]
            "
          >
            Biblioteca
          </p>

          <div
            className="
              mt-2
              space-y-1
            "
          >
            {libraryNavigation.map(
              (
                item
              ) => (
                <SidebarLink
                  key={
                    item.href
                  }
                  item={
                    item
                  }
                />
              )
            )}
          </div>
        </div>
      </nav>

      {/* ACCOUNT */}

      <div
        className="
          border-t
          border-[var(--nexo-border)]
          px-3
          py-4
        "
      >
        <div
          className="
            space-y-1
          "
        >
          {accountNavigation.map(
            (
              item
            ) => (
              <SidebarLink
                key={
                  item.href
                }
                item={
                  item
                }
              />
            )
          )}
        </div>

        <div
          className="
            mx-2
            mt-4
            rounded-[16px]
            border
            border-[#dfd6bb]
            bg-[#f4ecd5]
            p-3.5
          "
        >
          <p
            className="
              text-xs
              font-bold
              text-[var(--nexo-green)]
            "
          >
            NexoQuiz
          </p>

          <p
            className="
              mt-1
              text-[11px]
              leading-4
              text-[#737b70]
            "
          >
            Crie quizzes e transforme perguntas em vídeos prontos para publicar.
          </p>
        </div>
      </div>
    </aside>
  );
}