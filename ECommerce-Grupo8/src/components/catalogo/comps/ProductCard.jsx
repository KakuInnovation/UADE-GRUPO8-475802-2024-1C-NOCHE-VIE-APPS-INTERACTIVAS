/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Divider,
    List,
    ListItem,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {sx_cardsGrid} from "../../../assets/styles/sx_styles.js";
import {addToCart, decrementToCart, removeFromCart} from "../../../redux/slices/shoppingCartSlice.js";
import {useDispatch, useSelector} from "react-redux";

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state) => state.shopping_cart.shoppingCart);
    const goTo = (id) => {
        navigate(`/producto/${id}`);
    }

    const handleAddToCart = (id) => {
        dispatch(addToCart({ id, quantity:1 }));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };
    console.log(shoppingCart);
    return (
        <>
            <Card sx={{...sx_cardsGrid.cardLayout,}} >
                <CardContent sx={{...sx_cardsGrid.card_content,}} style={{padding: "0px"}} onClick={() => {
                    goTo(item.id)
                }}>
                    <Box sx={{...sx_cardsGrid.box_title,}}>
                        <Typography sx={{...sx_cardsGrid.title,}}>{item.productDTO.productName}</Typography>
                    </Box>
                    <Box sx={{...sx_cardsGrid.box_img,}}>
                        <CardMedia
                            component="img"
                            height="30%"
                            image={item.images[0].imageUrl}
                            alt="game"
                            sx={{...sx_cardsGrid.img}}
                        />
                    </Box>
                    <Box sx={{...sx_cardsGrid.box_description}}>
                        <List sx={{
                            width: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ListItem sx={{
                                ...sx_cardsGrid.list_item,
                                width: {xs: '', md: '100%'},
                                paddingBottom: {xs: '', md: '5px'}
                            }}>
                                <Typography sx={{
                                    ...sx_cardsGrid.description_bold,
                                    width: '100%',
                                    textAlign: 'center'
                                }}>{item.productDTO.brandName}</Typography>
                            </ListItem>
                            <Divider sx={{width: '100%', height: '2px', backgroundColor: '#fff'}}/>
                            <ListItem sx={{...sx_cardsGrid.list_item, width: '50%', padding: '5px'}}>
                                <Typography sx={{...sx_cardsGrid.description_bold,}}>Género: </Typography>
                                <Typography
                                    style={{...sx_cardsGrid.description_regular}}>{item.productDTO.categoryName}</Typography>
                            </ListItem>
                            <ListItem sx={{...sx_cardsGrid.list_item, width: '50%'}}>
                                <Typography sx={{...sx_cardsGrid.description_bold,}}>Precio:</Typography>
                                <Typography sx={{...sx_cardsGrid.description_regular}}>{item.price}</Typography>
                            </ListItem>
                            <Divider sx={{width: '100%', height: '2px', backgroundColor: '#fff'}}/>
                            <ListItem sx={{...sx_cardsGrid.list_item, width: '50%', padding: '5px'}}>
                                <Typography sx={{...sx_cardsGrid.description_bold,}}>Stock:</Typography>
                                <Typography sx={{...sx_cardsGrid.description_regular}}>{item.stock}</Typography>
                            </ListItem>
                            <ListItem sx={{...sx_cardsGrid.list_item, width: '50%'}}>
                                <Typography sx={{...sx_cardsGrid.description_bold,}}>Dificultad: </Typography>
                                <Typography sx={{...sx_cardsGrid.description_regular}}>{item.productDTO.difficulty}</Typography>
                            </ListItem>
                        </List>
                    </Box>
                </CardContent>
                <Divider sx={{width: '100%', height: '2px', backgroundColor: '#b1afaf'}}/>
                <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button size="small" sx={{fontSize: '11px'}} onClick={() => handleAddToCart(item.listingId)}>Agregar al carrito</Button>
                    <Button size="small" sx={{fontSize: '11px'}} onClick={() => handleRemoveFromCart(item.listingId)}>Sacar del carrito</Button>
                </CardActions>
            </Card>


        </>

    )
}


export default ProductCard;