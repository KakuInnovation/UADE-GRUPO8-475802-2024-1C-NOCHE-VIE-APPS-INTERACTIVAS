

import {Container} from "@mui/material";
import Navbar from "./components/navbar/Navbar.jsx";
import Catalogo from "./views/Catalogo.jsx";

function App() {
    const background =   'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)';



    return (

        <Container sx={{backgroundImage:background,width:'100%',marginTop:'64px'}} disableGutters maxWidth={false}>
            <Navbar></Navbar>
            <Catalogo></Catalogo>
        </Container>

    )
}

export default App
