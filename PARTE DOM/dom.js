/* setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);

console.log(document.characterSet);

document.write("hola mundo")

console.log(document.querySelectorAll("a").length)

document.querySelectorAll("a").forEach((el)=> console.log(el));

console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang)

const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM)

$linkDOM.setAttribute("target", "_blank")
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel")) */

/* const $linkDOM = document.querySelector(".link-dom"); */

/* console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));
 */
/* $linkDOM.style.setProperty("text-decoration","none"); */

/* $linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign ="center";
$linkDOM.style.marginRight ="auto";
$linkDOM.style.marginLeft ="auto";
$linkDOM.style.padding ="1rem";
$linkDOM.style.borderRadius =".5rem";
console.log($linkDOM.getAttribute("style"));
 */
// como hacer conecciones con html

/* const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellorColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellorColor)

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellorColor;

$html.style.setProperty("--dark-color", "#000")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("background-color", varDarkColor);
 */

/* 
const $card = document.querySelector(".card");
$card.classList.add("rotate-45")

console.log($card.classList.contains("rotate-45"))
$card.classList.remove("rotate-45");

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");


$card.classList.add("opacity-80", "sepia") */

/* const $whatisDOM = document.getElementById("que-es")

let text =`

<p>
DOM es una abreviatura de Document Object Model. En español podríamos traducirlo por Modelo de Objeto de Documento, aunque en DesarrolloWeb.com nos hemos referido al DOM habitualmente con el nombre de jerarquía de objetos del navegador, porque realmente es una estructura jerárquica donde existen varios objetos y unos dependen de otros.

Los objetos del DOM modelizan tanto la ventana del navegador como el historial, el documento o página web, y todos los elementos que pueda tener dentro la propia página, como párrafos, divisiones, tablas, formularios y sus campos, etc. A través del DOM se puede acceder, por medio de Javascript, a cualquiera de estos elementos, es decir a sus correspondientes objetos para alterar sus propiedades o invocar a sus métodos. Con todo, a través del DOM,
</p>
<p>
<mark>
queda disponible para los programadores de Javascript, cualquier elemento de la página, para modificarlos, suprimirlos, crear nuevos elementos y colocarlos en la página, etc.
</mark>
</p>`
//HTMLLLLLLLLLLLLLLLL TEXT
$whatisDOM.textContent = text;
$whatisDOM.innerHTML = text;
$whatisDOM.outerHTML = text; */

/* $cards = document.querySelector(".cards");


console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.children[3].closest("section")) */

/* const $figure = document.createElement("figure"), 
$img = document.createElement("img"), $figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"), 
$cards = document.querySelector(".cards");
$figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>

`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["primavera","verano", "otono", "invierno"], $ul = document.createElement("ul");

document.write("<h3>Estaciones del ano</h3>");
document.body.appendChild($ul);

estaciones.forEach(el=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})

const continentes = ["africa","america", "europa", "oceania","asia"], $ul2 = document.createElement("ul");

document.write("<h3>continentes del ano</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach(el=>$ul2.innerHTML += `<li>${el}</li>`);

const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
],

$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el =>{ const $li = document.createElement("li");
$li.textContent = el;
$fragment.appendChild($li);
});

document.write("<h3>meses del ano</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

/* const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content, 
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title:"Tecnologia",
        img:"https://placeimg.com/200/200/tech",
    },
    {
        title:"Animales",
        img:"https://placeimg.com/200/200/animals",
    },
    {
        title:"Arquitectura",
        img:"https://placeimg.com/200/200/arch",
    },
    {
        title:"Gente",
        img:"https://placeimg.com/200/200/people",
    },
    {
        title:"Naturaleza",
        img:"https://placeimg.com/200/200/nature",
    }
]

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
 */

/* 
 const $cards = document.querySelector(".cards"),
 $newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true)


 $newCard.innerHTML = `
 <img src="https://placeimg.com/200/200/any" alt="Any">
 <figcaption>Any</figcaption>
 `;

 $newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]);

//$cards.insertBefore($newCard, $cards.firstElementChild);

//$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards); */

/* const $cards = document.querySelector(".cards"),
 $newCard = document.createElement("figure");


 let $contenCard = `
 <img src="https://placeimg.com/200/200/any" alt="Any">
 <figcaption></figcaption>
 `;


 $newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contenCard);

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")

$cards.insertAdjacentElement("afterbegin", $newCard)

$cards.prepend($newCard);

$cards.append($newCard);

$cards.before($newCard);

$cards.after($newCard); */

/* function holamundo(){
    alert("hola")
    console.log(event)
}

function saludar(nombre = "Desconocido"){
    alert(`hola ${nombre}`)
    console.log(event);
}



const $eventoSemantico = document.getElementById("evento-semantico");

const $eventoMultiple = document.getElementById("evento-multiple");

const $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holamundo;
$eventoSemantico.onclick = function (e){
    alert("my name is chicki");
    console.log(e);
    console.log(event);
}

$eventoMultiple.addEventListener("click",holamundo)

$eventoMultiple.addEventListener("click",(e)=>{
    alert("hola mundo multiverso");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event); 
})

$eventoMultiple.addEventListener("click", ()=> {
    saludar();
    saludar("mario")

} )


const removerDobleClick = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick)
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick) 
 */

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

    e.stopPropagation();
}
console.log($divsEventos)

$divsEventos.forEach(div =>{
    div.addEventListener("click", flujoEventos);
     div.addEventListener("click", flujoEventos,{
        capture:false,
        once: true
    }); 
})

$linkEventos.addEventListener("click", e=>{
    alert("soy tu amigo y docente marin")
    e.preventDefault();
}) */
//recioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/* function flujoEventos(e){
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
}

document.addEventListener("click",(e)=>{
    console.log("Click en", e.target)

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("soy tu amigo y docente marin")
        e.preventDefault();
    }
})
 */

/* window.addEventListener("resize", (e)=>{
console.clear();
    console.log("*****evento resize")
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(e)
})

window.addEventListener("scroll", e=>{
    console.clear();
    console.log("evento scroll");
    console.log(e);
    console.log(window.scrollX);
    console.log(window.scrollY);
})

window.addEventListener("load", e=>{
    console.log("evento load");
    console.log(e);
    console.log(window.screenX);
    console.log(window.screenY);
})

document.addEventListener("DOMContentLoaded", e =>{
    console.clear();
    console.log("****evento DOMContentLoaded*********");
    console.log(e);
    console.log(window.screenX);
    console.log(window.screenY);
})

 */

/* const $btnabrir = document.getElementById("abrir-ventana"),
$btncerrar = document.getElementById("cerrar-ventana"),
$btnimprimir = document.getElementById("imprimir-ventana")

let ventana;

$btnabrir.addEventListener("click",e=>{
    ventana = window.open("https://jonmircha.com")
})
$btncerrar.addEventListener("click",e=>{
    ventana.close();
})
$btnimprimir.addEventListener("click",e=>{
    window.print()
})
 */

/* console.log(location);
console.log(history);
console.log(navigator.connection) */





