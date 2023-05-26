// Esperar a que se cargue completamente el contenido del DOM
window.addEventListener('DOMContentLoaded', function() {
  // Obtener el número de respuestas correctas e incorrectas de los parámetros de la URL
  var urlParams = new URLSearchParams(window.location.search);
  var respuestasCorrectas = urlParams.get('correctas');
  var respuestasIncorrectas = urlParams.get('incorrectas');
  var nombre = urlParams.get('nombre');
  
  // Obtener referencia al elemento <p> de resultado, al elemento <h1> y al elemento de imagen
  var resultadoElement = document.getElementById('resultado');
  var mensajeElement = document.getElementById('mensaje');
  var imagenResultado = document.getElementById('imagenResultado');

  // Verificar si los valores de respuestasCorrectas y respuestasIncorrectas no son nulos
  if (respuestasCorrectas !== null && respuestasIncorrectas !== null) {
    // Actualizar el contenido del elemento <p> con los resultados
    resultadoElement.innerHTML = 'Respuestas correctas: ' + respuestasCorrectas + '<br>Respuestas incorrectas: ' + respuestasIncorrectas;

    // Verificar si hay más respuestas correctas que incorrectas y mostrar el mensaje correspondiente con la imagen
    if (parseInt(respuestasCorrectas) > parseInt(respuestasIncorrectas)) {
      mensajeElement.innerHTML = '¡Enhorabuena ' + nombre +'!';
      imagenResultado.src = '../images/enhorabuena.jpg';
    } else {
      mensajeElement.innerHTML = '¡Has perdido ' + nombre +'!';
      imagenResultado.src = '../images/muymal.jpg';
    }
  }
});
