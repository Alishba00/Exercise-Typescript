"use strict";
let magician = ["Harry Houdini", "Penn & Teller", "David Copperfield"];
function show_magician(magician) {
    let great_magician = ["Dynamo"];
    magician.forEach(magician => {
        great_magician.push(`${magician} THE GREAT`);
    });
    return great_magician;
}
let great_magician = show_magician(magician.slice());
console.log("ORIGINAL MAGICIAN");
console.log(magician);
console.log("GREAT MAGICIAN");
console.log(great_magician);
