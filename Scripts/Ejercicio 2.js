let a = Number(prompt("Digite un numero"));
let b = Number(prompt("Digite otro numero"));
let operacion = prompt("+,-,*,/");

switch (operacion) {
  case "+":
        alert(a + b);
            break;
  case "-":
        alert(a - b);
            break;
  case "*":
        alert(a * b);
            break;
  case "/":
        alert(a / b);
            break;
  default:
        alert('Error: operación no válida');
}
