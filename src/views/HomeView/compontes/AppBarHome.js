import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    appBar:{
        background: '#000'
    }
}));

const AppBarHome = () => {
    const classes = useStyle();
    return (  
        <AppBar>
            <Toolbar className={classes.appBar}>
                <Typography variant="h5">E-Commerce.com</Typography>
            </Toolbar>
        </AppBar>
    );
}
 
export default AppBarHome;