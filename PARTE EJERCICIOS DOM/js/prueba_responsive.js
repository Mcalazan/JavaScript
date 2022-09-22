const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if(e.target === $form){
            e.preventDefault();
            //alert("formulario enviado")
            tester = window.open(
                $form.direccion.value, 
                `innerwidth=${$form.alto.value}`,
                `innerHeight=${$form.ancho.value}`)
                
            }
    });
    d.addEventListener("click", e=>{
        if(e.target===$form.cerrar)tester.close();

    })
}