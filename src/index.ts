// interface User {
//   name: string;
//   age: number;
//   email?: string;
// }

import { SrvRecord } from "node:dns";

// interface ChangeRub {
//   rate?: number;
//   rubs: number;
// }

// const convertRubToUsd = (obj: ChangeRub): number => {
//   if (obj.rate) {
//     return obj.rubs / obj.rate;
//   }
//   return 0;
// }

// console.log(convertRubToUsd({ rate: 80, rubs: 8000}))

// const alex: User = {
//   name: "Alex",
//   age: 21,
//   email: 'ff@gmail.ru'
// }

// const printName = (user: User) => {
//   console.log(user.name);
// }

// printName(alex)

// interface ServerConfig {
//   readonly port: number;
//   readonly host: string;
//   status: string;
// }

// const config: ServerConfig = {
//   port: 3000,
//   host: "localhost",
//   status: "active",
// }

// config.status = "stopped";

// interface MailRecipient {
//   email: string;
//   displayName: string;
//   message: string;
// }

// const sendEmail = (user: MailRecipient) => {
//   console.log(`Hello, ${user.displayName}! Sending email to ${user.email}...`);
//   console.log(user.message);
// }

// const mail : MailRecipient = {
//   email: 'afafaf@mail.ru',
//   displayName: "Anton",
//   message: "Моё первое сообщение",
// }

// sendEmail(mail);

// type Status = 'success' | 'error' | 'loading';

// const status: Status ='success';

// interface Vehicle {
//   brand: string;
//   speed: number;
//   isSuperCar: boolean;
// }

// interface Car extends Vehicle {
//   isCabriolet: boolean;
// }

// interface Truck extends Vehicle {
//   cargoCapacity: number;
// }

// const test1: Vehicle = {
//   brand: "Audi",
//   speed: 300,
//   isSuperCar: false,
// }

// type UserName = string | null;

// interface UserInDb {
//   name: UserName;
// }

// const alex: UserInDb = {
//   name: 'Alex',
// }

// alex.name = null;

interface Enemy {
  hp: number;
  attack: number;
  name: string;
}

interface Zombie extends Enemy {
  sword: 'diamond' | 'iron';
}

interface Skeleton extends Enemy {
  bow: 'wood' | 'emerald';
}

const zombie: Zombie = {
  hp: 100,
  attack: 20,
  name: 'Zombie',
  sword: 'diamond',
}

const skeleton: Skeleton = {
  hp: 100,
  attack: 20,
  name: 'Zombie',
  bow: 'emerald',
}