
var reloj = document.querySelector("#reloj");
var inicio = document.querySelector("#inicio");
var detener = document.querySelector("#detener");
var reiniciar = document.querySelector("#reiniciar");
var sec = 0;
var min = 0;
var tiempo;
var apretado=false;

var json = sessionStorage.getItem("tiempo")
if (json != 0){
    min = JSON.parse(json);
}

function guardarTiempo(){
    sessionStorage.setItem("tiempo",JSON.stringify(min));
}


function segundero(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
}
function actualizar() {
    segundero();
    reloj.textContent = (min > 9 ? min : "0" + min) 
        	 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}

function iniciarReloj(){
    if(apretado==false){
        apretado=true;
        timer();
    }
}

function timer() {
    tiempo=setTimeout(actualizar, 1000);
   
}

function stop(){
    clearTimeout(tiempo);
    apretado=false;
}

function reset(){ 
    reloj.textContent = "00:00";
    seconds = 0; minutes = 0; hours = 0;
    apretado=false;
    sec=0; min=0; 
    stop();
}

function otraPalabra(){
    guardarTiempo();

}

function imprimirTiempo(){
    console.log(tiempo)
}imprimirTiempo();
