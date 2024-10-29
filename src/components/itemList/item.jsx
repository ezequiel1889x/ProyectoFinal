

const Item = ( {productos} ) => {
    return ( 
      <div>
        <div>
            <h2>Casa numero:</h2>
            <h3>{productos.id}</h3>

            <h2>Ciudad:</h2>
            <h3 className="Item2">{productos.ciudad}</h3>

            <h2>Precio:</h2>
            <h3>{productos.precio}</h3>

            <h2>Email:</h2>
            <h3>{productos.email}</h3>
            
            <a className="ver-mas" href={`/item/${productos.id}`}>ME INTERESA</a>
        </div>
        <hr />
      </div>
    )
  }
  
  export default Item