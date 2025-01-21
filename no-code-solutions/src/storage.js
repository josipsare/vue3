
let mockStorage = {
  cart: [],
};

export const fetchCartData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStorage.cart);
    }, 1000);
  });
};

export const saveCartData = (cartItems) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockStorage.cart = cartItems;
      resolve();
    }, 1000);
  });
};

export const clearCartData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockStorage.cart = [];
      resolve();
    }, 1000);
  });
};
