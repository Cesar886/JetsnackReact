import { useState, useCallback } from 'react';
import { AppContext } from './AppContextProvider';

export function AppProvider({ children }) {
  // State management
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  // Update favorites
  const toggleFavorite = useCallback((articleId) => {
    setFavorites((prev) =>
      prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
    );
  }, []);

  const updateUser = useCallback((userData) => {
    setUser(userData);
  }, []);

  const addToCart = useCallback((snack, quantity = 1) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.snack.id === snack.id);
      if (existingItem) {
        return prev.map((item) =>
          item.snack.id === snack.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { snack, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((snackId) => {
    setCart((prev) => prev.filter((item) => item.snack.id !== snackId));
  }, []);

  const value = {
    user,
    favorites,
    isLoading,
    cart,
    toggleFavorite,
    updateUser,
    setIsLoading,
    addToCart,
    removeFromCart,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
