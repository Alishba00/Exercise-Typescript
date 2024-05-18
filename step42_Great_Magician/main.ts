//last work of question no:41
let magician:string[]=["Harry Houdini","Penn & Teller","David Copperfield","Dynamo"]
console.log(magician);

function show_magician(mangician_Name:string[]){
    magician.forEach(magician =>{
        console.log(magician)
    })
}
show_magician(magician);
//Question no 42
function make_great(magician:string[]){
    for(let i = 0 ; i < magician.length ; i++){
        magician[i]= magician[i] + "THE GREAT";
    }
}
console.log(`"Magician name with THE GREAT!!"`)
make_great(magician)
show_magician(magician);
