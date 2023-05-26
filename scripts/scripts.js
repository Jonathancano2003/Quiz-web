// Obtener los parámetros de la URL
var urlParams = new URLSearchParams(window.location.search);
var categoria = urlParams.get('categoria');

// Solicitar al usuario que ingrese su nombre
var nombre = prompt('Ingresa tu nombre:');

// Declarar las variables para almacenar las preguntas, opciones, imágenes y respuestas correctas
var preguntas, opciones, imagenes, correctasRespuestas;

// Declarar las preguntas, opciones y imágenes para cada categoría
var preguntasTecnologia = ['¿Qué es una inteligencia artificial?', '¿Qué es un "smartphone"?', '¿Qué es la "nube" en términos de tecnología?', '¿Qué significa HTML?', '¿Qué es "Wi-Fi"?'];
var opcionesTecnologia = [
  ['Interacción Avanzada', 'Inteligencia Artificial', 'Innovación Automatizada', 'Integración Analítica'],
  ['Un ordenador portátil', 'Un reproductor de música', 'Un teléfono móvil inteligente', 'Un dispositivo de almacenamiento externo'],
  ['Una red de ordenadores interconectados', 'Un sistema de almacenamiento local', 'Un modelo de almacenamiento de datos en un servidor', 'Un sistema de seguridad informática'],
  ['HyperText Markup Language', 'High-Tech Multimedia Language', 'Hyperlink Text Manipulation Language', 'Human-Technology Modeling Language'],
  ['Una tecnología de comunicación inalámbrica que permite conectar dispositivos a Internet', 'Un tipo de tarjeta de crédito', 'Una forma de acceder a la televisión por satélite', 'Un sistema de identificación personal']
];
var imagenesTecnologia = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg', '../images/5.jpg'];

var preguntasVideojuegos = ['¿Que videojuego fue goty en 2022?', '¿En qué año se lanzó el videojuego "Super Mario Bros."?', '¿Cuál es el personaje principal del videojuego "The Legend of Zelda: Ocarina of Time"?'];
var opcionesVideojuegos = [
  ['Horizon Forbidden west', 'Elden Ring', 'God of War Ragnarok', 'Stray'],
  ['1985', '1990', '1995', '2000'],
  ['Link', 'Mario', 'Sonic', 'Master Chief']
];
var imagenesVideojuegos = ['../images/6.jpg', '../images/7.jpg', '../images/8.jpg'];

var preguntasDisenoWeb = ['¿Qué es CSS?', '¿Cuál es la etiqueta para definir un encabezado de nivel 1 en HTML?', '¿Qué significa la sigla UX en diseño web?'];
var opcionesDisenoWeb = [
  ['Cascading Style Sheets', 'Common Styling System', 'Central Style Selector', 'Customized Styling Software'],
  ['<h1>', '<head>', '<header>', '<title>'],
  ['User Experience', 'Universal Export', 'Unlimited Expressions', 'Unique Expertise']
];
var imagenesDisenoWeb = ['../images/9.webp', '../images/10.jpg', '../images/11.jpg'];

var preguntasBanderas = ['¿A qué país pertenece esta bandera?', '¿A qué país pertenece esta bandera?', '¿A qué país pertenece esta bandera?'];
var opcionesBanderas = [
  ['Estonia', 'Andorra', 'Francia', 'España'],
  ['Japón', 'Canada', 'Argentina', 'Brasil'],
  ['Nigeria', 'Portugal', 'China', 'Tailandia']
];
var imagenesBanderas = ['../images/12.jpg', '../images/13.png', '../images/14.jpg'];

// Asignar las preguntas, opciones, imágenes y respuestas correctas según la categoría seleccionada
if (categoria === 'tecnologia') {
  preguntas = preguntasTecnologia;
  opciones = opcionesTecnologia;
  imagenes = imagenesTecnologia;
  correctasRespuestas = [1, 2, 2, 0, 0];
} else if (categoria === 'videojuegos') {
  preguntas = preguntasVideojuegos;
  opciones = opcionesVideojuegos;
  imagenes = imagenesVideojuegos;
  correctasRespuestas = [1, 0, 0];
} else if (categoria === 'diseno_web') {
  preguntas = preguntasDisenoWeb;
  opciones = opcionesDisenoWeb;
  imagenes = imagenesDisenoWeb;
  correctasRespuestas = [0, 0, 0];
} else if (categoria === 'banderas') {
  preguntas = preguntasBanderas;
  opciones = opcionesBanderas;
  imagenes = imagenesBanderas;
  correctasRespuestas = [2, 3, 2];
}

// Declarar variables para realizar el seguimiento de la pregunta actual y las respuestas correctas e incorrectas
var currentIndex = 0;
var correctas = 0;
var incorrectas = 0;

// Obtener referencias a los elementos HTML necesarios
var imgElement = document.querySelector('.img');
var preguntaElement = document.querySelector('.pregunta');
var opcionesElements = document.querySelectorAll('.opciones');

// Función para cambiar la pregunta actual y actualizar las opciones
function cambiarPregunta() {
  imgElement.style.backgroundImage = 'url(' + imagenes[currentIndex] + ')';
  preguntaElement.textContent = preguntas[currentIndex];

  opcionesElements.forEach(function (element, index) {
    element.textContent = opciones[currentIndex][index];
    element.setAttribute('data-opcion', index + 1);
  });
}

// Función para verificar la respuesta seleccionada por el usuario
function verificarRespuesta(respuestaSeleccionada) {
  var opcionCorrecta = correctasRespuestas[currentIndex];

  if (parseInt(respuestaSeleccionada) === opcionCorrecta + 1) {
    correctas++;
  } else {
    incorrectas++;
  }

  // Verificar si se han mostrado todas las preguntas
  if (currentIndex + 1 >= preguntas.length) {
    // Redireccionar a "respuesta.html" con los parámetros correctas, incorrectas y nombre
    window.location.href = '../pages/respuesta.html?correctas=' + correctas + '&incorrectas=' + incorrectas + '&nombre=' + encodeURIComponent(nombre);
  } else {
    // Pasar a la siguiente pregunta
    currentIndex++;
    cambiarPregunta();
  }
}

// Agregar un event listener a cada opción para verificar la respuesta seleccionada
opcionesElements.forEach(function (element) {
  element.addEventListener('click', function () {
    var opcionSeleccionada = this.getAttribute('data-opcion');
    verificarRespuesta(opcionSeleccionada);
  });
});

// Iniciar el juego mostrando la primera pregunta
cambiarPregunta();
