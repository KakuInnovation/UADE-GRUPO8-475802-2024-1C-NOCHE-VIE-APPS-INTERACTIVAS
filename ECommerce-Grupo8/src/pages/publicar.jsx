import {Button, FormControl, Input} from "@mui/material";
import {useCallback, useState} from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Publicar() {
    const [images, setImages] = useState([]);

    console.log(images)

    const submit = useCallback(() => {

    }, [])

    return (
        <main>
            <form onSubmit={e => e.preventDefault()}>
                <FormControl>
                    <img src={images.length ? URL.createObjectURL(images[0].slice()) : ""} alt="image"/>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon/>}
                    >
                        Upload file
                        <Input
                            type="file" accept="image/*" sx={{display: "none"}}
                            onChange={(e) => setImages(Array.from(e.target.files))}
                        />
                    </Button>
                </FormControl>
            </form>
        </main>
    )
}