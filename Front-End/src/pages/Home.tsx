import { Link } from "react-router-dom";
import type { FC } from "react";

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
  badge?: string;
};

const featuredProducts: Product[] = [
  {
    id: "p1",
    title: "Jaqueta Urbana Masculina",
    price: "R$ 249,90",
    image:
      "https://images.unsplash.com/photo-1745196587689-226859e4b32a?auto=format&fit=crop&q=80&w=688",
    badge: "Novo",
  },
  {
    id: "p2",
    title: "Tênis Performance",
    price: "R$ 399,00",
    image:
      "https://images.unsplash.com/photo-1760164141999-d000613107ba?auto=format&fit=crop&q=80&w=735",
  },
  {
    id: "p3",
    title: "Moletom Confort Fit",
    price: "R$ 179,90",
    image:
      "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?auto=format&fit=crop&q=80&w=764",
    badge: "Promo",
  },
  {
    id: "p4",
    title: "Óculos Minimal",
    price: "R$ 129,00",
    image:
      "https://images.unsplash.com/photo-1760476426758-7be6980cdfe1?auto=format&fit=crop&q=80&w=1057",
  },
];

const Home: FC = () => {
  const handleAddToCart = (product: Product) => {
    alert(`${product.title} adicionado ao carrinho — ${product.price}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0b] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* HERO */}
      <section className="container mx-auto px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* TEXTO */}
          <div className="lg:col-span-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Coleção 2025
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Encontre peças que{" "}
              <span className="text-primary">combinam</span> com seu estilo
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Navegue por nossa seleção curada de roupas e acessórios de alta
              qualidade — design contemporâneo, acabamento refinado e entrega
              rápida.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Link
                to="/produtos"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:brightness-95 transition-all"
              >
                Comprar agora
              </Link>

              <Link
                to="/ofertas"
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary hover:underline transition-colors"
              >
                Ver promoções
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[
                ["200+", "Marcas"],
                ["2.000+", "Produtos"],
                ["30.000+", "Clientes satisfeitos"],
              ].map(([num, label]) => (
                <div key={num} className="flex flex-col">
                  <span className="text-3xl font-bold">{num}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEM HERO */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[16/12] w-full rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-[#101112] dark:to-[#0b0b0d] flex items-center justify-end shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1760594386925-519fba2ad5ba?auto=format&fit=crop&q=80&w=687"
                alt="Hero"
                className="w-full h-full object-cover rounded-lg scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="container mx-auto px-6 lg:px-8 mt-10 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Destaques</h2>
          <Link
            to="/produtos"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((p) => (
            <article
              key={p.id}
              className="group bg-white dark:bg-[#101112] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-md shadow-sm">
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-base font-medium line-clamp-1">
                  {p.title}
                </h3>
                <p className="mt-2 text-lg font-semibold text-primary">
                  {p.price}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={() => handleAddToCart(p)}
                    className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 bg-primary text-white font-medium hover:brightness-95 hover:shadow-md transition"
                  >
                    Adicionar
                  </button>

                  <Link
                    to={`/produto/${p.id}`}
                    className="inline-flex items-center justify-center px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#151617] transition"
                  >
                    Ver
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
