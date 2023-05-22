$(document).ready(function() {

  var carrito = [];
  var total = 0;
  
  $(".add-to-cart").click(function() {
    var producto = $(this).parent().find(".card-title").text();
    var precio = parseFloat($(this).parent().find(".card-text").text().replace("$", ""));
    var encontrado = false;
    for (var i = 0; i < carrito.length; i++) {
      if (carrito[i].producto === producto) {
        carrito[i].cantidad++;
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      carrito.push({producto: producto, precio: precio, cantidad: 1});
    }
    actualizarCarrito();
  });

  function actualizarCarrito() {
    $("#carrito tbody").empty();
    total = 0;
    for (var i = 0; i < carrito.length; i++) {
      var fila = "<tr>";
      fila += "<td>" + carrito[i].producto + "</td>";
      fila += "<td>$" + carrito[i].precio.toFixed(2) + "</td>";
      fila += "<td>" + carrito[i].cantidad + "</td>";
      var subtotal = carrito[i].precio * carrito[i].cantidad;
      fila += "<td>$" + subtotal.toFixed(2) + "</td>";
      fila += "<td><button class='eliminar-producto' data-indice='" + i + "'><i class='fas fa-trash'></i></button></td>";
      fila += "</tr>";
      $("#carrito tbody").append(fila);
      total += subtotal;
    }
    $("#total").text(total.toFixed(2));
  }

  $("#carrito").on("click", ".eliminar-producto", function() {
    var indice = $(this).data("indice");
    carrito.splice(indice, 1);
    actualizarCarrito();
  });

  $("#vaciar-carrito").click(function() {
    carrito = [];
    actualizarCarrito();
  });

  $(document).ready(function() {
    $("#realizar-pago").click(function() {
      if (carrito.length > 0) {
        // Crear el elemento de cartel
        var cartel = $("<div></div>");
        cartel.text("¡Compra realizada con éxito!");
        cartel.addClass("cartel");
  
        // Crear el elemento de tilde
        var tilde = $("<span></span>");
        tilde.addClass("tilde");
        tilde.text("✔"); // Puedes ajustar el contenido de la tilde si lo deseas
  
        // Agregar la tilde al cartel
        cartel.append(tilde);
  
        // Agregar el cartel al cuerpo de la página
        $("body").append(cartel);
  
        // Animación de desvanecimiento del cartel después de 3 segundos
        cartel.fadeIn(300).delay(3000).fadeOut(300);
      }
    });
  });
  
  
  
  });

  
  
 
 





