export function Menu(){
    const $menu = document.createElement("nav")
    $menu.classList.add("menu");
    $menu.innerHTML=`
    <a href="#/">Home</a>
    <span>-</spam>
    <a href="#/search">Busqueda</a>
    <span>-</spam>
    <a href="#/contacto">Contacto</a>
    
    <span>-</spam>
    <a href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprede JavaScript</a>
    `;
    return $menu;
}