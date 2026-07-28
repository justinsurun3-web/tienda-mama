let carrito = [];

let total = 0;


function agregarProducto(nombre, precio){


carrito.push({

nombre:nombre,

precio:precio

});


total += precio;


mostrarCarrito();


}



function mostrarCarrito(){


let lista = document.getElementById("listaCarrito");


lista.innerHTML="";


carrito.forEach((producto,index)=>{


lista.innerHTML += `

<p>

${producto.nombre} - $${producto.precio}

<button onclick="eliminarProducto(${index})">

❌

</button>

</p>

`;

});


document.getElementById("total").innerHTML = total;



let mensaje = "Hola, quiero comprar:%0A";


carrito.forEach(producto=>{

mensaje += producto.nombre + " $" + producto.precio + "%0A";

});


mensaje += "Total: $" + total;



document.getElementById("whatsapp").href =

"https://wa.me/18096028222?text=" + mensaje;



}



function eliminarProducto(index){


total -= carrito[index].precio;


carrito.splice(index,1);


mostrarCarrito();


}
