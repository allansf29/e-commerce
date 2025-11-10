import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as Theme) || "light";
  }
  return "light";
});


  // 🔹 Carrega tema salvo ou define dark como padrão
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initial = savedTheme || "dark";
    setTheme(initial);
    document.documentElement.classList.add(initial);
  }, []);

  // 🔹 Atualiza tema quando muda
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🔹 Alternar entre light/dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{
        scale: 1.1,
        boxShadow:
          theme === "dark"
            ? "0 0 12px 3px rgba(168, 85, 247, 0.6)"
            : "0 0 12px 3px rgba(250, 204, 21, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex items-center justify-center w-10 h-10 rounded-full 
                 bg-gradient-to-br from-zinc-200 to-zinc-300 
                 dark:from-zinc-800 dark:to-zinc-900 
                 shadow-md transition-all duration-300 cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="text-purple-400 text-xl"
          >
            <FiMoon />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
            className="text-yellow-400 text-xl"
          >
            <FiSun />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
