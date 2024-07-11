import React, {useEffect, useState} from 'react';
import '../../assets/fonts/Tisa/Tisa.css'
import {
    Box, Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid,
    TextField,
    Typography
} from "@mui/material";

import ComboBox from "../perfil/comps/ComboBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserListings, setEditing} from "../../redux/slices/userSlice.js";
import {sx_dialog} from "../../assets/styles/profile/sx_profile_create_update_listings.js";
import {createProduct, fetchProductUpdate} from "../../hooks/product_hooks.js";
import {addProductToList, updateProductInList} from "../../redux/slices/product_slice.js";


// eslint-disable-next-line react/prop-types
const CreateProductDialog = ({open,handleClose}) => {

    const background = 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)'



    const dispatch = useDispatch();
    let categories = useSelector(state => state.listing_stock.categories);
    let difficulties = useSelector(state => state.listing_stock.difficulties);
    let brands = useSelector(state => state.listing_stock.brands);
    let players = useSelector(state => state.listing_stock.players);
    let durations = useSelector(state => state.listing_stock.durations);

    const products = useSelector(state => state.product_slice.products)

    const difficultiesName = difficulties.map(item => item.difficultyName);
    const categoriesNames = categories.map(item => item.categoryName);
    const difficultiesNames = difficulties.map(item => item.difficultyName);
    const brandNames = brands.map(item => item.brandName);
    const playersNames = players.map(item => item.numberOfPlayers);
    const durationsNames = durations.map(item => item.durationName);



    const token = useSelector(state => state.auth.token);
    const [category,setCategory] = useState("");
    const [playerCounter, setPlayerCount] = useState("");;
    const [brandName, setBrandName] = useState("");
    const [duration, setDuration] = useState("");
    const [difficulty,setDifficulty] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [selectedGame, setSelectedGame] = useState(null);
    const [productDTO, setProduct] = useState(null);
    const [productName,setProductName] = useState("")
    const [productBrand, setProductBrand] = useState({})



    useEffect( () => {
    },[selectedGame])

    useEffect(() => {

        if (open) {

            setSelectedGame("");
            setBrandName("");
            setDuration("");
            setDifficulty("");
            setProductDescription("");

        }
    }, [open]);


    useEffect(() => {
        const getGame = () => {
            const game = products.find((product) => product.productName === selectedGame);
            setProduct(game);

            if(game){
                setCategory(game.categoryName)
                setPlayerCount(game.playerCounter)
                setProductDescription(game.productDescription);
                setDifficulty(game.difficulty);
                setDuration(game.durationDTO.durationName);
                setBrandName(game.brandName);
                setProductBrand(game.productBrand);
            } else {
                setProductName(selectedGame);
                setCategory(category);
                setPlayerCount(playerCounter);
                setProductDescription(productDescription);
                setDifficulty(difficulty);
                setDuration(duration);
                setProductBrand(brandName);
            }

        }
        getGame();
    }, [selectedGame]);


    useEffect(() => {
        console.log(category)
    }, [category]);


    const productNames = products.map((product) => product.productName);

    const buildProduct = () => {
        const selectedProduct = products.find(product => product.productName === selectedGame);
        const productId = selectedProduct ? selectedProduct.productId : null;

        const category_ = categories.find(item => item.categoryName === category);
        const categoryId = category_? category_.categoryId : null;

        const player_ = players.find((item) => item.numberOfPlayers === playerCounter);
        const playerId = player_ ? player_.playerId: null;


        const brand_ = brands.find(item => item.brandName === brandName);
        const brandId = brand_? brand_.brandId : null;

        const duration_ = durations.find((item) => item.durationName === duration);
        console.log(durations);
        const durationId = duration_ ? duration_.id : null;

        const difficulty_ = difficulties.find((item) => item.difficultyName === difficulty);

        const difficultyId = difficulty_ ? difficulty_.id : null;

        return (
            {

                productId: productId,
                productName : selectedGame,
                productDescription: productDescription,
                productCategory: {
                    categoryId: categoryId,
                    categoryName: category
                },
                productPlayers:{
                    playerId:playerId, //cambiar cuando se haga un fetch general de estos elegibles, ya que tendran su id correspondiente. -> done
                    numberOfPlayers: playerCounter
                },
                productBrand:{
                    brandId: brandId,
                    brandName: brandName
                },
                durationDTO: {
                    id : durationId,
                    durationName : duration
                },
                difficultyDTO:{
                    id: difficultyId,
                    difficultyName : difficulty
                }
            } )


    }

    function handleSubmitListing() {
        let newProduct = buildProduct();
        console.log(newProduct);
        if(newProduct.productId != null) {


            const data  =  fetchProductUpdate(newProduct, dispatch);


            dispatch(updateProductInList(newProduct))

        }
        else{

            createProduct(newProduct);
            dispatch(addProductToList(newProduct))
        }


        handlePreSetClose();
    }

    const handlePreSetClose = () => {
        setBrandName("");
        setDifficulty("");
        setProductDescription("");
        setDuration("");
        dispatch(deleteUserListings());
        dispatch(setEditing())
        handleClose();

    }




    return (
        <Dialog open={open} sx={{...sx_dialog.layout}} maxWidth='md' fullWidth>
            <DialogContent sx={{...sx_dialog.dialogContext}}>
                <DialogContentText sx={{...sx_dialog.dialogContentText}}>
                    <Typography variant="h4" sx={{ ...sx_dialog.dialogContentText_typo }}>Crea o modifica un producto</Typography>
                </DialogContentText>
                <Box component="form" sx={{...sx_dialog.firstBox, width: '100%' ,}}>
                    <Grid container sx={{display:'flex', gap:'10px'}}>
                        <Grid item xs={12} sx={{...sx_dialog.formControl}}>


                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center', gap:'10px'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{
                                    fontFamily:'Tisa Sans Pro Regular',
                                }}>
                                    Buscar producto
                                </Typography>
                                <ComboBox
                                    data={productNames}
                                    selectedItem = { productName }
                                    setSelectedItem ={setSelectedGame}


                                    type={" tu juego"}/>
                            </Box>

                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Marca:</Typography>
                                <ComboBox
                                    data={brandNames}
                                    selectedItem = { brandName || selectedGame }
                                    setSelectedItem ={setBrandName}
                                    product={productDTO}
                                    admin={true}
                                    type={"la marca de tu juego"}
                                ></ComboBox >
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography
                                    sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Duracion:</Typography>
                                <ComboBox data={durations.map(item => item.durationName)}
                                          selectedItem = {  (durationsNames.find(item => item === selectedGame) || duration || selectedGame) }
                                          setSelectedItem ={setDuration} type={"la duracion de tu juego"}
                                          product={productDTO}
                                          admin={true}

                                ></ComboBox >
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Dificultad:</Typography>
                                <ComboBox
                                    data={difficulties.map(item => item.difficultyName)}
                                    selectedItem = { (difficultiesNames.find(item => item === selectedGame) || difficulty || selectedGame) }
                                    setSelectedItem ={setDifficulty}
                                    product={productDTO}
                                    admin={true}
                                    type={"la dificultad de tu juego"}
                                ></ComboBox >
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Categoria:</Typography>
                                <ComboBox
                                    data={categories.map(item => item.categoryName)}
                                    selectedItem = { (categoriesNames.find(item => item === selectedGame) || category ||selectedGame  )}
                                    setSelectedItem ={setCategory} type={"la categoria de tu juego"}
                                    product={productDTO}
                                    admin={true}
                                ></ComboBox >
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular',width:{lg:'26%'}}}>Cantidad de jugadores:</Typography>
                                <ComboBox
                                    data={players.map(item => item.numberOfPlayers )}
                                    selectedItem = { (playersNames.find(item => item === selectedGame) ||playerCounter || selectedGame  ) }
                                    setSelectedItem ={setPlayerCount}
                                    product={productDTO}
                                    admin={true}
                                    type={"la cantidad de jugadores"}>

                                </ComboBox>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}>Descripcion del producto:</Typography>
                                <TextField
                                    fullWidth multiline rows={4}
                                    onChange={event => setProductDescription(event.target.value)}
                                    defaultValue={productDescription}
                                    product={productDTO}
                                    admin={true}
                                />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions sx={{backgroundImage:background,display:'flex', justifyContent:'space-around',boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',}}>
                <Button style={{backgroundColor:"red",color:"#fff",height:'50px',width:'100px',fontFamily:'Tisa Sans Pro Regular'}}onClick={handlePreSetClose}>Cancel</Button>
                <Button style={{backgroundColor:"green",color:"#fff",height:'50px',width:'100px',fontFamily:'Tisa Sans Pro Regular'}}onClick={handleSubmitListing}>Submit</Button>

            </DialogActions>
        </Dialog>
    );
};

export default CreateProductDialog;
