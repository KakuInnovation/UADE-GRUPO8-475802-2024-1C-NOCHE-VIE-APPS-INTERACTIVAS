import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    //fetch("http://localhost:3000/productos")
    fetch("db.json")
      .then(response => response.json())
      .then(data => setProducts(data.productos))
      .catch(error => console.error('Error fetching productos:', error));
  }, []);

  const handleAddToCart = (producto) => {
    console.log('Producto agregado al carrito:', producto);
  };

  return (
    <Container>
      
      <Header />

        <Grid container spacing={3}>
          { productos && productos.length > 0 ? (
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
                    Precio: {producto.precio}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Categoría: {producto.categoria}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cantidad disponible: {producto.cantidad}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => handleAddToCart(producto)}
                  >
                    Agregar al carrito
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
          ) : (
            <Typography variant="body1">Cargando productos...</Typography>
          )
          }
      </Grid>
      
      <Footer />
      
    </Container>
  );
};

export default Home;
