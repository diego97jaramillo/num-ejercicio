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
