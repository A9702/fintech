function resultado() {
    var resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;
}
function borrarTodo() {
    document.getElementById("pantalla").value = "";
}
function mostrarNumeros(x) {
    var valor = parseInt(x);
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + valor;
}
function mostrarSignos(z){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + z ;
}
function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;



    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9\d\(\)\+\-\*\/\.\%\]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
