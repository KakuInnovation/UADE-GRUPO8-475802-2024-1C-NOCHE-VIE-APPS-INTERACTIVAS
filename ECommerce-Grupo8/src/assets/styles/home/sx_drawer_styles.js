
import '../../fonts/Tisa/Tisa.css'

const background = ' linear-gradient(173deg, rgba(119,41,25,1) 0%, rgba(110,31,78,1) 0%, rgba(203,113,43,1) 0%, rgba(184,61,136,1) 100%);'
const backgroundItem =   'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)';
const backgroundColor =  'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
'#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
'#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)'
export const sx_drawer_styles = {
    box_container:{
        width: 250,
        height: '100%',
        backgroundColor:'#b48fa3',
    },
    grid:{
        display:'flex',
        width:'100%',
        padding:'5px',


    },
    grid_box_container:{
        height: {xs:'',md:'',lg:'',xl:'200px'},
        width: '100%',

        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        background:backgroundColor,
        padding:'10px',
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        borderLeftRadius:'10px',
        borderRightRadius:'10px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        border: '2px solid #b1afaf',


    },
    grid_product_container:{
        display:'flex',
        background:'#ea08bf',
        height:{xs:'',md:'',lg:'',xl:'50px'},
        justifyContent:'center',
        alignItems:'center',
        borderLeft: '2px solid #b1afaf',
        borderRight: '2px solid #b1afaf',
        borderTop:'2px solid #b1afaf',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',

    },

    product_typography:{
      fontFamily:'Tisa Sans Pro Bold',
        textShadow: '1px 1px 2px #000',
        width:'80%',
        textAlign:'center',
        padding:{xs:'',md:'',lg:'',xl:'5px'},
        color: '#d5c9c9'

    },

    grid_shopping_cart_container:{
        display:'flex',
        background:backgroundItem,
        flexWrap:'wrap',
        justifyContent:'center',
        border: '2px solid #b1afaf',
        borderBottomRightRadius:'10px',
        borderBottomLeftRadius:'10px',
    },


    shopping_cart_quantity:{
        display:'flex',
        width:'100%',
        height:{xs:'',md:'',lg:'',xl:'40px'},
        justifyContent:'center',
        paddingLeft:'10px',
        alignItems:'center',
        borderBottom: '2px solid #b1afaf',
        background:backgroundItem
    },
    quantity_typography:{
        fontFamily:'Tisa Sans Pro Bold',
        padding:{xs:'',md:'',lg:'',xl:'5px'},
        width:{xs:'',md:'',lg:'',xl:'70%'},
        textAlign: 'center',
        textShadow: '1px 1px 2px #000',
        color: '#d5c9c9'
    },
    shopping_cart_remove_container:{
        display:'flex',
        background:'#c4667e',
        width:{xs:'',md:'',lg:'',xl:'50%'},
        justifyContent:'center',
        borderLeft: '2px solid #b1afaf',
        borderBottomRightRadius:'10px',
    },
    shopping_cart_add_decrease_products:{
        display:'flex',
        width:{xs:'',md:'',lg:'',xl:'50%'},
        justifyContent:'center',
        background:'#aac597',
        borderBottomLeftRadius:'10px',
    },
    button_container:{
        width:{xs:'',md:'',lg:'',xl:'100%'},
        padding:'5px',
        backgroundColor:'#a8109b',
        paddingRight:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    box_container_subtotal:{
        backgroundColor:'white',
        padding:'5px'
    },
    subtotal:{
        display:'flex',
        gap:{xs:"",md:'',lg:'',xl:'10px'},
        justifyContent:'space-around',
        fontFamily:'Tisa Sans Pro Bold',
        textShadow: '1px 1px 2px #000',
    },


    button_checkout:{
        backgroundImage:  'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
            '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
            '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
        fontFamily:'Tisa Sans Pro Bold',
        color: '#d5c9c9',
        textShadow: '1px 1px 2px #000',
    },







}