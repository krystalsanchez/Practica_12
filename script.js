// Se carga el contenido del documento
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario y elementos de detalles de compra
    const form = document.getElementById('registro-form');
    const detallesCompra = document.getElementById('detalles-compra');
    const mensajeExito = document.createElement('p'); // Crear un elemento de mensaje de éxito

    // Se envía el formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const tipoEntrada = document.getElementById('tipo-entrada').value;

        // Validar campos obligatorios
        if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        // Validar formato de nombre (solo letras y espacios)
        const nombreRegex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/; 
        if (!nombreRegex.test(nombre)) {
            alert('El campo de nombre solo permite letras y espacios.');
            return;
        }

        // Mostrar detalles de compra con los datos ingresados
        document.getElementById('nombre-compra').textContent = nombre;
        document.getElementById('email-compra').textContent = email;
        document.getElementById('telefono-compra').textContent = telefono;
        document.getElementById('tipo-entrada-compra').textContent = tipoEntrada;

        // Mostrar detalles de compra y reiniciar el formulario
        detallesCompra.style.display = 'block';
        form.reset();

        // Crear corazones animados como feedback visual
        const corazones = document.createElement('div');
        corazones.className = 'corazones'; // Clase para la animación de corazones
        for (let i = 0; i < 50; i++) {
            const corazon = document.createElement('span');
            corazon.textContent = '❤'; // Corazón como emoji
            corazon.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio para la animación
            corazon.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
            corazon.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración aleatoria de la animación
            corazones.appendChild(corazon); // Agregar corazón al contenedor
        }
        form.appendChild(corazones); // Mostrar corazones en el formulario

        // Mostrar mensaje de éxito
        mensajeExito.textContent = 'Los detalles de compra se han registrado correctamente.';
        mensajeExito.style.color = 'black'; // Color del mensaje
        form.appendChild(mensajeExito); // Mostrar mensaje en el formulario
    });
});
