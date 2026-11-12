// Diferencia entre console.log() y return:
// console.log() muestra un valor en la consola
// return devuelve el valor de una funcion
// con return puedo guardar el resultado en una variable y usarlo despues 
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  // tu código
  return a - b;
}

function multiplicar(a, b) {
  // tu código
  return a * b;
}

function dividir(a, b) {
  // tu código
  return a / b;
}

function calcularPromedio(nota1, nota2, nota3) {
  // tu código
  const promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
}

console.log(sumar(2, 3));       // 5
console.log(restar(10, 4));     // 6
console.log(multiplicar(3, 5)); // 15
console.log(dividir(20, 4));    // 5
console.log(calcularPromedio(3, 4, 5)); // 4