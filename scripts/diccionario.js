var diccionario = [{palabra:"HAMBURGUESA",pista:"COMINDA"},
                    {palabra:"PIZZA",pista:"COMIDA"},
                    {palabra:"TACOS",pista:"COMIDA"},
                    {palabra:"MEXICO",pista:"PAIS"},
                    {palabra:"CHILE",pista:"PAIS"},
                    {palabra:"PANTALONES",pista:"ROPA"},
                    {palabra:"SUETER",pista:"ROPA"} 
                    ];

var json = sessionStorage.getItem("arreglo")
if (json != null){
    // var diccionario2 = JSON.parse(json);
    // diccionario=[...new Set(diccionario2)]
    diccionario = JSON.parse(json);
}

function llenarDiccionario(palabraNueva){ 
    var errores = validarPalabra(palabraNueva);
    if(!errores.length>0){
        añadirPalabraDiccionario(palabraNueva);
    }
    return errores;

}

function añadirPalabraDiccionario(palabraNueva){
    diccionario.push(palabraNueva);
    guardarDiccionarioSession();
}

function guardarDiccionarioSession(){
    sessionStorage.setItem("arreglo",JSON.stringify(diccionario));
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

    if(compara(palabraNueva.palabra)){
        errores.push("La palabra ya existe");
    }
    if (palabraNueva.palabra.length==0){
        errores.push("La palabra esta vacia");
    }
    if (palabraNueva.pista.length==0){
        errores.push("La pista esta vacia");
    }
    if (!patron.test(palabra)){
        errores.push("La palabra contiene caracteres no validos o letras minusculas");
    }
    if (!patron.test(pista)){
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

function compara(palabra){
    resultado=false
    for(let i=0; i<diccionario.length; i++){
        console.log(diccionario[i].palabra)
        console.log(palabra)
        if(palabra==diccionario[i].palabra)
        resultado = true;
    }
    return resultado;
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
