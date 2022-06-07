var palabraJuego = palabraParaJuego();
// console.log(palabraJuego)
var letra
var letras=[];
var fallos=0;
var aciertos=0;

// function calcularAciertos(){
//     let tamañoPalabra=palabraJuego.length;
//     for(let i=0; i<palabraJuego.length; i++){

//     }
// }


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
    // console.log("x "+x);
    // console.log("y "+y);
    xMargen=xBotones;
    yMargen=yBotones;

    if (((x>700)&&(x<760))&&((y>120)&&(y<180))) {
        console.log("A")
        letra = "A";
        letrasUsadas("A");
    }
    if (((x>800)&&(x<860))&&((y>120)&&(y<180))) {
        console.log("B")
        letra = "B";
        letrasUsadas("B");
    }
    if (((x>900)&&(x<960))&&((y>120)&&(y<180))) {
        console.log("C")
        letra = "C";
        letrasUsadas("C");
    }
    if (((x>1000)&&(x<1060))&&((y>120)&&(y<180))) {
        console.log("D")
        letra = "D";
        letrasUsadas("D");
    }
    if (((x>630)&&(x<690))&&((y>190)&&(y<250))) {
        console.log("E")
        letra = "E";
        letrasUsadas("E");
    }
    if (((x>730)&&(x<790))&&((y>190)&&(y<250))) {
        console.log("F")
        letra = "F";
        letrasUsadas("F");
    }
    if (((x>830)&&(x<890))&&((y>190)&&(y<250))) {
        console.log("G")
        letra = "G";
        letrasUsadas("G");
    }
    if (((x>930)&&(x<990))&&((y>190)&&(y<250))) {
        console.log("H")
        letra = "H";
        letrasUsadas("H");
    }
    if (((x>1030)&&(x<1090))&&((y>190)&&(y<250))) {
        console.log("I")
        letra = "I";
        letrasUsadas("I");
    }
    if (((x>700)&&(x<760))&&((y>260)&&(y<320))) {
        console.log("J")
        letra = "J";
        letrasUsadas("J");
    }
    if (((x>800)&&(x<860))&&((y>260)&&(y<320))) {
        console.log("K")
        letra = "K";
        letrasUsadas("K");
    }
    if (((x>900)&&(x<960))&&((y>260)&&(y<320))) {
        console.log("L")
        letra = "L";
        letrasUsadas("L");
    }
    if (((x>1000)&&(x<1060))&&((y>260)&&(y<320))) {
        console.log("M")
        letra = "M";
        letrasUsadas("M");
    }
    if (((x>630)&&(x<690))&&((y>330)&&(y<390))) {
        console.log("N")
        letra = "N";
        letrasUsadas("N");
    }
    if (((x>730)&&(x<790))&&((y>330)&&(y<390))) {
        console.log("Ñ")
        letra = "Ñ";
        letrasUsadas("Ñ");
    }
    if (((x>830)&&(x<890))&&((y>330)&&(y<390))) {
        console.log("O")
        letra = "O";
        letrasUsadas("O");
    }
    if (((x>930)&&(x<990))&&((y>330)&&(y<390))) {
        console.log("P")
        letra = "P";
        letrasUsadas("P");
    }
    if (((x>1030)&&(x<1090))&&((y>330)&&(y<390))) {
        console.log("Q")
        letra = "Q";
        letrasUsadas("Q");
    }
    if (((x>700)&&(x<760))&&((y>400)&&(y<460))) {
        console.log("R")
        letra = "R";
        letrasUsadas("R");
    }
    if (((x>800)&&(x<860))&&((y>400)&&(y<460))) {
        console.log("S")
        letra = "S";
        letrasUsadas("S");
    }
    if (((x>900)&&(x<960))&&((y>400)&&(y<460))) {
        console.log("T")
        letra = "T";
        letrasUsadas("T");
    }
    if (((x>1000)&&(x<1060))&&((y>400)&&(y<460))) {
        console.log("U")
        letra = "U";
        letrasUsadas("U");
    }
    if (((x>630)&&(x<690))&&((y>470)&&(y<530))) {
        console.log("V")
        letra = "V";
        letrasUsadas("V");
    }
    if (((x>730)&&(x<790))&&((y>470)&&(y<530))) {
        console.log("W")
        letra = "W";
        letrasUsadas("W");
    }
    if (((x>830)&&(x<890))&&((y>470)&&(y<530))) {
        console.log("X")
        letra = "X";
        letrasUsadas("X");
    }
    if (((x>930)&&(x<990))&&((y>470)&&(y<530))) {
        console.log("Y")
        letra = "Y";
        letrasUsadas("Y");
    }
    if (((x>1030)&&(x<1090))&&((y>470)&&(y<530))) {
        console.log("Z")
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
            // console.log(letra+" "+letras[i])
            usada=true;
        }
    }
    if (usada==true){
        // console.log("muere "+usada)
        return
    }else{
        // console.log("continua "+usada)
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
    // console.log(letras);
    comparaPalabra(letra);
    return letras;
}

function comparaPalabra(letra){
    let ExisteLetra=false;
    for(let i=0; i<palabraJuego.palabra.length; i++){
        if (letra==palabraJuego.palabra[i]){
            // console.log("si hay "+palabraJuego.palabra[i])
            ExisteLetra=true;
            aciertos+=1;
        }
    }
    if(ExisteLetra==false){
        fallos+=1;
        comparaErrores();
    }else{
        // console.log("acierto")
        pintarLetras(palabraJuego,letra);
        pruebaVictoria();
    }
    // console.log(errores)
    
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






