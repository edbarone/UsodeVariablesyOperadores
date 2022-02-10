// 2. parte del ejercicio
// Definimos las variables de entrada al solicitar al usuario 



//Aquí creamos nuestra tabla con bootstrap






function Programas() {
var pregunta = parseInt(prompt(" Escoja el programa que desea ejecutar (1 , 2, 3, 4)"));





while (pregunta < 0 || pregunta > 4 || pregunta % 1 != 0 || pregunta ==0 )  {

    alert("el número ingresado debe estar entre las opciones 1, 2, 3, 4");
    pregunta = parseFloat(prompt("Escoja el programa que desea ejecutar"));

}





switch (pregunta) {

    case 1:
        // Se define los condicionales, para evitar división entre 0 e ingreso de temperatura real
        while (Num2 == 0) {
            alert("el número N2 ingresado debe ser distinto de 0")
            Num2 = parseFloat(prompt("Ingrese un Número (N2), debe ser diferente de 0"));
        }
        // Definimos las variables de entrada al solicitar al usuario
        var Num1 = parseFloat(prompt("Ingrese un Número (N1)"));
        var Num2 = parseFloat(prompt("Ingrese un Número (N2), Importante: debe ser diferente de 0"));

        // Se define los condicionales, para evitar división entre 0 e ingreso de temperatura real
        while (Num2 == 0) {
            alert("el número N2 ingresado debe ser distinto de 0")
            Num2 = parseFloat(prompt("Ingrese un Número (N2), debe ser diferente de 0"));
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
        document.write("</tr");
        //Aquí cerramos el tr donde definimos las columnas de la tabla
        document.write("</thead>");
        //Aquí cerramos el encabezado de nuestra tabla

        //Aquí definimos el cuerpo con el contenido de la tabla según la columna
        document.write("<tbody>");
        document.write("<tr>");
        document.write("<td scope='row'>Opción 1/th>");
        document.write("<td>" + S + "</td>");
        document.write("<td>" + R + "</td>");
        document.write("<td>" + M + "</td>");
        document.write("<td>" + Div + "</td>");
        document.write("<td>" + Mod + "</td>");
        document.write("<tr>");
        document.write("</tbody>");
        //Aquí cerramos el cuerpo con el contenido de la tabla según la columna
        document.write("</table");
        break;


    case 2:
        while (TC < -273.15) {
            alert("el numero ingresado en ªC no existe en la escala de Temperaturas reales, debe ser superior a -273,15ºC ")
            TC = parseFloat(prompt("Ingrese Temperatura en ºC, debe ser superior a -273,15ºC "));
        }

        // Definimos las variables de entrada al solicitar al usuario
        var TC = parseFloat(prompt("Ingrese Temperatura en ºC, debe ser superior a -273,15ºC"));
        // Operación Conversión a Kelvin (K)
        var TK = TC + 273.12;
        var Tkelvin = TK.toFixed(2);

        // Operación Conversión a Fahrenheit
        var TF = (TC * 9 / 5) + 32;
        var Tfar = TF.toFixed(2);

        //Aquí creamos nuestra tabla con bootstrap
        document.write("<table class='table'>");
        //Aquí indicamos que nuestra tabla tendrá encabezado
        document.write("<thead class='bg-dark text-white'>");
        //Con tr definimos las columnas de la tabla
        document.write("<tr>");
        document.write("<th scope='col'>Programa</th>");
        document.write("<th scope='col'>T(ºC)</th>");
        document.write("<th scope='col'>T(K)</th>");
        document.write("<th scope='col'>T(ºF)</th>");
        document.write("</tr");
        //Aquí cerramos el tr donde definimos las columnas de la tabla
        document.write("</thead>");
        //Aquí cerramos el encabezado de nuestra tabla
        document.write("<tbody>");
        document.write("<tr>");
        document.write("<td scope='row'>Opción 2</th>");
        document.write("<th scope='col'>" + TC + "</th>");
        document.write("<td>" + Tkelvin + "</td>");
        document.write("<td>" + Tfar + "</td>");
        document.write("</tbody>");
        //Aquí cerramos el cuerpo con el contenido de la tabla según la columna
        document.write("</table");
        break;

    case 3:
        // Definimos las variables de entrada al solicitar al usuario
        var Dias = parseFloat(prompt("Ingrese número de días"));
        // Operación conversión Años/Semanas/Días
        var Año = Dias / 365;
        var Añ = Math.floor(Año);
        var Pd1 = Año - Añ;
        var Semana = (Pd1 * 365) / 7.0;
        var Sem = Math.trunc(Semana);
        var Pd2 = Semana - Sem;
        var D = Pd2 * 7;
        var Di = Math.round(D);

        //Aquí creamos nuestra tabla con bootstrap
        document.write("<table class='table'>");
        //Aquí indicamos que nuestra tabla tendrá encabezado
        document.write("<thead class='bg-dark text-white'>");
        //Con tr definimos las columnas de la tabla
        document.write("<tr>");
        //Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
        document.write("<th scope='col'>Programa</th>");
        document.write("<th scope='col'>Años</th>");
        document.write("<th scope='col'>Semanas</th>");
        document.write("<th scope='col'>Días</th>");
        document.write("</tr");
        //Aquí cerramos el tr donde definimos las columnas de la tabla
        document.write("</thead>");
        //Aquí cerramos el encabezado de nuestra tabla
        //Aquí definimos el cuerpo con el contenido de la tercera fila
        document.write("<tbody>");
        document.write("<tr>");
        document.write("<th scope='col'>Opción 3</th>");
        document.write("<td>" + Añ + "</td>");
        document.write("<td>" + Sem + "</td>");
        document.write("<td>" + Di + "</td>");
        document.write("<tr>");
        document.write("</tbody>");
        //Aquí definimos el cuerpo con el contenido de la cuarta fila
        document.write("<tr>");
        document.write("</tbody>");
        //Aquí cerramos el cuerpo con el contenido de la tabla según la columna
        document.write("</table");
        //Aquí cerramos nuestra tabla
        break;

    case 4:
        // Definimos las variables de entrada al solicitar al usuario
        var Num3 = parseFloat(prompt("Ingrese un Número (N3)"));
        var Num4 = parseFloat(prompt("Ingrese un Número (N4)"));
        var Num5 = parseFloat(prompt("Ingrese un Número (N5)"));
        var Num6 = parseFloat(prompt("Ingrese un Número (N6)"));
        var Num7 = parseFloat(prompt("Ingrese un Número (N7)"));
        // Operación Suma y promedio de 5 números
        var Sumatoria = Num3 + Num4 + Num5 + Num6 + Num7;
        var Promedio = Sumatoria / 5.0;
        var Suma3 = Sumatoria.toFixed(2);
        var Prom = Promedio.toFixed(2);
        //Aquí creamos nuestra tabla con bootstrap
        document.write("<table class='table'>");
        //Aquí indicamos que nuestra tabla tendrá encabezado
        document.write("<thead class='bg-dark text-white'>");
        //Con tr definimos las columnas de la tabla
        document.write("<tr>");
        document.write("<td scope='row'>Programa</th>");
        document.write("<th scope='col'>Suma 5 numeros</th>");
        document.write("<th scope='col'>Promedio</th>");
        document.write("</tr");
        //Aquí cerramos el tr donde definimos las columnas de la tabla
        document.write("</thead>");
        //Aquí cerramos el encabezado de nuestra tabla

        //Aquí definimos el cuerpo con el contenido de la tabla según la columna
        document.write("<tbody>");
        document.write("<tr>");
        document.write("<td scope='row'>Opción 4</th>");
        document.write("<td>" + Suma3 + "</td>");
        document.write("<td>" + Prom + "</td>");
        document.write("<tr>");
        document.write("</tbody>");
        //Aquí cerramos el cuerpo con el contenido de la tabla según la columna
        document.write("</table");
        //Aquí cerramos nuestra tabla
        document.write("</div>");
        break;

}
}