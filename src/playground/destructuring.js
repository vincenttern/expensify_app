// const person = {
//   name: "Vincent",
//   age: 26,
//   locaiton: {
//     city: "Sacramento",
//     temp: 76
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.locaiton;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
//  Array Destructuring
//

const address = ["1232 rock creek way", "Sacramento", "California", "18423"];
const [, city, state = "Los Angeles"] = address;
console.log(`You are in ${city} ${state}`);

const items = ["Coffee (hot)", "$2.00", "$2.50", "$3.00"];

const [coffeeHot, , mediumPrice] = items;
console.log(`A medium ${coffeeHot} costs ${mediumPrice}`);
