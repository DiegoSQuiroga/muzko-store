import { useState } from "react";
import { mockProducts } from "../../services/mockProducts";
import ProductCard from "../../components/ui/ProductCard";
import Filters from "./Filters";

export default function CollectionPage() {
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    size: "",
  });

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: prev[field] === value ? "" : value, // toggle
    }));
  };

  const handleResetFilters = () => {
    setFilters({ category: "", gender: "", size: "" });
  };

  const filteredProducts = mockProducts.filter((product) => {
    const matchCategory = filters.category
      ? product.category === filters.category
      : true;
    const matchGender = filters.gender
      ? product.gender === filters.gender
      : true;
    const matchSize = filters.size
      ? product.sizes.includes(filters.size)
      : true;

    return matchCategory && matchGender && matchSize;
  });

  return (
    <section className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Nuestra Colección
        </h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-10">
          Descubrí las prendas de arte urbano que transforman cada trazo en una
          prenda con identidad.
        </p>

        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-neutral-400 col-span-full">
              No se encontraron productos.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}