let carrito = [];


let productos = [
    {
        nombre: "Producto 1",
        precio: 10,
        imagen: "Imagen-tienda.png"
    },

    {
        nombre: "Producto 2",
        precio: 15,
        imagen: "Imagen-tienda.png"
    },

    {
        nombre: "Producto 3",
        precio: 20,
        imagen: "Imagen-tienda.png"
    }
];



// CARGAR PRODUCTOS EN LA TIENDA

function cargarProductos(){

    let tienda = document.getElementById("productosTienda");


    if(!tienda){
        return;
    }


    tienda.innerHTML = "";


    productos.forEach((producto)=>{


        tienda.innerHTML += `

        <div class="producto">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p>⭐⭐⭐⭐⭐</p>

            <h2>$${producto.precio}</h2>


            <button onclick="agregarProducto('${producto.nombre}', ${producto.precio})">

            Agregar 🛒

            </button>


        </div>

        `;


    });


}




// CARRITO

function agregarProducto(nombre, precio){


    carrito.push({

        nombre:nombre,

        precio:precio

    });


    mostrarCarrito();


}




function mostrarCarrito(){


    let lista = document.getElementById("listaCarrito");

    let total = document.getElementById("total");


    if(!lista || !total){

        return;

    }


    lista.innerHTML = "";


    let suma = 0;


    carrito.forEach((producto)=>{


        suma += producto.precio;


        lista.innerHTML += `

        <div class="item-carrito">

        ${producto.nombre} - $${producto.precio}

        </div>

        `;


    });


    total.innerHTML = suma;


}





cargarProductos();
