export function ajax(props){
    
    let { url, cbSuccess } = props;
    
    fetch(url)
    .then(res => res.ok ? res.json(): Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err =>{
        let message = err.statusText || "Ocurrio un error";
        document.getElementById("root").innerHTML = `
        <div class="error">
        <p>Error ${err.status}: ${message}</p>
        </div>
        `;

        console.log(err);
    })
    

}