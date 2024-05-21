import { Box, Button, ImageList, ImageListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";

const SelectPhoto = () => {
    const [images, setImages] = useState(Array(4).fill(null));

    const handleFileChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };

    const handleImageClick = (index) => {
        document.getElementById(`upload-photo-input-${index}`).click();
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        images.forEach((image, index) => {
            if (image) {
                formData.append(`photo${index}`, image);
            }
        });

        try {
            const response = await fetch('http://localhost:8080/%userid/listing-products', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }

            const data = await response.json();
            console.log('Fotos cargadas exitosamente:', data);
        } catch (error) {
            console.error('Error al cargar las fotos:', error);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '50vh',
                padding: 1,
            }}
        >
            <ImageList
                sx={{
                    width: 500,
                    height: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 16,
                }}
                cols={2}
                rowHeight={164}
            >
                {images.map((image, index) => (
                    <ImageListItem
                        key={index}
                        sx={{
                            width: 'calc(50% - 16px)',
                            height: 200,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#f0f0f0',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleImageClick(index)}
                    >
                        {image ? (
                            <img
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                sx={{ width: '100%', height: '100%' }}
                            >
                                <AddPhotoAlternateIcon style={{ fontSize: 50 }} />
                            </IconButton>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            id={`upload-photo-input-${index}`}
                            style={{ display: 'none' }}
                            onChange={(event) => handleFileChange(event, index)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
                Subir Fotos
            </Button>
        </Box>
    );
};

export default SelectPhoto;
