const calificacion = 0;

let message;

switch (true) {
  case calificacion >= 0 && calificacion <= 5:
    message = "Reprobado";
    break;
  case calificacion == 6 || calificacion == 7:
    message = "Regular";
    break;
  case calificacion == 8:
    message = "Bien";
    break;
  case calificacion == 9:
    message = "Muy Bien";
    break;
  case calificacion == 10:
    message = "Excelente";
    break;
}

console.log(message);
