const nav = document.querySelector("#nav")
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')

abrir.addEventListener("click", ()=> {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {
    nav.classList.remove("visible");
})

const images = [
{ src:'img/relojes1.jpg', desc:'Los relojes de bolsillo dominaban el mercado:En la actualidad, el reloj de bolsillo es poco utilizado, de hecho, es solo usado por los amantes de lo clásico, pero hace un par de cientos de años dominaba el mercado.'},
{ src:'img/masajes1.jpg', desc:'Uno al dia: Un masaje de 60 minutos ofrece los mismos beneficios que 7-8 horas de sueño para tu cuerpo. Dicen que el artista estadounidense Bob Hope, recibió masajes diarios durante 60 años como parte de su régimen de salud, y con esto logró vivir hasta los 100 años.'},
{ src:'img/relojes2.jpg', desc:'El primer reloj fue de sol:El primer reloj de sol del que se tiene conocimiento es el inventado por el astrónomo Beroso. Este reloj de sol recibió el nombre de scaphé, y puede ser este el reloj mas antiguo del mundo.'},
{ src:'img/masajes2.jpg', desc:'Más felices:Una sesión de masaje puede reducir las hormonas del estrés como el cortisol hasta en un 40%'}
];


const carouselImage = document.getElementById('carousel-image');
const descriptionElement = document.getElementById('description');
let currentIndex = 0;

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

function updateCarousel() {
    const currentImage = images[currentIndex];
    carouselImage.src = currentImage.src;
    carouselImage.alt = currentImage.desc;
    descriptionElement.textContent = currentImage.desc;
}

// Inicializar el carrusel con la primera imagen
updateCarousel();

// Cambiar la imagen automáticamente cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}, 15000);

