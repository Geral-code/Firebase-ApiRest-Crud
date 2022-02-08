const URL = 'https://crud-firebase-554fc-default-rtdb.firebaseio.com/clientes.json';

//GET
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(URL);
    const clientes = await resultado.json();
    return clientes
  } catch (error) { 
    throw error;
  }
}
//POST
export const nuevoCliente =  async cliente => {
  try {
    await fetch(URL,{
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // redireccionar al usuario al index.html tengo la tabla de clientes
    window.location.href = 'index.html';
  } catch (error) {
    throw error;
  }
};

// Actualiza un Registro
export const editarCliente = async cliente => {
 
  const newUrl =URL.split('.json').shift();
  console.log(cliente);


  try {
    
    await fetch(`${newUrl}/${cliente.id}.json`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.location.href = 'index.html';
  } catch (error) {
    throw error;
  }
};

// Un cliente por id
export const obtenerCliente = async id => {
  console.log(id);
  const newUrl =URL.split('.json').shift();
  console.log(newUrl);

  try {
    const resultado = await fetch(`${newUrl}/${id}.json`);
    const cliente = await resultado.json();
    return cliente
  } catch (error) { 
    throw error;
  }
}

//funcion para eliminar un cliente

export const eliminarCliente = async (id) => {
  const newUrl =URL.split('.json').shift();
 

  try {
    await fetch (`${newUrl}/${id}.json`, {
      method: 'DELETE'

    });
    window.location.href = 'index.html';
  } catch (error) {
    throw error;
    
  }

}