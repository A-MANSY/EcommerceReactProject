import React, { createContext, useContext, useEffect, useState } from 'react';

const cartContext = createContext();

export function useCartContext(){
  const context = useContext(cartContext);
  if (context === undefined) throw new Error("cart was used outside the CartProvider");
  return context;
}
export default function CartProvider({ children }) {
const [products, setProducts] = useState(() => {
  const savedCart = localStorage.getItem("cartProducts");
  return savedCart ? JSON.parse(savedCart) : [];
});  
const [favorite, setFavorite] = useState(() => {
  const savedFav = localStorage.getItem("favoriteProducts");
  return savedFav ? JSON.parse(savedFav) : [];
});
const [toast, setToast] = useState(null);
useEffect(() => {
  localStorage.setItem("cartProducts", JSON.stringify(products));
}, [products]);

useEffect(() => {
  localStorage.setItem("favoriteProducts", JSON.stringify(favorite));
}, [favorite]);
  // ====== Cart Functions ======
  function addToCart(product) {
    if (!product || !product.id) return console.log("Invalid product");

    setProducts(prevProducts => {
      const existingProduct = prevProducts.find(item => item.id === product.id);
      if (existingProduct) {
        return prevProducts.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });

    setToast({ product, type: "add" });
    setTimeout(() => setToast(null), 10000);
  }

  function removeFromCart(id) {
    const removedProduct = products.find(p => p.id === id);
    setProducts(prev => prev.filter(p => p.id !== id));
    if (removedProduct) {
      setToast({ product: removedProduct, type: "remove" });
      setTimeout(() => setToast(null), 10000);
    }
  }

  function updateQuantity(id, newQuantity){
    setProducts(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  function totalItems(){
    return products.length;
  }

  function totalItemsQuantity() {
    return products.reduce((sum, item) => sum + item.quantity, 0);
  }

  // ====== Favorite Functions ======
  function addToFavorite(product) {
    if (!product || !product.id) return console.log("Invalid product");
    scroll()
    setFavorite(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });

    setToast({ product, type: "fav-add" });
    setTimeout(() => setToast(null), 10000);
  }

  function removeFromFavorite(id) {
    const removedProduct = favorite.find(p => p.id === id);
    setFavorite(prev => prev.filter(p => p.id !== id));
    if (removedProduct) {
      setToast({ product: removedProduct, type: "fav-remove" });
      setTimeout(() => setToast(null), 10000);
    }
  }
    function totalItemsInFav(){
    return favorite.length;
  }


  return (
    <cartContext.Provider
      value={{
        products,
        favorite,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalItemsQuantity,
        toast,
        addToFavorite,
        removeFromFavorite, 
        totalItemsInFav
      }}
    >
      {children}
    </cartContext.Provider>
  );
}