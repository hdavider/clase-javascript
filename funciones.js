const PI = 3.1415169
function calculaAreaCircunferencia(radio){
    let area = PI * (radio * radio);
}


function areaCircunferencia(radio1){
    const pi1 = 3.1415169;
    const resultado = pi1 * radio1 * radio1
    //console.log(resultado)
    return resultado
}

const result = areaCircunferencia(520);
console.log(result);


function mayorDeDosNumeros(ingresoUno, ingresoDos){
    if (ingresoUno > ingresoDos) {
        return ingresoUno + " es mayor que " + ingresoDos
    }   else {
        return ingresoDos + " es mayor que " + ingresoUno
    }
}

const resultado = mayorDeDosNumeros(40, 391);
console.log(resultado);

let mensaje = "Hola clase de javascript Ada School";

console.log(mensaje.length);

function containsWord(mensaje, texto){
   const resultado = mensaje.indexOf("clase");
   if(resultado){
    console.log("La palabra " + texto + " se encuentra en el mensaje")
   }
   

/*    console.log(resultado);
   console.log(texto); */
}
containsWord("Hola clase de javascript Ada School", "clase");