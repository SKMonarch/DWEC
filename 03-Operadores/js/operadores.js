//operadores asignacion = += -= *= /=
let a = 10;   // Asignación simple
a += 5;       // Suma y asignación (equivalente a: a = a + 5)
a -= 3;       // Resta y asignación (equivalente a: a = a - 3)
a *= 2;       // Multiplicación y asignación (equivalente a: a = a * 2)
a /= 4;       // División y asignación (equivalente a: a = a / 4)
console.log(a);  // Resultado final: 6


//operadores aritmeticos + - / % *
let x = 10;
let y = 3;

console.log(x + y);  // Suma: 13
console.log(x - y);  // Resta: 7
console.log(x * y);  // Multiplicación: 30
console.log(x / y);  // División: 3.3333
console.log(x % y);  // Módulo (resto de la división): 1

//operadores comparación  == === != !== < > <= <=
let m = 5;
let n = "5";
console.log("==========================================");
console.log(m == n);   // Igualdad (compara valor): true
console.log(m === n);  // Igualdad estricta (compara valor y tipo): false
console.log(m != n);   // Desigualdad (compara valor): false
console.log(m !== n);  // Desigualdad estricta (compara valor y tipo): true
console.log("==========================================");
console.log(m > 3);    // Mayor que: true
console.log(m < 10);   // Menor que: true
console.log(m >= 5);   // Mayor o igual: true
console.log(m <= 4);   // Menor o igual: false

//operadores lógicos && || !
let p = true;
let q = false;

console.log(p && q);   // AND lógico: false (ambos deben ser true)
console.log(p || q);   // OR lógico: true (uno de los dos debe ser true)
console.log(!p);       // NOT lógico: false (invierte el valor de p)

//precedencia operaciones
let resultado = 10 + 5 * 2;   // Primero multiplicación y luego suma
console.log(resultado);       // 20 (5*2 = 10, luego 10 + 10 = 20)

let resultado2 = (10 + 5) * 2; // Paréntesis tiene la precedencia más alta
console.log(resultado2);       // 30 (primero suma, luego multiplicación)
