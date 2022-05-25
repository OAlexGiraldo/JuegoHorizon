//RUTINA PARA CONSUMIR API CON METODO POST}


export async function generarToken(){

    const URIPOST='https://accounts.spotify.com/api/token'

    //2. alamceno los datos que voy a enviar
    let dato1='grant_type=client_credentials'
    let dato2='client_id=38b37dd00a03407f823069643fcb888d'
    let dato3='client_secret=ce6c38ad71d04b01921a1b7e4cf238f5'

    //3 configuro la peticion
    const PETICIONPOST={
        method:"POST",
        headers:{
            "Content-type":"application/x-www-form-urlencoded"
        },
        body:dato1+'&'+dato2+'&'+dato3
    }

    let respuesta=await fetch(URIPOST,PETICIONPOST)
    return respuesta.json()

}