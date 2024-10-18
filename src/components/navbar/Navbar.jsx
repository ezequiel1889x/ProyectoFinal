
const Navbar = () => {
    return(
    <>
        <header style={{height:'30%',backgroundColor:'#135',color:'#567'}}>
            <nav style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <div className="imgCont">
                    <img src="" alt="ImagenNav" />
                </div>

                <div className="titulo">
                    <h1>Titulo</h1>
                </div>

                <div className="ulCont" style={{}}>
                    <ul style={{listStyle:'none',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                        <li>Tienda</li>
                        <li>Ofertas</li>
                        <li>Contacto</li>
                        <li>Nosotros</li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
    )
}


export default Navbar;

