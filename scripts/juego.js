var tablero = document.querySelector("canvas");
var pincel = tablero.getContext("2d");
pintarTablero(pincel);


function pintarTablero(pincel){
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

pintarBase(pincel);

function pintarBase(pincel){
    pincel.fillStyle = "brown";
    pincel.fillRect(100, 100, 250, 50);
    pincel.fillRect(135,100, 50, 500);
    pincel.fillRect(100, 550, 300, 50);
    pincel.fillStyle="yellow";
    pincel.fillRect(296, 150, 10, 50);
    pincel.fillStyle="black";
    pincel.strokeRect(296, 150, 10, 50);
    
    pincel.strokeStyle="green";     //caebza
    pincel.beginPath();
    pincel.arc(300, 250, 50, 0, 2*Math.PI)
    pincel.stroke();
    pincel.strokeStyle="black";
    pincel.fillStyle="yellow";      //nudo
    pincel.fillRect(293, 300, 20, 10);
    pincel.fillStyle="black";
    pincel.strokeRect(293, 300, 20, 10);

    pincel.fillStyle="green";       //palito
    pincel.fillRect(299, 310, 4, 130);
    
    pincel.fillRect(225, 350, 150, 4)   //manos

    pincel.strokeStyle="green"; //pie
    pincel.lineWidth=4;
    pincel.moveTo(301,440);
    pincel.lineTo(250,500)
    pincel.stroke();
    pincel.moveTo(301,440);
    pincel.lineTo(350,500)
    pincel.stroke();

    pincel.fillStyle = "black";     //guiones
    pincel.fillRect(150, 700, 40, 3);

    pincel.font = "55px Arial";
    pincel.fillText("H", 150, 697 );

    pincel.font = "55px Arial";
    pincel.fillText("H", 200, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 250, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 300, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 350, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 400, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 450, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 500, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 550, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 600, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 650, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 700, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 750, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 800, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 850, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 900, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 950, 697 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 1000, 697 );
    
}

function instrucciones(){
    pincel.font = "40px Arial"
    pincel.fillText("Elige una letra", 720, 150);
};
instrucciones();

botones();
function botones(){ //botones letras 27
    pincel.font = "55px Arial";
    pincel.fillText("H", 700, 250 );

    pincel.font = "55px Arial";
    pincel.fillText("H", 800, 250 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 900, 250 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 1000, 250 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 650, 300 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 750, 300 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 850, 300 );
    pincel.font = "55px Arial";
    pincel.fillText("O", 950, 300 );
    
    pincel.font = "55px Arial";
    pincel.fillText("H", 700, 350 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 800, 350 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 900, 350 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 1000, 350 );

    pincel.font = "55px Arial";
    pincel.fillText("H", 650, 400 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 750, 400 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 850, 400 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 950, 400 );
    
    pincel.font = "55px Arial";
    pincel.fillText("H", 700, 450 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 800, 450 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 900, 450 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 1010, 450 );
    pincel.font = "55px Arial";
    pincel.fillText("O", 650, 500 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 750, 500 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 850, 500 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 950, 500 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 700, 550 );
    pincel.font = "55px Arial";
    pincel.fillText("H", 800, 550 );
    pincel.font = "55px Arial";
    pincel.fillText("P", 900, 550 );
    
}


