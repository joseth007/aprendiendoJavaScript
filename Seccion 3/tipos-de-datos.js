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
console.log(typeof miFlotante); // "number" porque es un número flotante

// String -> Almacena cadenas de texto Ej. "Hola", 'Mundo', `Texto con backticks`, etc

let miCadena = "Hola, Mundo!";
console.log(miCadena); // Uso de comillas dobles
console.log(typeof miCadena); // "string" porque es una cadena de texto

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
console.log(typeof miBooleano); // "boolean" porque es un valor lógico

// Null -> Representa la ausencia de valor, Ausencia de la referencia de un objeto Ej. null

let miNulo = null;
console.log(miNulo); // Valor nulo
console.log(typeof miNulo); // "object" (esto es un comportamiento histórico de JavaScript)


// Undefined -> Representa una variable que ha sido declarada pero no inicializada Ej. undefined

let miIndefinido = undefined;
console.log(miIndefinido); // Valor indefinido
console.log(typeof miIndefinido); // "undefined"

//typeof -> Devuelve el tipo de dato de una variable
console.log(typeof miEntero); // "string" porque fue modificado cuando se le asignó un string  ver linea 25


// CONSTANTES
const MI_CONSTANTE = 3.1416; // Convención de usar mayúsculas para constantes
console.log(MI_CONSTANTE); // Imprime el valor de la constante

MI_CONSTANTE = 20; // Esto causará un error porque no se puede reasignar una constante
console.log(MI_CONSTANTE); // TypeError: Assignment to constant variable

console.log(Math.PI); // Imprime el valor de PI de la biblioteca Math, que es una constante en JavaScript

// Constante de segundos x minuto
const SEGUNDOS_POR_MINUTO = 60;
console.log(SEGUNDOS_POR_MINUTO); // Imprime 60
console.log(segundos_por_minuto); // ReferenceError: segundos_por_minuto is not defined, porque las constantes son sensibles a mayúsculas y minúsculas
