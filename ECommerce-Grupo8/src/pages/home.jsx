import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //fetch("http://localhost:3000/products")
    fetch("db.json")
      .then(response => response.json())
      .then(data => setProductos(data.productos))
      .catch(error => console.error('Error fetching productos:', error));
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {productos && productos.length > 0 ? (
          productos.map(producto => (
            <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={producto.foto}
                  alt={producto.titulo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Detalle: {producto.detalle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Precio: $ {producto.precio}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Categoría: {producto.categoria}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cantidad disponible: {producto.cantidad}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">Cargando productos...</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
