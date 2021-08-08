// Código del cuadrado

console.group('Cuadrados');

function perimetroCuadrado(lados){
    return lados * 4;
}  
function areaCuadrado(lados){
    return lados * lados;
} 

console.groupEnd();

// Código del triangulo

console.group('Triangulos');


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}

console.groupEnd();

// Código para circulo

console.group('Circulos');

function  diametroCirculo(radio){
    return radio * 2;
}
    
const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro =  diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}


console.groupEnd();

function alturaTriangulo(lados, base){
    return Math.sqrt(((lados **2) - (base/2)**2))
}

// Aqui interactuamos con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert('El perimétro del cuadrado es: ' + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert('El área del cuadrado es: ' + area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById('inputTriangulo');
    const lado1 = input1.value;

    const input2 = document.getElementById('inputTriangulo2');
    const lado2 = input2.value;

    const inputBase = document.getElementById('inputTrianguloBase');
    const base = inputBase.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert('El perimétro del triangulo es: ' + perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById('inputTrianguloBase');
    const base = inputBase.value;

    const inputAltura = document.getElementById('inputTrianguloAltura');
    const altura = inputAltura.value;

    const area = areaTriangulo(base, altura);
    alert('El área del cuadrado es: ' + area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById('inputCirculo');
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert('El perimétro del circulo es: ' + perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById('inputCirculo');
    const radio = input.value;

    const area = areaCirculo(radio);
    alert('El área del circulo es: ' + area);
}

function calcularAlturaIsoceles(){
    const inputLado = document.getElementById('inputLado');
    const lados = inputLado.value;

    const inputBase = document.getElementById('inputBase');
    const base = inputBase.value;

    const area = alturaTriangulo(lados, base);
    alert('La altura del Triangulo es: ' + area);
}