//Variables
let suma = 0;
let suma_total = 0;
let opcion_pago;
let opcion_menu;
let a;
let producto;
let precio;
let cont = 0;
let items;
let cont1 = 0;
let cont2 = 0;
//Clase y Constructor dónde pasamos los parametros del objeto a crear
class productos {
  constructor(id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
  }
}
//Array donde el usuario debera ingresar producto, precio
const prod_farmacia = [];

producto = prompt("ingrese el nombre del producto (escriba 'exit' para salir)");
while (producto !== "exit") {
  precio = parseFloat(prompt("Ingrese precio del producto "));
  if (isNaN(precio)) {
    alert("El precio agregado no es correcto");
  } else {
    prod_farmacia.push(new productos(cont, producto, precio));
    producto = prompt("ingrese el nombre del producto (escriba 'exit' para salir)");
    cont = cont + 1;
  }
}
if (cont === 0) {
  alert("No se agrego ningun producto en la base de datos");
} else {
  for (items of prod_farmacia) {
    console.log(`${items.id + 1} - ${items.nombre}      --------    $${items.precio}`);
  }
  alert("Se agregaron los productos en la base de datos de la farmacia");

  opcion_menu = parseInt(prompt("Ingrese el nro del producto a agregar al carrito (para salir presione '0')"));
  while (opcion_menu !== 0) {
    prod_farmacia.forEach((object) => {
      if (object.id + 1 === opcion_menu) {
        suma = suma + object.precio;
        cont1 = cont1 + 1;
      }
    });
    opcion_menu = parseInt(prompt("Ingrese el nro del producto a agregar al carrito (para salir presione '0')"));
  }
  let suma_recargo = (a) => a * 1.2;

  console.clear();
  console.log("Forma de pago");
  console.log(" 1 - Contado/Débito");
  console.log(" 2 - Tarjeta de Crédito (tiene un recargo de un 20%)");
  opcion_pago = parseInt(prompt("Elija la opción de Pago"));

  do {
    switch (opcion_pago) {
      case 1:
        cont2 = 1;
        alert("Pago Efectuado Correctamente");
        break;
      case 2:
        suma = suma_recargo(suma);
        cont2 = 1;
        alert("Pago Efectuado Correctamente");
        break;
      default:
        alert("Valor Ingresado no Válido");
        break;
    }
    if (cont2 === 0) {
      opcion_pago = parseInt(prompt("Elija la opción de Pago"));
    }
  } while (cont2 !== 1);
  suma_total = prod_farmacia.reduce(
    (acumulador, object) => acumulador + object.precio, 0);
  document.write("<h3> LISTA DE PRODUCTOS </h3>");
  for (items of prod_farmacia) {
    document.write(`${items.id + 1} - ${items.nombre}      --------    $${items.precio}<br><br>`);
  }
  console.log(`compro ${cont1} productos por una suma de $ ${suma.toFixed(2)}`);
  document.write(`La suma total de los productos agregados en la base de datos es $ ${suma_total.toFixed(2)}`);
}
