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

const apple: IProduct = {
  id: 1,
  price: 100,
  title: 'яблоко',
};
console.log(apple.price);

let myCartTest: ICartEntry = {
  product: {
    id: 1,
    price: 100,
    title: 'яблоко',
  },
  quantity: 1,
};
console.log(myCartTest.product.price);



function calculateTotal(cart: ICartEntry[]): number {
  let total: number = 0;
  // for (const price: number of cart) {
  //   total += cart
  // }

  return total;
}

console.log();
