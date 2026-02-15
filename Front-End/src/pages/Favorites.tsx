import { useFavorites } from "../components/FavoritesContext";
import { Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();
  const navigate = useNavigate();

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">Nenhum favorito ainda</h2>
        <p className="text-sm">Adicione produtos clicando no coração ❤️</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0b] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* HEADER */}
      <div className="container mx-auto px-6 pt-10 pb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Seus Favoritos
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Produtos que você salvou
        </p>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {favorites.map((product) => (
          <div
            key={product.id}
            className="group bg-white dark:bg-[#101112] rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* BOTÃO REMOVER */}
              <button
                onClick={() => removeFavorite(product.id)}
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-red-600 text-white rounded-full shadow-md transition cursor-pointer"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* INFO */}
            <div className="p-5">
              <h3 className="text-base font-medium line-clamp-1">
                {product.name}
              </h3>

              <p className="mt-2 text-lg font-semibold text-primary dark:text-indigo-400">
                {formatCurrency(product.price)}
              </p>

              {/* ACTIONS */}
              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-[#151617] transition cursor-pointer"
                >
                  <Eye size={18} className="mr-2" />
                  Ver produto
                </button>

                <button
                  onClick={() => removeFavorite(product.id)}
                  className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition cursor-pointer"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </main>
  );
};

export default Favorites;
