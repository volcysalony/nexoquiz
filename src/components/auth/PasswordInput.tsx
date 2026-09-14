"use client";

import {
  useState,
} from "react";

import {
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  autoComplete:
    | "current-password"
    | "new-password";
};

export function PasswordInput({
  id,
  name,
  placeholder = "••••••••",
  autoComplete,
}: Props) {
  const [
    visible,
    setVisible,
  ] = useState(false);

  return (
    <div className="relative">
      <LockKeyhole
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
        id={id}
        name={name}
        type={
          visible
            ? "text"
            : "password"
        }
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
        className="
          min-h-12
          w-full
          rounded-xl
          border
          border-nexo-border-strong
          bg-nexo-surface-strong
          pr-12
          pl-12
          text-sm
          text-nexo-text
          outline-none
          transition-colors
          placeholder:text-[#a4a89f]
          focus:border-nexo-green
        "
      />

      <button
        type="button"
        onClick={() =>
          setVisible(
            (
              current
            ) =>
              !current
          )
        }
        aria-label={
          visible
            ? "Ocultar senha"
            : "Mostrar senha"
        }
        className="
          absolute
          top-1/2
          right-3
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-lg
          text-nexo-text-muted
          transition-colors
          hover:bg-nexo-green-soft
          hover:text-nexo-green
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-nexo-green
        "
      >
        {visible ? (
          <EyeOff
            size={18}
          />
        ) : (
          <Eye
            size={18}
          />
        )}
      </button>
    </div>
  );
}