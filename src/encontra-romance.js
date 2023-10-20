const botonTrama = document.getElementsByClassName('boton-trama');
const botonContinuar = document.getElementById('boton-continuar');
const textoFaltaTramas = document.getElementById('texto-falta-tramas');
const containerBotones = document.querySelector('.encontra-romance');
const resultados = document.querySelector('.resultados');
const botonVolverIntentar = document.getElementById('boton-volver-intentar');
const pantallaBotonesTramas = document.querySelector('.encontra-romance');
const containerBotonVolver = document.querySelector('.container-boton-volver');

const listaLibros = [
    {nombre: 'The Love Hypothesis', autor: 'Ali Hazelwood' , generos: ["Fake dating", "Enemies to lovers", "Age gap", "Él se enamora primero" ] , img: '../img/the-love-hypothesis.jpg'},
    {nombre: 'The Spanish Love Deception', autor: 'Elena Armas', generos: ["Fake dating", "Enemies to lovers", "Compañeros de trabajo", "Spicy", "Emprenden un viaje", "Él se enamora primero"] , img: '../img/the-spanish-love-deception.jpg'},
    {nombre: 'Twisted Love', autor: 'Ana Huang', generos: ["Age gap", "Spicy", "Grumpy x Sunshine", "Amor prohibido", "El mejor amigo del hermano", "Relación en secreto"] , img: '../img/twisted-love.jpg'},
    {nombre: 'Twisted Games', autor: 'Ana Huang', generos: ["Guardaespaldas", "Amor prohibido", "Enemies to lovers", "Spicy", "Convivencia forzada"] , img: '../img/twisted-games.jpg'},
    {nombre: 'Twisted Hate', autor: 'Ana Huang', generos: ["Enemies to lovers", "Spicy", "El hermano de la mejor amiga", "Relación en secreto"] , img: '../img/twisted-hate.jpg'},
    {nombre: 'Twisted Lies', autor: 'Ana Huang', generos: ["Mafia", "Spicy", "Age gap"] , img: '../img/twisted-lies.jpg'},
    {nombre: 'It happened one summer', autor: 'Tessa Bailey', generos: ["Age gap", "Spicy", "Pueblo pequeño", "Él se enamora primero"] , img: '../img/it-happened-one-summer.jpg'},
    {nombre: 'Hook, line and sinker', autor: 'Tessa Bailey', generos: ["Friends to lovers", "Pueblo pequeño", "Spicy", "Convivencia forzada"] , img: '../img/hook-line-and-sinker.jpg'},
    {nombre: 'Donde todo brilla', autor: 'Alice Kellen', generos: ["Friends to lovers", "Pueblo pequeño", "Se reencuentran después de años"] ,img: '../img/donde-todo-brilla.jpg'},
    {nombre: 'Beach Read', autor: 'Emily Henry', generos: ["Rivals to lovers", "Spicy", "Él se enamora primero", "Se reencuentran después de años"] , img: '../img/beach-read.jpg'},
    {nombre: 'The unhoneymooners', autor: 'Christina Lauren', generos: ["Fake dating", "Spicy", "Enemies to lovers", "Emprenden un viaje", "Convivencia forzada"] , img: '../img/the-unhoneymooners.jpg'},
    {nombre: 'Punk 57', autor: 'Penelope Douglas', generos: ["Friends to lovers", "Enemies to lovers", "Spicy"] , img: '../img/punk-57.jpg'},
    {nombre: 'Por culpa de Miss Bridgerton', autor: 'Julia Quinn', generos: ["De época", "Enemies to lovers", "Ambos POVs"] , img: '../img/por-culpa-de-miss-bridgerton.jpg'},
    {nombre: 'Belleza Oscura', autor: 'Jessica Rivas', generos: ["Guardaespaldas", "Enemies to lovers", "Mafia", "Misterio", "Grumpy x Sunshine", "Amor prohibido", "Ambos POVs", "Spicy", "Age gap"], img: '../img/belleza-oscura.jpg'},
    {nombre: 'Un marido inventado', autor: 'Julia Quinn', generos: ["De época", "Matrimonio por conveniencia", "Ambos POVs"] , img: '../img/un-marido-inventado.jpg'},
    {nombre: 'People we meet on vacation', autor: 'Emily Henry', generos: ["Friends to lovers", "Emprenden un viaje", "Se reencuentran después de años", "Él se enamora primero", "Convivencia forzada"], img: '../img/people-we-meet-on-vacation.jpg'},
    {nombre: 'Icebreaker', autor: 'Hannah Grace', generos: ["Rivals to lovers", "Ambos POVs", "Spicy"], img: '../img/icebreaker.jpg'},
    {nombre: 'The Roommate', autor: 'Rosie Danan', generos: ["Convivencia forzada", "Personaje famoso", "Ambos POVs", "Spicy"], img: '../img/the-roommate.jpg'},
    {nombre: 'El día que dejó de nevar en Alaska', autor: 'Alice Kellen', generos: ["Convivencia forzada", "Enemies to lovers", "Grumpy x Sunshine"], img: '../img/el-dia-que-dejo-de-nevar-en-alaska.jpg'},
    {nombre: 'Todos nuestros veranos', autor: 'Carley Fortune', generos: ["Se reencuentran después de años", "Segunda oportunidad", "Friends to lovers"], img:'../img/todos-nuestros-veranos.jpg'},
    {nombre: 'Rojo, Blanco y Sangre Azul', autor: 'Casey McQuiston', generos: ["LGBTQ+", "Amor prohibido", "Enemies to lovers", "Relación en secreto", "Personaje famoso", "Spicy"], img:'../img/rojo-blanco-y-sangre-azul.jpg'},
    {nombre: 'Nosotros en la luna', autor: 'Alice Kellen', generos: ["Strangers to lovers"], img:'../img/nosotros-en-la-luna.jpg'},
    {nombre: 'El faro de los amores dormidos', autor: 'Andrea Longarela', generos: ["Se reencuentran después de años", "Friends to lovers", "Ambos POVs", "Segunda oportunidad"], img:'../img/el-faro-de-los-amores-dormidos.jpg'},
    {nombre: 'Todo lo que nunca fuimos', autor: 'Alice Kellen', generos: ["El mejor amigo del hermano", "Convivencia forzada", "Age gap", "Spicy", "Ambos POVs", "Relación en secreto", "Pueblo pequeño"], img:'../img/todo-lo-que-nunca-fuimos.jpg'},

];


for (let i = 0; i < botonTrama.length; i++) {
    botonTrama[i].addEventListener("click", function() {
        this.classList.toggle("seleccionado");
        this.classList.toggle("no-seleccionado");
    });
}

botonContinuar.addEventListener('click', continuar);

function continuar(event){
    event.preventDefault();

    const botonTramaArray = Array.from(botonTrama);

    let tramasSeleccionadas = botonTramaArray.filter(function(boton) {
        return boton.classList.contains("seleccionado");
    });


    let titulosTramasSeleccionadas = [];
    for (let i = 0; i < tramasSeleccionadas.length; i++) {
        titulosTramasSeleccionadas[i] = tramasSeleccionadas[i].textContent; 
    }


    if (tramasSeleccionadas.length == 0){
        textoFaltaTramas.classList.remove("ocultar");
    }else {
        textoFaltaTramas.classList.add("ocultar");
        containerBotones.classList.add("ocultar");
        encontrarCoincidencias(titulosTramasSeleccionadas);
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
        //resultados.classList.add("ocultar");
        //mensajeNoEncontrado.classList.remove("ocultar");
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
    tramas.innerHTML = libro.generos.join(', ');
    
    infoExtra.append(tramasTitulo, tramas);
    containerTituloYAutor.append(libroTitulo, libroAutor);
    libroInfo.append(containerTituloYAutor, infoExtra);
    container.append(libroImg, libroInfo);
    resultados.append(container);

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