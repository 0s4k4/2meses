function mostrarTarjeta() {
    const tarjeta = document.getElementById('tarjeta');
    const textoAnimado = document.getElementById('texto-animado');
    const mensajeCompleto = `Dos meses han pasado\n\
desde que tu amor llegó a mi vida,\n\
suave, como el rumor de un río,\n\
como el primer rayo de sol en la mañana.\n\n\
No hemos apresurado el tiempo,\n\
no hay prisas en este camino,\n\
solo risas que se entrelazan,\n\
momentos que guardo como un tesoro.\n\n\
Aquí estoy, disfrutando de tu compañía,\n\
de las tardes que se alargan\n\
y las conversaciones que no tienen fin.\n\
Quiero más de esto,\n\
más de tus sonrisas,\n\
más de tus silencios cómplices,\n\
más de tu presencia que calma.\n\n\
Dos meses no son nada,\n\
pero son todo al mismo tiempo,\n\
porque contigo, el tiempo se siente ligero,\n\
como un suspiro que no quiere terminar.\n\n\
Y aunque no sé lo que el futuro guarda,\n\
sí sé que quiero más días a tu lado,\n\
más risas, más miradas,\n\
más de este hermoso comienzo.\n\
Te quiero mucho sonlla me gustas demasiado >u< mi linda polola .\n\
JyS 01-19-2025 - 03-19-2025`;

    // Mostrar la tarjeta con transición
    tarjeta.classList.add('mostrar');

    // Limpiar el texto antes de la animación
    textoAnimado.innerHTML = '';

    // Función para escribir el texto letra por letra
    let index = 0;
    function escribirTexto() {
        if (index < mensajeCompleto.length) {
            // Respetar saltos de línea y espacios
            if (mensajeCompleto[index] === '\n') {
                textoAnimado.innerHTML += '<br>';
            } else {
                textoAnimado.innerHTML += mensajeCompleto[index];
            }
            index++;
            setTimeout(escribirTexto, 50); // Velocidad de escritura (50ms por letra)
        }
    }

    // Iniciar la animación de escritura
    escribirTexto();
}

function ocultarTarjeta() {
    const tarjeta = document.getElementById('tarjeta');
    tarjeta.classList.remove('mostrar');
}
