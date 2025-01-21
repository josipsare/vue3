// src/storage.js

// Simulirani podaci u memoriji (simulacija baze podataka)
let mockStorage = {
  cart: [],
};

// Funkcija za simulaciju asinkronog dohvaćanja podataka
export const fetchCartData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStorage.cart); // Vraćamo podatke iz "baze"
    }, 1000); // Simuliramo kašnjenje od 1 sekunde
  });
};

// Funkcija za simulaciju asinkronog pohranjivanja podataka
export const saveCartData = (cartItems) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockStorage.cart = cartItems; // Pohranjujemo podatke u "bazu"
      resolve(); // Zatvaramo Promise nakon što je pohranjeno
    }, 1000); // Simuliramo kašnjenje od 1 sekunde
  });
};

// Funkcija za simulaciju asinkronog brisanja podataka
export const clearCartData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockStorage.cart = []; // Brišemo podatke iz "baze"
      resolve(); // Zatvaramo Promise nakon brisanja
    }, 1000); // Simuliramo kašnjenje od 1 sekunde
  });
};
