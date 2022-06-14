var palabraJuego = palabraParaJuego();
var letra
var letras=[];
var fallos=0;
var aciertos=0;
var victorias=0;

var json = sessionStorage.getItem("ganados")
if (json != 0){
    victorias = JSON.parse(json);
}

llamarTablero();
tablero.onclick = seleccionarLetra;

function llamarTablero(){
    pintarTablero();
    pintarBase();
    instrucciones();
    botones();
    pintarGuiones(palabraJuego);
    pintarPista(palabraJuego);
}

function seleccionarLetra(evento) {

    var x = evento.pageX-tablero.offsetLeft;
    var y = evento.pageY-tablero.offsetTop;
    var anchoCuadro=pasarAncho();
    var ejesX=pasarEjesX();
    var ejesY=pasarEjesY();

    if (((x>(ejesX[0]))&&(x<(ejesX[0]+anchoCuadro)))&&((y>(ejesY[0]))&&(y<(ejesY[0]+anchoCuadro)))) {
        pintarRojo(ejesX[0],ejesY[0])
        letra = "A";
        letrasUsadas("A");
    }
    if (((x>(ejesX[1]))&&(x<(ejesX[1]+anchoCuadro)))&&((y>(ejesY[0]))&&(y<(ejesY[0]+anchoCuadro)))) {
        pintarRojo(ejesX[1],ejesY[0]);
        letra = "B";
        letrasUsadas("B");
    }
    if (((x>(ejesX[2]))&&(x<(ejesX[2]+anchoCuadro)))&&((y>(ejesY[0]))&&(y<(ejesY[0]+anchoCuadro)))) {
        pintarRojo(ejesX[2],ejesY[0]);
        letra = "C";
        letrasUsadas("C");
    }
    if (((x>(ejesX[3]))&&(x<(ejesX[3]+anchoCuadro)))&&((y>(ejesY[0]))&&(y<(ejesY[0]+anchoCuadro)))) {
        pintarRojo(ejesX[3],ejesY[0]);
        letra = "D";
        letrasUsadas("D");
    }
    //cambio de renglon 
    if (((x>(ejesX[4]))&&(x<(ejesX[4]+anchoCuadro)))&&((y>(ejesY[1]))&&(y<(ejesY[1]+anchoCuadro)))) {
        pintarRojo(ejesX[4],ejesY[1]);
        letra = "E";
        letrasUsadas("E");
    }
    if (((x>(ejesX[5]))&&(x<(ejesX[5]+anchoCuadro)))&&((y>(ejesY[1]))&&(y<(ejesY[1]+anchoCuadro)))) {
        pintarRojo(ejesX[5],ejesY[1]);
        letra = "F";
        letrasUsadas("F");
    }
    if (((x>(ejesX[6]))&&(x<(ejesX[6]+anchoCuadro)))&&((y>(ejesY[1]))&&(y<(ejesY[1]+anchoCuadro)))) {
        pintarRojo(ejesX[6],ejesY[1]);
        letra = "G";
        letrasUsadas("G");
    }
    if (((x>(ejesX[7]))&&(x<(ejesX[7]+anchoCuadro)))&&((y>(ejesY[1]))&&(y<(ejesY[1]+anchoCuadro)))) {
        pintarRojo(ejesX[7],ejesY[1]);
        letra = "H";
        letrasUsadas("H");
    }
    if (((x>(ejesX[8]))&&(x<(ejesX[8]+anchoCuadro)))&&((y>(ejesY[1]))&&(y<(ejesY[1]+anchoCuadro)))) {
        pintarRojo(ejesX[8],ejesY[1]);
        letra = "I";
        letrasUsadas("I");
    }
    //cambio de renglon
    if (((x>(ejesX[0]))&&(x<(ejesX[0]+anchoCuadro)))&&((y>(ejesY[2]))&&(y<(ejesY[2]+anchoCuadro)))) {
        pintarRojo(ejesX[0],ejesY[2])
        letra = "J";
        letrasUsadas("J");
    }
    if (((x>(ejesX[1]))&&(x<(ejesX[1]+anchoCuadro)))&&((y>(ejesY[2]))&&(y<(ejesY[2]+anchoCuadro)))) {
        pintarRojo(ejesX[1],ejesY[2])
        letra = "K";
        letrasUsadas("K");
    }
    if (((x>(ejesX[2]))&&(x<(ejesX[2]+anchoCuadro)))&&((y>(ejesY[2]))&&(y<(ejesY[2]+anchoCuadro)))) {
        pintarRojo(ejesX[2],ejesY[2])
        letra = "L";
        letrasUsadas("L");
    }
    if (((x>(ejesX[3]))&&(x<(ejesX[3]+anchoCuadro)))&&((y>(ejesY[2]))&&(y<(ejesY[2]+anchoCuadro)))) {
        pintarRojo(ejesX[3],ejesY[2])
        letra = "M";
        letrasUsadas("M");
    }
    //cambio de renglon
    if (((x>(ejesX[4]))&&(x<(ejesX[4]+anchoCuadro)))&&((y>(ejesY[3]))&&(y<(ejesY[3]+anchoCuadro)))) {
        pintarRojo(ejesX[4],ejesY[3])
        letra = "N";
        letrasUsadas("N");
    }
    if (((x>(ejesX[5]))&&(x<(ejesX[5]+anchoCuadro)))&&((y>(ejesY[3]))&&(y<(ejesY[3]+anchoCuadro)))) {
        pintarRojo(ejesX[5],ejesY[3])
        letra = "Ñ";
        letrasUsadas("Ñ");
    }
    if (((x>(ejesX[6]))&&(x<(ejesX[6]+anchoCuadro)))&&((y>(ejesY[3]))&&(y<(ejesY[3]+anchoCuadro)))) {
        pintarRojo(ejesX[6],ejesY[3])
        letra = "O";
        letrasUsadas("O");
    }
    if (((x>(ejesX[7]))&&(x<(ejesX[7]+anchoCuadro)))&&((y>(ejesY[3]))&&(y<(ejesY[3]+anchoCuadro)))) {
        pintarRojo(ejesX[7],ejesY[3])
        letra = "P";
        letrasUsadas("P");
    }
    if (((x>(ejesX[8]))&&(x<(ejesX[8]+anchoCuadro)))&&((y>(ejesY[3]))&&(y<(ejesY[3]+anchoCuadro)))) {
        pintarRojo(ejesX[8],ejesY[3])
        letra = "Q";
        letrasUsadas("Q");
    }
    //cambio de renglon
    if (((x>(ejesX[0]))&&(x<(ejesX[0]+anchoCuadro)))&&((y>(ejesY[4]))&&(y<(ejesY[4]+anchoCuadro)))) {
        pintarRojo(ejesX[0],ejesY[4])
        letra = "R";
        letrasUsadas("R");
    }
    if (((x>(ejesX[1]))&&(x<(ejesX[1]+anchoCuadro)))&&((y>(ejesY[4]))&&(y<(ejesY[4]+anchoCuadro)))) {
        pintarRojo(ejesX[1],ejesY[4])
        letra = "S";
        letrasUsadas("S");
    }
    if (((x>(ejesX[2]))&&(x<(ejesX[2]+anchoCuadro)))&&((y>(ejesY[4]))&&(y<(ejesY[4]+anchoCuadro)))) {
        pintarRojo(ejesX[2],ejesY[4])
        letra = "T";
        letrasUsadas("T");
    }
    if (((x>(ejesX[3]))&&(x<(ejesX[3]+anchoCuadro)))&&((y>(ejesY[4]))&&(y<(ejesY[4]+anchoCuadro)))) {
        pintarRojo(ejesX[3],ejesY[4])
        letra = "U";
        letrasUsadas("U");
    }
    //cambio de renglon
    if (((x>(ejesX[4]))&&(x<(ejesX[4]+anchoCuadro)))&&((y>(ejesY[5]))&&(y<(ejesY[5]+anchoCuadro)))) {
        pintarRojo(ejesX[4],ejesY[5])
        letra = "V";
        letrasUsadas("V");
    }
    if (((x>(ejesX[5]))&&(x<(ejesX[5]+anchoCuadro)))&&((y>(ejesY[5]))&&(y<(ejesY[5]+anchoCuadro)))) {
        pintarRojo(ejesX[5],ejesY[5])
        letra = "W";
        letrasUsadas("W");
    }
    if (((x>(ejesX[6]))&&(x<(ejesX[6]+anchoCuadro)))&&((y>(ejesY[5]))&&(y<(ejesY[5]+anchoCuadro)))) {
        pintarRojo(ejesX[6],ejesY[5])
        letra = "X";
        letrasUsadas("X");
    }
    if (((x>(ejesX[7]))&&(x<(ejesX[7]+anchoCuadro)))&&((y>(ejesY[5]))&&(y<(ejesY[5]+anchoCuadro)))) {
        pintarRojo(ejesX[7],ejesY[5])
        letra = "Y";
        letrasUsadas("Y");
    }
    if (((x>(ejesX[8]))&&(x<(ejesX[8]+anchoCuadro)))&&((y>(ejesY[5]))&&(y<(ejesY[5]+anchoCuadro)))) {
        pintarRojo(ejesX[8],ejesY[5])
        letra = "Z";
        letrasUsadas("Z");
    }
    return letra;
}

function letrasUsadas(letra){
    var usada=false;
    if(letras==null){
        comparaLetras();
        return
    }
    for (let i=0; i<letras.length; i++){
        if(letra==letras[i]){
            usada=true;
        }
    }
    if (usada==true){
        return
    }else{
        comparaLetras(letra);
    }
    
}
function comparaLetras(letra){
    let encontrado=false;
    if (letras == null){
        letras.push(letra);
    } else {
        for (let i=0; i<letras.length; i++){
            if (letra==letras[i]){
                encontrado=true
            }
        }
    }
    if(encontrado==false){
        letras.push(letra);
    }
    comparaPalabra(letra);
    return letras;
}

function comparaPalabra(letra){
    let ExisteLetra=false;
    for(let i=0; i<palabraJuego.palabra.length; i++){
        if (letra==palabraJuego.palabra[i]){
            ExisteLetra=true;
            aciertos+=1;
        }
    }
    if(ExisteLetra==false){
        fallos+=1;
        comparaErrores();
    }else{
        pintarLetras(palabraJuego,letra);
        pruebaVictoria();
    }
}

function comparaErrores(){
    if(fallos==1){
        pintarPies();
    } 
    if(fallos==2){
        pintarCuerpo();
    }
    if(fallos==3){
        pintarManos();
        ultimoIntento();
    }
    if(fallos==4){
        pintarCabeza();
        terminar(false,palabraJuego)
    }
}

function pruebaVictoria(){
    if(aciertos==palabraJuego.palabra.length){
        terminar(true,palabraJuego);
        victorias++;
        guardarVictorias();
    }
}








