const Animal = require('./animal');

let storage = {

    data: []

};

let a1 = new Animal(1, "Molly", "Female", "Shar Pei", 10);
let a2 = new Animal(2, "Doggo", "Male", "Chiwawa", 22);
let a3 = new Animal(3, "Zippo", "Male", "Husky", 5)

storage.data.push(a1);
storage.data.push(a2);
storage.data.push(a3);

module.exports = storage;