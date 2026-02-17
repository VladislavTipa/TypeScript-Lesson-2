"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeDev = {
    level: "junior",
    login: "Vlad",
    skills: ["HTML", "CSS", "JS", "TS"],
    isLookingForJob: true,
};
const apple = {
    id: 1,
    price: 100,
    title: 'яблоко'
};
console.log(apple.price);
const myCart = {
    product: {
        id: 1,
        price: 100,
        title: "яблоко",
    },
    quantity: 1,
};
console.log(myCart.product.price);
function calculateTotal(cart) {
    let total = 0;
    // for (const price: number of cart) {
    //   total += cart
    // }
    return total;
}
