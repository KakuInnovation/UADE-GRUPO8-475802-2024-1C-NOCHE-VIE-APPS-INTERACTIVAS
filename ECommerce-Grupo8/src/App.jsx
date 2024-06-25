
import {Container} from "@mui/material";
import Navbar from "./components/navbar/Navbar.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import {Route, Router, RouterProvider, Routes} from "react-router-dom";


import Producto from "./pages/producto.jsx";
import Footer from "./components/footer/Footer.jsx";
import Payment from "./pages/payment/Payment.jsx";
import Editar from "./pages/editar.jsx"
import Publicar from "./pages/publicar.jsx"
import Perfil from "./pages/Perfil.jsx";
import CreateListingDialog from "./components/perfil/comps/CreateListingDialog.jsx";
import SignInSide from "./pages/SignInSide.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import {Provider} from "react-redux";
import store from './redux/store.js'

function App() {
    const background =   'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)';

    return (
        <Provider store={store}>
            <Container sx={{backgroundImage:background,width:'100%',marginTop:'64px', minHeight: "100vh"}} disableGutters maxWidth={false}>

                <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/profile" element={<Perfil/>} />
                    <Route path="/catalogo" element={<Catalogo/>} />
                    <Route path="/catalogo/:id" element={<Catalogo/>} />
                    <Route path="/login" element={<SignInSide/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/publicar" element={<Publicar />} />
                    <Route path="/editar" element={<Editar />} />
                    <Route path="/payment" element={<Payment/>} />
                    <Route path="/producto/:id" element={<Producto/>} />
                    <Route path="/crear-publicacion" element={<CreateListingDialog/>} />

                </Routes>
                <Footer></Footer>
            </Container>
        </Provider>





    )
}

export default App
