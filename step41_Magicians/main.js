"use strict";
let magician = ["Harry Houdini", "Penn & Teller", "David Copperfield", "Dynamo"];
console.log(magician);
function show_magician(mangician_Name) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magician);
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + "THE GREAT";
    }
}
make_great(magician);
show_magician(magician);
