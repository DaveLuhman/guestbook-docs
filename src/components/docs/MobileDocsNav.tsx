"use client";

import { useState } from "react";

import SidebarAccordion from "./SidebarAccordion";
import type { NavSection } from "./NavTree";

type MobileDocsNavProps = {
  sections: NavSection[];
};

export default function MobileDocsNav({ sections }: MobileDocsNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <span>Browse documentation</span>
        <span
          className={`text-xs text-slate-500 transition-transform dark:text-slate-400 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>
      <div
        className={`max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-[70vh] opacity-100" : ""
        }`}
      >
        <div className="pt-4">
          <SidebarAccordion
            sections={sections}
            onNavigate={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
