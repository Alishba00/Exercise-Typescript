"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Islamabad");
describe_city("Peshawar");
describe_city("Lahore");
describe_city("Paris", "France");
