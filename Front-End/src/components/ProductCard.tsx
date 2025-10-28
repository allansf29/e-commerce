type ProductProps = {
  name: string
  category: string
  price: number
  image: string
}

export default function ProductCard({ name, category, price, image }: ProductProps) {
  return (
    <div
      className="
        flex flex-col gap-2 p-3 rounded-2xl border 
        border-gray-200 dark:border-gray-800 
        hover:shadow-lg hover:-translate-y-1 
        transition-all duration-300 bg-white dark:bg-gray-900
      "
    >
      <div className="w-full aspect-square overflow-hidden rounded-xl relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{category}</p>
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">{name}</h3>
        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
