console.info("hello javascript")
const x = 20; //to make variable constant , value can be change
var y = 30; //global declaration

let z = x + y; //not fixed variable 
console.info(z)

/*
it  else condition practice
*/
const s1 = 12000;
const s2 = 11000;
if (s1 < s2) {
    console.log("salary of first employee is lesser")
} else {
    console.log("s1 salary is greater")
}

var speciestype = "human";
if (speciestype == "human") {
    console.log("specie is human")
} else {
    console.log("species is alien")
}
/*
for loop
*/
for (let i = 1; i < 10; i++) {
    console.log("value of i=", i)
}
/*
while loop
*/
var i = 11;
while (i > 0) {
    i--;
    console.log("value of i=", i)
}
/**
 * switch case
 **/
let j = "sunday"
switch (j) {
    case "monday":
        console.log("hello monday");
        break;
    case "tuesday":
        console.log("hello tuesday");
        break;
    case "sunday":
        console.log("hello sunday");
        break;
    case "saturday":
        console.log("hello saturday");
        break;
}