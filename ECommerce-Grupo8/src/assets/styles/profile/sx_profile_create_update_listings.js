
const background = 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)'
export const  sx_dialog = {

    layout: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContext: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        alignItems: 'center',

        backgroundImage: 'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
            '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
            '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
        gap:'20px',

    },
    dialogContentText: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        color: '#000',
        backgroundImage: background,
        border:'2px solid #878282',
        borderBottomLeftRadius:'20px',
        borderBottomRightRadius:'20px',
        borderLeftRadius:'20px',
        borderRightRadius:'20px',
        borderTopLeftRadius:'20px',
        borderTopRightRadius:'20px',

    },
    dialogContentText_typo:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:{xs:0,md:"10px"},
    },
    firstBox:{
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',

    },
    formControl: {
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',



    },
    formBox:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        padding:5,

    },
    box:{
        display: 'flex',
        alignItems:'center' ,
        justifyContent:'start',
        gap:'20px',
        padding:'35px',

        width:'90%',

        boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',


    }
};