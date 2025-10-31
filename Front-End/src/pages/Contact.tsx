import React, { useState } from "react";
import { Mail, Phone, Users, Building2, Heart, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Preencha todos os campos.");
      return false;
    }
    // simples validação de e-mail
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("E-mail inválido.");
      return false;
    }
    setError(null);
    return true;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setError(null);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSent(false), 3500);
    }, 900);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#060607] dark:to-[#0b0b0c] px-6 lg:px-16 py-20">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute left-10 top-24 w-[420px] h-[420px] rounded-full bg-indigo-500/10 dark:bg-indigo-400/6 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-10 bottom-20 w-[420px] h-[420px] rounded-full bg-blue-400/8 dark:bg-blue-400/6 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Quem Somos
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-10">
            Somos uma equipe apaixonada por qualidade, inovação e experiência do cliente.
            Buscamos entregar produtos com design pensado e serviço que realmente ajude você.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                <Users className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Equipe Unida</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pessoas comprometidas em entregar o melhor todos os dias.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                <Building2 className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Visão Moderna</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sempre de olho nas tendências e tecnologias do futuro.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                <Heart className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Feito com Paixão</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cada detalhe é pensado para você.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-1 flex items-center gap-2"><Mail className="w-4 h-4" /> contato@seudominio.com</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> (11) 99999-9999</p>
          </div>
        </motion.div>

        {/* RIGHT: Formulário */}
        <motion.div
          className="w-full max-w-lg bg-white dark:bg-[#0f1112] border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Entre em Contato</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Fale com nossa equipe — responderemos o mais rápido possível.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
            <input
              aria-label="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0b0c0d] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-text"
              placeholder="Seu nome"
            />

            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
            <input
              aria-label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0b0c0d] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-text"
              placeholder="seuemail@exemplo.com"
            />

            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
            <textarea
              aria-label="mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0b0c0d] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none cursor-text"
              placeholder="Escreva sua mensagem..."
            />

            {error && <div className="text-sm text-red-500">{error}</div>}

            <div className="mt-3 flex items-center gap-3">
              <button
                type="submit"
                disabled={sending}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-60 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                {sending ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                className="mt-6 px-4 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md text-sm text-green-700 dark:text-green-200"
              >
                Mensagem enviada com sucesso — vamos responder em breve.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
