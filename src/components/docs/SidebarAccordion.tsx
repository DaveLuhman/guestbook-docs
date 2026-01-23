"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import type { NavSection } from "./NavTree";

type SidebarAccordionProps = {
  sections: NavSection[];
  onNavigate?: () => void;
};

export default function SidebarAccordion({
  sections,
  onNavigate
}: SidebarAccordionProps) {
  const pathname = usePathname();
  const initialOpen = useMemo(() => {
    const active = sections.find((section) =>
      pathname.startsWith(section.urlPrefix)
    );
    return active?.audience ?? sections[0]?.audience ?? "users";
  }, [pathname, sections]);

  const [openAudience, setOpenAudience] = useState(initialOpen);
  const lastPathnameRef = useRef(pathname);

  useEffect(() => {
    if (lastPathnameRef.current === pathname) {
      return;
    }

    const active = sections.find((section) =>
      pathname.startsWith(section.urlPrefix)
    );
    if (active && active.audience !== openAudience) {
      setOpenAudience(active.audience);
    }
    lastPathnameRef.current = pathname;
  }, [pathname, openAudience, sections]);

  return (
    <nav className="space-y-4">
      {sections.map((section) => {
        const isOpen = openAudience === section.audience;
        return (
          <div key={section.audience} className="space-y-2">
            <button
              type="button"
              onClick={() => setOpenAudience(section.audience)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <span>{section.label}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-1 pl-2">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className={`block rounded-md px-2 py-1 text-sm ${
                          isActive
                            ? "bg-slate-100 font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-50"
                            : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
