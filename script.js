let carrito = [];


let productosBase = [
    {
        nombre:"Producto 1",
        precio:10,
        imagen:"Imagen-tienda.png"
    },

    {
        nombre:"Producto 2",
        precio:15,
        imagen:"Imagen-tienda.png"
    },

    {
        nombre:"Producto 3",
        precio:20,
        imagen:"Imagen-tienda.png"
    }
];


let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];


let productos = productosBase.concat(productosGuardados);



function cargarProductos(){

    let tienda = document.getElementById("productosTienda");


    if(!tienda){
        return;
    }


    tienda.innerHTML="";


    productos.forEach((producto,index)=>{


        tienda.innerHTML += `

        <div class="producto">

        <img src="${producto.imagen}">


        <h3>${producto.nombre}</h3>


        <p>⭐⭐⭐⭐⭐</p>


        <h2>$${producto.precio}</h2>


        <button onclick="agregarProducto('${producto.nombre}',${producto.precio})">

        Agregar 🛒

        </button>


        </div>

        `;


    });


}




function agregarProducto(nombre,precio){

    let encontrado = carrito.find(
        producto=>producto.nombre===nombre
    );


    if(encontrado){

        encontrado.cantidad++;

    }else{

        carrito.push({

            nombre:nombre,

            precio:precio,

            cantidad:1

        });

    }


    mostrarCarrito();

}




function mostrarCarrito(){

    let lista=document.getElementById("listaCarrito");

    let total=document.getElementById("total");


    if(!lista || !total){
        return;
    }


    lista.innerHTML="";


    let suma=0;


    carrito.forEach(producto=>{


        suma += producto.precio * producto.cantidad;


        lista.innerHTML += `

        <div class="item-carrito">

        ${producto.nombre}

        x${producto.cantidad}

        </div>

        `;


    });


    total.innerHTML=suma;


}




cargarProductos();
