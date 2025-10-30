import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#0b0c0d] dark:to-[#0d0e10] px-6 py-16">
      {/* 🔹 Fundo animado sutil */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-32 left-16 w-80 h-80 bg-indigo-500/20 blur-[100px] rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-20 w-96 h-96 bg-blue-500/15 blur-[100px] rounded-full"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* 🔹 Card principal */}
      <motion.div
        className="relative z-10 max-w-xl w-full bg-white/90 dark:bg-[#111214]/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Fale Conosco
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Dúvidas, sugestões ou apenas um “oi”? Manda sua mensagem 👇
          </p>
        </div>

        {/* Formulário */}
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-[#0e0f10] text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-[#0e0f10] text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Mensagem
            </label>
            <textarea
              placeholder="Escreva sua mensagem..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-[#0e0f10] text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
            />
          </div>

          {/* Botão */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl 
                       bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                       shadow-md hover:shadow-xl transition-all"
          >
            <Send size={18} />
            Enviar Mensagem
          </motion.button>
        </form>

        {/* Contato */}
        <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center gap-2 mb-1">
            <Mail size={16} /> contato@seudominio.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone size={16} /> (11) 99999-9999
          </p>
        </div>
      </motion.div>
    </section>
  );
}
