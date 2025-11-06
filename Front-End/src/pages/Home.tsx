import { Link } from "react-router-dom";
import type { FC } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Product } from "../types/type";
import { featuredProducts } from "../data/featuredProducts";

const Home: FC = () => {
  const handleAddToCart = (product: Product) => {
    alert(`${product.name} adicionado ao carrinho — ${product.price}`);
  };

  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-[#0a0a0b] text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      {/* EFEITOS DE FUNDO */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/10 to-primary/20 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* HERO */}
      <section className="container mx-auto px-6 lg:px-8 pt-16 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* TEXTO */}
          <div className="lg:col-span-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 dark:bg-gray-900 text-primary dark:text-text-dark font-semibold text-sm mb-4">
              Coleção 2025
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Encontre peças que{" "}
              <span className="text-detail">combinam</span> com seu estilo
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Explore nossa nova coleção com o equilíbrio perfeito entre conforto
              e design moderno. Feito para quem busca estilo e qualidade.
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
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary hover:underline transition-colors"
              >
                Ver promoções
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[["200+", "Marcas"], ["2.000+", "Produtos"], ["30.000+", "Clientes"]].map(
                ([num, label]) => (
                  <div key={num} className="flex flex-col">
                    <span className="text-3xl font-bold">{num}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {label}
                    </span>
                  </div>
                )
              )}
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
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL DESTACADO */}
      <section className="container mx-auto px-6 lg:px-8 mt-10 pb-20 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Produtos em Destaque
          </h2>
          <Link
            to="/products"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition"
          >
            Ver todos
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="pb-10"
        >
          {featuredProducts.slice(0, 6).map((p) => (
            <SwiperSlide key={p.id}>
              <motion.article
                className="group bg-white dark:bg-[#101112] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
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
                    {p.name}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-primary dark:text-text-dark">
                    {p.price}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={() => handleAddToCart(p)}
                      className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 bg-primary dark:bg-secondary-dark text-white font-medium hover:brightness-95 hover:shadow-md transition cursor-pointer"
                    >
                      Adicionar
                    </button>

                    <Link
                      to={`/product/${p.id}`}
                      className="inline-flex items-center justify-center px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#151617] transition"
                    >
                      Ver
                    </Link>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default Home;
