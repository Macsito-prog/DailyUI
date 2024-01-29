// Autor: Liam Benedetti
var boton = document.getElementById("submit");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("email");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

boton.addEventListener("click", function() {
    nombre.value = "";
    correo.value = "";
    password.value = "";
    confirm_password.value = "";
});
 
