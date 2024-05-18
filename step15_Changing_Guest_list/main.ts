//1: firstly create guest list
let guestList:string[]= ["SIR UBAID","SIR BILAL","MISS AREEBA","SIR ALI AFTAB"];
console.log(guestList);

//2: remove who can't attend the dinner
const unableGuest:string="MISS AREEBA";
console.log(`${unableGuest} CAN'T ATTEND THE DINNER.`);
//3:replace the guest.
let  newGuestList:string = "SIR AMEEN ALAM";
guestList[guestList.indexOf(unableGuest)] = newGuestList;

//new invitations..
guestList.forEach(guestList => {
    console.log(`DEAR ${guestList} YOU ARE INVITED IN DINNER.`)
});