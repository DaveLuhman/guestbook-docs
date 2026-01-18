import {
  FaBarcode,
  FaCode,
  FaClipboard,
  FaGear,
  FaHouse,
  FaUser
} from "react-icons/fa6";

import { AUDIENCE_META, type Audience } from "@/lib/docs/constants";

type PageHeaderProps = {
  title: string;
  summary: string;
  audience: Audience;
  icon?: string;
};

export default function PageHeader({
  title,
  summary,
  audience,
  icon
}: PageHeaderProps) {
  const label = AUDIENCE_META[audience]?.label ?? audience;
  const iconKey = icon?.toLowerCase();
  const IconComponent =
    iconKey === "user"
      ? FaUser
      : iconKey === "settings"
      ? FaGear
      : iconKey === "code"
      ? FaCode
      : iconKey === "play"
      ? FaHouse
      : iconKey === "clipboard"
      ? FaClipboard
      : iconKey === "barcode"
      ? FaBarcode
      : null;

  return (
    <header className="space-y-3 border-b border-slate-200 pb-4 dark:border-slate-800">
      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {IconComponent ? (
          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            <IconComponent className="h-3.5 w-3.5" aria-hidden />
          </span>
        ) : icon ? (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            {icon}
          </span>
        ) : null}
        {label}
      </div>
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h1>
      <p className="text-base text-slate-600 dark:text-slate-300">{summary}</p>
    </header>
  );
}
