var total = 0;
var total_u = 0;

function fechaDif() {
    var fechaInicio = new Date().getTime();
    var fechaFin = new Date('2023-01-20 15:00:00').getTime();


    var diferencia = (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24);
    var difDias = parseInt(diferencia);
    var difhoras = (diferencia - difDias) * 24

    switch (difDias) {
        case 0:
            literalDia = ""
            break;
        case 1:
            literalDia = "un día y "
            break;
        default:
            literalDia = difDias + " días y "
            break;
    }

    if (difhoras.toFixed(0) == 1) {
        literalHora = " una hora "
    } else {
        literalHora = difhoras.toFixed(0) + " horas "
    }

    if (difDias + difhoras < 0) {
        var aviso = "";
    } else {
        var aviso = "¡ ATENCIÓN: " + literalDia + literalHora + "para finalizar la promoción !";
    }
    
    document.getElementById("aviso").innerHTML = aviso

}

function Añadir(nombre, pvp, cantidadObjeto) {

    var cantidad = parseInt(document.getElementById(cantidadObjeto).value);
     
    if (!Number.isNaN(cantidad)) {
        var totalParcial = cantidad * pvp;
        document.getElementById("resultado").innerHTML += cantidad + " " +
        nombre + " (" + pvp + " €): " + totalParcial + " €<br>";
        total += totalParcial;
        total_u += cantidad;
        if (total_u == 1) {
            document.getElementById("total").innerHTML = total_u + " unidad. "
        } else {
            document.getElementById("total").innerHTML = total_u + " unidades. "
        }
        document.getElementById("total").innerHTML += "Total: " + total + " €";

        document.getElementById("informeT2").innerHTML = document.getElementById("total").innerHTML
    }  
}

function comprar() {

    if (total>0) {

        if (document.getElementById("aviso").innerHTML == "") {
            swal({
                title: "No se pueden aplicar descuentos",
                text: "El total a pagar son " + total + " €",
                button: "aceptar",
                });
            
        } else {
            //descuento posible
            if (document.getElementById("dto").value == "zzz") {
                swal({
                    title: "El código es correcto",
                    text: "Tienes descuento del 20%, se queda en " + (total*0.8) + " €",
                    button: "aceptar",
                });
                
            } else {
                swal({
                    title: "El código es incorrecto",
                    text: "El total a pagar son " + total + " €",
                    button: "aceptar",
                });
                    
            }
    
        }



        
    }
    

}