import { Mail, Phone, Send } from "lucide-react"

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-2">
          Entre em Contato
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Tem alguma dúvida, sugestão ou quer apenas dizer oi? Preencha o formulário abaixo 👇
        </p>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mensagem
            </label>
            <textarea
              placeholder="Escreva sua mensagem aqui..."
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-3 rounded-lg 
                       bg-indigo-600 hover:bg-indigo-700 text-white font-medium
                       transition-all duration-300 hover:-translate-y-0.5"
          >
            <Send size={18} />
            Enviar Mensagem
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center gap-2">
            <Mail size={16} /> contato@seudominio.com
          </p>
          <p className="flex items-center justify-center gap-2 mt-2">
            <Phone size={16} /> (11) 99999-9999
          </p>
        </div>
      </div>
    </section>
  )
}
