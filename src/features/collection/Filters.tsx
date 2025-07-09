import { useState } from "react";

interface FiltersProps {
  filters: {
    category: string;
    gender: string;
    size: string;
  };
  onFilterChange: (field: keyof FiltersProps["filters"], value: string) => void;
  onResetFilters: () => void;
}

export default function Filters({
  filters,
  onFilterChange,
  onResetFilters,
}: FiltersProps) {
  const categories = ["buzos", "gorras", "remeras","chalecos"];
  const genders = ["hombre", "mujer", "unisex"];
  const sizes = ["S", "M", "L", "XL", "único"];

  const [showAdvanced, setShowAdvanced] = useState(false);

  const renderButtons = (
    options: string[],
    field: keyof FiltersProps["filters"]
  ) =>
    options.map((option) => {
      const isSelected = filters[field] === option;
      return (
        <button
          key={option}
          onClick={() => onFilterChange(field, option)}
          className={`px-4 py-1 rounded-full border transition-all duration-200 whitespace-nowrap
            ${
              isSelected
                ? "bg-yellow-500 text-black font-bold shadow-sm"
                : "bg-white/10 text-white hover:bg-white/20 border-white/10"
            }`}
        >
          {option}
        </button>
      );
    });

  return (
    <div className="space-y-6 text-sm sm:text-base relative">
      {/* Header con título y botón reset */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-neutral-300 uppercase tracking-wide text-xs font-bold">
          Filtrar por categoría
        </span>
        <button
          onClick={onResetFilters}
          className="text-xs text-neutral-400 hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Categorías siempre visibles */}
      <div className="flex flex-wrap gap-3">
        {renderButtons(categories, "category")}
      </div>

      {/* Botón para mostrar otros filtros */}
      <div className="mt-4">
        <button
          onClick={() => setShowAdvanced((prev) => !prev)}
          className="text-sm text-neutral-400 underline underline-offset-4 hover:text-white transition"
        >
          {showAdvanced ? "Ocultar otros filtros" : "Mostrar otros filtros"}
        </button>
      </div>

      {/* Filtros avanzados */}
      {showAdvanced && (
        <div className="space-y-4 mt-4">
          <div>
            <span className="text-neutral-300 uppercase tracking-wide text-xs font-bold">
              Género
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              {renderButtons(genders, "gender")}
            </div>
          </div>

          <div>
            <span className="text-neutral-300 uppercase tracking-wide text-xs font-bold">
              Talle
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              {renderButtons(sizes, "size")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
