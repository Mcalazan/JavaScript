const d = document;
let x = 0, y = 0;


export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
    
    /* console.log(e.keyCode);
    console.log(e.key);
    console.log(limitsBall, limitsStage); */

    //const move=(direction)=>{}
       

    switch (e.keyCode) {
        //izquierda
        case 37:
            //move("left")
            if(limitsBall.left>limitsStage.left){x--;
            e.preventDefault();
            }
          break;
        //arriba
        case 38:
            //move("up");
            if(limitsBall.top>limitsStage.top){y--;
            e.preventDefault();}
          break;
        //derecha
        case 39:
            //move("right");
            if(limitsBall.right<limitsStage.right){x++;
            e.preventDefault();}
          break;
        //abajo
        case 40:
            //move("down");
            if(limitsBall.bottom<limitsStage.bottom){y++;
            e.preventDefault();}
          break;
    
        default:
            break;
    }

    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
}


export function shortcuts (e) {
    /* console.log(e);
    console.log(e.type);
    console.log(e.key); */
    
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }

    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }

    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
}