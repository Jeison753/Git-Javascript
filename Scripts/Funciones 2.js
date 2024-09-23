function checkAge(age) {
    if (age < 18) {
        return confirm('¿Eres un niño?');
    } else {
        return true; // Es mayor de edad
    }
}

// Función para solicitar la edad y mostrar un alert
function askForAge() {
    const age = parseInt(prompt("¿Cuál es tu edad?"));
    
    if (checkAge(age)) {
        alert("Eres mayor de edad. Acceso permitido.");
    } else {
        alert("La edad digitada no coincide debes pedir permiso a tus padres. Acceso denegado.");
    }
}

// Llamar a la función
askForAge();
