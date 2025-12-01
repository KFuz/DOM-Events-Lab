let num1 = null;
let num2 = null;
let signs = null;

let numbers = document.querySelectorAll(".number");
let signButtons = document.querySelectorAll(".operator");
let equalsButton = document.querySelector(".equals");
let display = document.querySelector(".display");

for (let btn of numbers) {
  btn.addEventListener("click", function () {
    if (signs === null) {
      if (num1 === null) {
        num1 = btn.textContent;
      } else {
        num1 = num1 + btn.textContent;
      }
      display.textContent = num1;
    } else {
      if (num2 === null) {
        num2 = btn.textContent;
      } else {
        num2 = num2 + btn.textContent;
      }
      display.textContent = num2;
    }
  });
}

for (let operation of signButtons) {
  operation.addEventListener("click", function () {
    if (operation.textContent === "C") {
      num1 = null;
      num2 = null;
      signs = null;
      display.textContent = "";
    }

    if (operation.textContent === "+") {
      signs = "+";
    }

    if (operation.textContent === "-") {
      signs = "-";
    }

    if (operation.textContent === "*") {
      signs = "*";
    }

    if (operation.textContent === "/") {
      signs = "/";
    }
  });
}

equalsButton.addEventListener("click", function () {
  if (num1 !== null && num2 !== null && signs !== null) {
    if (signs === "+") {
      display.textContent = Number(num1) + Number(num2);
      num1 = Number(num1) + Number(num2);
    }
    if (signs === "-") {
      display.textContent = Number(num1) - Number(num2);
      num1 = Number(num1) - Number(num2);
    }
    if (signs === "*") {
      display.textContent = Number(num1) * Number(num2);
      num1 = Number(num1) * Number(num2);
    }
    if (signs === "/") {
      display.textContent = Number(num1) / Number(num2);
      num1 = Number(num1) / Number(num2);
    }

    num2 = null;
    signs = null;
  }
});



// ██╗████████╗  ░██╗░░░░░░░██╗░█████╗░██████╗░██╗░░██╗░██████╗██╗██╗
// ██║╚══██╔══╝  ░██║░░██╗░░██║██╔══██╗██╔══██╗██║░██╔╝██╔════╝██║██║
// ██║░░░██║░░░  ░╚██╗████╗██╔╝██║░░██║██████╔╝█████═╝░╚█████╗░██║██║
// ██║░░░██║░░░  ░░████╔═████║░██║░░██║██╔══██╗██╔═██╗░░╚═══██╗╚═╝╚═╝
// ██║░░░██║░░░  ░░╚██╔╝░╚██╔╝░╚█████╔╝██║░░██║██║░╚██╗██████╔╝██╗██╗
// ╚═╝░░░╚═╝░░░  ░░░╚═╝░░░╚═╝░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚═╝╚═╝