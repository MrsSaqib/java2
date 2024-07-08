// question 1
let city = prompt("Enter your city name");
city = city.toLowerCase();
if (city === 'karachi') {
    alert('Welcome to city of lights');
}

// question 2
let gender = prompt('Enter your gender');
gender = gender.toLowerCase();
if (gender === 'male') {
    alert('Good Morning Sir');
} else if (gender === 'female') {
    alert('Good Morning Mam');
}

// question 3
let signal = prompt('Enter signal color');
if (signal === 'red') {
    alert('Must Stop');
} else if (signal === 'yellow') {
    alert('Ready to move');
} else if (signal === 'green') {
    alert('Move now');
} else {
    alert('Invalid color');
}

// question 4
let fuel = prompt('Enter remaining fuel in car');
if (fuel < '0.25 litres') {
    alert('Please refill the fuel in your car');
} else {
    alert('Continue your journey');
}

// question 5
let a = 4;
if (++a === 5) {
    alert("givencondition for variable a is true");
}
// this is correct

let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// this is false

let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
// condition 2 and 4 is true


let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// condition is correct

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// this is true


if ("car" < "cat") {
    alert("car is smaller than cat");
}
// this is correct

// question 8
    let number = prompt('Enter any Number');

    if (number % 3 === 0) {
      console.log("The number is divisible by 3.");
    } else {
      console.log("The number is not divisible by 3.");
    }
  
    // question 9
    let num = prompt('Enter the number');
    if (number % 2 === 0) {
        console.log("The number is even.");
      } else {
        console.log("The number is odd.");
      }

// question 10
let temperature = prompt('Enter the current temperature');
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("The temperature is very low.");
}

// question 11
let num1 = prompt('Enter first number of your choice');
let num2 = prompt('Enter second number of your choice');
alert(Number(num1) + Number(num2));
alert(Number(num1) - Number(num2));
alert(Number(num1) * Number(num2));
alert(Number(num1) / Number(num2));
alert(Number(num1) % Number(num2));