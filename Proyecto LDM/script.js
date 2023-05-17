function juego(eleccionUsuario) {
    var elecciones = ['piedra', 'papel', 'tijeras'];
    var eleccionComputadora = elecciones[Math.floor(Math.random() * 3)];
    var resultado = document.getElementById('resultado');

    if (eleccionUsuario === eleccionComputadora) {
        resultado.textContent = '🫥 Empate 🫥';
    } else if (
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijeras') ||
        
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionUsuario === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        resultado.textContent = '🤩 Ganaste 🤩';
    } else {
        resultado.textContent = '😵 Perdiste 😵';
    }
    manoEnemiga(eleccionComputadora);
}

function manoEnemiga(eleccionComputadora){

    var eleccion = document.getElementById('eleccion');
    if (eleccionComputadora === 'piedra'){
        eleccion.textContent = "✊";
        } else if (eleccionComputadora ==='tijeras'){
            eleccion.textContent ="✌️";
            } else {
                eleccion.textContent ="✋" ;
            }

    eleccion.classList.add('animar');
    setTimeout(function() {
        eleccion.classList.remove('animar');
    }, 2000);
}
var palabras = document.getElementsByClassName('palabra');

function mostrarPalabra(i) {
    if (i < palabras.length) {
        palabras[i].classList.add('mostrar');

        setTimeout(function() {
            palabras[i].classList.remove('mostrar');
            mostrarPalabra(i + 1);
        }, 1000);
    }
}

mostrarPalabra(0);


