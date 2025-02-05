function actualizarContador() {
    const fechaObjetivo = new Date("2025-02-07T18:00:00+01:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador").innerHTML = "¡El evento ha comenzado!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

actualizarContador();
const intervalo = setInterval(actualizarContador, 1000);
