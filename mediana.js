let lista1 = [];
let mediana;

function calcularMediaAritmetica(lista){
    const listaN = Object.values(lista);
    const sumaLista = listaN.reduce({
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function addNumber(){
    const inputNumber = document.getElementById('inputNumero');
    lista1.push(Number(inputNumber.value));
}

function calcularMediana(){
    console.log(lista1)
    if(esPar(lista1.length)){
        const mitadLista1 = parseInt(lista1.length / 2);
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];

        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
    
    }else{
        mediana = lista1[mitadLista1];
    }
}



