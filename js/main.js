
// Definimos las variables de entrada al solicitar al usuario 
var Num1   = parseFloat(prompt("Ingrese un Número (N1)"));
var Num2 = parseFloat(prompt("Ingrese un Número (N2), Importante: debe ser diferente de 0"));
var TC   = parseFloat(prompt("Ingrese Temperatura en ºC, debe ser superior a -273,15ºC"));
var Dias   = parseFloat(prompt("Ingrese número de días"));
var Num3   = parseFloat(prompt("Ingrese un Número (N3)"));
var Num4 = parseFloat(prompt("Ingrese un Número (N4)"));
var Num5   = parseFloat(prompt("Ingrese un Número (N5)"));
var Num6 = parseFloat(prompt("Ingrese un Número (N6)"));
var Num7   = parseFloat(prompt("Ingrese un Número (N7)"));

// Se define los condicionales, para evitar división entre 0 e ingreso de temperatura real
while (Num2 == 0) { 
alert("el número N2 ingresado debe ser distinto de 0")
Num2 = parseFloat(prompt("Ingrese un Número (N2), debe ser diferente de 0"));
}

while (TC < -273.15) { 
alert("el numero ingresado en ªC no existe en la escala de Temperaturas reales, debe ser superior a -273,15ºC ")
TC = parseFloat(prompt("Ingrese Temperatura en ºC, debe ser superior a -273,15ºC "));
}
    
// Operación Suma
var Suma = Num1 + Num2;
S = Suma.toFixed(2);

// Operación Resta
var Resta = Num1 - Num2;
R = Resta.toFixed(2);

// Operación Multiplicación
var Multiplicación = Num1 * Num2;
M = Multiplicación.toFixed(2)


// Operación División
var División = Num1 / Num2;
Div = División.toFixed(2);

// Operación Modulo
var Modulo = Num1 % Num2;
Mod = Modulo.toFixed(2);

// Operación Conversión a Kelvin (K)
var TK = TC + 273.12;
Tkelvin= TK.toFixed(2);

// Operación Conversión a Fahrenheit
var TF = (TC *9/5) + 32 ;
Tfar = TF.toFixed(2);

// Operación conversión Años/Semanas/Días
var Año = Dias / 365;
var Añ = Math.floor(Año);
var Pd1 = Año - Añ;
var Semana = (Pd1 * 365)/7.0;
var Sem = Math.trunc(Semana);
var Pd2 = Semana - Sem; 
var D = Pd2 * 7;
var Di = Math.round(D);

// Operación Suma y promedio de 5 números
var Sumatoria = Num3 + Num4 + Num5 + Num6 + Num7;
var Promedio = Sumatoria / 5.0;
var Suma3= Sumatoria.toFixed(2);
var Prom= Promedio.toFixed(2);



//Aquí creamos nuestra tabla con bootstrap
document.write("A continuación se muestra una tabla con los resultados de 4 programas de acuerdo con los datos ingresados<br>");
document.write("Programa 1: Calcula las 4 operaciones básicas: Suma, Resta, Multiplicación y División de los números N1 y N2 ingresados<br>");
document.write("Programa 2: Realiza la conversión de la temperatura ingresada en grados Centigrados a Kelvin y Fahrenheit<br>");
document.write("Programa 3: Calcula la cantidad de años, semanas y dias del nùmero ingresado<br>");
document.write("Programa 4: Calcula la suma y el promedio de los 5 números ingresados<br><br>");



//Aquí creamos nuestra tabla con bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Número 1</th>");
document.write("<th scope='col'>Número 2</th>");
document.write("<th scope='col'>Temperatura (ºC)</th>");
document.write("<th scope='col'>Dias</th>");
document.write("<th scope='col'>Número 3</th>");
document.write("<th scope='col'>Número 4</th>");
document.write("<th scope='col'>Número 5</th>");
document.write("<th scope='col'>Número 6</th>");
document.write("<th scope='col'>Número 7</th>");
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla

//Aquí definimos el cuerpo con el contenido de la cuarta fila
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>"+Num1+"</th>");
document.write("<td>"+Num2+"</td>");
document.write("<td>"+TC+"</td>");
document.write("<td>"+Dias+"</td>");
document.write("<td>"+Num3+"</td>");
document.write("<td>"+Num4+"</td>");
document.write("<td>"+Num5+"</td>");
document.write("<td>"+Num6+"</td>");
document.write("<td>"+Num7+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table");
//Aquí cerramos nuestra tabla
document.write("</div>");






//Aquí creamos nuestra tabla con bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Programa</th>");
document.write("<th scope='col'>Suma</th>");
document.write("<th scope='col'>Resta</th>");
document.write("<th scope='col'>Multiplicación</th>");
document.write("<th scope='col'>División</th>");
document.write("<th scope='col'>Modulo</th>");
document.write("<th scope='col'>T(K)</th>");
document.write("<th scope='col'>T(ºF)</th>");
document.write("<th scope='col'>Años</th>");
document.write("<th scope='col'>Semanas</th>");
document.write("<th scope='col'>Días</th>");
document.write("<th scope='col'>Suma 5 numeros</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla

//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>Programa 1</th>");
document.write("<td>"+S+"</td>");
document.write("<td>"+R+"</td>");
document.write("<td>"+M+"</td>");
document.write("<td>"+Div+"</td>");
document.write("<td>"+Mod+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí definimos el contenido de la segunda fila
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>Programa 2</th>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+Tkelvin+"</td>");
document.write("<td>"+Tfar+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí definimos el cuerpo con el contenido de la tercera fila
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>Programa 3</th>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+Añ+"</td>");
document.write("<td>"+Sem+"</td>");
document.write("<td>"+Di+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí definimos el cuerpo con el contenido de la cuarta fila
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>Programa 4</th>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+Suma3+"</td>");
document.write("<td>"+Prom+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table");
//Aquí cerramos nuestra tabla
document.write("</div>");



