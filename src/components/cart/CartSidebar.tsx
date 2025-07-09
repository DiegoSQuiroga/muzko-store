import { useCart } from "../../context/useCart";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: Props) {
  const { state, dispatch } = useCart();

  const total = state.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white text-black shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-lg font-bold">Tu Carrito</h2>
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className="p-4 space-y-4 flex-1 overflow-y-auto">
        {state.items.length === 0 ? (
          <p className="text-center text-neutral-500">Tu carrito está vacío</p>
        ) : (
          state.items.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.product.name}</p>

                {/* Controles de cantidad */}
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_QUANTITY",
                        payload: item.product.id,
                      })
                    }
                    className="px-2 py-1 bg-gray-200 rounded text-black"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_QUANTITY",
                        payload: item.product.id,
                      })
                    }
                    className="px-2 py-1 bg-gray-200 rounded text-black"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item.product.id,
                  })
                }
                className="text-red-500 text-sm"
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>

      {state.items.length > 0 && (
        <>
          <div className="p-4 border-t">
            <p className="text-lg font-bold text-right">Total: ${total}</p>
          </div>
          <div className="p-4 pt-0">
            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full bg-black text-white text-center py-2 rounded hover:bg-neutral-800 transition"
            >
              Ir al Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
