let productos = JSON.parse(localStorage.getItem("productos")) || [];


function crearProducto(){

    let nombre = document.getElementById("nombre").value;

    let precio = document.getElementById("precio").value;

    let imagen = document.getElementById("imagen").value;


    if(nombre === "" || precio === ""){

        alert("Completa todos los datos");

        return;

    }


    let nuevoProducto = {

        nombre: nombre,

        precio: precio,

        imagen: imagen

    };


    productos.push(nuevoProducto);


    localStorage.setItem("productos", JSON.stringify(productos));


    mostrarProductos();


    alert("Producto guardado ✅");


}



function mostrarProductos(){

    let contenedor = document.getElementById("productosAdmin");


    if(!contenedor){
        return;
    }


    contenedor.innerHTML = "";


    productos.forEach(producto=>{


        contenedor.innerHTML += `

        <div class="producto">

            <img src="${producto.imagen}">

            <h3>${producto.nombre}</h3>

            <h2>$${producto.precio}</h2>

        </div>

        `;


    });


}



mostrarProductos();
