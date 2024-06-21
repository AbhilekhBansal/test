
import {create} from 'zustand';

export const useCartStore = create((set) => ({
  cartCount: 0,
  updateCartCount: () => {
    const cartList = localStorage.getItem("cart");
    const cart = cartList && JSON.parse(cartList);
    const totalCount = cart && cart.length;
      totalCount &&  set({ cartCount: totalCount });
  },
  removeCartItems: (id)=>{
    const cartList = localStorage.getItem("cart");
    const cart = cartList && JSON.parse(cartList);
    const fData = cart && cart.filter(item => item.id != id);
    localStorage.setItem('cart',fData);
    const totalCount = fData.length || 0 ;
    set({ cartCount: totalCount || 0});
  },
  updateQuantity:(id,quantity)=>{
    const cartList = localStorage.getItem("cart");
  const cart = cartList ? JSON.parse(cartList) : [];
  const updatedCart = cart.map(item => {
    if (item.id === id) {
      return { ...item, quantity: quantity };
    }
    return item;
  });
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  
  },
  


}));


