// imprimirDiccionario();
// pruebaPalabra("HOLA","saludo");
// errorSinPalabras();

var botonRevisarDiccionario = document.querySelector("#revisarDiccionario")
botonRevisarDiccionario.addEventListener("click",function(event){
    // event.preventDefault();
    var palabras=cuantasPalabras();
    var h2 = document.querySelector("#mostrarErrror");
    var mensaje = document.querySelector("#mensajeError");
    h2.innerHTML="";
    mensaje.innerHTML="";
    if (revisarDiccionario()==false){
        // console.log("No hay palabras");
        h2.innerHTML="Hay un problema con el diccionario";
        mensaje.innerHTML="Consulta el administrador del sito o agrega palabras manualmente";
    } else {
        // console.log("hay palabras")
        h2.innerHTML="Tenemos un diccionario";
        mensaje.innerHTML="Actualmente hay " + palabras +" palabras";
    }
});

// function errorSinPalabras(){
//     if (revisarDiccionario()==false){
//         console.log("No hay letras");
//         var h2 = document.querySelector("#mostrarErrror");
//         h2.innerHTML="Hay un problema con el diccionario";
//         var mensaje = document.querySelector("#mensajeError");
//         mensaje.innerHTML="Consulta el administrador del sito o agrega palabras manualmente";
//     }
// }

// var botonAñadir = document.querySelector("#añadirPalabra");

// function añadir(){
    
//     var palabraAñadir = document.getElementById("palabra").value;
//     var pistaAñadir = document.getElementById("pista").value;
//     var palabraNueva =new crearPalabraNueva(palabraAñadir, pistaAñadir);
//     console.log(palabraNueva);
//     var errores = llenarDiccionario(palabraNueva);
//     console.log(errores.length > 0)
//     if(errores.length > 0){         
//         mostrarErrores(errores);
//         return;
//     }
//     // form.reset();

// }



var botonAñadir = document.querySelector("#añadirPalabra");

botonAñadir.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#formAñadir");
    // var palabraNueva =new crearPalabraNueva(form.palabra.value, form.pista.value);
    var palabraNueva = capturarDatos(form);
    console.log(palabraNueva)

    // var errores = validarPalabra(palabraNueva);
    var errores = llenarDiccionario(palabraNueva);
    if(errores.length > 0){         
        mostrarErrores(errores);
        return;
    }else{
        borrarErrores();
    }
        // llenarPrimerDiccionario(form.palabra.value, form.pista.value);
    form.reset(); //////////revisar esto

    console.log(diccionario)
        
    // var mensajesErrores = document.querySelector("#mensajesErrores");  
    // mensajesErrores.innerHTML = "";   

    // var form = document.querySelector("#formAñadir");
    // var palabraNueva = crearPalabraNueva(form.palabra.value, form.pista.value);

    // // var errores = validarPalabra(palabraNueva);
    // var errores = validarPalabra(palabraNueva);
    // if(errores.length > 0){         
    //     mostrarErrores(errores);
    // } else {
    //     llenarPrimerDiccionario(form.palabra.value, form.pista.value);
    //     form.reset(); //////////revisar esto
    // };
        
    // // var mensajesErrores = document.querySelector("#mensajesErrores");  
    // // mensajesErrores.innerHTML = "";            
});

function capturarDatos(form){
    var palabra=form.palabra.value;
    var pista=form.pista.value;
    var palabraNueva =new crearPalabraNueva(palabra, pista)
    return palabraNueva;

}


function mostrarErrores(errores){
    var ul = document.querySelector("#mensajesErrores");
    ul.innerHTML="";
    errores.forEach(function (error){
        var li = document.createElement("li");
        li.textContent=error;
        ul.appendChild(li);
    });
}

function borrarErrores(){
    var ul = document.querySelector("#mensajesErrores");
    ul.innerHTML="";
}
// function pruebaPalabra(palabra, pista){
//     // var palabra=palabra;
//     // var pista=pista;
//     if(validarPalabra(palabra,pista)){
//         llenarDiccionario(palabra,pista);
//     } else {
//         console.log("error en la palabra")
//     }
// }
// imprimirDiccionario();

// function capturarPalabra(form){   
//     //capturando los datos del formulario
//     var palabraNueva={
//         palabraNueva:form.palabra.value,
//         palabraNueva:form.pista.value
//     }
//     return palabraNueva;
// }
