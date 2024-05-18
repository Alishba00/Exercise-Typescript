"use strict";
let places = ["LAHORE", "PESHAWAR", "ISLAMABAD", "RAWALPINDI"];
//original order
console.log("Original Order ", places);
//alphabetical order
console.log("Alphabetical Order ", [...places].sort());
//original order
console.log("Original Order ", places);
//reserverd alphabetical order
console.log("Reversed Alphabetical Order", places, [...places].sort().reverse());
//original order
places.reverse();
console.log("Original Order ", places);
//alphabetical 
places.sort();
console.log("Alphabetical Order", places);
//reserverd 
places.reverse();
console.log("Reservered Order ", places);
//alphabetical reserverd
places.reverse();
console.log("Reversed Alphabetical Order ", places);
