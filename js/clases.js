
// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }
// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");
// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();



//   class Pasaje {
//     constructor(destino, aerolinea, precio) {
//       this.destino = destino;
//       this.aerolinea = aerolinea;
//       this.precio = precio;
//     }
//   }
  
//   const destinoSeleccionado = { lugar: "Buenos Aires, Argentina" };
//   const aerolineaSeleccionada = "Aerolíneas Argentinas";
//   const precioSeleccionado = 250000;
  
//   const pasaje = new Pasaje(destinoSeleccionado.lugar, aerolineaSeleccionada, precioSeleccionado);
//   console.log(pasaje);
/*
  //CONSTRUCTOR DEL PASAJE
  class Pasaje {
    constructor(tipoPasaje, origen, destino, aerolinea, precio) {
      this.tipoDePasaje = tipoPasaje;
      this.origen = origen;
      this.destino = destino;
      this.aerolinea = aerolinea;
      this.precio = precio;
    }
  }
  const contenedorPasajes = [];
  
  aerolineas.forEach(destino => {
    const pasaje = new Pasaje(opcionSeleccionada, origenSelected, destinoSelected, airEncontrada.aerolinea, airEncontrada.precio);
    contenedorPasajes.push(pasaje);
  });
  // // Mostrar las nuevas instancias de Pasaje
  contenedorPasajes.forEach(pasaje => {console.log(pasaje)});




 /*   
    const opcionesViaje = [
        { aerolinea: 'Aerolínea A', precio: 200 },
        { aerolinea: 'Aerolínea B', precio: 150 },
        { aerolinea: 'Aerolínea C', precio: 300 }
      ];
      
      // Acceder a las opciones de viaje
      for (let i = 0; i < opcionesViaje.length; i++) {
        console.log(opcionesViaje[i].aerolinea + ' - Precio: $' + opcionesViaje[i].precio);
      }
*/