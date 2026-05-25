import { DB } from "./bd.js";

function TraerDatos(Datos) {
    
    let contenedor = document.querySelector('.contenedor')
    contenedor.innerHTML = "";

    Datos.forEach(i => {
        let ContenedorAux = document.createElement('div')
        ContenedorAux.className = 'tarjetas'
       ContenedorAux.innerHTML =
`
<img src="${i.Imagen}" alt="${i.Nombre}">

<h1>${i.Nombre}</h1>

<h2>$${i.Precio.toLocaleString()}</h2>

<h3>Stock: ${i.Stock}</h3>

${i.Stock <= 3 ? '<p class="bajo-stock">Bajo Stock</p>' : ""}

<p>${i.Descripcion}</p>

<button onclick="agregarfavorito('${i.Nombre}')" class="btnfav">
💕
</button>
`
        contenedor.appendChild(ContenedorAux)
    });

}

TraerDatos(DB)

let Filtro= document.querySelector('#Filtro')
let Contenedor= document.querySelector('.contenedor')

Filtro.addEventListener('keyup', function(){
    let Filtros= DB.filter(i=>i.Nombre.toLowerCase().includes(Filtro.value.toLocaleLowerCase()))
    TraerDatos(Filtros)
    if (Filtros.length>0) {
        TraerDatos(Filtros)
            
    } else {
        Contenedor.innerHTML=`<p>Producto NO Encontrado</p>`   
    }

})

let contador= 0;

window.agregarfavorito=function(nombre) {
    contador++;
    document.getElementById('fav').innerText=contador;
    console.log(nombre + " agregado a favoritos");
}