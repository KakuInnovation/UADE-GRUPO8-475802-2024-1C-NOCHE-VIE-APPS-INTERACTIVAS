const background_card_catalog =   'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)';


const sx_cardsGrid = {

    cardLayout:{
        width: { xs: '300px', md: '300px', lg: '315px' },
        height:{ xs: '260px', md: '260px', lg: '435px' },
        padding:'0px',
        cursor:'pointer',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
        transition: 'transform .3s ease-in-out',
        backgroundImage:background_card_catalog,
        border: '3px solid #fff',
        color:'#636363',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform .3s ease-in-out',
        },


    },
    card_content:{
        padding:'0px',
        display:'flex',
        flexDirection:'column',


    },
    box_title:{
        padding:{xs:'',md:"10px"},
        backgroundImage:  'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
            '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
            '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
    },
    title:{
        fontFamily:'Tisa Sans Pro Bold',
        textAlign:'center',

    },
    box_img:{
        width:'100%',
        backgroundImage: 'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
            '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
            '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
        objectFit: 'contain'
    },
    img:{

        height:'200px',
        width:'100%',
        objectFit: 'cover',


    },
    box_description:{
        display:'flex',
        flexWrap:'wrap',
        gap:{xs:'',md:'5px'},
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    list_item:{
        display:'flex',
        justifyContent: 'center',
        textAlign:'center',
        padding:'',

        gap:'1px',
    },

    description_bold:{
        fontFamily:'Tisa Sans Pro Regular',
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontSize:'13px',
        textAlign:'center'

    },
    description_regular:{
        fontFamily:'Tisa Sans Pro Regular',
        fontWeight: 'normal',
        lineHeight: '1.5',
        fontSize:'13px',
        textAlign:'center',

    }

}

export {sx_cardsGrid}
