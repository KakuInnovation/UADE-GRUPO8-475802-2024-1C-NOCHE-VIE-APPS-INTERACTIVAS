import {Box, Button, Checkbox, Dialog, DialogContent, DialogContentText, Divider, Typography} from "@mui/material";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useEffect, useState} from "react";
import {updateUserRoleToSeller} from "../../../hooks/user-hooks.js";
import {useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const SellerSelectorDialog = ({open,handleClose}) => {
    const background = 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)'
    const [isChecked, setIsChecked] = useState(false);
    const email = useSelector(state => state.auth.email);
    const token = useSelector((state) => state.auth.token);

    const sx_Dialog = {
        dialog:{
            display:'flex',
            justifyContent:'center',
            alignItems:'start',



        },
        dialog_content:{
          display:'flex',
            backgroundColor:'#333333',
            padding:'10px',
            flexDirection:'column',

        },
        dialog_text:{
            display:'flex',
            flexDirection:'column',
            backgroundImage: 'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',

        },
        dialog_firstBox:{
            display:'flex',
        },
        firstBox_title:{
            width:'100%',
            textAlign:'center',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
            backgroundImage: background,
            padding:{xs:'',md:'10px'}


        },
        dialog_secondBox:{
            display:'flex',
            flexDirection:'column',
            padding:{xs:'', md:'10px',lg:'20px'},
            gap:'10px',
            backgroundColor:'rgba(0,0,0,0.19)',

        },
        secondBox_text:{
            display:'flex',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
            padding:{xs:'',md:'10px',lg:'20px'},
            color:'#000',
        },
        boxButton:{
            display:'flex',
            padding:{xs:'',md:'5px',lg:'5px'},
            paddingLeft:{xs:'',md:'15px',lg:'15px'},
            paddingRight:{xs:'',md:'15px',lg:'15px'},
            alignItems:'center',
            backgroundImage:background,
            justifyContent:'space-between',
        },
    }
    const handleChangeRole = () => {
        if(isChecked){
            updateUserRoleToSeller(email, token)
        }
    }

    return (
        <Dialog  open={open} onClose={handleClose} sx={{...sx_Dialog.dialog}} maxWidth={"md"}>

                <DialogContent sx={{...sx_Dialog.dialog_content}}>
                    <DialogContentText sx={{...sx_Dialog.dialog_text}}>
                        <Box sx={{...sx_Dialog.dialog_firstBox}}>
                            <Typography variant="h4" sx={{...sx_Dialog.firstBox_title}}>Convertite en vendedor!</Typography>
                        </Box>
                        <Box sx={{...sx_Dialog.dialog_secondBox}}>
                            <Typography sx={{...sx_Dialog.secondBox_text}}>
                                ¿Sos un apasionado de los juegos de mesa? ¿Te gustaría convertir esa pasión en tu fuente de
                                ingresos? Únete a nuestra plataforma como vendedor y descubrí los beneficios de ser parte
                                de nuestra comunidad.
                            </Typography>

                            <Typography sx={{...sx_Dialog.secondBox_text}}>
                                Con nosotros, tendrás acceso a una plataforma robusta y fácil de usar que te permitirá
                                llegar a una amplia audiencia de entusiastas de los juegos de mesa en todo el mundo.
                                Olvidate de las preocupaciones logísticas; nosotros nos encargamos del procesamiento de pagos
                                y del envío, para que tú te concentres en lo que más te gusta:
                                ¡crear y vender juegos increíbles!
                            </Typography>

                            <Typography sx={{...sx_Dialog.secondBox_text}}>
                                Además, contarás con herramientas de promoción y marketing diseñadas para destacar
                                tus productos y aumentar tus ventas. ¿Qué esperas? Unite a nosotros y convierte
                                tu pasión en tu profesión.
                            </Typography>

                            <Typography sx={{...sx_Dialog.secondBox_text}}>¡Empecemos juntos esta emocionante aventura!</Typography>
                        </Box>
                        <Divider sx={{width:'100%', height:'5px',backgroundColor:'#231d1d'}}/>
                    </DialogContentText>

                    <Box sx={{...sx_Dialog.boxButton}}>
                        <Button onClick={handleClose} color="primary" style={{color:'#bda7a7',backgroundColor:'#a11818'}}>
                            Cerrar
                        </Button>
                        <Box sx={{display:'flex',gap:'20px'}}>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox />}
                                label="Quiero ser vendedor"
                                labelPlacement="start"
                                sx={{display:'flex', alignItems:'center',paddingLeft:{xs:'',md:'10px'},  backgroundColor:'#9c9b9b',}}
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <Button onClick={handleChangeRole} color="primary" style={{backgroundColor:'black',color:'white'}}>
                                Aceptar
                            </Button>
                            <Button onClick={handleClose} color="primary" style={{backgroundColor:'black',color:'white'}}>
                                Cerrar
                            </Button>
                        </Box>

                    </Box>

                </DialogContent>









        </Dialog>

    )
}

export default SellerSelectorDialog;