

export const getDate = () => {

    // Obtener la fecha actual
    let fechaActual = new Date();

    // Obtener los componentes de la fecha (día, mes, año)
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; // Los meses empiezan en 0
    let anio = fechaActual.getFullYear();

    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();

    // Formatear los componentes para que tengan siempre dos dígitos
    if (dia < 10) {
    dia = '0' + dia;
    }
    if (mes < 10) {
    mes = '0' + mes;
    }


    // Formatear los componentes para que tengan siempre dos dígitos
    if (horas < 10) 
    {
        horas = '0' + horas;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    // Crear la cadena de texto con el formato deseado
    let fechaFormateada = dia + '/' + mes + '/' + anio;
    let horaFormateada = horas + ':' + minutos;

    // Imprimir la fecha formateada
    //console.log(fechaFormateada);
    //console.log(horaFormateada);

    return [fechaFormateada,horaFormateada]
}



