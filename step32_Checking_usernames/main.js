"use strict";
//arrray of current_user.
let current_user = ["Alishba", "Atiqa", "Tayyaba", "Ali", "Hamza"];
//array of new_user
let new_user = ["Areeba", "Aiman", "Fiza", "ali", "Hamza"];
//loop through new_user to check the usernames availability
//somefunction => when we have to compare two arrays use some
new_user.forEach(new_one_user => {
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry! ${new_one_user} is already taken.`);
    }
    else {
        console.log(`This username ${new_one_user} is available.`);
    }
});
