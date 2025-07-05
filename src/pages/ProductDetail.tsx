import { useParams, Link } from "react-router-dom";
import { mockProducts } from "../services/mockProducts";
import { useCart } from "../context/useCart";
import { useOutletContext } from "react-router-dom";
import { X } from "lucide-react";
import type { Product } from "../types/productSlice";

interface OutletContext {
  openCart: () => void;
}

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const { openCart } = useOutletContext<OutletContext>();
  const product: Product | undefined = mockProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-white text-center mt-20">
        <h2 className="text-2xl">Producto no encontrado</h2>
        <Link
          to="/collection"
          className="mt-4 inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-red-500 transition"
        >
          Volver a la colección
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    openCart();
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-10 relative">
      {/* Botón para volver */}
      <Link to="/collection" className="absolute top-6 right-6 text-white hover:text-red-500">
        <X size={28} />
      </Link>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center mt-10">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover max-h-[600px]"
        />

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-neutral-400">{product.description}</p>
          <p className="text-lg font-semibold">
            Categoría: <span className="text-yellow-400">{product.category}</span>
          </p>
          <p className="text-lg font-semibold">
            Género: <span className="text-yellow-400">{product.gender}</span>
          </p>
          <p className="text-lg font-semibold">
            Talles disponibles:{" "}
            <span className="text-yellow-400">{product.sizes.join(", ")}</span>
          </p>
          <p className="text-2xl font-bold text-green-400">${product.price}</p>

          <button
            onClick={handleAddToCart}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-red-500 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}