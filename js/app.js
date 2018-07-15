// Selectores de los elementos del DOM
uno = document.getElementById("1");
dos = document.getElementById("2");
tres = document.getElementById("3");
cuatro = document.getElementById("4");
cinco = document.getElementById("5");
seis = document.getElementById("6");
siete = document.getElementById("7");
ocho = document.getElementById("8");
nueve = document.getElementById("9");
cero = document.getElementById("0");
punto = document.getElementById("punto");
suma = document.getElementById("mas");
resta = document.getElementById("menos");
multiplicacion = document.getElementById("por");
division = document.getElementById("dividido");
OnC = document.getElementById("on");
signo = document.getElementById("sign");
raiz = document.getElementById("raiz");
igual = document.getElementById("igual");
display = document.getElementById("display");
var numeroUno,numeroDos,operacion;

// Objecto Calculadora
var Calculadora = {
	inicializacion: function(){
		document.onkeypress = presionarTeclaTecladoKeypress;
		document.onkeyup = presionarTeclaTecladoKeyUp;
		document.onclick = presionarTeclaMouseOnclick;
		document.onmouseout = presionarTeclaMouseOnmouseOut;		
		document.onclick = clickDocument;
	}
}



//Funcion de evento que se ejecuta cuando el usuario presiona una tecla
function presionarTeclaTecladoKeypress(event) { 
	var char = event.which || event.keyCode; 
	if (display.textContent == 0) {
		display.textContent="";
	}else if(display.textContent.length > 7){
		alert("Excedio el numero de digitos");
		return false;
	}

 	switch(char){
 		//Numero 1
 		case 49:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
			display.textContent = display.textContent + "1";
			uno.style="width:72px; height:62px;";
 		break;
 		// Numero 2
 		case 50:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
 			display.textContent = display.textContent + "2";		
			dos.style="width:72px; height:62px;";
 		break;
 		// Numero 3
 		case 51:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);	
 			display.textContent = display.textContent + "3";	
 			tres.style="width:72px; height:62px;";
 		break;	
 		// Numero 4
 		case 52:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
 			display.textContent = display.textContent + "4";		
 			cuatro.style="width:72px; height:62px;";
 		break;
 		// Numero 5
 		case 53:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
 			display.textContent = display.textContent + "5";
 			cinco.style="width:72px; height:62px;";
 		break;	
 		// Numero 6
 		case 54:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
 			display.textContent = display.textContent + "6";		
 			seis.style="width:72px; height:62px;";
 		break;
 		// Numero 7
 		case 55:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
 			display.textContent = display.textContent + "7";
 			siete.style="width:72px; height:62px;";
 		break;
 		// Numero 8
 		case 56:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
 			display.textContent = display.textContent + "8";
 			ocho.style="width:72px; height:62px;";
 		break;
 		// Numero 9
 		case 57:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);		
 			display.textContent = display.textContent + "9";
 			nueve.style="width:72px; height:62px;";
 		break;
 		// Numero 0
 		case 48:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
 			display.textContent = display.textContent + "0";		
 			cero.style="width:72px; height:62px;";
 		break;
 		// .
 		case 46:
 			// document.getElementById("display").innerHTML = String.fromCharCode(char);
			function puntoFuncion(){
	 			if (display.textContent=="") { //Condicion de que el punto no aparezca primero si no hay numero
	 				punto.style="width:72px; height:62px;";
	 				alert("Digite por lo menos un numero");
	 				display.textContent="0";
	 				return false;
	 			}else{
		 			punto.style="width:72px; height:62px;"; 				
		 			display.innerHTML = display.innerHTML + "." 				 				
	 			}
			}

 			if(display.textContent.indexOf(".")>-1){
 				punto.style="width:72px; height:62px;";
 				alert("Ya existe un punto");
 				return false;
 			}else{
 				puntoFuncion();
 			}
 		break;	
 		//+
 		case 43:
 			suma.style="width:85%; height:98%;";
 			numeroUno = display.textContent;
 			operacion = "+";
 			limpiar();
 		break;	
 		//-
 		case 45:
 			resta.style="width:72px; height:62px;";
 			numeroUno = display.textContent;
 			operacion="-";
 			limpiar();
 		break;
 		//*
 		case 42:
 			multiplicacion.style="width:72px; height:62px;";
 			numeroUno = display.textContent;
 			operacion="*";
 			limpiar();
 		break;	
 		// /(division)
 		case 47:
 			division.style="width:72px; height:62px;";
 			numeroUno = display.textContent;
 			operacion="/";
 			limpiar();
 		break;		
 		//= (opcion #1)
 		case 61:
 			igual.style="width:72px; height:62px;";
 			numeroDos =  display.textContent;
 			resolver();
 		break;		
 		//= (opcion #2)
 		case 13:
 			igual.style="width:72px; height:62px;";
 			resolver();
 		break;	

 		default:
 			alert("INCORRECTO!!! La tecla " + String.fromCharCode(char) + " no equivale como numero")
 			display.innerHTML="0";
 	}	

}

//Funcion de evento en donde se ejecutara cuando el usuario deja de presionar la tecla respectiva
function presionarTeclaTecladoKeyUp(event) {  //Funcion para saber que tecla fue presionada

	var tecla = document.getElementsByClassName("teclaNumero");
	document.getElementById("mas").style="width:90%; height:100%;";

	for (var i = 0; i<tecla.length; i++){
		tecla[i].style="width:75px; height:64px;";
	}
}

function presionarTeclaMouseOnclick(){ //Funcion de mostrar tecla presionada de la calculadora con el mouse
	
	if (display.textContent == 0) {
		display.textContent="";
	}else if(display.textContent.length >= 8){
		alert("Excedio el numero de digitos");
		return false;
	}

	uno.onclick = function(e){
		display.textContent = display.textContent + "1";
		uno.style="width:72px; height:62px;";
	}

	dos.onclick = function(e){
		display.textContent = display.textContent + "2";
		dos.style="width:72px; height:62px;";
	}
	tres.onclick = function(e){
		display.textContent = display.textContent + "3";
		tres.style="width:72px; height:62px;";
	}
	cuatro.onclick = function(e){
		display.textContent = display.textContent + "4";
		cuatro.style="width:72px; height:62px;";
	}
	cinco.onclick = function(e){
		display.textContent = display.textContent + "5";
		cinco.style="width:72px; height:62px;";
	}
	seis.onclick = function(e){
		display.textContent = display.textContent + "6";
		seis.style="width:72px; height:62px;";
	}
	siete.onclick = function(e){
		display.textContent = display.textContent + "7";
		siete.style="width:72px; height:62px;";
	}
	ocho.onclick = function(e){
		display.textContent = display.textContent + "8";
		ocho.style="width:72px; height:62px;";
	}
	nueve.onclick = function(e){
		display.textContent = display.textContent + "9";
		nueve.style="width:72px; height:62px;";
	}
	cero.onclick = function(e){
		display.textContent = display.textContent + "0";
		cero.style="width:72px; height:62px;";
	}

	punto.onclick = function(){
		display.textContent = display.textContent + "."
		punto.style="width:72px; height:62px;"
	}

	suma.onclick = function(){
		suma.style="width:85%; height:98%;";
		numeroUno = display.textContent;
		operacion="+";
		limpiar();
	}

	resta.onclick = function(){
		resta.style="width:72px; height:62px;"
		numeroUno = display.textContent;
		operacion="-";
		limpiar();
	}

	multiplicacion.onclick = function(){
		multiplicacion.style="width:72px; height:62px;"
		numeroUno = display.textContent;
		operacion="*";
		limpiar();
	}

	division.onclick = function(){
		division.style="width:72px; height:62px;"
		numeroUno = display.textContent;
		operacion="/";
		limpiar();
	}

	igual.onclick = function(){
		igual.style="width:72px; height:62px;"
		numeroDos = display.textContent;
		resolver();
	}

	OnC.onclick = function(){
		OnC.style="width:72px; height:62px;"
		display.textContent="";
	}

	signo.onclick = function(){

		if (display.textContent == 0) {
			signo.style="width:72px; height:62px;"
			alert("No es posible ponerle signo negativo al cero");
			display.innerHTML="0";
		}else if(display.textContent.indexOf("-")>-1){
			quitarSigno();
		}else{
			mostrarsigno();
		}				

		function quitarSigno(){
			var cadena = document.getElementById("display").innerHTML;
			cadena = cadena.substring(1,cadena.length);
			display.innerHTML = cadena;
		}

		function mostrarsigno(){
			signo.style="width:72px; height:62px;"
			display.textContent="-" + display.textContent;			
		}
	}

	raiz.onclick = function(){
		raiz.style="width:72px; height:62px;"
	}
}

function presionarTeclaMouseOnmouseOut(){ //Funcion de mostrar tecla presionada de la calculadora con el mouse
	uno.onmouseout = function(e){
		uno.style="width:75px; height:64px;";
	}

	dos.onmouseout = function(e){
		dos.style="width:75px; height:64px;";
	}
	tres.onmouseout = function(e){
		tres.style="width:75px; height:64px;";
	}
	cuatro.onmouseout = function(e){
		cuatro.style="width:75px; height:64px;";
	}
	cinco.onmouseout = function(e){
		cinco.style="width:75px; height:64px;";
	}
	seis.onmouseout = function(e){
		seis.style="width:75px; height:64px;";
	}
	siete.onmouseout = function(e){
		siete.style="width:75px; height:64px;";
	}
	ocho.onmouseout = function(e){
		ocho.style="width:75px; height:64px;";
	}
	nueve.onmouseout = function(e){
		nueve.style="width:75px; height:64px;";
	}
	cero.onmouseout = function(e){
		cero.style="width:75px; height:64px;";
	}

	punto.onmouseout = function(e){
		punto.style="width:75px; height:64px;";
	}

	suma.onmouseout = function(e){
		suma.style="width:90%; height:100%;";
	}

	resta.onmouseout = function(e){
		resta.style="width:75px; height:64px;";
	}

	multiplicacion.onmouseout = function(e){
		multiplicacion.style="width:75px; height:64px;";
	}

	division.onmouseout = function(e){
		division.style="width:75px; height:64px;";
	}

	igual.onmouseout = function(e){
		igual.style="width:75px; height:64px;";
	}

	OnC.onmouseout = function(e){
		OnC.style="width:75px; height:64px;";
		display.textContent="0";
	}

	signo.onmouseout = function(e){
		signo.style="width:75px; height:64px;";
	}

	raiz.onmouseout = function(e){
		raiz.style="width:75px; height:64px;";
	}
}


function limpiar(){
 	display.textContent="";
}

function resolver(){
	var resultado = 0;
	switch(operacion){
		case "+":
			resultado = parseFloat(numeroUno) + parseFloat(numeroDos);
		break;

		case "-":
 			resultado = parseFloat(numeroUno) - parseFloat(numeroDos);
 		break;

 		case "*":
 			resultado = parseFloat(numeroUno) * parseFloat(numeroDos);
 		break;

 		case "/":
 			resultado = parseFloat(numeroUno) / parseFloat(numeroDos);
 		break;
 		}

		display.textContent=resultado;
		if(resultado.length>=8){
			display.textContent.substring();
		}
 	}
//Invocacion del metodo inicializacion del objeto calculadora
Calculadora.inicializacion();


/*================================Logica==================================*/



