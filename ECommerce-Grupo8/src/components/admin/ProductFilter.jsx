import {useSelector} from "react-redux";
import {Box, createTheme, ThemeProvider, Typography} from "@mui/material";
import {sideBar_sx} from "../../assets/styles/listings/sidebar_filter_sx.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";



const theme = createTheme({
    typography: {
        fontFamily: 'Tisa Sans Pro Regular',
        fontSize:'15px',


    },
});

export const ProductFilter = ({props}) => {
    const brand = useSelector(state => state.listing_stock.brands);
    const difficulties = useSelector(state => state.listing_stock.difficulties);
    const duration = useSelector(state => state.listing_stock.durations);
    const categories = useSelector(state => state.listing_stock.categories);
    const players = useSelector(state => state.listing_stock.players);
    const data_navbar = [
        {
            title: "Categoria",
            tag: categories.map((item) => item.categoryName),
        },
        {
            title:"Dificultad",
            tag: difficulties.map((item) => item.difficultyName),
        },
        {
            title:"Duracion",
            tag: duration.map(item => item.durationName),
        },
        {
            title:"Marca",
            tag: brand.map(item => item.brandName),
        },
        {
            title:"Cantidad de jugadores",
            tag: players.map(item => item.numberOfPlayers),
        }

    ]

    const handleChange = (event, category, tag) => {
        const categoryType = category.toLowerCase(); // Asume que el título del item es el tipo de categoria
        const tagWithType = `${categoryType}:${tag}`;

        // eslint-disable-next-line react/prop-types
        props.setSelectedCategories(prev => {
            const currentIndex = prev.indexOf(tagWithType);
            if (currentIndex === -1) {
                return [...prev, tagWithType];
            } else {
                return prev.filter(item => item !== tagWithType);
            }
        });
    };



    return(

        data_navbar.map((item, i) => (

            <Box key={i} sx={{...sideBar_sx.category}} >
                <Box sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItem:'center',

                    borderBottom: '2px solid #e4e4e4',
                }}>
                    <Typography variant="body2" sx={{...sideBar_sx.title_2,padding:{xs:'',md:'5px'}}}>{item.title}</Typography>
                </Box>

                <Box sx={{...sideBar_sx.item_category}}>
                    {
                        item.tag.map((tag, index) => (
                            <Box key={index} sx={{}}>
                                <ThemeProvider theme={theme}>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox />}
                                        label= {tag}
                                        labelPlacement="end"
                                        style={{color:'#636363', fontSize:'14px'}}
                                        onClick= {(event) => handleChange(event,item.title,tag)}
                                    />
                                </ThemeProvider>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        ))
    )

}