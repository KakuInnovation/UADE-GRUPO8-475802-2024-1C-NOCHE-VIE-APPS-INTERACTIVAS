import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




// eslint-disable-next-line react/prop-types
export default function ComboBox({data,setSelectedItem, selectedItem,type}) {




    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={data}
            sx={{ width: 300 }}
            value = {selectedItem !== "" ? selectedItem : ""}
            onChange = {(event,newValue) => setSelectedItem(newValue)}
            renderInput={(params) => <TextField {...params}  disabled={selectedItem !== ""} label={"Busca "+type+"..." }/>}
        />
    );
}



