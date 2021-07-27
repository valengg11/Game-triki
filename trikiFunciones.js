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

function extraerDiag(matriz, diag) {
  var e = [];
  if (diag == 1) {
    for (var i = 0; i < matriz[0].length; i++) {
      var numero = matriz[i][i];
      e = [...e, numero];
    }
  } else {
    for (var i = 0; i < matriz[0].length; i++) {
      var numero = matriz[matriz.length - i][i];
      e = [...e, numero];
    }
  }
  return e;
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
  return suma;
}

console.log(sumar([5, 5, 5, 5, 5]));
