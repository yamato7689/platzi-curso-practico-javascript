const precioOriginal = 120;
const descuento = 15;
const cupones = [
    {cupon:'primeraVez', descuento: 20},
    {cupon:'inteligente2021', descuento: 25},
    {cupon:'referido2021', descuento: 30},
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precionConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precionConDescuento;
}

function obtenerDescuento(discountValue){
    return cupones.find(x => x.cupon === discountValue );
}


function calcularPrice(){

    const priceResult = document.getElementById('priceResult');
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = inputDiscount.value;

    const objectValue = obtenerDescuento(discountValue);

    if(objectValue != undefined){
        const result = calcularPrecioConDescuento(priceValue, objectValue.descuento);
        priceResult.innerHTML = 'El precio con descuento son: $' + result;
    }else if(discountValue){
        alert('Cupon invalido');
        priceResult.innerHTML = 'El precio a pagar es: $' + priceValue;
    }
    else{
        priceResult.innerHTML = 'El precio a pagar es: $' + priceValue;
    }

    

}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precionConDescuento
// });