// funciones.js
export function palindromo(numero) {
  let original = numero;
  let invertido = 0;

  while (numero > 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor((numero - digito) / 10);
  }

  return original === invertido;
}

export function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

export function RangoNumérico(num) {
  if (num >= 1 && num <= 100) {
    return "Número válido";
  } else {
    return "Número fuera de rango";
  }
}

export function calificacion(calificacion) {
  switch (true) {
    case calificacion >= 0 && calificacion <= 5:
      return "Reprobado";
    case calificacion == 6 || calificacion == 7:
      return "Regular";
    case calificacion == 8:
      return "Bien";
    case calificacion == 9:
      return "Muy Bien";
    case calificacion == 10:
      return "Excelente";
    default:
      return "Calificación inválida";
  }
}

export function MayorDe3(num, num2, num3) {
  if (num > num2 && num > num3) {
    return "num es el mayor";
  }
  if (num2 > num && num2 > num3) {
    return "num2 es el mayor";
  }
  if (num3 > num && num3 > num2) {
    return "num3 es el mayor";
  }
  if (num == num2 && num != num3) {
    return "num y num2 son empate con el valor de: " + num;
  }
  if (num == num3 && num2 != num3) {
    return "num y num3 son empate con el valor de: " + num;
  }
  if (num2 == num3 && num != num3) {
    return "num2 y num3 son empate con el valor de: " + num2;
  }
  if (num2 == num3 && num3 == num) {
    return "todos son iguales";
  }
}

export function numeroParoImpar(num) {
  if (num % 2 == 0) {
    return "es par";
  } else {
    return "es impar";
  }
}
