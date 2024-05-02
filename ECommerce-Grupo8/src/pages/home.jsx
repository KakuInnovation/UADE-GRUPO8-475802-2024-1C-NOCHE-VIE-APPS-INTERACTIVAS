import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState({
    id: "",
    titulo: "",
    detalle: "",
    precio: "",
    categoria: "",
    foto: "",
    cantidad: "",
  });

  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.foto}
                alt={product.titulo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Detalle: {product.detalle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio: {product.precio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Categoría: {product.categoria}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cantidad disponible: {product.cantidad}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
