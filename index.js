// desafio complementario con While
// VELE VELE VELE

let entradas = 0
let dispobibles = 40;

while(dispobibles > 0){
    console.log(dispobibles);
    entradas = parseInt(prompt('Fortinero ingrese la cantidad de entradas que desea para el domingo 19:00 hs'));
    if(entradas <= 30 || entradas <= dispobibles){
        dispobibles = dispobibles - entradas;
        alert(' Ya tienes tu lugares en el Amalfitani')
    }
    else if(entradas >= 30){
        alert('Solamente se pueden reservar 30 lugares por persona dependiendo el partido')
    }
}
alert('VAMO VELEZ CARAJO')

