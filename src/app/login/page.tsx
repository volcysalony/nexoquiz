import Link from "next/link";

import {
  LogIn,
  Mail,
} from "lucide-react";

import {
  AuthShell,
} from "@/components/auth/AuthShell";

import {
  GoogleIcon,
} from "@/components/auth/GoogleIcon";

import {
  PasswordInput,
} from "@/components/auth/PasswordInput";

export const metadata = {
  title:
    "Entrar | NexoQuiz",

  description:
    "Entre na sua conta NexoQuiz para continuar criando seus vídeos de quiz.",
};

export default function LoginPage() {
  return (
    <AuthShell>
      <div>
        {/* EYEBROW */}

        <p
          className="
            text-xs
            font-extrabold
            uppercase
            tracking-widest
            text-nexo-green
          "
        >
          Entrar
        </p>

        {/* TITLE */}

        <h1
          className="
            mt-4
            text-4xl
            font-extrabold
            leading-tight
            tracking-tight
            text-nexo-green
            sm:text-5xl
          "
        >
          Bem-vindo de{" "}
          <span
            className="
              decoration-4
              decoration-nexo-yellow
              underline
              underline-offset-8
            "
          >
            volta.
          </span>
        </h1>

        <p
          className="
            mt-4
            text-base
            leading-7
            text-nexo-text-secondary
          "
        >
          Entre para continuar criando.
        </p>

        {/*
          Interface visual nesta etapa.

          A autenticação real será conectada posteriormente.
          Este formulário não deve simular login bem-sucedido.
        */}

        <form
          className="
            mt-6
            space-y-4
          "
        >
          {/* EMAIL */}

          <div>
            <label
              htmlFor="email"
              className="
                text-sm
                font-extrabold
                text-nexo-text
              "
            >
              E-mail
            </label>

            <div
              className="
                relative
                mt-2
              "
            >
              <Mail
                aria-hidden="true"
                size={19}
                strokeWidth={1.8}
                className="
                  pointer-events-none
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-nexo-text-muted
                "
              />

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                required
                className="
                  min-h-12
                  w-full
                  rounded-xl
                  border
                  border-nexo-border-strong
                  bg-nexo-surface-strong
                  pr-4
                  pl-12
                  text-sm
                  text-nexo-text
                  outline-none
                  transition-colors
                  placeholder:text-[#a4a89f]
                  focus:border-nexo-green
                "
              />
            </div>
          </div>

          {/* PASSWORD */}

          <div>
            <label
              htmlFor="password"
              className="
                text-sm
                font-extrabold
                text-nexo-text
              "
            >
              Senha
            </label>

            <div className="mt-2">
              <PasswordInput
                id="password"
                name="password"
                autoComplete="current-password"
              />
            </div>

            <Link
              href="/recuperar-senha"
              className="
                mt-3
                inline-flex
                text-sm
                font-bold
                text-nexo-green
                underline
                decoration-nexo-green/30
                underline-offset-4
                transition-colors
                hover:text-nexo-green-hover
              "
            >
              Esqueci minha senha
            </Link>
          </div>

          {/* LOGIN BUTTON */}

          <button
            type="button"
            title="A autenticação real será conectada na próxima etapa."
            className="
              flex
              min-h-12
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-nexo-green
              px-5
              text-base
              font-extrabold
              text-white
              transition-colors
              hover:bg-nexo-green-hover
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-nexo-green
              focus-visible:ring-offset-2
              focus-visible:ring-offset-nexo-bg
            "
          >
            <LogIn
              size={19}
            />

            Entrar
          </button>
        </form>

        {/* DIVIDER */}

        <div
          className="
            my-5
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-nexo-border
            "
          />

          <span
            className="
              text-sm
              font-semibold
              text-nexo-text-muted
            "
          >
            ou
          </span>

          <div
            className="
              h-px
              flex-1
              bg-nexo-border
            "
          />
        </div>

        {/* GOOGLE */}

        <button
          type="button"
          title="Google OAuth será conectado na etapa de autenticação."
          className="
            flex
            min-h-12
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-nexo-border-strong
            bg-nexo-surface-strong
            px-5
            text-base
            font-extrabold
            text-nexo-text
            transition-colors
            hover:bg-[#f4efdf]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-nexo-green
            focus-visible:ring-offset-2
            focus-visible:ring-offset-nexo-bg
          "
        >
          <GoogleIcon />

          Continuar com Google
        </button>

        {/* REGISTER */}

        <p
          className="
            mt-6
            text-center
            text-sm
            text-nexo-text-secondary
          "
        >
          Ainda não tem uma conta?{" "}
          <Link
            href="/cadastro"
            className="
              font-extrabold
              text-nexo-green
              hover:underline
            "
          >
            Criar conta
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}