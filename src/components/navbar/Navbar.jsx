import { Link } from "react-router-dom";


const Navbar = () => {

    return(
    <>
        <header style={{height:'17%',backgroundColor:'#135',color:'#567', borderRadius:'5px'}}>
            <nav style={{display:'flex',justifyContent:'space-around',alignItems:'center', height:'100%'}}>
                <div className="imgCont">
                    <img src="" alt="ImagenNav" />
                </div>

                <div className="titulo">
                    <h1><Link to="/" style={{color:'black', textDecoration:'none'}}>Titulo</Link></h1>
                </div>

                <div className="ulCont">
                    <ul style={{listStyle:'none',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center', gap:'8px'}}>
                        <li style={{gap:'20px'}}><Link to="/tienda" style={{color:'white', textDecoration:'none'}}>Tienda</Link></li>
                        <li style={{gap:'20px'}}><Link to="/tienda" style={{color:'white', textDecoration:'none'}}>Ofertas</Link></li>
                        <li style={{gap:'20px'}}><Link to="/tienda" style={{color:'white', textDecoration:'none'}}>Contacto</Link></li>
                        <li style={{gap:'20px'}}><Link to="/tienda" style={{color:'white', textDecoration:'none'}}>Nosotros</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
        
    </>
    )
}


export default Navbar;

