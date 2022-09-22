const d = document,
n = navigator;

export default function webCam(id){
    const $video = d.getElementById(id);
    //console.log(n.mediaDevices);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true}).then((stream) =>{
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        }).catch((err)=>{
            $video.insertAdjacentHTML("beforebegin", `<p><mark> sucedio el error!: ${err}</mark></p>`);
           // console.log(`sucedio el error!: ${err}`));

        })
    }

}