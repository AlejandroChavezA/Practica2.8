function sonAnagramas(palabra1, palabra2) {
  if (palabra1.length !== palabra2.length) return false;
  let conteo = {};
  for (let i = 0; i < palabra1.length; i++) {
    let letra = palabra1[i].toLowerCase();
    if (!conteo[letra]) {
      conteo[letra] = 1;
    } else {
      conteo[letra]++;
    }
  }
  for (let i = 0; i < palabra2.length; i++) {
    let letra = palabra2[i].toLowerCase();
    if (!conteo[letra]) {
      return false;
    } else {
      conteo[letra]--;
    }
  }
  for (let letra in conteo) {
    if (conteo[letra] !== 0) {
      return false;
    }
  }
  return true;
}
console.log(sonAnagramas("amor", "Roma"));
