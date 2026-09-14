import Link from "next/link";

import {
  Mail,
  UserPlus,
  UserRound,
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
    "Criar conta | NexoQuiz",

  description:
    "Crie sua conta NexoQuiz e comece a transformar perguntas em vídeos de quiz.",
};

export default function RegisterPage() {
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
          Criar conta
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
          Comece a{" "}
          <span
            className="
              decoration-4
              decoration-nexo-yellow
              underline
              underline-offset-8
            "
          >
            criar.
          </span>
        </h1>

        <p
          className="
            mt-4
            max-w-md
            text-base
            leading-7
            text-nexo-text-secondary
          "
        >
          Crie quizzes e transforme perguntas em vídeos profissionais em poucos minutos.
        </p>

        {/*
          Interface visual nesta etapa.

          Cadastro real será conectado posteriormente.
          Este formulário não deve criar usuário ou simular sucesso.
        */}

        <form
          className="
            mt-6
            space-y-4
          "
        >
          {/* NAME */}

          <div>
            <label
              htmlFor="name"
              className="
                text-sm
                font-extrabold
                text-nexo-text
              "
            >
              Nome
            </label>

            <div
              className="
                relative
                mt-2
              "
            >
              <UserRound
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
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Seu nome completo"
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
                autoComplete="new-password"
              />
            </div>

            <p
              className="
                mt-2
                text-xs
                leading-5
                text-nexo-text-muted
              "
            >
              Use uma senha forte e exclusiva para sua conta.
            </p>
          </div>

          {/* TERMS */}

          <label
            className="
              flex
              cursor-pointer
              items-start
              gap-3
              text-sm
              leading-5
              text-nexo-text-secondary
            "
          >
            <input
              type="checkbox"
              name="terms"
              required
              className="
                mt-0.5
                h-4
                w-4
                shrink-0
                accent-nexo-green
              "
            />

            <span>
              Li e concordo com os{" "}
              <Link
                href="/termos"
                className="
                  font-bold
                  text-nexo-green
                  hover:underline
                "
              >
                Termos de Uso
              </Link>{" "}
              e a{" "}
              <Link
                href="/privacidade"
                className="
                  font-bold
                  text-nexo-green
                  hover:underline
                "
              >
                Política de Privacidade
              </Link>
              .
            </span>
          </label>

          {/* CREATE ACCOUNT */}

          <button
            type="button"
            title="O cadastro real será conectado na etapa de autenticação."
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
            <UserPlus
              size={19}
            />

            Criar minha conta
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

        {/* LOGIN */}

        <p
          className="
            mt-6
            text-center
            text-sm
            text-nexo-text-secondary
          "
        >
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="
              font-extrabold
              text-nexo-green
              hover:underline
            "
          >
            Entrar
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}