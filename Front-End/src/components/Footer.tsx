import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-gray-100 dark:bg-[#0b0b0d] text-gray-800 dark:text-gray-200 mt-20 overflow-hidden">

      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 to-transparent opacity-70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto px-6 lg:px-8 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-extrabold mb-3 tracking-tight">
            <span className="text-primary dark:text-secondary">Style</span>Store
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Encontre o estilo que combina com você. Moda, conforto e qualidade em um só lugar.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold mb-4">Navegação</h4>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Início", to: "/" },
              { name: "Produtos", to: "/products" },
              { name: "Contato", to: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4">Ajuda</h4>

          <ul className="space-y-2 text-sm">
            {[
              "Entrega e Frete",
              "Trocas e Devoluções",
              "Política de Privacidade",
              "Termos de Uso",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold mb-4">Fique por dentro</h4>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Receba novidades e promoções exclusivas:
          </p>

          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-3 py-2 rounded-lg bg-white dark:bg-[#101112] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary text-sm"
            />

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary dark:bg-secondary text-white dark:text-detail-dark font-medium hover:brightness-95 transition cursor-pointer"
            >
              Enviar
            </button>
          </form>

          <div className="flex items-center gap-4 mt-5">
            {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: reduce ? 1 : 1.2 }}
                whileTap={{ scale: reduce ? 1 : 0.95 }}
                className="w-9 h-9 flex items-center justify-center rounded-full 
                           bg-gray-200 dark:bg-[#151617] 
                           hover:bg-primary hover:text-white 
                           dark:hover:bg-secondary hover:dark:text-detail-dark 
                           transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <section className="container mx-auto px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-8"
        >

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col cursor-default"
          >
            <span className="font-semibold text-primary dark:text-white">
              Frete para todo Brasil
            </span>
            <span>Entrega rápida e rastreada</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col cursor-default"
          >
            <span className="font-semibold text-primary dark:text-white">
              7 dias para troca
            </span>
            <span>Após o recebimento</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col cursor-default"
          >
            <span className="font-semibold text-primary dark:text-white">
              Pagamento seguro
            </span>
            <span>Proteção de dados
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col cursor-default"
          >
            <span className="font-semibold text-primary dark:text-white">
              Suporte rápido
            </span>
            <span>Atendimento facilitado</span>
          </motion.div>

        </motion.div>
      </section>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="border-t border-gray-300 dark:border-gray-800 py-6 text-center text-sm 
                   text-gray-600 dark:text-gray-500"
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">EcomStore</span>. Imagens retiradas do Unsplash para exemplos.
      </motion.div>
    </footer>
  );
};

export default Footer;