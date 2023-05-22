document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario
    var formulario = document.getElementById('miFormulario');
  
    // Agregar evento al enviar el formulario
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Crear elemento de cartel
      var cartel = document.createElement('div');
      cartel.classList.add('cartel');
      cartel.style.backgroundColor = 'yellow';
  
      // Crear elemento de tilde
      var tilde = document.createElement('i');
      tilde.classList.add('fas', 'fa-check');
      tilde.style.color = 'green';
  
      // Crear texto del cartel
      var texto = document.createTextNode('SU FORMULARIO SE ENVIO CORRECTAMENTE');
  
      // Agregar tilde y texto al cartel
      cartel.appendChild(tilde);
      cartel.appendChild(texto);
  
      // Agregar cartel al cuerpo del documento
      document.body.appendChild(cartel);
    });
  });
  