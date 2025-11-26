// 1. Referencias a los elementos HTML
const botonAgregar = document.getElementById('agregarComponente');
const contenedor = document.getElementById('contenedorDeComponentes');
const plantilla = document.getElementById('templateComponente'); 

// Función que asigna la lógica de eliminación a un componente recién creado
function configurarBotonEliminar(componente) {
    // Buscamos el botón dentro del componente
    const botonEliminar = componente.querySelector('.btn-eliminar');

    botonEliminar.addEventListener('click', function() {
        // El método .remove() elimina el elemento principal del DOM
        componente.remove(); 
        console.log("Componente eliminado.");
    });
}


// 2. Lógica para el botón de AGREGAR
if (botonAgregar && contenedor && plantilla) {
     botonAgregar.addEventListener('click', function() {
      
        // Clonar el contenido de la plantilla (IMPORTANTE: cloneNode(true) clona los hijos)
        const fragmento = plantilla.content.cloneNode(true);
      
        // Obtener el DIV principal del fragmento clonado
        const nuevoComponente = fragmento.querySelector('.componente-tarea');
        
        // 3. Configurar la eliminación para este nuevo componente
        configurarBotonEliminar(nuevoComponente);
        
        // 4. Añadir el componente al contenedor visible
        contenedor.appendChild(nuevoComponente);
    });
} else {
    console.error("ERROR JS: No se pudieron encontrar los elementos HTML necesarios. Revisa los IDs.");
}