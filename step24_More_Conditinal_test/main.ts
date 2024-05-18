let fruits = "Apple";
console.log(`Is apple is in fruit?`)
console.log(fruits.includes("Apple"))//true
console.log(`Is mango is in fruit?`)
console.log(fruits.includes("apple"))//false

console.log("Equality string test:");
console.log('If fruit is in apple?');
console.log(fruits == "Apple");
console.log("If fruit is in mango?");
console.log(fruits == "mango");

console.log("Numerical test:")
console.log(10>7);//false
console.log(10<8)//true

console.log("Different cases:");
console.log("!!UPPERCASE!!")
console.log(fruits.toUpperCase())//APPLE
console.log("!!LOWERCASE!!")
console.log(fruits.toLowerCase())//apple

console.log("TESTING OPERATORS:");
console.log(true && false);//true
console.log(true || false);//false