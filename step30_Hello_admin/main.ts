let first_name:string[]=["admin","user1","user2","user3"]

first_name.forEach(first_name=>{
    if(first_name == "admin"){
        console.log(`Hello admin, would you like to see a status report?`)
    } else {
        console.log(`Hello Eric, thank you for logging in again.`)
    }
})