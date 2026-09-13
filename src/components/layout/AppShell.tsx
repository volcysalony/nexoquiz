import type {
  ReactNode,
} from "react";

import {
  AppSidebar,
} from "./AppSidebar";

type Props = {
  children:
    ReactNode;
};

export function AppShell({
  children,
}: Props) {
  return (
    <div
      className="
        min-h-screen
        bg-[var(--nexo-bg)]
        text-[var(--nexo-text)]
      "
    >
      <AppSidebar />

      <div
        className="
          min-h-screen
          lg:pl-[252px]
        "
      >
        {children}
      </div>
    </div>
  );
}