function MayorDe3(num, num2, num3) {
  if (num > num2 && num > num3) {
    console.log("num es el mayor");
  }
  if (num2 > num && num2 > num3) {
    console.log("nun2 es el mayor");
  }
  if (num3 > num && num3 > num2) {
    console.log("nun3 es el mayor");
  }
  if (num == num2 && num != num3) {
    console.log("num y num2 son empate con el valor de: " + num);
  }
  if (num == num3 && num2 != num3) {
    console.log("num y num3 son empate con el valor de: " + num2);
  }
  if (num2 == num3 && num != num3) {
    console.log("num2 y num3 son empate con el valor de: " + num3);
  }
  if (num2 == num3 && num3 == num) {
    console.log("todos son iguales");
  }
}
const resultado = MayorDe3(4, 4, 4);
