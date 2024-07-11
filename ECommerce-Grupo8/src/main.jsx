import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/store.js";
import {Provider} from "react-redux";


// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>

        <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
        </BrowserRouter>

    </Provider>
)
