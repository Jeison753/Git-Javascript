function checkAge(age) {
    return (age > 17) ? true : confirm('¿Tus padres te lo permitieron?');
}

// Función para solicitar la edad y mostrar un alert
function askForAge() {
    const age = parseInt(prompt("¿Cuál es tu edad?"));
    
    if (checkAge(age)) {
        alert("Acceso permitido.");
    } else {
        alert("Acceso denegado.");
    }
}

// Llamar a la función
askForAge();
