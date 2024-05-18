

function createcar(model:string,manufacturer:string,...option:[string,any][]){
    let car :any = {
        model,
        manufacturer,
    };
      for (let[key,value] of option) {
            car[key]= value;
        }
         return car;
    }
 console.log(createcar("Toyota","Corolla",['Color','Red']))
 console.log(createcar("Audi","e-tron",["Color","Black"],["Year","2022"]))
