let pedido = -1;

while (pedido < 0 || isNaN(pedido)) {
  pedido = parseInt(prompt('Ingrese la cantidad de hamburguesas a agregar a la BD'));
  console.log(pedido)
};

let listaDeHamburguesas = [];

for (let i = 0; i < pedido; i++) {
  
  let nombre = '';
  while (nombre.length < 4) {
    nombre = prompt('Ingrese el nombre de la hamburguesa');
  };

  let aderezo = '';
  while (aderezo.length < 4) {
    aderezo = prompt(`Ingrese el aderezo que desea ponerle a "${nombre}"`);
  };

  let foto = '';
  while (foto.length < 10) {
    foto = prompt(`Ingrese la URL de la foto de "${nombre}"`)
  }

  let cantidadMedallones = -1;
  while (cantidadMedallones < 0 || isNaN(cantidadMedallones)) {
    cantidadMedallones = prompt(`Ingrese la cantidad de medallones que llevara "${nombre}" (maximo 4)`)
  }

  let hamburguesa = {
    nombre: nombre,
    aderezo: aderezo,
    foto: foto,
    cantidadMedallones: cantidadMedallones,
  };

  hamburguesa.id = parseInt(Math.random()*1000000);

  listaDeHamburguesas.push(hamburguesa);
}

console.log(listaDeHamburguesas);