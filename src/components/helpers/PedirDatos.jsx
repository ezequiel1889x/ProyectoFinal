import data from '../data/data.json'

const PedirDatos = () =>{ 
    /* funcion para pedir los datos */ 
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            resolve(data)
        }, 500);
    })
}


export default PedirDatos;