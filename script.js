let carrito = [];

let productos = JSON.parse(localStorage.getItem("productos")) || [];


function cargarProductos(){

    let tienda = document.getElementById("productosTienda");

    if(!tienda){
        return;
    }


    tienda.innerHTML = "";


    productos.forEach((producto)=>{

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

    let encontrado = carrito.find(p=>p.nombre===nombre);


    if(encontrado){

        encontrado.cantidad++;

    }else{

        carrito.push({

            nombre:nombre,

            precio:Number(precio),

            cantidad:1

        });

    }


    mostrarCarrito();

}



function mostrarCarrito(){

    let lista=document.getElementById("listaCarrito");

    let totalTexto=document.getElementById("total");


    if(!lista || !totalTexto){
        return;
    }


    lista.innerHTML="";


    let total=0;


    carrito.forEach((producto,index)=>{


        total += producto.precio * producto.cantidad;


        lista.innerHTML += `

        <div class="item-carrito">

        <b>${producto.nombre}</b>

        <p>$${producto.precio} x ${producto.cantidad}</p>

        <button onclick="eliminarProducto(${index})">
        ❌
        </button>

        </div>

        `;

    });


    totalTexto.innerHTML=total;


}



function eliminarProducto(index){

    carrito.splice(index,1);

    mostrarCarrito();

}



cargarProductos();
