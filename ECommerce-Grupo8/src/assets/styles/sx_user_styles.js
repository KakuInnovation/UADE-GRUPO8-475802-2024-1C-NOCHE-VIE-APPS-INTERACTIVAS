import '../fonts/Tisa/Tisa.css'

export const sx_user_styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        height:"auto",
        flexDirection:"column",
    },
    grid_container: {
        height: 'auto',

        justifyContent:'center',
        alignItems:'center',
        width:'90%',
    },
    grid_item:{
        display: 'flex',
        justifyContent:'center',

        height: "32%",
        padding:'20px',
    },
    grid_item_title_container:{
        height: {lg:  '60px'},
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundImage: 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    grid_item_title_box: {

        height: {lg:  '100%'},
        width:'100%',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundImage: 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)',

    },

    grid_item_main_title: {
        fontFamily: 'Tisa Sans Pro Bold',
        fontSize: {xs:'35px'},
        padding:'10px',
        color:'#626161',


    },


    grid_item_title: {
        fontFamily:'Tisa Sans Pro Bold',
        fontSize:{xs:'',md:'25px', lg:'30px'},
        color:'#626161',
    },
    grid_item_dos:{
        flexDirection:'column',
        alignItems:'center',
        width:'100%',

    },
    grid_item_dos_box_container:{
        display:'flex',

        width:'90%',
        flexDirection: 'column',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        borderLeftRadius:'10px',
        borderRightRadius:'10px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
    },

    grid_item_tres:{
        display:'flex',
        flexDirection:'row',
        height:'600px',



    },
    grid_item_tres_box_container:{
        display:'flex',
        width:'90%',
        flexDirection:'row',
        backgroundColor:'rgba(12,12,12,0.36)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        borderLeftRadius:'20px',
        borderRightRadius:'20px',
        borderTopLeftRadius:'20px',
        borderTopRightRadius:'20px',

    },

    item_tres_box_title:{
        width: {lg:'40%'},
        display: 'flex',
        alignItems:"center",
        justifyContent:'center',
        backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5005ba51c4aa8b4d97619d5f/fdf69424-9e69-4478-89c2-d74d46093f43/a-dd-character-sheet-on-a-table-surrounded-by-miniatures-polyhedral-dice-and-a-pencil-trending-o-502439758.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottomLeftRadius:'20px',
        borderLeftRadius:'20px',
        borderTopLeftRadius:'20px',
    },

    item_tres_typography:{
         fontFamily:'Tisa Sans Pro Bold',
         fontSize:{xs:'50px',md:'25px', lg:'50px'},
         width:'70%',
         textAlign:'center',
        color:'#e7e7e7'



    },
    item_tres_box_exhibitor:{
        width: {lg:'60%'},
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage: 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)',
        borderRightRadius:'20px',
        borderTopRightRadius:'20px',
        borderBottomRightRadius:'20px',
    }




}