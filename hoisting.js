// Hoisting significa que podemos usar una variable y despues declararla

var x; // 1. Declaramos la variable 
x = 10; // 2. Inicializamos la variable

console.log(x); // 10

// Ahora tambien puede ser de la siguiente manera:

y = 20; // 1. Inicializamos la variable aun cuando todavia no la hemos declarado
console.log(y); // 20

var y; // 2. Declaramos la variable

/* 
Ahora si usamos let 
no podemos hacer lo mismo:
*/


a = 50; // 1. Inicializamos la variable aun cuando todavia no la hemos declarado
console.log(a); // ReferenceError: Cannot access 'a' before initialization

let a; // 2. Declaramos la variable nos da un error systax error 


// Se recomienda no usar var, usar let o const
// ya que es mejor para el mantenimiento del codigo y no da problemas de hoisting   

