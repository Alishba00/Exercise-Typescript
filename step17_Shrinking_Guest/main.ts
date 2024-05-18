let guest_list:string[] = ["AIMAN ","MANO ","MISBAH ","TAYYABA "];
console.log(`Unfortunately i can invite only two person`)
while(guest_list.length > 2){
    let removed_guest = guest_list.pop();
    console.log(`Sorry! ${removed_guest} I'can't invite you to dinner.`);
};
guest_list.forEach(guest_list=>{
    console.log(`${guest_list} you are still invited.`)
});

guest_list.splice(0);
 console.log(guest_list)