import type {
  ReactNode,
} from "react";

import {
  AppSidebar,
} from "./AppSidebar";

type Props = {
  children: ReactNode;
};

export function AppShell({
  children,
}: Props) {
  return (
    <div
      className="
        min-h-screen
        bg-nexo-bg
        text-nexo-text
      "
    >
      <AppSidebar />

      <div
        className="
          min-h-screen
          lg:pl-63
        "
      >
        {children}
      </div>
    </div>
  );
}