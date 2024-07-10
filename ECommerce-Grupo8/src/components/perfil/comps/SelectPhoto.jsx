import { Box, Button, ImageList, ImageListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebase_config.js";
import { useSelector } from "react-redux";

const SelectPhoto = ({ images, setImages }) => {
    const listingToEdit = useSelector(state => state.user_slice.userListings);

    useEffect(() => {
        if (listingToEdit) {
            setImages(listingToEdit.images.map(img => ({ imagesId: img.imagesId, imageUrl: img.imageUrl })));
        }
    }, [listingToEdit, setImages]);

    const handleFileChange = async (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const storageRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);

            const newImages = [...images];
            newImages[index] = { imagesId: newImages[index]?.imagesId || null, imageUrl: downloadURL };
            setImages(newImages);
        }
    };

    const handleImageClick = (index) => {
        document.getElementById(`upload-photo-input-${index}`).click();
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
                {images ? images.map((image, index) => (
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
                                src={image.imageUrl}
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
                )) : ""}
            </ImageList>
        </Box>
    );
};

export default SelectPhoto;
