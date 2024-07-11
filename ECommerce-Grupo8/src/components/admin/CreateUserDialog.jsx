import React, { useState, useEffect } from 'react';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogContentText,
    Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { sx_dialog } from "../../assets/styles/profile/sx_profile_create_update_listings.js";
import {signUp} from "../../hooks/user-hooks.js"; // Asegúrate de que este archivo exista y tenga los estilos necesarios

const roles = ['SELLER', 'ADMIN', 'USER'];

const CreateUserDialog = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        document: '',
        username: '',
        phoneNumber: '',
        role: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(formData);
        handleClose();
    };

    useEffect(() => {
        if (open) {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: '',
                document: '',
                username: '',
                phoneNumber: '',
                role: ''
            });
        }
    }, [open]);

    return (
        <Dialog open={open} sx={{ ...sx_dialog.layout }} maxWidth='sm' fullWidth>
            <DialogContent sx={{ ...sx_dialog.dialogContext }}>
                <DialogContentText sx={{ ...sx_dialog.dialogContentText }}>
                    <Typography variant="h4" sx={{ ...sx_dialog.dialogContentText_typo }}>Crear Usuario</Typography>
                </DialogContentText>
                <Box component="form" onSubmit={handleSubmit} sx={{ ...sx_dialog.firstBox, width: '100%' }}>
                    <Grid container sx={{ display: 'flex', gap: '10px' }}>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Document"
                                name="document"
                                value={formData.document}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Phone Number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ...sx_dialog.formControl }}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="role-label">Role</InputLabel>
                                <Select
                                    labelId="role-label"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    label="Role"
                                >
                                    {roles.map((role) => (
                                        <MenuItem key={role} value={role}>
                                            {role}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions sx={{ ...sx_dialog.dialogActions }}>
                <Button onClick={handleClose} color="secondary">
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} type="submit" color="primary">
                    Crear Usuario
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateUserDialog;
