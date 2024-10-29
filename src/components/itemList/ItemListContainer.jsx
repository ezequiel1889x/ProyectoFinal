import { useEffect, useState } from 'react';
/* traer los datos, para poder usarlos*/
import pedirDatos from '../helpers/PedirDatos'; //funcion importada de datos
import ItemList from './ItemList';



const ItemListContainer = () => { //este archivo pide la info y setea los productos(es el contenedor que tiene toda la logica de fondo)

    /* Lugar en la memoria donde guardar los datos del json */
    const [productos, setProductos] = useState([]) // el json al ser un array se inicializa el state con el []

    console.log(productos)

    useEffect(() => {
        pedirDatos()// devuelve una promesa, dsp de esto se puede usar el .then al ser promesa
            .then((res) => { // .then si el res(resolve) de la promise se ejecuta correctamente ... ->
                setProductos(res) // con el state muestra la data
            })
    }, [])
    


    /* Contenedor del listado de productos que se van a mostrar..*/
  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer