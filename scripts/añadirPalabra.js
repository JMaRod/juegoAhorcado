
var botonRevisarDiccionario = document.querySelector("#revisarDiccionario")
botonRevisarDiccionario.addEventListener("click",function(event){
    var palabras=cuantasPalabras();
    var h2 = document.querySelector("#existeDiccionario");
    var mensaje = document.querySelector("#cuantasPalabras");
    h2.innerHTML="";
    mensaje.innerHTML="";
    if (revisarDiccionario()==false){
        h2.innerHTML="Hay un problema con el diccionario";
        mensaje.innerHTML="Consulta el administrador del sito o agrega palabras manualmente";
    } else {
        h2.innerHTML="Tenemos un diccionario";
        mensaje.innerHTML="Actualmente hay " + palabras +" palabras";
    }
});

var botonAñadir = document.querySelector("#añadirPalabra");

botonAñadir.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#formAñadir");
    var palabraNueva = capturarDatos(form);
    var errores = llenarDiccionario(palabraNueva);
    if(errores.length > 0){         
        mostrarErrores(errores);
        return;
    }else{
        borrarErrores();
    }
    form.reset();           
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
