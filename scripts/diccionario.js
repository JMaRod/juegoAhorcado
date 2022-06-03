diccionario = [];


// console.log(diccionario)
primerDiccionario();

function primerDiccionario(){
    llenarPrimerDiccionario("HAMBURGUESA", "COMIDA");
    llenarPrimerDiccionario("PIZZA", "COMIDA");
    llenarPrimerDiccionario("", "");
    // añadirPalabraDiccionario(palabraNueva("TACOS", "COMIDA"));
    // añadirPalabraDiccionario(palabraNueva("MEXICO", "PAIS"));
    // añadirPalabraDiccionario(palabraNueva("CHILE", "PAIS"));
    // añadirPalabraDiccionario(palabraNueva("PANTALONES","ROPA"));
    // añadirPalabraDiccionario(palabraNueva("SUETER", "ROPA"));
   }

function llenarPrimerDiccionario(palabra, pista){
    var palabraNueva= new crearPalabraNueva(palabra,pista);
    // console.log(palabraNueva)
    llenarDiccionario(palabraNueva);
}

function llenarDiccionario(palabraNueva){ 
    var errores = validarPalabra(palabraNueva);
    if(errores.length>0){
        // console.log("hay errores")
    }else{
        // diccionario.push(palabraNueva);
        añadirPalabraDiccionario(palabraNueva);
    }
    return errores;

}

// function mostrarErrores(errores){
//     var h2 = document.querySelector("#mensajeErrorDiccionario");
//     ul.innerHTML="";

//     errores.forEach(function (error){
//         var li = document.createElement("li");
//         li.textContent = error;
//         ul.appendChild(li); 
//     });
        
// }

function añadirPalabraDiccionario(palabraNueva){
    // var temporalDiccionario = JSON.parse(sessionStorage.getItem("datos"));
    // temporalDiccionario.forEach(function(palabraTemporal) {
    //     diccionario.push(palabraTemporal)
    // });
    diccionario.push(palabraNueva);
    console.log("palabra "+diccionario[diccionario.length-1].palabra)
    guardarDiccionarioSession();
}

function guardarDiccionarioSession(){
    sessionStorage.setItem("datos", JSON.stringify(diccionario));
}


function crearPalabraNueva (palabra, pista) {
        this.palabra = palabra;
        this.pista = pista;
}

function validarPalabra(palabraNueva){
    var errores = [];
    var patron = /^[A-ZÑ]+$/;
    var palabra = palabraNueva.palabra;
    var pista = palabraNueva.pista;
    console.log(palabraNueva.palabra.length)
    console.log(palabraNueva.pista.length)

    if (palabraNueva.palabra.length==0){
        errores.push("La palabra esta vacia");
    }
    if (palabraNueva.pista.length==0){
        errores.push("La pista esta vacia");
    }
    if (!patron.test(palabra)){
        // console.log(("palabra "+palabra +" "+patron.test(palabra)))
        errores.push("La palabra contiene caracteres no validos o letras minusculas");
    }
    if (!patron.test(pista)){
        // console.log(("pista"+palabra +" "+patron.test(palabra)))
        errores.push("La pista contiene caracteres no validos o letras minusculas");
    }
    if (palabraNueva.palabra.length>18){
        errores.push("La palabra es muy larga");
    }
    if(palabraNueva.pista.length>18){
        errores.push("La pista es muy larga");
    }
    return errores;
}

function palabraParaJuego(){
    var numero;
    if (revisarDiccionario==false){
        return null
    } else {
        numero=Math.round(Math.random()*((diccionario.length-1)));
        return diccionario[numero];

    }
}

function revisarDiccionario(){
    if (diccionario.length>0){
        return true;
    } else {
        return false;
    }  
}

function cuantasPalabras(){
    return diccionario.length
}

console.log(diccionario)
