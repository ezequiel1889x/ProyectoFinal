
const navbar = () => {
    return(
        <header>
            <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className="imgCont">
                    <img src="" alt="ImagenNav" />
                </div>

                <div className="titulo">
                    <h1>Titulo</h1>
                </div>

                <div className="ulCont">
                    <ul style>
                        <li>Tienda</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default navbar;