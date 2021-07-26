/* extraer fila */

function extraerFila(matriz, fila) {
  var e = [];
  for (var i = 0; i < matriz[0].length; i++) {
    var numero = matriz[fila][i];
    e = [...e, numero];
  }
  return e;
}

/* extraer columna */

function extraerCol(matriz, col) {
  var e = [];
  for (var i = 0; i < matriz[0].length; i++) {
    var numero = matriz[i][col];
    e = [...e, numero];
  }

  return e;
}

/* extraer diagonal  1 = diagonal principal.   2 = diagonal secundaria  */

function extraerDiag(matriz) {
  var d1 = [];
  var d2 = [];
  for (var i = 0; i < matriz[0].length; i++) {
    var numero1 = matriz[i][i];
    d1 = [...d1, numero1];
    var numero2 = matriz[2 - i][i];
    d2 = [...d2, numero2];
  }
  return d1, d2;
}

let triki = [
  [-1, -1, 0],
  [1, 1, 1],
  [0, 0, 0],
];

console.log(extraerFila(triki, 0));
console.log(extraerCol(triki, 0));
console.log(extraerDiag(triki, 2));

/* sumatoria elementos fila o columna */

function sumar(arreglo) {
  var suma = 0;
  arreglo.forEach(function (numero) {
    suma += numero;
  });
  if (suma === -3) {
    alert("Gana x");
  } else {
    alert("Gana o");
  }
  return suma;
}

console.log(sumar([5, 5, 5, 5, 5]));
