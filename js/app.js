import { obtenerClientes, eliminarCliente } from './api.js';

(()=> {
  let arregloClientes = [];
  const listado = document.querySelector('#listado-clientes');
  // cuando se carga el documento html
  document.addEventListener('DOMContentLoaded', mostrarClientes);

  //el llamado a la funcion eliminar
  listado.addEventListener('click', confirmarEliminar)


  async function mostrarClientes() {
    const clientes = await obtenerClientes();
    console.log(clientes);
    // {}

    //for in para los objetos obtenemos sus llaves

    for (const key in clientes) {
      clientes [key].id = key;
      arregloClientes.push(clientes[key]);
      console.log((clientes[key]))
      
    }

    arregloClientes.forEach(cliente => {
      const {nombre, email, telefono, empresa, id } = cliente;
      const row = document.createElement('tr'); // <tr></tr>

      row.innerHTML += `
        <td>
          <p>${nombre}</p>
        </td>

        <td>
          <p>${email}</p>
        </td>
        <td>
          <p>${telefono}</p>
        </td>
        <td>
          <p>${empresa}</p>
        </td>
        <td>
          <a class= "btn btn-warning btn-sm fas fa-pencil-alt" href="editar-cliente.html?id=${id}"></a>
          <a class= "btn btn-danger btn-sm fas fa-trash eliminar" href="#" data-cliente="${id}"></a>
        </td>
      `;
      
    listado.appendChild(row);

    })
  };

  function confirmarEliminar(event) {
    //const miarray = event.target.classList;  =una de las formas para 
    //console.log(typeof(miarray));
    

     
    if(event.target.classList.contains('eliminar')) {
      //Capturamos el id del cliente
      
      const clienteId =  event.target.dataset.cliente;
      Swal.fire ({
        title: '¿Deseas eliminar este registro?',
        text: "No podras recuperar la informacion de este usuario!",
        icon : 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor:'#d33' ,
        confirmButtonText: 'Si, Eliminar'

      }) .then(respuesta => {
        if(respuesta.isConfirmed) {
         eliminarCliente(clienteId);
        }

    });


    
  }

  }
}
)();