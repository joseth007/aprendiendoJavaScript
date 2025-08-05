// Reglas de nombres de Variables

// Letras, $, _, posteriormente se pueden usar numeros
let $miNumero1 = 10;
console.log($miNumero1); // Uso de $ al inicio

let _miNumero2 = 20;
console.log(_miNumero2); // Guiones bajos al inicio

let miNumero3 = 30;
console.log(miNumero3); // Números no pueden ir al inicio

// JavaScript es sensible a mayúsculas y minúsculas
console.log(Minumero3); // Esto causará un error porque 'Minumero3' no está definido

/*Comentarios 
en varias
lineas*/

// Tipos de datos
// Number -> Almacena valores numerocos Ej. 10 , -40, 3.9, -15.66, etc

let miEntero = 10;
console.log(miEntero);
console.log(typeof miEntero); // "number" porque es un número entero

let miFlotante  = 7.9;
console.log(miFlotante); // Ejemplo de número flotante




// String -> Almacena cadenas de texto Ej. "Hola", 'Mundo', `Texto con backticks`, etc

let miCadena = "Hola, Mundo!";
console.log(miCadena); // Uso de comillas dobles

miCadena = 'Hola de nuevo!';
console.log(miCadena); // Uso de comillas simples   

miCadena = `Hola de nuevo!`;
console.log(miCadena); // Uso de backticks

miEntero = "Hola";
console.log(miEntero); // Ahora es un string por la naturaleza dinamica de JS

// Boolean -> Almacena valores lógicos Ej. true, false

let miBooleano = true;
console.log(miBooleano); // Valor booleano verdadero

miBooleano = false;
console.log(miBooleano); // Valor booleano falso

// Null -> Representa la ausencia de valor, Ausencia de la referencia de un objeto Ej. null

let miNulo = null;
console.log(miNulo); // Valor nulo

// Undefined -> Representa una variable que ha sido declarada pero no inicializada Ej. undefined

let miIndefinido = undefined;
console.log(miIndefinido); // Valor indefinido

//typeof -> Devuelve el tipo de dato de una variable
console.log(typeof miEntero); // "string" porque fue modificado cuando se le asignó un string  ver linea 25