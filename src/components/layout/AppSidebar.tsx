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
  WalletCards,
} from "lucide-react";

import {
  NexoQuizLogo,
} from "@/components/brand/NexoQuizLogo";

type NavigationItem = {
  label: string;
  href: string;
  icon: typeof Gauge;
};

const primaryNavigation: NavigationItem[] = [
  {
    label: "Início",
    href: "/dashboard",
    icon: Gauge,
  },

  {
    label: "Projetos",
    href: "/projetos",
    icon: FolderKanban,
  },

  {
    label: "Modelos",
    href: "/modelos",
    icon: Layers3,
  },
];

const libraryNavigation: NavigationItem[] = [
  {
    label: "Imagens",
    href: "/biblioteca/imagens",
    icon: Image,
  },

  {
    label: "Áudios",
    href: "/biblioteca/audios",
    icon: AudioLines,
  },

  {
    label: "Músicas",
    href: "/biblioteca/musicas",
    icon: Music,
  },
];

const accountNavigation: NavigationItem[] = [
  {
    label: "Perfil",
    href: "/perfil",
    icon: CircleUserRound,
  },

  {
    label: "Plano e uso",
    href: "/plano-e-uso",
    icon: WalletCards,
  },

  {
    label: "Configurações",
    href: "/configuracoes",
    icon: Settings,
  },
];

function SidebarLink({
  item,
}: {
  item: NavigationItem;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="
        group
        flex
        min-h-11
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        text-sm
        font-semibold
        text-[#5c665c]
        transition-colors
        duration-150
        hover:bg-nexo-sidebar-hover
        hover:text-nexo-green
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-nexo-green
        focus-visible:ring-offset-2
        focus-visible:ring-offset-nexo-sidebar
      "
    >
      <Icon
        size={18}
        strokeWidth={1.9}
        className="
          shrink-0
          text-[#788178]
          transition-colors
          group-hover:text-nexo-green
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
        w-63
        flex-col
        border-r
        border-nexo-border
        bg-nexo-sidebar
        lg:flex
      "
    >
      {/* BRAND */}

      <div
        className="
          px-5
          pt-6
          pb-5
        "
      >
        <Link
          href="/dashboard"
          aria-label="NexoQuiz — Dashboard"
          className="
            inline-flex
            rounded-xl
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-nexo-green
            focus-visible:ring-offset-2
            focus-visible:ring-offset-nexo-sidebar
          "
        >
          <NexoQuizLogo
            priority
            symbolSize={42}
          />
        </Link>

        {/* CREATE VIDEO */}

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
            rounded-xl
            bg-nexo-green
            px-4
            py-3
            text-sm
            font-extrabold
            text-white
            transition-colors
            duration-150
            hover:bg-nexo-green-hover
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-nexo-green
            focus-visible:ring-offset-2
            focus-visible:ring-offset-nexo-sidebar
          "
        >
          <Plus
            size={18}
            strokeWidth={2.5}
          />

          Criar vídeo
        </Link>
      </div>

      {/* MAIN NAVIGATION */}

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
        <div className="space-y-1">
          {primaryNavigation.map(
            (item) => (
              <SidebarLink
                key={item.href}
                item={item}
              />
            )
          )}
        </div>

        {/* LIBRARY */}

        <div className="mt-7">
          <p
            className="
              px-3
              text-[11px]
              font-extrabold
              uppercase
              tracking-widest
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
              (item) => (
                <SidebarLink
                  key={item.href}
                  item={item}
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
          border-nexo-border
          px-3
          py-4
        "
      >
        <div className="space-y-1">
          {accountNavigation.map(
            (item) => (
              <SidebarLink
                key={item.href}
                item={item}
              />
            )
          )}
        </div>

        {/* PRODUCT INFO */}

        <div
          className="
            mx-2
            mt-4
            rounded-2xl
            border
            border-[#dfd6bb]
            bg-[#f4ecd5]
            p-3.5
          "
        >
          <p
            className="
              text-xs
              font-extrabold
              text-nexo-green
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