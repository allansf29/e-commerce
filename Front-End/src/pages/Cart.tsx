import { useCart } from "../components/CartContext";

export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 dark:text-text-dark">
      <h1 className="text-3xl font-bold mb-8">Seu Carrinho</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-400">Seu carrinho está vazio.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 text-white">

          {/* Lista */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white border border-zinc-900 hover:border-indigo-500 dark:hover:border-indigo-400 dark:bg-zinc-900 p-4 rounded-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-black dark:text-white font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-black dark:text-gray-400">
                    R$ {item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-zinc-700 px-3 py-1 rounded hover:bg-gray-500"
                    >
                      -
                    </button>

                    <span className="text-black dark:text-white">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-zinc-700 px-3 py-1 rounded hover:bg-gray-500"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-400 hover:text-red-300"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumo */}
          <div className="bg-zinc-700 dark:bg-zinc-900 p-6 rounded-xl h-fit">
            <h2 className="text-xl font-semibold mb-4">
              Resumo do Pedido
            </h2>

            <div className="flex justify-between mb-2">
              <span>Total:</span>
              <span className="font-bold">
                R$ {total.toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-4 bg-white text-black py-3 rounded-lg font-semibold hover:opacity-90">
              Ir para pagamento
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
