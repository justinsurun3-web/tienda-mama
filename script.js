<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Tienda de Mamá</title>

<link rel="stylesheet" href="style.css">

</head>


<body>


<header>

<h1>🛍️ Tienda de Mamá</h1>

<p>Calidad, confianza y buenos precios</p>


<nav>

<a href="index.html">Inicio</a>

<a href="#productos">Productos</a>

<a href="#ofertas">Ofertas</a>

<a href="#carrito">Carrito 🛒</a>

<a href="https://wa.me/18096028222" target="_blank">
WhatsApp
</a>

</nav>

</header>




<section class="banner">

<h2>🔥 Grandes ofertas de hoy</h2>

<p>Encuentra productos increíbles al mejor precio</p>

<button onclick="window.location.href='#productos'">
Ver productos
</button>

</section>





<section id="ofertas">

<h2>⭐ Productos destacados</h2>


<div class="productos">


<a href="producto1.html" class="link-producto">

<div class="producto">

<span class="oferta">OFERTA</span>

<img src="Imagen-tienda.png">

<h3>Producto 1</h3>

<p>⭐⭐⭐⭐⭐</p>

<p>Producto de alta calidad.</p>

<h2>$10</h2>


<button onclick="agregarProducto('Producto 1',10); event.preventDefault();">
Agregar 🛒
</button>


</div>

</a>





<a href="producto2.html" class="link-producto">

<div class="producto">


<img src="Imagen-tienda.png">

<h3>Producto 2</h3>

<p>⭐⭐⭐⭐⭐</p>

<p>Uno de nuestros favoritos.</p>

<h2>$15</h2>


<button onclick="agregarProducto('Producto 2',15); event.preventDefault();">
Agregar 🛒
</button>


</div>

</a>





<a href="producto3.html" class="link-producto">

<div class="producto">


<img src="Imagen-tienda.png">

<h3>Producto 3</h3>

<p>⭐⭐⭐⭐</p>

<p>Nueva colección disponible.</p>

<h2>$20</h2>


<button onclick="agregarProducto('Producto 3',20); event.preventDefault();">
Agregar 🛒
</button>


</div>

</a>



</div>


</section>





<section id="carrito">


<h2>🛒 Tu carrito</h2>


<div id="listaCarrito">

No hay productos todavía

</div>


<h3>
Total: $<span id="total">0</span>
</h3>



<a id="whatsapp" target="_blank">

<button>
Finalizar compra por WhatsApp
</button>

</a>


</section>





<footer>

<h3>🛍️ Tienda de Mamá</h3>

<p>📱 WhatsApp: +1 (809) 602-8222</p>

<p>© 2026 Todos los derechos reservados</p>

</footer>




<script src="script.js"></script>


</body>

</html>
