import {RouterProvider} from "react-router-dom";
import router from "./pages/router.jsx";

function App() {
    return (
        <>
            <div>
                {/*<Home />*/}
                <RouterProvider router={router}/>
            </div>
        </>
    )
}

export default App
