"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeDev = {
    level: 'junior',
    login: 'Vlad',
    skills: ['HTML', 'CSS', 'JS', 'TS'],
    isLookingForJob: true,
};
// const apple: IProduct = {
//   id: 1,
//   price: 100,
//   title: 'яблоко',
// };
// console.log(apple.price);
// let myCartTest: ICartEntry = {
//   product: {
//     id: 1,
//     price: 100,
//     title: 'яблоко',
//   },
//   quantity: 1,
// };
// console.log(myCartTest.product.price);
let myCart = [
    {
        product: {
            id: 1,
            price: 100,
            title: 'яблоко',
        },
        quantity: 6,
    },
    {
        product: {
            id: 2,
            price: 300,
            title: 'колбаса',
        },
        quantity: 1,
    },
];
myCart.push({ product: { id: 3, price: 20, title: 'жвачка' }, quantity: 2 });
function calculateTotal(cart) {
    let total = 0;
    for (const priceProduct of cart) {
        total += priceProduct.product.price * priceProduct.quantity;
    }
    return total;
}
console.log(calculateTotal(myCart));
