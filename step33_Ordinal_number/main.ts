//use suffix for making ordinal number.
let number:number[]=[1,2,3,4,5,6,7,8,9];
number.forEach(number =>{
    let suffix = "th";
    if(number == 1){
        suffix = "st"
    };
     if(number == 2){
      suffix = "nd"
     }; 
     if(number == 3){
        suffix = "rd"
    }
    console.log(`${number}${suffix}`)
});