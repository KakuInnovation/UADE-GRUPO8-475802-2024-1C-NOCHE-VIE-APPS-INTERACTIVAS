import {Box, Button, Dialog, DialogContent, DialogContentText, Typography} from "@mui/material";

// eslint-disable-next-line react/prop-types
const SellerSelectorDialog = ({open,handleClose}) => {
    return (
        <Dialog  open={open} onClose={handleClose}>

                <DialogContent>
                    <DialogContentText>
                        <Box>
                            <Typography variant="h4">Convertite en vendedor!</Typography>
                        </Box>
                        <Box>
                            <Typography>
                                ¿Eres un apasionado de los juegos de mesa? ¿Te gustaría convertir esa pasión en tu fuente de
                                ingresos? Únete a nuestra plataforma como vendedor y descubre los beneficios de ser parte
                                de nuestra comunidad.
                            </Typography>

                            <Typography>
                                Con nosotros, tendrás acceso a una plataforma robusta y fácil de usar que te permitirá
                                llegar a una amplia audiencia de entusiastas de los juegos de mesa en todo el mundo.
                                Olvídate de las preocupaciones logísticas; nosotros nos encargamos del procesamiento de pagos
                                y del envío, para que tú te concentres en lo que más te gusta:
                                ¡crear y vender juegos increíbles!
                            </Typography>

                            <Typography>
                                Además, contarás con herramientas de promoción y marketing diseñadas para destacar
                                tus productos y aumentar tus ventas. ¿Qué esperas? Únete a nosotros y convierte
                                tu pasión en tu profesión.
                            </Typography>

                            <Typography>¡Empecemos juntos esta emocionante aventura!</Typography>
                        </Box>

                    </DialogContentText>
                </DialogContent>




                <Box>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </Box>




        </Dialog>

    )
}

export default SellerSelectorDialog;