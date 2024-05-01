import {Grid} from "@mui/material";
import SidebarFilter from "./SidebarFilter.jsx";
import CatalogView from "./CatalogView.jsx";







const Layout = () => {
    return(
        <Grid container >
            <Grid item xs={4} sm={3} md={2} sx={{padding:'5px'}} >
                <SidebarFilter></SidebarFilter>
            </Grid>
            <Grid item xs={4} sm={4} md={10} sx={{padding:'5px'}} >
                <CatalogView></CatalogView>
            </Grid>
        </Grid>
    );
}


export default Layout;