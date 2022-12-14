// se crean tres varibles constantes que no puedan cambiar y que contenga los elementos

const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

// se crean dos variables en las cuales se van a guardar los segundos

let stopwatchInterval;
let runningTime = 0;

// variable para cuando el usuario haga click la cual pregunta si esta pausado 

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
//si no esta pausado, es decir esta andando entonces lo pause
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}

const start = () => {
    // se realiza esta variable para que empieze el programa y se le indica hasta cuando tiene que ir como 
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    //los milisegundo se van a guardar running  time   
    let startTime = Date.now() - runningTime;
    //se cambiea la pausa por running 
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}


//se proporcionan los valores a recibir para poder ser ejecutados  se importa el map para calcular los segundos 
const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
//se realiza mendiante otre variable la aclarion  para que los numero no muestren el 60 y se reinicien y tambien se
//pone la parte de padstar  para que cuando ellegue a k60 segundos no se quite el cero se mantenga y reinicie a uno
    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}