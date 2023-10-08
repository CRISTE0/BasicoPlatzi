function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada) {
    let resultado=""
    if (jugada==1) {
        resultado="Piedra ✊"
    }else if (jugada==2) {
        resultado="Papel ✋"
    }else if (jugada==3) {
        resultado="Tijera ✌" 
    }else {
        resultado="escoge una opcion valida!!!"
    }
    return resultado
}

//elecciones
let jugador=0
let pc=0
let triunfos=0
let perdidas=0

while (triunfos < 3 && perdidas < 3) {
    pc=aleatorio(1,3)
    jugador=prompt("elige : 1 piedra, 2 papel, 3 tijera")

    alert("PC ELIGE " + eleccion(pc))
    alert("TU ELIGES " + eleccion(jugador))

    // combate

    if (jugador==pc) {
        alert("EMPATE")
    }
    else if (jugador==1 && pc==3) {
        alert("GANASTE")
        triunfos = triunfos + 1
    }else if (jugador== 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1

    }else if (jugador== 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1

    }else{
    alert ("PERDISTE")
    perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces.Perdiste " + perdidas + " veces.")

