import {Box, Button, Card, CardActions, CardContent, List, ListItem, ListItemText, Typography} from "@mui/material";

const ProductCard = () => {
    return (
        <Card sx={{ }}>
            <CardContent>
                    <Box>

                    </Box>
                    <Box>
                        <Typography>Ttile</Typography>
                        <Box>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Item 1" />
                                </ListItem>

                            </List>
                        </Box>
                    </Box>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;