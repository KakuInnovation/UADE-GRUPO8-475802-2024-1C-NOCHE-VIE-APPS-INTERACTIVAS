import {Box, Button, ImageList, ImageListItem} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {useState} from "react";
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
            const response = await fetch('http://localhost:3000/api/upload', {
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




    return(
        <Box>
            <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
                {images.map((image, index) => (
                    <ImageListItem key={index} onClick={() => handleImageClick(index)}>
                        {image ? (
                            <img src={image} alt={`Imagen ${index + 1}`} loading="lazy" />
                        ) : (
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                style={{ width: '100%', height: '100%' }}
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
            <Button onClick={handleSubmit}>Subir Fotos</Button>
        </Box>
    )
}

export default SelectPhoto;