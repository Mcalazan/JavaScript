export function PostCard(props){

    let {date, title, _embedded} = props;
    let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assests/favicon.png";

    return `
<article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a href='#'> Ver Publicacion </a>
    </p>
</article>
    `;

}