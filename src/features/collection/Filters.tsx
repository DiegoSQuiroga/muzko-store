// src/features/collection/Filters.tsx
import { useState } from "react";

interface Props {
  onFilterChange: (filters: {
    category: string;
    gender: string;
    size: string;
  }) => void;
}

export default function Filters({ onFilterChange }: Props) {
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");

  const handleChange = () => {
    onFilterChange({ category, gender, size });
  };

  return (
    <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          handleChange();
        }}
        className="p-2 rounded bg-neutral-800 text-white"
      >
        <option value="">Todas las categorías</option>
        <option value="buzo">Buzo</option>
        <option value="gorra">Gorra</option>
        <option value="remera">Remera</option>
      </select>

      <select
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
          handleChange();
        }}
        className="p-2 rounded bg-neutral-800 text-white"
      >
        <option value="">Todos los géneros</option>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
        <option value="unisex">Unisex</option>
      </select>

      <select
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
          handleChange();
        }}
        className="p-2 rounded bg-neutral-800 text-white"
      >
        <option value="">Todos los talles</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="Única">Única</option>
      </select>
    </div>
  );
}