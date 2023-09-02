// ARRAYS

let frutas = []

frutas[0] = "manzanas";
frutas[1] = "bananas";
frutas[2] = "peras";

console.log(frutas);

let frutas2 = ["platanos", "peras", "Frutillas", "Manzanas", 234, false];
/* console.log(frutas2); */

/* for (let i = 0; i < frutas2.length; i++){
    frutas2[i]
    console.log(frutas2[i]); */

    for (let i = 0; i < frutas2.length; i++){
    if (frutas2[i] === "platanos"){
        console.log("Se encuentra en el inventario " + frutas2[i]);
    }
    
}