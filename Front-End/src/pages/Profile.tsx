import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function Profile() {
  const prefersReducedMotion = useReducedMotion();

  const [user] = useState({
    name: "Allan Victor",
    email: "allan@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Allan",
    orders: 12,
    favorites: 5,
    totalSpent: 2499.9,
  });

  const recentOrders = [
    { id: "001", date: "02/02/2026", total: 399.9, status: "Entregue" },
    { id: "002", date: "25/01/2026", total: 179.9, status: "Enviado" },
    { id: "003", date: "15/01/2026", total: 249.9, status: "Processando" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0b] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Background blur igual home */}
      <div className="hidden md:block absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
          animate={!prefersReducedMotion ? { y: [0, 40, 0] } : {}}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <section className="container mx-auto px-6 lg:px-8 pt-16 pb-20">

        <h1 className="text-3xl font-bold mb-10">Meu Perfil</h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* CARD USUÁRIO */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#101112] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow-md"
              />

              <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">{user.email}</p>

              <button className="mt-6 w-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-400 text-white py-2 rounded-full hover:brightness-95 transition cursor-pointer">
                Editar Perfil
              </button>

              <button className="mt-3 w-full border border-red-500 text-red-500 py-2 rounded-full hover:bg-red-500 hover:text-white transition cursor-pointer">
                Sair da Conta
              </button>
            </div>
          </motion.div>

          {/* RESUMO */}
          <div className="lg:col-span-2 space-y-8">

            {/* Estatísticas */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#101112] rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Pedidos</p>
                <h3 className="text-2xl font-bold mt-2">{user.orders}</h3>
              </div>

              <div className="bg-white dark:bg-[#101112] rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Favoritos</p>
                <h3 className="text-2xl font-bold mt-2">{user.favorites}</h3>
              </div>

              <div className="bg-white dark:bg-[#101112] rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Total gasto</p>
                <h3 className="text-2xl font-bold mt-2 text-primary dark:text-white">
                  {user.totalSpent.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h3>
              </div>
            </div>

            {/* Pedidos recentes */}
            <div className="bg-white dark:bg-[#101112] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-6">Pedidos Recentes</h2>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex justify-between items-center bg-gray-100 dark:bg-[#18191b] p-4 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">Pedido #{order.id}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {order.date}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">
                        {order.total.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "Entregue"
                            ? "bg-green-500/20 text-green-400"
                            : order.status === "Enviado"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
