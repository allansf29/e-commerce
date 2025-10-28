export default function SearchBar() {
  return (
    <div className="flex gap-2 border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none bg-transparent text-gray-700 dark:text-gray-300"
      />
      <button className="text-gray-400 hover:text-gray-600">🔍</button>
    </div>
  )
}
