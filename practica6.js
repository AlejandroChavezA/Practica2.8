function palindromo(numero) {
  let original = numero;
  let invertido = 0;

  while (numero > 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = (numero - digito) / 10;
  }

  return original === invertido;
}

const resultado = palindromo(41);
console.log(resultado);
