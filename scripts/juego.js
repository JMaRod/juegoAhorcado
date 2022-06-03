var tablero = document.querySelector("canvas");
var pincel = tablero.getContext("2d");

var palabraJuego = palabraParaJuego();

pintarTablero();
pintarBase();
instrucciones();
botones();


pintarCabeza();
pintarCuerpo();
pintarManos();
pintarPies();


pintarGuiones();
pintarLetras();
pintarPista();

function pintarCuadros(color, origenx, origeny, extencionx, extenciony){
    pincel.fillStyle=color;
    pincel.fillRect(origenx,origeny,extencionx,extenciony);
}

function pintarMargen(color, origenx, origeny, extencionx, extenciony){
    pincel.fillStyle=color; // margen cuerda
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
    pincel.strokeStyle="green";     //cabeza
    pincel.beginPath();
    pincel.arc(300, 235, 35, 0, 2*Math.PI)
    pincel.stroke();
    pincel.strokeStyle="black";
    //nudo de cuerda
    pintarCuadros("yellow",290, 273, 20, 10);
    pintarMargen("black",290, 273, 20, 10)
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
    pintarTexto("green","40px Arial","Elige una letra",720,150);
};

function botones(){ //botones letras 27
    var letras = [  "A","B","C","D","E",
                    "F","G","H","I","J",
                    "K","L","M","N","Ñ",
                    "O","P","Q","R","S",
                    "T","U","V","W","X",
                    "Y","Z"];
    var ejeX=700;
    var ejeY=250;
    var indice=0;
    var parrafo=0;
    var ejeXRenglon=ejeX;
    var fuente = "55px Arial";

    while(indice<letras.length){
        pintarTexto("black",fuente,letras[indice],ejeXRenglon,ejeY)
        ejeXRenglon+=100;
        indice++;
        parrafo++;
        if(parrafo==4){
            ejeXRenglon=ejeX-50;
            ejeY+=50;
        }
        if(parrafo==9){
            ejeXRenglon=ejeX;
            ejeY+=50;
            parrafo=0;
        }   
    }
}

function pintarPista(){
    var pista=palabraJuego.pista;
    var fuente = "35px Arial";
    var colorTexto="rgb(30, 85, 92)";
    var colorPista="rgb(134, 22, 87)"
    pintarTexto(colorTexto,fuente,"PISTA:",150,590);
    pintarTexto(colorPista,fuente,pista,280,590);
}

function pintarGuiones(){
    //tamaña maximo de la palabra 18 caracteres
    // var arregloPalabra = Array.from(palabraJuego.palabra);
    // if (arregloPalabra!=null)
    // var ejeX=100+centrarPalabra();
    // var color="black";
    
    // for(var i=0; i<arregloPalabra.length; i++){
    //     pintarCuadros(color,ejeX, 700, 40, 3);
    //     ejeX+=50;
    // }
    if (palabraJuego!=null){
        var arregloPalabra = Array.from(palabraJuego.palabra);
        if (arregloPalabra!=null)
        var ejeX=100+centrarPalabra();
        var color="black";
        
        for(var i=0; i<arregloPalabra.length; i++){
            pintarCuadros(color,ejeX, 700, 40, 3);
            ejeX+=50;
        }
    } else {
        console.log("no hay palabra")
        pintarTexto("red","55px Arial","No hay palabras", 400, 650)
        pintarTexto("red","25px Arial","Para mas informacion, ir a la seccion añadir palabras del menu de Inicio", 200, 690)
    }
    
};

function pintarLetras(){
    var arregloPalabra = Array.from(palabraJuego.palabra);
    var ejeX=100+centrarPalabra();
    var fuente = "55px Arial";
    var color="blue";

    for(var i=0; i<arregloPalabra.length; i++){
        pintarTexto(color,fuente,arregloPalabra[i],ejeX,695);
        ejeX+=50;
    }
}

function centrarPalabra(){
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



