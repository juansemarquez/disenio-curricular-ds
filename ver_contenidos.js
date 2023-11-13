document.addEventListener("DOMContentLoaded", function(event) {
    var divs = document.querySelectorAll(".ejes-contenido");
    var mas = document.querySelectorAll(".ver-contenido");

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }

    console.log(mas);

    for (i = 0; i < mas.length; i++) {
        agregar_evento_ver_contenido(mas[i]);
    }
});

function agregar_evento_ver_contenido(elemento)
{
    elemento.addEventListener("click", function(event) {
        ver_contenidos(elemento.parentElement.parentElement.id);
    });
}


function ver_contenidos(id)
    {
    const d = document.querySelector("#" + id + " .ejes-contenido");


    if (d.style.display == "none") {
        d.style.display = "block";
    }
    else {
        d.style.display = "none";
    }
}
// Ejemplo de uso:
// <p class="btn btn-primary" onclick="mostrar_codigo(this,'clase-17-cod')">
//     Mostrar código
// </p>
//
//<div id="clase-17-cod" style="display:none">
//  <h3>Código del archivo php</h3>
//  <pre><code class="php">&lt;?php
//  $p = $_GET['p'];
//  ....
//  </code></pre>
//</div>
