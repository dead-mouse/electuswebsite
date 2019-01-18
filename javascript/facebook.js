alert("hello Facebook User");
let age= prompt("enter age");
let user = confirm("Are you a previous user of Facebook");
if (user==true){user="login to facebook"}
else {user="signup to facebook"}
alert(user)
let cal = (age>15) ? "you can login to facebook":"you are not eligible for facebook"
console.log(cal);
