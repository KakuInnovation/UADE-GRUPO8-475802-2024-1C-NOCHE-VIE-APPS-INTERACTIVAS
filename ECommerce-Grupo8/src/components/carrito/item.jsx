import {useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const Item = () => {
    const { item } = useParams();
    const [datos, setDatos] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/productos/${item.id}`)
            .then((response) => response.json())
            .then((data) => {
                setDatos(data);
            });
    }, []);

    return (
        <Box key={item.id}>
            <Typography variant={"h1"}>{datos.titulo}</Typography>
        </Box>
    );
}

export default Item;