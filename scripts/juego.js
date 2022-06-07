var palabraJuego = palabraParaJuego();
var letra
var letras=[];
var fallos=0;
var aciertos=0;

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
    xMargen=xBotones;
    yMargen=yBotones;

    if (((x>700)&&(x<760))&&((y>120)&&(y<180))) {
        letra = "A";
        letrasUsadas("A");
    }
    if (((x>800)&&(x<860))&&((y>120)&&(y<180))) {
        letra = "B";
        letrasUsadas("B");
    }
    if (((x>900)&&(x<960))&&((y>120)&&(y<180))) {
        letra = "C";
        letrasUsadas("C");
    }
    if (((x>1000)&&(x<1060))&&((y>120)&&(y<180))) {
        letra = "D";
        letrasUsadas("D");
    }
    if (((x>630)&&(x<690))&&((y>190)&&(y<250))) {
        letra = "E";
        letrasUsadas("E");
    }
    if (((x>730)&&(x<790))&&((y>190)&&(y<250))) {
        letra = "F";
        letrasUsadas("F");
    }
    if (((x>830)&&(x<890))&&((y>190)&&(y<250))) {
        letra = "G";
        letrasUsadas("G");
    }
    if (((x>930)&&(x<990))&&((y>190)&&(y<250))) {
        letra = "H";
        letrasUsadas("H");
    }
    if (((x>1030)&&(x<1090))&&((y>190)&&(y<250))) {
        letra = "I";
        letrasUsadas("I");
    }
    if (((x>700)&&(x<760))&&((y>260)&&(y<320))) {
        letra = "J";
        letrasUsadas("J");
    }
    if (((x>800)&&(x<860))&&((y>260)&&(y<320))) {
        letra = "K";
        letrasUsadas("K");
    }
    if (((x>900)&&(x<960))&&((y>260)&&(y<320))) {
        console.log("L")
        letra = "L";
        letrasUsadas("L");
    }
    if (((x>1000)&&(x<1060))&&((y>260)&&(y<320))) {
        letra = "M";
        letrasUsadas("M");
    }
    if (((x>630)&&(x<690))&&((y>330)&&(y<390))) {
        letra = "N";
        letrasUsadas("N");
    }
    if (((x>730)&&(x<790))&&((y>330)&&(y<390))) {
        letra = "Ñ";
        letrasUsadas("Ñ");
    }
    if (((x>830)&&(x<890))&&((y>330)&&(y<390))) {
        letra = "O";
        letrasUsadas("O");
    }
    if (((x>930)&&(x<990))&&((y>330)&&(y<390))) {
        letra = "P";
        letrasUsadas("P");
    }
    if (((x>1030)&&(x<1090))&&((y>330)&&(y<390))) {
        letra = "Q";
        letrasUsadas("Q");
    }
    if (((x>700)&&(x<760))&&((y>400)&&(y<460))) {
        letra = "R";
        letrasUsadas("R");
    }
    if (((x>800)&&(x<860))&&((y>400)&&(y<460))) {
        letra = "S";
        letrasUsadas("S");
    }
    if (((x>900)&&(x<960))&&((y>400)&&(y<460))) {
        letra = "T";
        letrasUsadas("T");
    }
    if (((x>1000)&&(x<1060))&&((y>400)&&(y<460))) {
        letra = "U";
        letrasUsadas("U");
    }
    if (((x>630)&&(x<690))&&((y>470)&&(y<530))) {
        letra = "V";
        letrasUsadas("V");
    }
    if (((x>730)&&(x<790))&&((y>470)&&(y<530))) {
        letra = "W";
        letrasUsadas("W");
    }
    if (((x>830)&&(x<890))&&((y>470)&&(y<530))) {
        letra = "X";
        letrasUsadas("X");
    }
    if (((x>930)&&(x<990))&&((y>470)&&(y<530))) {
        letra = "Y";
        letrasUsadas("Y");
    }
    if (((x>1030)&&(x<1090))&&((y>470)&&(y<530))) {
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
    console.log(aciertos)
    if(aciertos==palabraJuego.palabra.length)
    terminar(true,palabraJuego);
}






