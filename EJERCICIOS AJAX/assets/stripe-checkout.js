import stripeKeys from "./stripe-keys.js";
import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
$station = d.getElementById("station"),
$template = d.getElementById("station-template").content,
$fragment = d.createDocumentFragment(),
fetchOptions = {
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
};

let prices, products;

const moneyFormat = num => `${num.slice(0,-2)}.${num.slice(-2)}`;

Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions) 
])
.then((responses) => Promise.all(responses.map((res)=>res.json())))
.then((json)=>{
    console.log(json);
    products = json[0].data;
    prices = json[1].data;

    prices.forEach((el) => {
        let productData = products.filter((product) => product.id === el.product);
        console.log(productData);
        
        $template.querySelector(".station").setAttribute("data-price", el.id);
        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name[0];
        $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
        `;
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);

    });

    $station.appendChild($fragment);
})
.catch((err) =>{
    let message = 
    err.statusText || "Ocurrio un error al conectarse con la APi";
    $station.innerHTML = `<p>Error ${err.status}:${message}</p>`;
})

d.addEventListener("click", (e)=>{

    if(e.target.matches(".station *")){
        let price = e.target.parentElement.getAttribute("data-price");
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems:[{price, quantity: 1}],
            mode:"subscription",
            successUrl:"http://127.0.0.1:5500/EJERCICIOS%20AJAX/assets/stripe-success.html",
            cancelUrl:"http://127.0.0.1:5500/EJERCICIOS%20AJAX/assets/stripe-cancel.html",
        })
        .then((res) => {
            if(res.error){
                $station.insertAdjacentHTML("afterend", res.error.message);
            }
        })
    }
})


