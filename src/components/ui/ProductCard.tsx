import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../../types/productSlice";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  if (!product || !product.imageUrl) {
    console.warn("Producto inválido:", product);
    return null;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5 flex flex-col justify-between h-[180px]">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-white mb-2">
          {product.name}
        </h2>

        <div className="mt-auto flex justify-between items-center">
          <p className="text-white font-bold text-base">${product.price}</p>
          <Link
            to={`/product/${product.id}`}
            className="px-4 py-2 text-sm rounded-full font-semibold transition-all duration-300
                       bg-white text-black shadow-md hover:bg-gradient-to-r hover:from-black hover:to-neutral-800
                       hover:text-white border border-white"
          >
            Ver más
          </Link>
        </div>
      </div>
    </motion.div>
  );
}