function calcular() {
    var salarioInicial = parseFloat(document.getElementById("salarioInicial").value);
    var esMujer = document.getElementById("rbSi").checked;
    var nHijos = parseFloat(document.getElementById("nHijos").value);
    var salarioFinal = 0;

    //Valida el salario inicial;
    if (Number.isNaN(salarioInicial)) {

        swal('Debe introducir un salario inicial');

    } else {

        //Aumento global
        if (salarioInicial <= 15000) {
            salarioFinal = salarioInicial * 1.015;
        } else {
            salarioFinal = salarioInicial * 1.005;
        }

        //Valida el nº de hijos
        if (Number.isNaN(nHijos)) {
            nHijos = 0;
        }
        //Aumento por hijos
        salarioFinal = salarioFinal + (salarioInicial * 0.002 * nHijos)

        //Aumento por género
        if (esMujer) {
            salarioFinal = salarioFinal + (salarioInicial * 0.001)
        }

        swal('Su salario final es: ' + salarioFinal.toFixed(2) + " €");

    }


}
