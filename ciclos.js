for (let i = 0; i < 5; i++) {
    console.log("El valor de i es:" + i);
}

let i = 0
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es:" + i);
}

let i = 10
while (i > 0) {
    console.log("El valor de i es: " + i);
    i--;
}

let respuesta;

while (respuesta != 4) {
    let pregunta = prompt('¿Cuanto es 2 + 2?')
    respuesta = pregunta
}