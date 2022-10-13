import api from "../helpers/wp-api.js";
import{ ajax } from "../helpers/ajax.js"
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

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

            if(!query) return false;
            
            await ajax({
                url: `${api.SEARCH}/${query}`,
                cbSuccess: (search) => {
                    console.log(search);
                }
               });


        }else if(hash.includes("#/contacto")){
            $main.innerHTML = "<h2> Seccion Contacto </h2>";
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