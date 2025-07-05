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
  const categories = ["buzo", "gorra", "remera"];
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
          className={`px-3 py-1 text-sm rounded-full border whitespace-nowrap ${
            isSelected
              ? "bg-yellow-500 text-black font-bold"
              : "bg-white text-black"
          } transition`}
        >
          {option}
        </button>
      );
    });

  return (
    <div className="space-y-6 text-sm sm:text-base relative">
      {/* Reset arriba derecha */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-neutral-400 font-semibold">Categoría:</span>
        <button
          onClick={onResetFilters}
          className="text-sm text-white/70 hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Categoría visible siempre */}
      <div className="flex flex-wrap gap-2">
        {renderButtons(categories, "category")}
      </div>

      {/* Botón para mostrar filtros avanzados */}
      <div className="mt-4">
        <button
          onClick={() => setShowAdvanced((prev) => !prev)}
          className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition"
        >
          {showAdvanced ? "Ocultar otros filtros" : "Otros filtros"}
        </button>
      </div>

      {/* Género y talle, si está abierto */}
      {showAdvanced && (
        <div className="space-y-4 mt-4">
          <div>
            <span className="text-neutral-400 font-semibold mr-2">Género:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {renderButtons(genders, "gender")}
            </div>
          </div>

          <div>
            <span className="text-neutral-400 font-semibold mr-2">Talle:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {renderButtons(sizes, "size")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}