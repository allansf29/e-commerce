import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { featuredProducts } from "../data/featuredProducts";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = featuredProducts.find((p) => p.id === id);

  // Função de voltar com fallback (caso o histórico não exista)
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // fallback pra home
    }
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-zinc-600 dark:text-zinc-400">
        <p>Produto não encontrado 😢</p>
        <button
          onClick={handleBack}
          className="mt-4 text-blue-500 hover:underline hover:brightness-110 transition"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Botão Voltar */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Imagem */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-[#101112]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Detalhes */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
            {product.name}
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Categoria:{" "}
            <span className="text-gray-800 dark:text-gray-200">
              {product.category}
            </span>
          </p>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            {product.description ||
              "Produto de alta qualidade feito com materiais selecionados."}
          </p>

          <span className="text-3xl font-semibold text-green-600 mb-8">
            R$ {Number(product.price).toFixed(2)}
          </span>

          <div className="flex gap-3">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-all font-medium shadow-md cursor-pointer">
              Adicionar ao Carrinho
            </button>

            <Link
              to="/products"
              className="border border-gray-300 dark:border-gray-700 text-sm px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#151617] transition-all dark:text-text-dark cursor-pointer flex items-center justify-center"
            >
              Ver mais produtos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;