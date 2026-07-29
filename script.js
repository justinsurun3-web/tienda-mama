let carrito = [];

let total = 0;


function agregarProducto(nombre, precio){

    let producto = carrito.find(p => p.nombre === nombre);


    if(producto){

        producto.cantidad++;

    } else {

        carrito.push({
            nombre:nombre,
            precio:precio,
            cantidad:1
        });

    }


    mostrarCarrito();

}



function mostrarCarrito(){

    let lista = document.getElementById("listaCarrito");


    if(!lista) return;


    lista.innerHTML="";


    total = 0;


    carrito.forEach((producto,index)=>{


        total += producto.precio * producto.cantidad;


        lista.innerHTML += `

        <div class="item-carrito">

        <b>${producto.nombre}</b>

        <p>
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



    document.getElementById("total").innerHTML = total;


}



function cambiarCantidad(index,cambio){

    carrito[index].cantidad += cambio;


    if(carrito[index].cantidad <=0){

        carrito.splice(index,1);

    }


    mostrarCarrito();

}



function eliminarProducto(index){

    carrito.splice(index,1);

    mostrarCarrito();

}




function cambiarImagen(imagen){

    document.querySelector(".imagen-grande").src = imagen;

}
