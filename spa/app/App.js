import api from "./helpers/wp-api.js";
import { ajax } from "./helpers/ajax.js";
import { Loader } from "./components/loader.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { PostCard } from "./components/PostCard.js";


export function App(){
   const d = document,
   $root = d.getElementById("root");
   $root.appendChild(Header());
   $root.appendChild(Posts());
   $root.appendChild(Loader());
 
   ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
        console.log(posts);
        let html ="";
        posts.forEach((posts) => html += PostCard(posts));
        d.querySelector(".loader").style.display = "none";
        d.getElementById("posts").innerHTML = html;

    }
   });


}


