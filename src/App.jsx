import Navbar from './components/NavBar/Navbar'
import Footer from './components/footer/Footer'
import Body from './components/body/Body'
import ItemListContainer from './components/itemList/ItemListContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom' /* para los href, tmb se instala por la terminal "npm i react-router-dom" */ 


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes >
            <Route path="/tienda" element={<Body/>} />
          </Routes>
       </BrowserRouter>


       <div>
          <h1 style={{textAlign:'center'}}>Titulo</h1>
          <ItemListContainer />
       </div>

        
       <Footer />
    </>

  )
}

export default App
