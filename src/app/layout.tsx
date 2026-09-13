import type {
  Metadata,
} from "next";

import {
  Manrope,
} from "next/font/google";

import "./globals.css";

const manrope =
  Manrope({
    variable:
      "--font-nexo-sans",

    subsets: [
      "latin",
    ],

    display:
      "swap",
  });

export const metadata: Metadata = {
  title: {
    default:
      "NexoQuiz",

    template:
      "%s | NexoQuiz",
  },

  description:
    "Crie vídeos de quiz profissionais de forma rápida e simples.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${manrope.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          min-h-full
        "
      >
        {children}
      </body>
    </html>
  );
}