"use strict";
function make_shirt(size = "large", color = "Red", message = "I Love Tyescript.") {
    console.log(`Customized a ${size} size t_sirt in ${color} color with the message is ${message}`);
}
;
make_shirt();
make_shirt("Small", "blue");
make_shirt("medium", "green", "I love JavaScript.");
