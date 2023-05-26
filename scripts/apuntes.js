// Variables 
// var numero1 = 5;  esta variable es tiene mas alcance 
// let numero 2 = 6; esta variable tiene menos alcance
// const numero3 =8;  esta variable no se puede modificar 




// and or not 
// let valor = true;
// let valor2 =true;

// let resultado = valor && valor2; si se cumnolen es verdadero  

// let resultado2 = valor || valor2; si cualquiera de las dos es verdadera devuelve true 

// let resultado3 = !valor; Regresa lo contrario si es false devuelve true 
// solo funciona con valores logicos 

// Condicionales 
// Sentencia que nos permite ejecutar algo 

// {
//Todo loque esta aqui adentro es un bloque se ejecuta si algo es true
// }

// if (True){
//     alert("hola")
// }

// var nombre = "jonathan"

// if (nombre == "juan") {
//     alert("Hola " + nombre)

// } else if (nombre == "jonathan") {
//     alert("tu nombre es " + nombre)
// } else{
//     alert("tu nombre es otro ")
// }



// dineroCofla = prompt("Cuanto dinero tiene cofla? ")
// dineroRoberto = prompt("Cuanto dinero tiene Roberto? ")
// dineroPedro = prompt("Cuanto dinero tiene Pedro? ")

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
//     alert("comprate el helado de agua ")
// }
// else if (dineroCofla >= 1 && dineroCofla < 1.6) {
//     alert("Comprate el helado de crema")
// }
// else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
//     alert("Comprate el elado de heladix")
// }
// else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
//     alert("Comprate el elado de heladovich")
// }
// else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
//     alert("Comprate el helardo ")
// }
// else if (dineroCofla >= 2.9) {
//     alert("Comprate el helado confite o el pote de 1/4kg")
// }
// else {
//     alert("No te llega para nada Cofla")
// }





// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
//     alert("comprate el helado de agua ")
// }
// else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
//     alert("Comprate el helado de crema")
// }
// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
//     alert("Comprate el elado de heladix")
// }
// else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
//     alert("Comprate el elado de heladovich")
// }
// else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
//     alert("Comprate el helardo ")
// }
// else if (dineroRoberto >= 2.9) {
//     alert("Comprate el helado confite o el pote de 1/4kg")
// }
// else {
//     alert("No te llega para nada Roberto")
// }



// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//     alert("comprate el helado de agua ")
// }
// else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//     alert("Comprate el helado de crema")
// }
// else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
//     alert("Comprate el elado de heladix")
// }
// else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
//     alert("Comprate el elado de heladovich")
// }
// else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//     alert("Comprate el helardo ")
// }
// else if (dineroPedro >= 2.9) {
//     alert("Comprate el helado confite o el pote de 1/4kg")
// }
// else {
//     alert("No te llega para nada Pedro")
// }




// Para hacer array se tienen que poner []

// let frutas = ["Manzana","Platano","Pera"];

// document.write(frutas[1]);


// let pc={
//     nombre:"Jonathan",
//     procesador:"Ryzen 5",
//     ram:"16GB",
//     memoria:"3tb"
// };

// let nombre= pc["nombre"];
// let procesador=pc["procesador"];

// frase=`el nombre del pc es: ${nombre} <br> el procesador es ${procesador}`;
// document.write(frase);



// BUcles e iteracion
// EL while pregunta  siempre hasta que la condicion sea falsa 

// let numeroParaSumar =0;
// while (numeroParaSumar < 10){
//     numeroParaSumar++;
//     document.write(numeroParaSumar);


// }



// let numero =0;
// while(numero <100){
//     numero++;
//     document.write(numero); 
// if (numero==10){                    el break sirve para bloquear parar el bucle cuando se cympla una condicion 
//         break
//     }
// }
// document.write("fin")



// sentencia for  for in for of 
// declaracion e inicialicacion condicion aumento y decremento 

// for(let i=prompt("mensaje"); i>=0;i--){
// document.write(i+"<br>");
// }

// el continue sirve para saltar algo en este caso se salta si i es igual a 3 
// sirve para pasar a la  siguiente interaccion 



// for (let i =0;i< 5 ;i++){
// if (i==3){
// continue;
// }
// document.write(i);
// }

// let animales = ["gato","perro","lobo"];
// animales.Tamaño=20;
// // in nos muestra su posicion en el indice 
// for (animal in animales){
//     document.write(animal + "<br>");

// }

// document.write("<br>");
// // of nos muestra que objeto hay
// for(animal of animales){
//     document.write(animal + "<br>");
// }

// document.write(animales.Tamaño)

// array1 = ["maria", "juana", "luisa"]
// array2 = ["pedro", "luis", "carlos"]

// for (array in array2) {
//     if (array == 2) {
//         for (let array of array1) {
//             document.write(array)
//         }

//     } else { document.write(array2[array]) }


// }


// Funciones

// let respuesta = prompt("introduce algo aquí ")

// if (respuesta =="bien"){
//     alert("bien");
// }else{
//     alert("mal");
// }


// function saludar (){
//     let respuesta = prompt("introduce algo aquí ")

// if (respuesta =="bien"){
//     alert("bien");
// }else{
//     alert("mal");
// }
// } 

// saludar()

// Las funciones se crean pero no se ejecutan hasta que nosotros no lo necesitemos como en el ejemplo anterior

// function saludar (){
//     alert("hola")
//     return "la función se ejecuto correctamente"
//    }

// let saludo = saludar();

// document.write(saludo)

// PARAMETROS

// function suma(num1, num2) {
//     if(isNaN(num1) || isNaN(num2)) {
//       alert("Al menos uno de los números ingresados no es válido");
//     } else {
//       let resultado = num1 + num2;
//       alert("Tu resultado es: " + resultado);
//     }
//   }

//   suma(parseInt(prompt("Ingrese el número 1:")), parseInt(prompt("Ingrese el número 2:")));

// function saludar(nombre){
//     let frase = `hola ${nombre} como estas`;
//     document.write(frase)
// }

// saludar(prompt("hola por favor ingresa tu nombre")) 



// const saludar =function (nombre){ 
//     let frase = `hola ${nombre} como estas`;
//     document.write(frase)
// }

// SOLUCION FIESTA EDAD
// function permiso(edad, hora){
//     if (edad>=18){
//         if(hora>=2){
//             alert("Puedes pasar gratis porque son más de las 2.");
//         } else {
//             alert("Puedes pasar pagando.");
//         }
//     } else {
//         alert("No puedes pasar, lo siento.");
//     }
// }

// const edadIngresada = parseInt(prompt("Introduce tu edad."));
// const horaIngresada = parseInt(prompt("Introduce la hora actual (en formato 24 horas)."));

// permiso(edadIngresada, horaIngresada);

// let free =false;

// const validarCliente = (time)=>{
//     let edad = prompt("cual es tu edad ");
//     if (edad > 18){
//         if (time >= 2 && time < 7 && !free){
//             alert("puedes pasar gratis ");
//             free=true;

//         }else{
//             alert("puedes pasar pero tienes que pagar ")
//         }
//     }else{
//         alert("no puedes pasar")
//     }
// }

// validarCliente(23)
// validarCliente(20)
// validarCliente(0.6)
// validarCliente(19)
// validarCliente(21);

// const sumar=(num1,num2)=>{
//     return parseInt(num1) + parseInt(num2);
// }
// const restar=(num1,num2)=>{
//     return parseInt(num1)- parseInt(num2);
// }
// const multiplicar=(num1,num2)=>{
//     return parseInt(num1)* parseInt(num2);
// }
// const dividir=(num1,num2)=>{
//     return parseInt(num1)/ parseInt(num2);
// }

//  pc={
//     nombre:"Jonathan",
//     procesador:"Ryzen 5 3600",
//     ram:"16gb",
//     espacio:"1tb"
//  }

// let nombre=pc["nombre"]
// let procesador=pc["procesador"]
// let ram =pc["ram"]
// let espacio=pc["espacio"]

// frase=`el nombre de mi pc es ${nombre}<br> el procesador es ${procesador} la memoria ram es ${ram} y el espacio es de ${espacio}`
// document.write(frase)
