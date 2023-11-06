const abrirNuevaVentana = () =>{
    window.open("https://www.tuniversformacion.es", "_blank"); //Abre una nueva ventana
};

const abrirMismaVentana = () =>{
    window.open("https://www.tuniversformacion.es", "_self"); //Abre en la misma ventana
};

//Acceder a las propiedades de los objetos
document.getElementById("anchoVentana").textContent = window.innerWidth; //Muestra los píxeles en la ventana
document.getElementById("urlActual").textContent = window.location.href; //Muesta la url actual
document.getElementById("navegadorInfo").textContent = window.navigator.userAgent; //No se usa