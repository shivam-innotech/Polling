import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
    return <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h5'>POLLING</Typography>
            </Toolbar>
        </AppBar>
    </>;
}

export default Navbar;