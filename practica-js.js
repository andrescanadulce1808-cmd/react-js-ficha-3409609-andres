// Diferencia entre console.log() y return:
// console.log() muestra un valor en la consola
// return devuelve el valor de una funcion
// con return puedo guardar el resultado en una variable y usarlo despues

// reto dos 
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

//// reto dos 
const aplicarIva = precio => precio * 1.19;
console.log(aplicarIva(100000)); // 119000

const cuadrado = numero => numero * numero;
const esMayorEdad = edad => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(cuadrado(4));                    // 16
console.log(esMayorEdad(20));                // true
console.log(esMayorEdad(15));                // false
console.log(nombreCompleto("Ana", "Pérez")); // Ana Pérez
////// reto tres 
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Mouse inalambrico', precio: 20000, categoria: 'Perifericos', stock: 8},
  { id: 5, nombre: 'Teclado inalambrico', precio: 30000, categoria: 'Perifericos', stock: 15},
  { id: 6, nombre: 'Audifonos inalambricos', precio: 25000, categoria: 'Audio', stock:24},
  { id: 7, nombre: 'Monitor 4k', precio: 1200000, categoria: 'Pantallas', stock: 2},
  { id: 8, nombre: 'Parlante bluetooth', precio: 80000, categoria: 'Audio', stock: 0},
  { id: 9, nombre: 'Parlante inalambrico', precio: 60000, categoria: 'Audio', stock: 10},
  { id: 10, nombre: 'Cargador portatil', precio: 40000, categoria: 'Accesorios', stock: 7}
];
console.log(productos.length); 
//// reto cuatro 

productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});

//// reto cinco
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

const preciosConIva = productos.map(producto => producto.precio * 1.19);
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);

console.log(nombres);
console.log(preciosConIva);
console.log(nombresMayuscula);
console.log(resumenProductos);