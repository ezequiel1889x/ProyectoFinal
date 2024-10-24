
const navbar = () => {
    return(
        <>
            <header style={{height:'17%',backgroundColor:'#135',color:'#567', borderRadius:'5px'}}>
                <nav style={{display:'flex',justifyContent:'space-around',alignItems:'center', height:'100%'}}>
                    <div className="imgCont">
                        <img src="" alt="ImagenNav" />
                    </div>
        
                    <div className="titulo">
                        <h1>Titulo</h1>
                    </div>
        
                    <div className="ulCont">
                        <ul style={{listStyle:'none',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center', gap:'8px'}}>
                            <li style={{color:'white', textDecoration:'none'}}>Tienda</li>
                            <li style={{color:'white', textDecoration:'none'}}>Ofertas</li>
                            <li style={{color:'white', textDecoration:'none'}}>Contacto</li>
                            <li style={{color:'white', textDecoration:'none'}}>Nosotros</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}


export default navbar;