const Footer = () => {
    return(
        <footer style={{display:'flex',justifyContent:'space-around',backgroundColor:'#135',color:'#567', borderRadius:'5px'}}>
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