const Footer = () => {
    return(
        <footer style={{height:'30%', backgroundColor:'#135',color:'#567',display:'flex',width:'100%',justifyContent:'space-around',alignItems:'center'}}>
            <div className="copyFooter">
                <h3>Copy</h3>
            </div>

            <div className="titFooter">
                <h2>Titulo Footer</h2>
            </div>

            <div className="redes">
                <ul style={{listStyle:'none'}}>
                    <li>Whatsapp</li>
                    <li>Instagram</li>
                    <li>Gmail</li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer;