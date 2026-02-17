// Задание 1
type Level = 'junior' | 'middle' | 'senior';
interface Developer {
  level: Level;
  login: string;
  skills: string[];
  isLookingForJob?: boolean;
}

const MeDev: Developer = {
  level: 'junior',
  login: 'Vlad',
  skills: ['HTML', 'CSS', 'JS', 'TS'],
  isLookingForJob: true,
};

//  console.log(MeDev);

// Задание 2
interface IProduct {
  id: number;
  price: number;
  title: string;
}

interface ICartEntry {
  product: IProduct;
  quantity: number;
}

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

let myCart: ICartEntry[] = [
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

myCart.push({product: { id: 3, price: 20, title: 'жвачка'}, quantity: 2})

function calculateTotal(cart: ICartEntry[]): number {
  let total: number = 0;
  for (const priceProduct of cart) {
    total += priceProduct.product.price * priceProduct.quantity
  }

  return total;
}

console.log(calculateTotal(myCart));
