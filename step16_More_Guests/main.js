var guest = ["AIMAN", "FIZA"];
console.log("GREAT NEWS!I HAVE FOUND A BIG TABLE ON DINNER AND I'M GOING TO INVITE MORE FRIEND..");
console.log(guest);
guest.push("FILZA");
// console.log(guest);
guest.unshift("MUNIBA", "RIMSHA");
// console.log(guest);
guest.splice(0, 0, "LAIBA");
// console.log(guest);
guest.forEach(function (guest) {
    console.log("".concat(guest, " WOULD YOU LIKE TO JOIN US ON DINNER?"));
});
