import React, {useEffect, useState} from 'react';
import '../../../assets/fonts/Tisa/Tisa.css'
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
import SelectPhoto from "./SelectPhoto.jsx";
import ComboBox from "./ComboBox.jsx";


import {useDispatch, useSelector} from "react-redux";
import {fetchListingUpdate, useFetchListingDialog} from "../../../hooks/listing-hooks.js";
import {deleteUserListings, setEditing} from "../../../redux/slices/userSlice.js";
import {sx_dialog} from "../../../assets/styles/profile/sx_profile_create_update_listings.js";


// eslint-disable-next-line react/prop-types
const CreateListingDialog = ({open,handleClose}) => {
    const userId = useSelector(state => state.auth.userId);
    const background = 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)'
    let listingToEdit = useSelector(state => state.user_slice.userListings);
    const [images, setImages] = useState(Array(4).fill(null));



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
    const isEditing = useSelector(state => state.user_slice.isEditing);
    const [category,setCategory] = useState("");
    const [playerCounter, setPlayerCount] = useState("");
    const [description, setDescription] = useState("");
    const [price,setPrice] = useState(0);
    const [brandName, setBrandName] = useState("");

    const [duration, setDuration] = useState("");
    const [difficulty,setDifficulty] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [title,setTitle] = useState("");
    const [stock,setStock] = useState(0);
    const [selectedGame, setSelectedGame] = useState(null);
    const [productDTO, setProduct] = useState(null);
    const [listingId, setListingId] = useState(listingToEdit?listingToEdit.listingId:null);
    const [listingState,setListingState] = useState(false);
    const [productName,setProductName] = useState("")
    const [productBrand, setProductBrand] = useState({})



    useEffect( () => {
        console.log(selectedGame)
    },[selectedGame])

    useEffect(() => {

        if (open) {
            setTitle("");
            setSelectedGame("");
            setDescription("");
            setPrice(0);
            setStock(0);
            setBrandName("");
            setDuration("");
            setDifficulty("");
            setProductDescription("");
            listingToEdit = null;
            setImages(Array(4).fill(null));
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

        const category_ = categories.find(item => item.categoryName === category);
        const categoryId = category_? category_.categoryId : null;

        const player_ = players.find((item) => item.numberOfPlayers === playerCounter);
        const playerId = player_ ? player_.playerId: null;


        const brand_ = brands.find(item => item.brandName === brandName);
        const brandId = brand_? brand_.brandId : null;

        const duration_ = durations.find((item) => item.durationName === duration);
        const durationId = duration_ ? duration_.id : null;
        alert(durationId);
        const difficulty_ = difficulties.find((item) => item.difficultyName === difficulty);

        const difficultyId = difficulty_ ? difficulty_.id : null;

         return (
            {

                    productId: null,
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
                        brandName: productBrand.brandName
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
        let newProduct;
        if (productDTO == null) {

            newProduct =buildProduct();


        }

        const listingDTO = {
            listingId : listingToEdit?listingToEdit.listingId:null,
            title: title,
            description: description,
            stock : stock,
            userId: userId,
            productDTO: listingToEdit?listingToEdit.productDTO:productDTO?productDTO:newProduct,
            listingState: listingState,
            images: images,
            price: price
        }

        if(isEditing){


           const data  =  fetchListingUpdate(listingDTO, token);

            if(data.response === 200){
                alert('Publicacion actualizada correctamente')
            }
            else{
                alert("Error al actualizar la publicacion:",data);
            }



        }
        else{


            // eslint-disable-next-line react-hooks/rules-of-hooks
            useFetchListingDialog(listingDTO,token);
        }


        handlePreSetClose();
    }

    const handlePreSetClose = () => {

            setTitle("");
            setBrandName("");
            setDifficulty("");
            setPrice(0);
            setStock(0);
            setProductDescription("");
            setDescription("");
            setDuration("");
            dispatch(deleteUserListings());
            dispatch(setEditing())
            setImages(null);
            listingToEdit = null;



            handleClose();


    }




    return (
        <Dialog open={open} sx={{...sx_dialog.layout}} maxWidth='md' fullWidth>
            <DialogContent sx={{...sx_dialog.dialogContext}}>
                <DialogContentText sx={{...sx_dialog.dialogContentText}}>
                    <Typography variant="h4" sx={{ ...sx_dialog.dialogContentText_typo }}>Crea tu publicación!</Typography>
                </DialogContentText>
                <Box component="form" sx={{...sx_dialog.firstBox, width: '100%' ,}}>
                    <Grid container sx={{display:'flex', gap:'10px'}}>
                        <Grid item xs={12} sx={{...sx_dialog.formControl}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}>Titulo:</Typography>
                                <TextField
                                    fullWidth
                                    label="Titulo"
                                    size="large"
                                    onChange={e => setTitle(e.target.value)}
                                    /* eslint-disable-next-line react/prop-types */
                                    defaultValue={listingToEdit? listingToEdit.title: title}
                                    InputProps={{
                                        sx: {
                                            '& .MuiInputBase-input': {
                                                fontSize: '25px',
                                                fontFamily:'Tisa Sans Pro bold',
                                            },
                                        },
                                    }}
                                    InputLabelProps={{
                                        sx: {
                                            fontSize: '20px',
                                        },
                                    }}
                                />
                            </Box>

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
                                    selectedItem = {listingToEdit? listingToEdit.productDTO.productName: productName }
                                    setSelectedItem ={setSelectedGame}
                                    listingToEdit={listingToEdit}

                                    type={" tu juego"}/>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, width:'90%',}}>
                            <Box sx={{ ...sx_dialog.box,  justifyContent:'center',  flexDirection:'column', alignItems:'start', }}>
                                <Typography
                                    sx={{
                                        fontFamily:'Tisa Sans Pro bold', fontSize:{lg:'20px'},width:'100%',
                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                                        padding:{lg:'10px'},
                                        textAlign:'center',
                                        backgroundImage:background
                                        }
                                    }

                                >
                                    Subi hasta cuatro fotos
                                </Typography>
                                <Box sx={{width:'100%'}}>
                                    <SelectPhoto images={images} setImages={setImages} /> {/*enviar fotos como prop en caso de que exista la publicacion*/}
                                </Box>

                            </Box>

                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center',}}>
                            <Box sx={{ ...sx_dialog.box, justifyContent:'center' }}>
                                <Box sx={{display: 'flex', alignItems:'center' ,gap:'10px'  }}>
                                    <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}> Precio:</Typography>
                                    <TextField
                                        fullWidth size="small"
                                        onChange={event => setPrice(event.target.value)}
                                        /* eslint-disable-next-line react/prop-types */
                                        defaultValue={listingToEdit?listingToEdit.price:price}
                                    />
                                </Box>
                                <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center' ,gap:'10px' }}>
                                    <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}>Stock:</Typography>
                                    <TextField
                                        fullWidth size="small"
                                        onChange={event => setStock(event.target.value)}
                                        defaultValue={listingToEdit?listingToEdit.stock:stock}
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Marca:</Typography>
                                <ComboBox
                                    data={brandNames}
                                    selectedItem = { listingToEdit?listingToEdit.productDTO.brandName:  (brandNames.find(item => item === selectedGame) || brandName || selectedGame) }
                                    setSelectedItem ={setBrandName}
                                    listingToEdit={listingToEdit}
                                    product={productDTO}
                                    type={"la marca de tu juego"}
                                ></ComboBox >
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography
                                    sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Duracion:</Typography>
                                <ComboBox data={durations.map(item => item.durationName)}
                                          selectedItem = { listingToEdit? listingToEdit.productDTO.durationDTO.durationName:  (durationsNames.find(item => item === selectedGame) || duration || selectedGame) }
                                          setSelectedItem ={setDuration} type={"la duracion de tu juego"}
                                          product={productDTO}
                                          listingToEdit={listingToEdit}
                                ></ComboBox >
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Dificultad:</Typography>
                                <ComboBox
                                    data={difficulties.map(item => item.difficultyName)}
                                    selectedItem = {listingToEdit?listingToEdit.productDTO.difficultyDTO.difficultyName: (difficultiesNames.find(item => item === selectedGame) || difficulty || selectedGame) }
                                    setSelectedItem ={setDifficulty}
                                    listingToEdit={listingToEdit}
                                    product={productDTO}
                                    type={"la dificultad de tu juego"}
                                ></ComboBox >
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Categoria:</Typography>
                                <ComboBox
                                    data={categories.map(item => item.categoryName)}
                                    selectedItem = { listingToEdit?listingToEdit.productDTO.categoryName: (categoriesNames.find(item => item === selectedGame) || category ||selectedGame  )}
                                    setSelectedItem ={setCategory} type={"la categoria de tu juego"}
                                    product={productDTO}
                                    listingToEdit={listingToEdit}
                                ></ComboBox >
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular',width:{lg:'26%'}}}>Cantidad de jugadores:</Typography>
                                <ComboBox
                                    data={players.map(item => item.numberOfPlayers )}
                                    selectedItem = {listingToEdit?listingToEdit.productDTO.productPlayers.numberOfPlayers: (playersNames.find(item => item === selectedGame) ||playerCounter || selectedGame  ) }
                                    setSelectedItem ={setPlayerCount}
                                    listingToEdit={listingToEdit}
                                    product={productDTO}
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
                                    defaultValue={ listingToEdit?listingToEdit.productDTO.productDescription:productDescription}
                                    listingToEdit={listingToEdit}


                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center',}}>
                            <Box sx={{...sx_dialog.box ,flexDirection:'column', alignItems:'start'}}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro bold',
                                    padding:{lg:'10px'},
                                    textAlign:'center',
                                    backgroundImage:background,
                                    width:'100%',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',

                                }}>Describi tu juego</Typography>
                                <TextField
                                            fullWidth multiline rows={4}
                                           onChange={event => setDescription(event.target.value)}
                                           defaultValue={listingToEdit !== undefined ? listingToEdit.description : ''}/>
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

export default CreateListingDialog;
