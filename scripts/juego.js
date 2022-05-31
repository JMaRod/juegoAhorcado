var tablero = document.querySelector("canvas");
var pincel = tablero.getContext("2d");

var diccionario=[];
primerDiccionario();
var palabraJuego = palabraParaJuego();
console.log("palabra "+palabraJuego.palabra+"oo "+palabraJuego.categoria)
console.log(diccionario);

pintarTablero();

pintarBase();
pintarCabeza();
pintarCuerpo();
pintarManos();
pintarPies();

instrucciones();
pintarGuiones();
botones();
pintarLetras();






function primerDiccionario(){
    llenarDiccionario("HAMBURGUESA","comida");
    llenarDiccionario("PIZZA","comida");
    llenarDiccionario("TACOS","comida");
    llenarDiccionario("MEXICO","PAIS");
    llenarDiccionario("CHILE","PAIS");
    llenarDiccionario("PANTALONES","ROPA");
    llenarDiccionario("SUETER","ROPA");
}

function llenarDiccionario(palabra, categoria){ 
    if (diccionario.length==0){
        diccionario[0]=objetoPalabra(palabra,categoria)
    } else {
        diccionario[diccionario.length]=objetoPalabra(palabra,categoria)
    }

}

function objetoPalabra(palabra, categoria){
    var palabras={
        palabra:palabra,
        categoria:categoria
    }
    return palabras;
}

function palabraParaJuego(){
    var numero;
    if (diccionario.length==0){
        console.log("no hay palabras");
        return null
    } else {
        numero=Math.round(Math.random()*((diccionario.length-1)));
        console.log("sss"+diccionario[numero].palabra)
        return diccionario[numero];

    }
}

function pintarTablero(){
    pincel.fillStyle = "white";
    pincel.fillRect(0, 0, 1200, 800);
    pincel.fillStyle = "red";
    pincel.fillRect(50, 0, 2, 800);
    pincel.fillRect(0, 50, 1200, 2);
    pincel.fillStyle="lightblue";
    for(var i = 100; i < 800; i=i+50){
        pincel.fillRect(0, i, 1200, 2);
    }

    // pincel.fillStyle="red";
    // for(var i = 0; i < 1200; i=i+50){
    //     pincel.fillRect(i, 0, 2, 1200);
    // }
}

function pintarBase(){
    pincel.fillStyle = "brown";
    pincel.fillRect(100, 100, 250, 50);
    pincel.fillRect(135,100, 50, 500);
    pincel.fillRect(100, 550, 300, 50);
    pincel.fillStyle="yellow";
    pincel.fillRect(296, 150, 10, 50);
    pincel.fillStyle="black";
    pincel.strokeRect(296, 150, 10, 50);
    
}

function pintarCabeza(){
    pincel.strokeStyle="green";     //cabeza
    pincel.beginPath();
    pincel.arc(300, 250, 50, 0, 2*Math.PI)
    pincel.stroke();
    pincel.strokeStyle="black";
    pincel.fillStyle="yellow";      //nudo
    pincel.fillRect(293, 300, 20, 10);
    pincel.fillStyle="black";
    pincel.strokeRect(293, 300, 20, 10);
};

function pintarCuerpo(){
    pincel.fillStyle="green";       //palito
    pincel.fillRect(299, 310, 4, 130);
};

function pintarManos(){
    pincel.fillRect(225, 350, 150, 4)   //manos
}

function pintarPies(){
    pincel.strokeStyle="green"; //pie
    pincel.lineWidth=4;
    pincel.moveTo(301,440);
    pincel.lineTo(250,500)
    pincel.stroke();
    pincel.moveTo(301,440);
    pincel.lineTo(350,500)
    pincel.stroke();
}

function instrucciones(){
    pincel.font = "40px Arial"
    pincel.fillText("Elige una letra", 720, 150);
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
    pincel.font = "55px Arial";
    pincel.fillStyle = "black";

    while(indice<letras.length){
        pincel.fillText(letras[indice],ejeXRenglon,ejeY);
        ejeXRenglon+=100;
        indice++;
        parrafo++;
        if(parrafo==4){
            ejeXRenglon=ejeX-50;
            ejeY+=50;
        }
        if(parrafo==8){
            ejeXRenglon=ejeX;
            ejeY+=50;
            parrafo=0;
        }   
    }
    
}

function pintarGuiones(){
    //tamaña maximo de la palabra 18 caracteres
    var arregloPalabra = Array.from(palabraJuego.palabra);
    var ejeX=150;
    pincel.font = "55px Arial";
    pincel.fillStyle="black";

    for(var i=0; i<arregloPalabra.length; i++){
        pincel.fillRect(ejeX, 700, 40, 3);
        ejeX+=50;
    }
};

function pintarLetras(){
    var arregloPalabra = Array.from(palabraJuego.palabra);
    var ejeX=150;
    pincel.font = "55px Arial";
    pincel.fillStyle="blue";

    for(var i=0; i<arregloPalabra.length; i++){
        pincel.fillText(arregloPalabra[i],ejeX,695);
        ejeX+=50;
    }
}




