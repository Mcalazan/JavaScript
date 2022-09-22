export default function userDeviceinfo(id){
    const d = document,
    n = navigator,
    ua = n.userAgent;

    const $id = d.getElementById(id),
    isMobile = {
        android: () => ua.match(/android/i),
        ios:()=> ua.match(/iphone|ipod|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function(){
            return this.android()||this.ios()||this.windows();
        }
    },

    isDesktop = {
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any: function(){
            return this.linux()||this.mac()||this.windows();
        }
    },

    isBrowser = {
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any: function(){
            return (
                this.ie()||
                this.edge()||
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()
            )
        }
    };
/*     console.log(ua);
    console.log(isMobile.android()); */

    $id.innerHTML=`
    <ul>
        <li>User Agent: <b> ${ua} </b> </li>
        <li>Plataforma: <b> ${
            isMobile.any() ? isMobile.any():isDesktop.any()
        } </b> </li>
        <li>Navegador: <b> ${isBrowser.any()} </b> </li>
    </ul>
    `;

    if(isBrowser.chrome()){
        $id.innerHTML += "<p> <mark> este contenido solo se ve en chrome </mark> </p>";
    }

    //redirecciones


    if(isMobile.android()){
        window.location.href="https://jonmircha.com/";
    }
}