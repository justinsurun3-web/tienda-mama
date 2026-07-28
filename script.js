let carrito = [];


function agregarProducto(nombre, precio){

    let productoEncontrado = carrito.find(producto => producto.nombre === nombre);


    if(productoEncontrado){

        productoEncontrado.cantidad++;

    } else {

        carrito.push({

            nombre: nombre,
            precio: precio,
            cantidad: 1

        });

    }


    mostrarCarrito();

}



function mostrarCarrito(){

    let lista = document.getElementById("listaCarrito");

    let totalTexto = document.getElementById("total");


    lista.innerHTML = "";


    let total = 0;


    if(carrito.length === 0){

        lista.innerHTML = "No hay productos todavía 🛒";

    }



    carrito.forEach((producto,index)=>{


        total += producto.precio * producto.cantidad;



        lista.innerHTML += `

        <div class="item-carrito">

        <p>
        <strong>${producto.nombre}</strong>
        <br>
        $${producto.precio} x ${producto.cantidad}
        </p>


        <button onclick="cambiarCantidad(${index},1)">
        +
        </button>


        <button onclick="cambiarCantidad(${index},-1)">
        -
        </button>


        <button onclick="eliminarProducto(${index})">
        ❌
        </button>


        </div>

        `;


    });



    totalTexto.innerHTML = total;



    let mensaje = "Hola, quiero hacer este pedido:%0A%0A";


    carrito.forEach(producto=>{

        mensaje += producto.nombre + 
        " x" + producto.cantidad +
        " = $" + 
        (producto.precio * producto.cantidad) +
        "%0A";

    });



    mensaje += "%0ATotal: $" + total;



    document.getElementById("whatsapp").href =

    "https://wa.me/18096028222?text=" + mensaje;


}



function cambiarCantidad(index, cambio){

    carrito[index].cantidad += cambio;


    if(carrito[index].cantidad <= 0){

        carrito.splice(index,1);

    }


    mostrarCarrito();

}



function eliminarProducto(index){

    carrito.splice(index,1);

    mostrarCarrito();

}
