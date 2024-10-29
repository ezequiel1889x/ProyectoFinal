import data from '../data/data.json'

const PedirDatos = () =>{ 
    /* funcion para pedir los datos */ 
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            resolve(data)
        }, 700); //procesa la data en 6s
    })
}


export default PedirDatos;