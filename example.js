// const age = 8
// const id = false
// const palanca = true

// if ((age >= 18 && id === true) || palanca === true) {
//   console.log('Puede pasar')
//     }
// else {
//     console.log('No puede pasar')
//     }

// let dormamu_se_rindio = false
// let i = 1
// while (dormamu_se_rindio === false,   i++) {
//     console.log('no se rindio en el intento: '    + i)
// }

// const num = 11

// if (num % 2 == 0) {
//   console.log('es par')
// }
// else {
//   console.log('es impar')
// }
const num = 11;
const num2 = 13;
const num3 = 13;

if (num > num2 && num > num3) {
  console.log("num es el mayor");
}
if (num2 > num && num2 > num3) {
  console.log("nun2 es el mayor");
}
if (num3 > num && num3 > num2) {
  console.log("nun3 es el mayor");
}
if (num == num2) {
  console.log("num y num2 son empate");
}
if (num == num3) {
  console.log("num y num3 son empate");
}
if (num2 == num3) {
  console.log("num2 y num3 son empate");
}



function palindromo(numero) {
  let original = numero;
  let invertido = 0;

  while (numero > 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }

  return original === invertido;
}

const resultado = palindromo(101);
console.log(resultado);
