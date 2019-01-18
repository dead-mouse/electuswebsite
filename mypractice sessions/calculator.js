alert("hello welcome to calculator ");
let nbr1 = +(prompt("enter number"));//typecasting needed caz prompt always take
let nbr2 = +prompt("enter number");//string value
let nbr3 = +prompt("enter number");
let nbr5 = +prompt("enter number");
/**console.log(`addition::
${nbr1+nbr2+nbr3}`);
console.log(`subtraction::
${nbr1-nbr2-nbr3}`);
console.log(`mux::
${(nbr1*nbr2)*nbr3}`);
console.log(nbr5);
console.log(typeof(nbr5));**/
let addition = (nbr1+nbr2+nbr3+nbr5);
let subtraction = (nbr1-nbr2-nbr3-nbr5);
let mux = (((nbr1*nbr2)*nbr3)*nbr5);
console.log("addition",addition);
console.log("subtraction",subtraction);
console.log("mux",mux);
