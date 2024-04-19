// eje 1
const num1 = 45;
const num2 = 15;

console.log(num1 + num2);

// eje 2
console.log(num1 - num2);

// eje 3
console.log(num1 * num2);

// eje 4
console.log(num1/num2);

// eje 5
console.log(num1%num2);

// eje 6
const max = 10;
const min = 1;
console.log(Math.floor(Math.random() * (max - min + 1) + min));

// eje 7
console.log(Math.pow(3, 3));

// eje 8
console.log(Math.sqrt(35), Math.sqrt(25))

// eje 9
function celcToFahr( n ) {
    return ((n * 9.0 / 5.0) + 32.0);
};

console.log(celcToFahr(5));

// eje 10
function areaCir(r) {
    let area = 0;
    return area = Math.PI * Math.pow(r,2)
};

console.log(areaCir(8));

// eje 11
const perimetroCuadrado = (base, altura) => {
    return base*2+2*altura
};

console.log(perimetroCuadrado(2, 3))

// eje 12
function areaEsfera(r) {
    return 4 / 3 * Math.PI * Math.pow(r,3)
};

console.log(areaEsfera(2));


// eje 13
function areaTriangulo(base, altura) {
    return base * altura / 2
};

console.log(2,3);

// eje 14
for(i=0; i<=10; i++) {
    console.log(`${i} * 5 = ${i * 5}`)
};

// eje 15
console.log(Math.max(3,7,2));

// eje 16
console.log(Math.min(10,20,5));

// eje 17
let average = 0;
function promedio(array) {
    let suma = 0;
    for(i=0;i<array.length;i++) {
        suma += array[i];
    };
    return average = suma / array.length
};

console.log(promedio([4,6,8]));

// eje 18
function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    };

    // Recursive case
    return n * factorial(n - 1);
};

console.log(factorial(4));

// 19.Redondear el número 3.6.
console.log(Math.round(3.6));
// 20.Calcular el doble de 9.
console.log(2 * 9);
// 21.Calcular el triple de 4.
console.log(3 * 4);
// 22.Calcular el cuadrado de 6.
console.log(Math.pow(6,2));
// 23.Calcular el cubo de 3.
console.log(Math.pow(3,3));
// 24.Calcular la suma de los primeros 10 números naturales.
let suma = 0;
let sumNum = 10;
for(i=1;i<=sumNum; i++) {
    suma += i;
}

console.log(suma);
// 25.Calcular la resta entre 50 y 25.
console.log(50-25);
// 26.Multiplicar 7 por 9.
console.log(7*9);
// 27.Dividir 144 por 12.
console.log(144/12);
// 28.Obtener el módulo de 17 dividido por 4.
console.log(17%4);
// 29.Generar un número aleatorio entre 20 y 30.
const max1 = 30;
const min1 = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// 30.Elevar 2 a la potencia de 8.
console.log(Math.pow(2,8));
// 31.Calcular la raíz cuadrada de 144.
console.log(Math.sqrt(144));
// 32.Convertir 100 grados Celsius a Fahrenheit.
function celcToFahr( n ) {
    return ((n * 9.0 / 5.0) + 32.0);
};

console.log(celcToFahr(100));
// 33.Calcular el área de un rectángulo de base 5 y altura 10.
const areaRect = (base, altura) => {
    return base * altura
};

console.log(areaRect(5,10));
// 34.Calcular el perímetro de un círculo con radio 6.
function perimetroCir(r) {
    let area = 0;
    return area = Math.PI * r * 2
};
console.log(perimetroCir(6));
// 35.Calcular el volumen de un cubo con lado 4.
const volCubo = (lado) => {
    return Math.pow(lado,3)
};
console.log(volCubo(4));
// 36.Calcular el área de un rombo con diagonales de 8 y 10.
console.log(areaRombo(8,10));
// 37.Calcular el área de un trapecio con bases 6 y 10 y altura 4.
const areaTrapecio = (baseGra, baseChica, altura) => {
    return (baseChica+baseGra) * altura / 2
};
console.log(areaTrapecio(6,10,4));
// 38.Generar la tabla de multiplicar del número 8.
for(i=0; i<=10; i++) {
    console.log(`${i} * 8 = ${i * 8}`)
};
// 39.Encontrar el número mayor entre 15, 20 y 25.
console.log(Math.max(15,20,25));
// 40.Encontrar el número menor entre 50, 75 y 100.
console.log(Math.min(50,75,100));
// 41.Calcular el promedio de 7, 9 y 12.
console.log(promedio([7,9,12]));
// 42.Calcular la factorial de 7.
console.log(factorial(7));
// 43.Redondear el número 7.9.
console.log(Math.round(7.9));
// 44.Calcular el doble de 15.
console.log(2 * 15);
// 45.Calcular el triple de 6.
console.log(3 * 6);
// 46.Calcular el cuadrado de 8.
console.log(Math.pow(8,2));
// 47.Calcular el cubo de 4.
console.log(Math.pow(4,3));
// 48.Calcular la suma de los primeros 15 números naturales.
suma = 0;
sumNum = 15;
for(i=1;i<=sumNum; i++) {
    suma += i;
}

console.log(suma);
// 49.Calcular la resta entre 100 y 55.
console.log(100-55);
// 50.Multiplicar 6 por 8.
console.log(6*8);
// 51.Dividir 225 por 15.
console.log(225/15);
// 52.Obtener el módulo de 20 dividido por 7.
console.log(20%7);
// 53.Generar un número aleatorio entre 40 y 50.
const max2 = 40;
const min2 = 50;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// 54.Elevar 3 a la potencia de 4.
console.log(Math.pow(3,4));
// 55.Calcular la raíz cuadrada de 169.
console.log(Math.sqrt(169));
// 56.Convertir 80 grados Celsius a Fahrenheit.
function celcToFahr( n ) {
    return ((n * 9.0 / 5.0) + 32.0);
};

console.log(celcToFahr(80));
// 57.Calcular el área de un rectángulo de base 8 y altura 12.
console.log(areaRect(8,12));
// 58.Calcular el perímetro de un círculo con radio 8.
function perimetroCir(r) {
    let area = 0;
    return area = Math.PI * r * 2
};
console.log(perimetroCir(8));
// 59.Calcular el volumen de un cubo con lado 5.
console.log(volCubo(5));
// 60.Calcular el área de un rombo con diagonales de 12 y 16.
const areaRombo = (diagonal1, diagonal2) => {
    return diagonal1 * diagonal2 / 2
};

console.log(areaRombo(12,16));
// 61.Calcular el área de un trapecio con bases 8 y 12 y altura 6.
console.log(areaTrapecio(8,12,6));
// 62.Generar la tabla de multiplicar del número 9.
for(i=0; i<=10; i++) {
    console.log(`${i} * 9 = ${i * 9}`)
};
// 63.Encontrar el número mayor entre 25, 30 y 35.
console.log(Math.max(25,30,35));
// 64.Encontrar el número menor entre 80, 95 y 110.
console.log(Math.min(80,95,110));
// 65.Calcular el promedio de 8, 10 y 14.
console.log(promedio([10,14,8]));
// 66.Calcular la factorial de 8.
console.log(factorial(8));
// 67.Redondear el número 9.2.
console.log(Math.round(9.2));
// 68.Calcular el doble de 18.
console.log(2 * 18);
// 69.Calcular el triple de 7.
console.log(3 * 7);
// 70.Calcular el cuadrado de 10.
console.log(Math.pow(10,2));
// 71.Calcular el cubo de 5.
console.log(Math.pow(5,3));
// 72.Calcular la suma de los primeros 20 números naturales.
suma = 0;
sumNum = 20;
for(i=1;i<=sumNum; i++) {
    suma += i;
}

console.log(suma);
// 73.Calcular la resta entre 200 y 75.
console.log(200-75);
// 74.Multiplicar 9 por 11.
console.log(11*9);
// 75.Dividir 300 por 25.
console.log(300/25);
// 76.Obtener el módulo de 30 dividido por 9.
console.log(30%9);
// 77.Generar un número aleatorio entre 60 y 70.
const max3 = 70;
const min3 = 60;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// 78.Elevar 4 a la potencia de 5.
console.log(Math.pow(4,5));
// 79.Calcular la raíz cuadrada de 196.
console.log(Math.sqrt(196));
// 80.Convertir 120 grados Celsius a Fahrenheit.
function celcToFahr( n ) {
    return ((n * 9.0 / 5.0) + 32.0);
};

console.log(celcToFahr(120));
// 81.Calcular el área de un rectángulo de base 10 y altura 15.
console.log(areaRect(10,15));
// 82.Calcular el perímetro de un círculo con radio 10.
function perimetroCir(r) {
    let area = 0;
    return area = Math.PI * r * 2
};
console.log(perimetroCir(10));
// 83.Calcular el volumen de un cubo con lado 6.
console.log(volCubo(6));
// 84.Calcular el área de un rombo con diagonales de 14 y 18.
console.log(areaRombo(12,16));
// 85.Calcular el área de un trapecio con bases 10 y 15 y altura 8.
console.log(areaTrapecio(10,15,8));
// 86.Generar la tabla de multiplicar del número 10.
for(i=0; i<=10; i++) {
    console.log(`${i} * 10 = ${i * 10}`)
};
// 87.Encontrar el número mayor entre 35, 40 y 45.
console.log(Math.max(45,40,35));
// 88.Encontrar el número menor entre 90, 105 y 120.
console.log(Math.min(90,120,105));
// 89.Calcular el promedio de 9, 11 y 15.
console.log(promedio([9,11,15]));
// 90.Calcular la factorial de 9.
console.log(factorial(9));
// 91.Redondear el número 10.8.
console.log(Math.round(10.8));
// 92.Calcular el doble de 21.
console.log(2 * 21);
// 93.Calcular el triple de 8.
console.log(3 * 8);
// 94.Calcular el cuadrado de 12.
console.log(Math.pow(12,2));
// 95.Calcular el cubo de 6.
console.log(Math.pow(3,3));
// 96. Calcular la suma de los primeros 25 números naturales.
suma = 0;
sumNum = 25;
for(i=1;i<=sumNum; i++) {
    suma += i;
}

console.log(suma);