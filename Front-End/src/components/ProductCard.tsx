import React from "react"

type ProductProps = {
  name: string
  category: string
  price: number
  image: string
}

export default function ProductCard({ name, category, price, image }: ProductProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full aspect-square overflow-hidden rounded-2xl border border-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition" />
      </div>
      <p className="text-sm text-gray-500">{category}</p>
      <h3 className="font-medium text-gray-800 dark:text-gray-100">{name}</h3>
      <p className="text-gray-900 dark:text-gray-200">${price}</p>
    </div>
  )
}
