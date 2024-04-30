import {useCallback, useState} from "react";
import {Link, redirect} from "react-router-dom";
import {FormControl, TextField} from "@mui/material";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = useCallback(() => {
        // check db
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        redirect("/")
    }, [email, password]);

    return (
        <main>
            <form onSubmit={submit}>
                <FormControl sx={{gap: 2}}>
                    <TextField
                        placeholder="correo@gmail.com"
                        name="email" type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        placeholder="contraseña123"
                        name="password" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                    />
                    <button type="submit">Login</button>
                    <Link to="/signup" className="btn btn-lg btn-primary">Sign Up</Link>
                </FormControl>
            </form>
        </main>
    )
}