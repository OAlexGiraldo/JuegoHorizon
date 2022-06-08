
export function pintarTienda(){

    let productosBD = [

        { foto: '../imgtienda/producto1.jpg', nombre: "Forza Horizon Pegatina", precio: 20000},
        { foto: '../imgtienda/producto2.jpg', nombre: "Forza Horizon Poster", precio: 120000},
        { foto: '../imgtienda/producto3.jpg', nombre: "Motor delantero FWD - Tren de fuerza Forza Pegatina", precio: 177000},
        { foto: '../imgtienda/producto4.jpg', nombre: "Paquete de pegatinas de coche lento de Forza Pegatina", precio: 20000},
        { foto: '../imgtienda/producto5.jpg', nombre: "Logotipo de Forza Motorsport", precio: 15000},
        { foto: '../imgtienda/producto6.jpg', nombre: "Indicador de rendimiento A800 Pegatina", precio: 15000},
        { foto: '../imgtienda/producto7.jpg', nombre: "Forza Logo Cuaderno de espiral", precio: 150000},
        { foto: '../imgtienda/producto8.jpg', nombre: "Forza Horizon Vinilo para portátil", precio: 135000},
        { foto: '../imgtienda/producto9.jpg', nombre: "Forza Horizon Lámina rígida", precio: 187000},
        { foto: '../imgtienda/producto10.jpg', nombre: "Paquete de pegatinas de coche lento", precio: 170000},
        { foto: '../imgtienda/producto11.jpg', nombre: "Forza Horizon Pegatina", precio: 95000 },
        { foto: '../imgtienda/producto12.jpg', nombre: "Forza Horizon Pegatina", precio: 25000},
        { foto: '../imgtienda/producto13.jpg', nombre: "Forza Horizon Camiseta clásica", precio: 150000},
        { foto: '../imgtienda/producto14.jpg', nombre: "Forza Horizon Póster", precio: 23500},
        { foto: '../imgtienda/producto15.jpg', nombre: "Eliminador de Forza Horizon", precio: 187000},
        { foto: '../imgtienda/producto16.jpg', nombre: "fuerza horizonte 4", precio: 187000},

    ]
    
    //Necesito recorrer un arreglo en JS
    
    //1.Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        /*console.log(producto.foto)
        console.log(producto.nombre)
        console.log(producto.precio)*/
    
        //2. pintando etiquetas
    
        //div con la clase col
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //div con las clases card h-100
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        //img con la clase card-img-top
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        //h4 con la clase text-center
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        //h1 con clase text-center
        let precio=document.createElement("h3")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

        //parrafo con clase text-center
        let parrafo=document.createElement("p")
        parrafo.classList.add("text-center")
        parrafo.textContent=producto.descripcion

        //creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
        


        //3. PADRES E HIJOS
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(parrafo)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
}