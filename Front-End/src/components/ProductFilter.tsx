import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductFilter() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    size: true,
    availability: true,
    category: false,
    colors: false,
    price: false,
    collections: false,
    tags: false,
    ratings: false,
  })

  const toggleSection = (key: string) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))

  const sectionAnim = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  }

  return (
    <aside className="w-full md:w-64 border-r border-gray-200 dark:border-neutral-800 pr-4">
      <h2 className="font-semibold text-lg mb-5 tracking-tight text-gray-800 dark:text-gray-200">
        Filters
      </h2>

      {/* SIZE */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("size")}
          className="flex w-full justify-between items-center mb-2"
        >
          <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
            Size
          </span>
          {openSections.size ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        <AnimatePresence>
          {openSections.size && (
            <motion.div
              variants={sectionAnim}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap gap-2"
            >
              {["XS", "S", "M", "L", "XL", "2X"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 dark:border-neutral-700 rounded-md px-3 py-1 text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                >
                  {size}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* AVAILABILITY */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("availability")}
          className="flex w-full justify-between items-center mb-2"
        >
          <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
            Availability
          </span>
          {openSections.availability ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        <AnimatePresence>
          {openSections.availability && (
            <motion.div
              variants={sectionAnim}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-2"
            >
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="accent-black dark:accent-white" />
                Availability <span className="text-gray-400">(450)</span>
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="accent-black dark:accent-white" />
                Out of Stock <span className="text-gray-400">(18)</span>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CATEGORY */}
      <FilterSection
        title="Category"
        isOpen={openSections.category}
        onToggle={() => toggleSection("category")}
      >
        {["T-Shirts", "Pants", "Hoodies", "Shoes", "Accessories"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-black dark:accent-white" />
            {item}
          </label>
        ))}
      </FilterSection>

      {/* COLORS */}
      <FilterSection
        title="Colors"
        isOpen={openSections.colors}
        onToggle={() => toggleSection("colors")}
      >
        <div className="flex flex-wrap gap-2">
          {["#000000", "#ffffff", "#f87171", "#60a5fa", "#34d399", "#facc15"].map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full border border-gray-300 dark:border-neutral-700"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </FilterSection>

      {/* PRICE RANGE */}
      <FilterSection
        title="Price Range"
        isOpen={openSections.price}
        onToggle={() => toggleSection("price")}
      >
        <input
          type="range"
          min={0}
          max={1000}
          className="w-full accent-black dark:accent-white"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </FilterSection>

      {/* COLLECTIONS */}
      <FilterSection
        title="Collections"
        isOpen={openSections.collections}
        onToggle={() => toggleSection("collections")}
      >
        {["Summer", "Winter", "Essentials", "Limited Edition"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-black dark:accent-white" />
            {item}
          </label>
        ))}
      </FilterSection>

      {/* TAGS */}
      <FilterSection
        title="Tags"
        isOpen={openSections.tags}
        onToggle={() => toggleSection("tags")}
      >
        <div className="flex flex-wrap gap-2">
          {["New", "Sale", "Hot", "Trending"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs border border-gray-300 dark:border-neutral-700 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </FilterSection>

      {/* RATINGS */}
      <FilterSection
        title="Ratings"
        isOpen={openSections.ratings}
        onToggle={() => toggleSection("ratings")}
      >
        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex items-center gap-1 text-sm">
            {"★".repeat(stars)}{"☆".repeat(5 - stars)}
          </div>
        ))}
      </FilterSection>
    </aside>
  )
}

function FilterSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  const sectionAnim = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  }

  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="flex w-full justify-between items-center mb-2"
      >
        <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
          {title}
        </span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sectionAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-2 pl-1"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
