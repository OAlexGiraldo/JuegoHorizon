import{generarToken} from './generar.js'

//llamar al funcion generar token

let tokenRespuesta=await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`

//id del servivio
const URI="https://api.spotify.com/v1/albums/7IAB2sKMWwni4vmapc4PCq/tracks?market=US&limit=20&offset=5"

//configuracion del servicio

const PETICION={
    method:"GET",
    headers:{Authorization:token}
}

//consumo el servicio

 export async function obtenerCanciones(){
    let respuesta=await fetch(URI,PETICION)
    return respuesta.json()
}