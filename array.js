// arreglo de 100 posiciones

function arreglo() {
    let a = []
        for (var i = 0; i < 100 ; i ++) {
          a = [...a, i]
      }
      return {
          a
      }
    }
    
    console.log(arreglo()) 





//  crear matriz

function crearMatriz(filas, colms) {
	let a = []
  let b = []
	for (var i = 0; i < filas ; i ++) {
  	b = []
  	for (var j = 0; j < colms ; j ++) {
    	b = [...b, 'X']
    }
  	a = [...a, b]
  }
  return {
  	a
  }
}


/* function matriz(filas, colms) {
  let a = []
  let b = []
  for (var i = 0; i < filas ; i ++) {
    b = []
    for (var j = 0; j < colms ; j ++) {
      b = [...b, ((i*3) + j)]
    }
    a = [...a, b]
  }
  return {
    a
  }
} */

console.log(crearMatriz(3,3)) 




function ganador() {
	let triki = [
  [-1, -1, 0], 
  [1, 1, 1], 
  [0, 0, 0]
]
	const message = '¡Ganaste!'
  if(
    triki[0][0] == triki[1][1] == triki[2][2] || 
    triki[0][0] == triki[0][1] == triki[0][2] ||
    triki[1][0] == triki[1][1] == triki[1][2] ||
    triki[2][0] == triki[2][1] == triki[2][2] ||
    triki[0][0] == triki[1][0] == triki[2][0] ||
    triki[0][1] == triki[1][1] == triki[2][1] ||
    triki[0][2] == triki[1][2] == triki[2][2]
  )
  {
  	return{ message }  
  }
}

console.log(ganador)
