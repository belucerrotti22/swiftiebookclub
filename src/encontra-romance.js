const botonTrama = document.getElementsByClassName('boton-trama');
const botonContinuar = document.getElementById('boton-continuar');
const textoFaltaTramas = document.getElementById('texto-falta-tramas');
const containerBotones = document.querySelector('.encontra-romance');
const resultados = document.querySelector('.resultados');
const botonVolverIntentar = document.getElementById('boton-volver-intentar');
const pantallaBotonesTramas = document.querySelector('.encontra-romance');
const containerBotonVolver = document.querySelector('.container-boton-volver');

const listaLibros = [
    {nombre: 'The Love Hypothesis', autor: 'Ali Hazelwood' , generos: ["fd", "etl", "ag", "esep", "gxs" ] , img: '../img/the-love-hypothesis.jpg'},
    {nombre: 'The Spanish Love Deception', autor: 'Elena Armas', generos: ["fd", "etl", "cdt", "s", "euv", "esep"] , img: '../img/the-spanish-love-deception.jpg'},
    {nombre: 'Twisted Love', autor: 'Ana Huang', generos: ["ag", "s", "gxs", "ap", "emadh", "res"] , img: '../img/twisted-love.jpg'},
    {nombre: 'Twisted Games', autor: 'Ana Huang', generos: ["g", "ap", "etl", "s", "cf"] , img: '../img/twisted-games.jpg'},
    {nombre: 'Twisted Hate', autor: 'Ana Huang', generos: ["etl", "s", "ehdlma", "res"] , img: '../img/twisted-hate.jpg'},
    {nombre: 'Twisted Lies', autor: 'Ana Huang', generos: ["m", "s", "ag"] , img: '../img/twisted-lies.jpg'},
    {nombre: 'It happened one summer', autor: 'Tessa Bailey', generos: ["ag", "gxs", "s", "pp", "esep"] , img: '../img/it-happened-one-summer.jpg'},
    {nombre: 'Hook, line and sinker', autor: 'Tessa Bailey', generos: ["ftl", "pp", "s", "cf"] , img: '../img/hook-line-and-sinker.jpg'},
    {nombre: 'Donde todo brilla', autor: 'Alice Kellen', generos: ["ftl", "pp", "rdda"] ,img: '../img/donde-todo-brilla.jpg'},
    {nombre: 'Beach Read', autor: 'Emily Henry', generos: ["rtl", "s", "esep", "rdda"] , img: '../img/beach-read.jpg'},
    {nombre: 'The unhoneymooners', autor: 'Christina Lauren', generos: ["fd", "s", "etl", "euv", "cf"] , img: '../img/the-unhoneymooners.jpg'},
    {nombre: 'Punk 57', autor: 'Penelope Douglas', generos: ["ftl", "etl", "s"] , img: '../img/punk-57.jpg'},
    {nombre: 'Por culpa de Miss Bridgerton', autor: 'Julia Quinn', generos: ["de", "etl", "ao"] , img: '../img/por-culpa-de-miss-bridgerton.jpg'},
    {nombre: 'Belleza Oscura', autor: 'Jessica Rivas', generos: ["g", "etl", "m", "gxs", "ap", "ao", "s", "ag"], img: '../img/belleza-oscura.jpg'},
    {nombre: 'Un marido inventado', autor: 'Julia Quinn', generos: ["de", "mpc", "ao"] , img: '../img/un-marido-inventado.jpg'},
    {nombre: 'People we meet on vacation', autor: 'Emily Henry', generos: ["ftl", "euv", "rdda", "esep", "cf"], img: '../img/people-we-meet-on-vacation.jpg'},
    {nombre: 'Icebreaker', autor: 'Hannah Grace', generos: ["rtl", "ao", "s"], img: '../img/icebreaker.jpg'},
    {nombre: 'The Roommate', autor: 'Rosie Danan', generos: ["cf", "pf", "ao", "s"], img: '../img/the-roommate.jpg'},
    {nombre: 'El día que dejó de nevar en Alaska', autor: 'Alice Kellen', generos: ["cf", "etl", "gxs"], img: '../img/el-dia-que-dejo-de-nevar-en-alaska.jpg'},
    {nombre: 'Todos nuestros veranos', autor: 'Carley Fortune', generos: ["rdda", "so", "ftl"], img:'../img/todos-nuestros-veranos.jpg'},
    {nombre: 'Rojo, Blanco y Sangre Azul', autor: 'Casey McQuiston', generos: ["lgbtq", "ap", "etl", "res", "pf", "s"], img:'../img/rojo-blanco-y-sangre-azul.jpg'},
    {nombre: 'Nosotros en la luna', autor: 'Alice Kellen', generos: ["stl"], img:'../img/nosotros-en-la-luna.jpg'},
    {nombre: 'El faro de los amores dormidos', autor: 'Andrea Longarela', generos: ["rdda", "ftl", "ao", "so"], img:'../img/el-faro-de-los-amores-dormidos.jpg'},
    {nombre: 'Todo lo que nunca fuimos', autor: 'Alice Kellen', generos: ["emadh", "cf", "ag", "s", "ao", "res", "pp"], img:'../img/todo-lo-que-nunca-fuimos.jpg'},
    {nombre: 'Fix her up', autor: 'Tessa Bailey', generos: ["emadh", "fd", "ag", "pf", "s", "pp"], img: '../img/fix-her-up.jpg'},
    {nombre: 'Love her or lose her', autor: 'Tessa Bailey', generos: ["pp", "s", "so"], img:'../img/love-her-or-lose-her.jpg'},
    {nombre: 'Tools of egagement', autor: 'Tessa Bailey', generos: ["rtl", "s", "pp", "ag", "gxs", "esep"], img:'../img/tools-of-engagement.jpg'}
];


for (let i = 0; i < botonTrama.length; i++) {
    botonTrama[i].addEventListener("click", function() {
        this.classList.toggle("seleccionado");
        this.classList.toggle("no-seleccionado");
    });
}

botonContinuar.addEventListener('click', continuar);
let botonTramaArray = [];

function continuar(event){
    event.preventDefault();

    botonTramaArray = Array.from(botonTrama);

    const tramasSeleccionadas = botonTramaArray.filter(function(boton) {
        return boton.classList.contains("seleccionado");
    });


    let idsTramasSeleccionadas = [];
    for (let i = 0; i < tramasSeleccionadas.length; i++) {
        idsTramasSeleccionadas[i] = tramasSeleccionadas[i].getAttribute('id'); 
    }


    if (tramasSeleccionadas.length == 0){
        textoFaltaTramas.classList.remove("ocultar");
    }else {
        textoFaltaTramas.classList.add("ocultar");
        containerBotones.classList.add("ocultar");
        encontrarCoincidencias(idsTramasSeleccionadas);
    }

}

function encontrarCoincidencias(array){

    let listaLibrosFiltrada = [];

    for (let i = 0; i < listaLibros.length; i++) {
        if (contieneLoPedido(listaLibros[i].generos, array)){
            listaLibrosFiltrada.push(listaLibros[i]);
        }
    }

    resultados.classList.remove("ocultar");
    
    if(listaLibrosFiltrada.length != 0){
        mostrarResultados(listaLibrosFiltrada);      

    }else {
        informarNoHayResultados();
    }

}

function informarNoHayResultados(){
    resultados.innerHTML = '';
    const texto = document.createElement('div');
    texto.innerHTML = 'No se encontró ninguna coincidencia';
    texto.setAttribute('class', 'consigna');

    const botonVolverIntentar = document.createElement('button');
    botonVolverIntentar.setAttribute('class', 'boton-importante');
    botonVolverIntentar.setAttribute('id', 'boton-volver-intentar');
    botonVolverIntentar.innerHTML = 'Volver a intentarlo';
    botonVolverIntentar.addEventListener('click', volver);

    const containerNoResultado = document.createElement('div');
    containerNoResultado.setAttribute('class', 'no-resultados');

    containerNoResultado.append(texto, botonVolverIntentar);
    resultados.append(containerNoResultado);
}

function mostrarResultados(listaLibrosFiltrada){
    resultados.innerHTML = '';

    for (libro of listaLibrosFiltrada){
        crearContainer(libro);
    }  

    const link = document.createElement('a');
    link.setAttribute('href', './encontra-romance.html');
    link.setAttribute('id', 'volver-link');
    link.innerHTML = 'Volver';

    containerBotonVolver.append(link);
}

function crearContainer(libro) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container-libro');

    const libroImg = document.createElement('img');
    libroImg.setAttribute('src', libro.img);

    const libroInfo = document.createElement('div');
    libroInfo.setAttribute('class', 'info-libro');

    const containerTituloYAutor = document.createElement('div');

    const libroTitulo = document.createElement('div');
    libroTitulo.innerHTML = libro.nombre;

    const libroAutor = document.createElement('div');
    libroAutor.setAttribute('class', 'autor');
    libroAutor.innerHTML = 'de ' + libro.autor;

    const infoExtra = document.createElement('div');
    infoExtra.setAttribute('class', 'info-extra');

    const tramasTitulo = document.createElement('div');
    tramasTitulo.innerHTML = 'Tramas:';

    const tramas = document.createElement('div');
    tramas.innerHTML = generos(libro.generos, botonTramaArray).join(', ');
    
    infoExtra.append(tramasTitulo, tramas);
    containerTituloYAutor.append(libroTitulo, libroAutor);
    libroInfo.append(containerTituloYAutor, infoExtra);
    container.append(libroImg, libroInfo);
    resultados.append(container);

}

function generos(generosLibro, botones){
    let titulosTramas = [];
    for (let i = 0; i < generosLibro.length; i++) {
        for (let j = 0; j < botones.length; j++) {
            if (generosLibro[i] == botones[j].getAttribute('id')){
                titulosTramas.push(botones[j].textContent);
                j = botones.length;
            }
        }
    }
    return titulosTramas;
}

function contieneLoPedido(array1, array2){

    let contiene = true;

    for (let i = 0; i < array2.length; i++) {
        if(!(array1.includes(array2[i]))){
            contiene = false;
        }       
    }
    return contiene;

}

function volver(event){
    containerBotonVolver.innerHTML = '';
    event.preventDefault();
    resultados.classList.add("ocultar");
    pantallaBotonesTramas.classList.remove("ocultar");
}