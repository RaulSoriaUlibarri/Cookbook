"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

type FilterItem = {
  label: string;
  arialLabel: string;
  options: string[];
  handleChange: (value: string) => void;
  href: string;
  // Si se define, solo se muestran las primeras N opciones (el resto queda en "See all")
  maxOptions?: number;
};

type FilterMegaMenuProps = {
  items: FilterItem[];
};

// Máximo de columnas que caben en el panel (columnas de 10rem + separación de 1.5rem)
const MAX_COLUMNS = 5;
// Máximo de filas que caben en el panel sin hacer scroll
const MAX_ROWS = 6;

// Cuántas columnas usar según la cantidad de opciones
const getColumnCount = (total: number) =>
  Math.max(1, Math.min(Math.ceil(total / MAX_ROWS), MAX_COLUMNS));

// Reparte las opciones en columnas, llenando cada una de arriba hacia abajo
const splitIntoColumns = (items: string[], columns: number) => {
  const perColumn = Math.ceil(items.length / columns);
  return Array.from({ length: columns }, (_, i) =>
    items.slice(i * perColumn, (i + 1) * perColumn),
  ).filter((column) => column.length > 0);
};

const FilterMegaMenu = ({ items }: FilterMegaMenuProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = () => setActiveIndex(null);

  const active = activeIndex !== null ? items[activeIndex] : null;
  const showPanel = !!active && active.options.length > 0;
  const visibleOptions = active
    ? active.options.slice(0, active.maxOptions ?? active.options.length)
    : [];
  const columns = splitIntoColumns(
    visibleOptions,
    getColumnCount(visibleOptions.length),
  );

  return (
    <div
      className="relative z-50"
      onMouseLeave={close}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) close();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") close();
      }}
    >
      <nav className="flex items-center">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const hasOptions = item.options.length > 0;

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.arialLabel}
              aria-haspopup={hasOptions ? "true" : undefined}
              aria-expanded={hasOptions ? isActive : undefined}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`inline-flex items-center gap-1.5 border-b-2 px-5 py-2 text-md font-bold transition-colors ${
                isActive
                  ? "border-emerald-600 text-emerald-600 dark:border-orange-400 dark:text-orange-400"
                  : "border-transparent dark:text-gray-200"
              }`}
            >
              {item.label.toUpperCase()}
              {hasOptions && (
                <ChevronDown
                  className={`size-4 transition-transform ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              )}
            </Link>
          );
        })}
      </nav>
      {showPanel && active && (
        <div className="absolute left-1/2 top-full h-[22rem] max-h-[70vh] w-[min(64rem,calc(100vw-2rem))] -translate-x-1/2 overflow-auto border-t border-gray-200 bg-white px-6 py-8 shadow-xl dark:border-white/10 dark:bg-black">
          <div className="mb-5 flex items-center justify-between gap-8 border-b border-gray-200 pb-3 dark:border-white/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {active.label} · {active.options.length}
            </span>
            <Link
              href={active.href}
              onClick={close}
              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:underline dark:text-orange-400"
            >
              See all
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div
            className="grid items-start gap-x-6"
            style={{
              gridTemplateColumns: `repeat(${columns.length}, 10rem)`,
            }}
          >
            {columns.map((column, index) => (
              <ul key={index} className="space-y-1">
                {column.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        active.handleChange(option);
                        close();
                      }}
                      className="w-full cursor-pointer rounded-md px-3 py-1.5 text-left text-sm transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-orange-400"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMegaMenu;
