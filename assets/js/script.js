const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function updateTime() {
    const dateToday = new Date();
    const hors = formatTime(dateToday.getHours());
    const minuts = formatTime(dateToday.getMinutes());
    const segunds = formatTime(dateToday.getSeconds());

    horas.textContent = hors;
    minutos.textContent = minuts;
    segundos.textContent = segunds;

}

updateTime();

const relogio = setInterval(updateTime, 1000)