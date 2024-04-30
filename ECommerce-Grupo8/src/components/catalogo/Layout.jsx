import {Grid} from "@mui/material";
import SidebarFilter from "./SidebarFilter.jsx";







const Layout = () => {
    return(
        <Grid container >
            <Grid item xs={4} sm={3} md={2} sx={{padding:'5px'}} >
                <SidebarFilter></SidebarFilter>
            </Grid>
        </Grid>
    );
}


export default Layout;