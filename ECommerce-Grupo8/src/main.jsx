import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
