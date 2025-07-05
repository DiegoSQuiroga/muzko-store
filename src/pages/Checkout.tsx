import CheckoutForm from "../features/checkout/CheckoutForm";
import type { CheckoutData } from "../features/checkout/CheckoutForm";
import { useCart } from "../context/useCart";

export default function CheckoutPage() {
  const { state } = useCart();

  const handleCheckout = (data: CheckoutData) => {
    // 🚧 Próximamente: enviar datos a Mercado Pago
    console.log("Datos del comprador:", data);
    console.log("Items del carrito:", state.items);
    alert("Checkout en desarrollo. Pronto se conectará con Mercado Pago.");
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Finalizar compra</h1>

        {state.items.length === 0 ? (
          <p className="text-center text-neutral-400">Tu carrito está vacío.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            <CheckoutForm onSubmit={handleCheckout} />

            <div className="bg-neutral-900 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Resumen de tu pedido</h2>
              <ul className="space-y-3">
                {state.items.map((item) => (
                  <li key={item.product.id} className="flex justify-between">
                    <span>
                      {item.quantity} x {item.product.name}
                    </span>
                    <span>${item.product.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <hr className="my-4 border-white/20" />
              <p className="text-xl font-bold">
                Total: $
                {state.items.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
