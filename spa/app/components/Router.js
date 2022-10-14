import api from "../helpers/wp-api.js";
import{ ajax } from "../helpers/ajax.js"
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router(){

        const d = document,
        w = window,
        $main = d.getElementById("main");

        let {hash} = location;

        console.log(hash);

        $main.innerHTML = null;

    
        if(!hash || hash === "#/"){
            await ajax({
                url: api.POSTS,
                cbSuccess: (posts) => {
                    let html ="";
                    posts.forEach((posts) => html += PostCard(posts));
                    $main.innerHTML = html;
                }
               });
        }else if(hash.includes("#/search")){
            let query = localStorage.getItem("wpSearch");

            if(!query) {
                d.querySelector(".loader").style.display = "none"
                return false
            };
            
            await ajax({
                url: `${api.SEARCH}/${query}`,
                cbSuccess: (search) => {
                    console.log(search);
                    let html = "";
                    if(search.length === 0){
                        html=`
                        <p class="error">
                        No existen resultados de busqueda
                        <mark>${query}</mark>
                        </p>
                        `;
                        
                    } else{
                        search.forEach((post)=>(html += SearchCard(post)));
                    }
                    $main.innerHTML = html;
                }
               });


        }else if(hash.includes("#/contacto")){
            $main.appendChild(ContactForm());
        } else {
            $main.innerHTML = "<h2> Aqui cargara el contenido del Post </h2>";
        
            await ajax({
                url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
                cbSuccess: (post) => {

                    $main.innerHTML = Post(post);
                }
               });
        
        }
            d.querySelector(".loader").style.display = "none";
    } 