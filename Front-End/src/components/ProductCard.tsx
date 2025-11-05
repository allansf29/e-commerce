import React from "react"
import { ShoppingCart, Heart, Eye } from "lucide-react"
import { useNavigate } from "react-router-dom"

type ProductProps = {
  id: string
  name: string
  category: string
  price: number
  image: string
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(amount)
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
}: ProductProps) {
  const navigate = useNavigate()

  const handleView = () => {
    navigate(`/product/${id}`)
  }

  return (
    <div
      className="
        flex flex-col p-4 rounded-xl border border-gray-100 dark:border-neutral-800 group/card
        shadow-sm hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 
        hover:-translate-y-0.5 transition-all duration-300 bg-white dark:bg-black cursor-pointer
      "
    >
      <div className="w-full aspect-square overflow-hidden rounded-lg relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover/card:scale-[1.05] transition-transform duration-500"
        />

        <button className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-700 rounded-full text-gray-500 hover:text-red-500 opacity-0 group-hover/card:opacity-100 transition duration-300 shadow-md">
          <Heart size={18} fill="currentColor" />
        </button>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <p className="text-xs uppercase font-medium tracking-widest text-gray-500 dark:text-gray-400">
          {category}
        </p>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
          {name}
        </h3>
        <p className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 pt-1">
          {formatCurrency(price)}
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          className="
            flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg 
            bg-indigo-600 text-white font-semibold 
            hover:bg-indigo-700 transition duration-200
            dark:bg-indigo-600 dark:hover:bg-indigo-500
          "
        >
          <ShoppingCart size={20} />
          Adicionar
        </button>

        <button
          onClick={handleView}
          className="
            flex items-center justify-center gap-2 py-2 px-4 rounded-lg border 
            border-indigo-600 text-indigo-600 font-semibold 
            hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition duration-200
          "
        >
          <Eye size={20} />
          Ver
        </button>
      </div>
    </div>
  )
}
