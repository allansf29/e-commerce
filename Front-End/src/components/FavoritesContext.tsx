import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types/type";

interface FavoritesContextType {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product: Product) => {
    const exists = favorites.some((item) => item.id === product.id);

    if (exists) {
      setFavorites((prev) =>
        prev.filter((item) => item.id !== product.id)
      );
    } else {
      setFavorites((prev) => [...prev, product]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const isFavorite = (id: string) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites precisa estar dentro do FavoritesProvider");
  }
  return context;
};
