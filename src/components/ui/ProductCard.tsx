import { useCart } from "../../context/useCart";
import { Link, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../../types/productSlice";

interface Props {
  product: Product;
}

interface OutletContext {
  openCart: () => void;
}

export default function ProductCard({ product }: Props) {
  const { dispatch } = useCart();
  const { openCart } = useOutletContext<OutletContext>();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    openCart();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-neutral-900 rounded-xl overflow-hidden shadow-md transition flex flex-col"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-sm text-neutral-400">{product.description}</p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-red-500 transition font-semibold"
          >
            Agregar al carrito
          </button>

          <Link
            to={`/product/${product.id}`}
            className="text-sm text-center text-yellow-400 hover:underline"
          >
            Ver más detalles
          </Link>
        </div>
      </div>
    </motion.div>
  );
}