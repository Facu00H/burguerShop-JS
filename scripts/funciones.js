function capitalize (string){
  return string.charAt(0).toUpperCase() + string.slice(1);
};

let xd = {
  id: 123,
  foto: "asdasd",
  nombre:'asd',
  aderezo: 'asd',
  cantidadMedallones: 1
}

function template (objeto) {
  let div = document.createElement('div');
  div.className = 'datos';
  div.id = `${objeto.id}`
  div.innerHTML = `
              <img class='fotos' src='${objeto.foto}'>
              <p>Nombre: <b>${capitalize(objeto.nombre)}</b></p>
              <p>aderezo: <b>${capitalize(objeto.aderezo)}</b></p>
              <p>cantidad de medallones: <b>${objeto.cantidadMedallones}</b></p>
  `
  
  return div
};

const contenedorTodos = document.getElementById('todos')

function printHtml (contenedor, objeto){
  contenedor.appendChild(template(objeto))
}

printHtml(contenedorTodos, xd)