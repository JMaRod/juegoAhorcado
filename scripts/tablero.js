var tablero = document.querySelector("canvas");
var pincel = tablero.getContext("2d");
var letra = null;
var xBotones=700;
var yBotones=120;
var anchoCuadro=60;
var ejesX=[(xBotones),(xBotones+100),(xBotones+200),(xBotones+300),(xBotones-70),(xBotones+30),(xBotones+130),(xBotones+230),(xBotones+330)]
var ejesY=[(yBotones),(yBotones+70),(yBotones+140),(yBotones+210),(yBotones+280),(yBotones+350)];

function pasarOrigen(){
    var coordenadas={
        x:xBotones,
        y:yBotones,
    }
    return coordenadas;
}

function pasarAncho(){
    return anchoCuadro;
}

function pasarEjesX(){
    return ejesX;
}

function pasarEjesY(){
    return ejesY;
}

function pintarCuadros(color, origenx, origeny, extencionx, extenciony){
    pincel.fillStyle=color;
    pincel.fillRect(origenx,origeny,extencionx,extenciony);
}

function pintarMargen(color, origenx, origeny, extencionx, extenciony){
    pincel.strokeStyle=color; // margen cuerda
    pincel.lineWidth=3;
    pincel.strokeRect(origenx,origeny,extencionx,extenciony);
}

function pintarTablero(){
    pintarCuadros("white", 0,0,1200,800);
    pintarCuadros("red",50, 0, 2, 800);
    pintarCuadros("red",0, 50, 1200, 2)
    for(var i = 100; i < 800; i=i+50){
        pintarCuadros("lightblue",0, i, 1200, 2);
    }
}

function pintarTexto(color, fuente,texto, ejex, ejey){
    pincel.fillStyle=color;
    pincel.font = fuente;
    pincel.fillText(texto, ejex, ejey);
};

function pintarBase(){
    pintarCuadros("brown",100, 100, 250, 50);
    pintarCuadros("brown",135,100, 50, 400);
    pintarCuadros("brown",100, 450, 300, 50);
    pintarCuadros("yellow",296, 150, 10, 50);
    pintarMargen("black",296, 150, 10, 50);
    
}

function pintarCabeza(){
    pintarCuadros("yellow",290, 273, 20, 10);
    pintarMargen("black",290, 273, 20, 10);
    pincel.strokeStyle="green";     //cabeza
    pincel.beginPath();
    pincel.arc(300, 235, 35, 0, 2*Math.PI)
    pincel.stroke();
    //nudo de cuerda
};

function pintarCuerpo(){
    pintarCuadros("green",297, 283, 4, 80);
};

function pintarManos(){
    pintarCuadros("green",225, 300, 150, 4);
}

function pintarPies(){
    pincel.strokeStyle="green"; //pie
    pincel.lineWidth=4;
    pincel.moveTo(299,360);
    pincel.lineTo(250,430)
    pincel.stroke();
    pincel.moveTo(299,360);
    pincel.lineTo(350,430)
    pincel.stroke();
}

function instrucciones(){    
    pintarTexto("green","40px Arial","Elige una letra",720,100);
}

function botones(){
    var letras = [  "A","B","C","D","E",
                    "F","G","H","I","J",
                    "K","L","M","N","??",
                    "O","P","Q","R","S",
                    "T","U","V","W","X",
                    "Y","Z"];
    var indice=0;
    var fuente = "55px Arial";
    var ejx=0;
    var ejy=0;
    var ejeXLetras=5;
    var ejesYLetras=50;

    while (indice<letras.length){
        pintarCuadros("green",ejesX[ejx],ejesY[ejy],anchoCuadro,anchoCuadro);
        pintarTexto("black",fuente,letras[indice],((ejesX[ejx])+ejeXLetras),((ejesY[ejy])+ejesYLetras))
        ejx++;
        if(ejx==4){
            ejy++
        }
        if(ejx==ejesX.length){
            ejx=0;
            ejy++;
        }
        indice++;
    }
}

function pintarRojo(x,y){
    pintarCuadros("red",x,y,anchoCuadro,anchoCuadro);
}

function pintarGuiones(palabraJuego){
    if (palabraJuego!=null){
        var arregloPalabra = Array.from(palabraJuego.palabra);
        if (arregloPalabra!=null)
        var ejeX=100+centrarPalabra(palabraJuego);
        var color="black";
        
        for(var i=0; i<arregloPalabra.length; i++){
            pintarCuadros(color,ejeX, 700, 40, 3);
            ejeX+=50;
        }
    } else {
        pintarTexto("red","55px Arial","No hay palabras", 400, 650)
        pintarTexto("red","25px Arial","Para mas informacion, ir a la seccion a??adir palabras del menu de Inicio", 200, 690)
    }
}

function pintarPista(palabraJuego){
    var pista=palabraJuego.pista;
    var fuente = "35px Arial";
    var colorTexto="rgb(30, 85, 92)";
    var colorPista="rgb(134, 22, 87)"
    pintarTexto(colorTexto,fuente,"PISTA:",150,590);
    pintarTexto(colorPista,fuente,pista,280,590);
}

function centrarPalabra(palabraJuego){
    var ejeX=0;
    var longitudPalabra=palabraJuego.palabra.length;
    if(longitudPalabra%2==0){
        longitudPalabra/=2;
    }else{
        longitudPalabra=Math.floor(longitudPalabra/2);
    }
    ejeX=(10-longitudPalabra)*50
    return ejeX;
}

function pintarLetras(palabraJuego,letra){
    var arregloPalabra = Array.from(palabraJuego.palabra);
    let indice=arregloPalabra.indexOf(letra);
    var ejeX=100+centrarPalabra(palabraJuego);
    var fuente = "55px Arial";
    var color="blue";

    while(indice != -1){
        pintarTexto(color,fuente,letra,((indice*50)+ejeX),695)
        indice=arregloPalabra.indexOf(letra, indice + 1)
    }    
}

function ultimoIntento(){
    var fuente = "35px Arial";
    var color = "red"
    let ejeX = 720;
    let ejeY = 590;
    pintarTexto(color, fuente, "Ultima oportunidad", ejeX, ejeY);
}

function terminar(estado, palabraJuego){
    var fuente = "35px Arial";
    var color="red";
    let texto=", la palabra era: ";
    pincel.clearRect(0, 0, 1200, 800);
    pintarTablero();
    if(estado==true){
        pintarBase();
        pintarTexto(color, fuente, "Ganaste"+texto, 700, 300);
        pintarTexto("green", fuente, palabraJuego.palabra, 700, 400);
    } else {
        pintarBase();
        pintarCabeza();
        pintarCuerpo();
        pintarManos();
        pintarPies();
        pintarTexto(color, fuente, "Perdiste"+texto, 700, 300);
        pintarTexto("green", fuente, palabraJuego.palabra, 700, 400);
    }
}
