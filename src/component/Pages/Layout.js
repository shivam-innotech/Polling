import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import LoginReg from "./LoginReg";


const Layout = () => {
    return <>
        <CssBaseline />
        <Navbar />
        <LoginReg />
        <Outlet />
    </>
}

export default Layout;