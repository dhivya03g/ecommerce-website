import { createContext, useState } from "react";

/*
  Create Cart Context
  This allows cart data to be accessed
  from any component in the application
*/

export const CartContext = createContext();

function CartProvider({ children }) {

  // Store cart items
  const [cartItems, setCartItems] = useState([]);

  /*
    Add product to cart
    If product already exists → increase quantity
  */
  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 }
      ]);

    }
  };

  /*
    Remove item completely
  */
  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  /*
    Increase product quantity
  */
  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  /*
    Decrease product quantity
  */
  const decreaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0);

    setCartItems(updatedCart);
  };

  /*
    Clear entire cart
  */
  const clearCart = () => {
    setCartItems([]);
  };

  /*
    Calculate total price
  */
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;