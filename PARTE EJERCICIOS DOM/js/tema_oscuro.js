export default function darkTheme(btn, classDark){
    const $themeBtn = document.querySelector(btn),
    $selectors = document.querySelectorAll("[data-dark]")
    console.log($selectors);


    let moon = "🌙",
    sun = "☀️";

    const lightmode = () =>{
        $selectors.forEach(el =>el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        localStorage.setItem("theme","light")
    
    }
    const darkmode = () =>{
        $selectors.forEach(el =>el.classList.add(classDark));
        $themeBtn.textContent = sun;
        localStorage.setItem("theme","dark")
    }


    document.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent === moon){
               darkmode();
            }else{
                lightmode();
               }
        }
    })


    document.addEventListener("DOMContentLoaded",(e)=>{
        if(localStorage.getItem("theme")===null){
            console.log(localStorage.getItem("theme"))
            localStorage.setItem("theme", "light");
        }


        if(localStorage.getItem("theme")==="light"){
            lightmode();
        }

        if(localStorage.getItem("theme")==="dark"){
            darkmode();
        }
    })
}











