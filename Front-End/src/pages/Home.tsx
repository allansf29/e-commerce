import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Product } from "../types/type";
import { featuredProducts } from "../data/featuredProducts";

const Home: FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const handleAddToCart = (product: Product) => {
    const priceBRL = Number(product.price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    alert(`${product.name} adicionado ao carrinho — ${priceBRL}`);
  };

  const Counter = ({ target, label }: { target: number; label: string }) => {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
      if (prefersReducedMotion) {
        setCount(target);
        return;
      }

      const duration = 900; // ms
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = Math.floor(target * eased);
        setCount(current);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setCount(target);
        }
      };

      rafRef.current = requestAnimationFrame(tick);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [target, prefersReducedMotion]);

    return (
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-primary dark:text-white">
          {count.toLocaleString("pt-BR")}+
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      </div>
    );
  };

  const optimizedImage = (url: string, w = 800, q = 60) => {
    return url.includes("?") ? `${url}&q=${q}&w=${w}` : `${url}?auto=format&fit=crop&q=${q}&w=${w}`;
  };

  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-[#0a0a0b] text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden">

      <div className="hidden md:block absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-primary/10 blur-3xl"
          animate={!prefersReducedMotion ? { y: [0, 40, 0], opacity: [0.4, 0.6, 0.4] } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl"
          animate={!prefersReducedMotion ? { y: [0, -30, 0], opacity: [0.4, 0.6, 0.4] } : {}}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* HERO */}
      <section className="container mx-auto px-6 lg:px-8 pt-16 pb-20 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* TEXTO */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 dark:bg-gray-900 text-primary font-semibold text-sm mb-4 dark:text-secondary">
              Coleção 2025
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Encontre peças que{" "}
              <span className="text-detail relative">
                combinam
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-[6px] bg-primary/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </span>{" "}
              com seu estilo
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Explore nossa nova coleção com o equilíbrio perfeito entre conforto e design moderno. Feito para quem busca estilo e qualidade.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:brightness-95 hover:shadow-lg transition-all duration-200"
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

            <motion.div
              className="mt-10 flex flex-wrap gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Counter target={200} label="Marcas" />
              <Counter target={2000} label="Produtos" />
              <Counter target={30000} label="Clientes" />
            </motion.div>
          </motion.div>

          {/* IMAGEM HERO */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[16/12] w-full rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-[#101112] dark:to-[#0b0b0d] flex items-center justify-end shadow-lg">
              <img
                src={optimizedImage(featuredProducts[0]?.image || "", 900, 60)}
                alt="Hero"
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAROUSEL DESTACADO */}
      <section className="container mx-auto px-6 lg:px-8 mt-10 pb-20 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Produtos em Destaque</h2>
          <Link to="/products" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition">
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

          {featuredProducts.slice(0, 8).map((p) => (
            <SwiperSlide key={p.id}>
              <motion.article
                className="group bg-white dark:bg-[#101112] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                whileHover={!prefersReducedMotion ? { y: -6 } : {}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={optimizedImage(p.image, 800, 60)}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-md shadow-sm">
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-base font-medium line-clamp-1">{p.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-primary dark:text-text-dark">
                    {Number(p.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={() => handleAddToCart(p)}
                      className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 bg-primary dark:bg-secondary-dark text-white font-medium hover:brightness-95 transition"
                    >
                      Adicionar
                    </button>

                    <Link
                      to={`/product/${p.id}`}
                      className="inline-flex items-center justify-center px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-[#151617] transition"
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
