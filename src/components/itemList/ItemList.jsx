/* ESTE COMPONENTE MUESTRA CADA UNA DE LAS ID,NOMBRES,ETC */
/* EN EL PARAMETRO DE LA FUNCION TIENE QUE IR LA VARIABLE CON LA QUE SE MANEJA LOS DATOS */
/* Y CON EL MAP RECORRE Y PONE CADA ID Y NOMBRE */

import Item from "./Item";





const ItemList = ( {productos} ) => {
  return (
    <div style={{width:'100vw', display:'flex', justifyContent:'center'}}>

        
        <div style={{display:'flex', gap:'12px'}}>
            <div style={{height:'600px',overflow:'scroll'}}>
              <div style={{display:'flex', gap:'30px', textAlign:'center'}}>
                <div style={{display:'flex', flexDirection:'column', overflowX:'hidden', width:'600px'}}>
                  { productos.map ((prod) => <Item productos={prod} key={prod.id}/> ) }
                </div>
              </div>
            </div>
        </div>


    </div>
  )
}

export default ItemList;