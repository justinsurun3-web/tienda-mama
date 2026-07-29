let productos = JSON.parse(localStorage.getItem("productos")) || [];


function crearProducto(){

    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let imagen = document.getElementById("imagen").value;


    if(nombre === "" || precio === ""){

        alert("Completa todos los datos");

        return;

    }


    productos.push({

        nombre:nombre,

        precio:Number(precio),

        imagen:imagen

    });


    guardarProductos();

    mostrarProductos();


    document.getElementById("nombre").value="";
    document.getElementById("precio").value="";
    document.getElementById("imagen").value="";


}



function mostrarProductos(){

    let lista = document.getElementById("productosAdmin");


    if(!lista){
        return;
    }


    lista.innerHTML="";


    productos.forEach((producto,index)=>{


        lista.innerHTML += `

        <div class="producto">


        <img src="${producto.imagen}">


        <h3>${producto.nombre}</h3>


        <h2>$${producto.precio}</h2>


        <button onclick="editarProducto(${index})">
        Editar ✏️
        </button>


        <button onclick="eliminarProducto(${index})">
        Borrar 🗑️
        </button>


        </div>

        `;


    });


}




function editarProducto(index){

    let nuevoNombre = prompt(
        "Nuevo nombre:",
        productos[index].nombre
    );


    let nuevoPrecio = prompt(
        "Nuevo precio:",
        productos[index].precio
    );


    if(nuevoNombre && nuevoPrecio){

        productos[index].nombre = nuevoNombre;

        productos[index].precio = Number(nuevoPrecio);


        guardarProductos();

        mostrarProductos();

    }

}




function eliminarProducto(index){

    productos.splice(index,1);


    guardarProductos();

    mostrarProductos();

}




function guardarProductos(){

    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );

}



mostrarProductos();
