import ProductFilter from "../components/ProductFilter"
import ProductGrid from "../components/ProductGrid"
import SearchBar from "../components/SearchBar"

export default function Products() {
  return (
    <div className="px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8">
      <ProductFilter />
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">PRODUCTS</h1>
          <SearchBar />
        </div>
        <ProductGrid />
      </div>
    </div>
  )
}
