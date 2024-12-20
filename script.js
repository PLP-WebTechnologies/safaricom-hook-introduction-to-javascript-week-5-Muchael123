
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Coding", "Hiking"];
let person = { name: "John", age: 25 };

console.log("Name:", name, "(Type:", typeof name, ")");
console.log("Age:", age, "(Type:", typeof age, ")");
console.log("Is student:", isStudent, "(Type:", typeof isStudent, ")");
console.log("Hobbies:", hobbies, "(Type:", typeof hobbies, ")");
console.log("Person:", person, "(Type:", typeof person, ")");

function calculate() {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  let operation = document.getElementById("operation").value;
  let result;

  if (operation === "+") {
    result = firstNumber + secondNumber;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
  } else {
    result = "Invalid operation.";
  }

  document.getElementById("calc-result").textContent = "Result: " + result;
}


function greetUserInput() {
  let userName = document.getElementById("userName").value;
  let greetingMessage = greetUser(userName);
  document.getElementById("greeting").textContent = greetingMessage;
}

function greetUser(name) {
  return "Hello, " + name + "! Welcome to the JavaScript world!";
}

function checkVotingEligibility() {
  let age = parseInt(document.getElementById("age").value);
  let eligibilityMessage = "";

  if (age >= 18) {
    eligibilityMessage = "You are eligible to vote!";
  } else {
    eligibilityMessage = "Sorry, you are not eligible to vote yet.";
  }

  document.getElementById("voting-eligibility").textContent = eligibilityMessage;
}

let ol = document.getElementById("number-list");

for (let i = 1; i <= 10; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  ol.appendChild(li);
}


document.querySelector("h1").textContent = "JavaScript in Action!";


let dynamicDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
