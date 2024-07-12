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

        navigate(`/listing/${id}`);
    }

    const handleAddToCart = (id) => {

        dispatch(addToCart({ id, quantity:1 }));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            <Card sx={{...sx_cardsGrid.cardLayout, cursor: item.stock > 0? "pointer":"default", filter:item.stock > 0?"brightness(100%)" : "brightness(50%)"  }} >

                <CardContent sx={{...sx_cardsGrid.card_content,}} style={{padding: "0px"}} onClick={item.stock > 0 ? () => goTo(item.listingId) : null}>
                    <Box sx={{...sx_cardsGrid.box_title, display:"flex", flexDirection:'column', gap:'5px'}}>
                        <Typography sx={{...sx_cardsGrid.title,fontSize:'18px'}}>{item.productDTO.productName}</Typography>


                    </Box>
                    <Box sx={{...sx_cardsGrid.box_img,}}>
                        <CardMedia
                            component="img"
                            height="30%"
                            image={item.images[0] !== null?item.images[0].imageUrl:""}
                            alt="game"
                            sx={{...sx_cardsGrid.img}}
                        />
                        <Typography sx={{display:item.stock<=0? "flex":"none" ,
                            color:"white",
                            backgroundColor:'black',
                            width:"30%",
                            justifyContent:'center',
                            padding:'2px',
                            borderRadius:'20px',
                            position: 'absolute',
                            top:'60px',
                            right:"200px"

                        }}>Sin stock</Typography>
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
                                <Typography sx={{...sx_cardsGrid.description_regular}}>${item.price}</Typography>
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
                <Divider sx={{display: item.stock>0?'flex':"none",width: '100%', height: '2px', backgroundColor: '#b1afaf'}}/>
                <CardActions sx={{display: item.stock>0?'flex':"none", justifyContent: 'center'}}>
                    <Button size="small" sx={{fontSize: '11px'}} onClick={() => handleAddToCart(item.listingId)}>Agregar al carrito</Button>
                    <Button size="small" sx={{fontSize: '11px'}} onClick={() => handleRemoveFromCart(item.listingId)}>Sacar del carrito</Button>
                </CardActions>
            </Card>


        </>

    )
}


export default ProductCard;