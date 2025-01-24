URL aplikacije u cloudu: "https://vue3-1.onrender.com/"
Kriteriji:
1. interpolation/one-way binding -> Da, na više mjesta u aplikaciji npr. components/CartPage.vue :14
2. two-way binding -> Da, npr. components/CartPage.vue :23 (količina se može promjeniti pritiskom na + ili - odnosno metodama increaseQuantity tj. decreaseQuantity)
3. methods -> Da, na više mjesta npr. components/CartPage.vue :58, :63 ....
4. computed properties -> Da, na više mjesta npr components/CartPage.vue :30, :31 (itemCount i totalPrice)
5. barem jedan scoped style -> Da, gotovo svaka komponenta, npr. components/CartPage.vue :84
6. koristiti barem jedan lifecycle hook -> Da, u components/ProductsPage.vue :54 (za dohvaćanje proizvoda sa mock storagea)
7. routing (više stranica) -> Da, više glavnih ruta router/index.js :8-:14
 - aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) -> svaka stranica je bookmarkable, router/index.js :8-:14
 - dinamičko usmjeravanje s 404 stranicom ("catch all") -> Da, u router/index.js :13
8. (barem) dvije komponente -> Da, components/ProductCard.vue, components/ProductsPage.vue
 - komponenta bez stanja, koristiti properties -> Da, components/ProductCard.vue (koristi props za primanje podataka)
 - komponenta sa stanjem -> Da, components/ProductPage.vue (koristi vlastito stanje)
9. barem jedna komponenta mora emitirati barem jedan event -> Da, npr. components/ProductCard.vue :23 i :26 (emitiraju evente o dodavanju u kosaricu i o prikazu detalja)
10. store (Pinia) -> Da, npr main.js :13, :14, cart.js :4, product.js :4
11. asinkroni dohvat podataka s backenda -> Da, napravio sam mock podatke u obliku artikla, npr products.js :9 (products.js služi sa mock pohranu podataka)
   											  -> Uz to napravio sam i asinkrono (lazy) ucitavanje komponente ProductCard.vue, main.js :11, :23


UPUTE ZA POKRETANJE STRANICE LOKALNO
 - npm install
 - npm run build
 - npm run dev (iz izvornog direktorija tj no-code-solution)