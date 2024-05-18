//1: firstly create guest list
var guestList = ["SIR UBAID", "SIR BILAL", "MISS AREEBA", "SIR ALI AFTAB"];
console.log(guestList);
//2: removewhho can't attend the dinner
var unableGuest = "MISS AREEBA";
console.log("".concat(unableGuest, " CAN'T ATTEND THE DINNER."));
//3:replace the guest.
var newGuestList = "SIR AMEEN ALAM";
guestList[guestList.indexOf(unableGuest)] = newGuestList;
//new invitations..
guestList.forEach(function (guestList) {
    console.log("DEAR ".concat(guestList, " YOU ARE INVITED IN DINNER."));
});
