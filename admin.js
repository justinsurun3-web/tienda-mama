function crearProducto(){


let nombre = document.getElementById("nombre").value;

let precio = document.getElementById("precio").value;

let imagen = document.getElementById("imagen").value;



if(nombre === "" || precio === ""){

alert("Completa todos los datos");

return;

}



let producto = `

<div class="producto">

<img src="${imagen}">

<h3>${nombre}</h3>

<h2>$${precio}</h2>

<button>
Comprar
</button>

</div>

`;



document.getElementById("productosAdmin").innerHTML += producto;



alert("Producto agregado ✅");


}
