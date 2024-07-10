import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




// eslint-disable-next-line react/prop-types
export default function ComboBox({data,setSelectedItem, selectedItem,type,listingToEdit,product,admin}) {

    const handleInputChange = (event, newInputValue) => {
        setSelectedItem(newInputValue);
    };



    return (

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={data}
                disabled={!!product&&!admin}
                freeSolo={true}
                sx={{ width: 300 }}
                value={listingToEdit || product? selectedItem : ""}
                onChange={handleInputChange}

                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={`Busca ${type}...`}
                        onChange={handleInputChange}
                    />
                )}
            />




    );


}



