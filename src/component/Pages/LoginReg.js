import { Grid, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import Registration from "./auth/Registration";
import UserLogin from "./auth/UserLogin";
import Admin from "./auth/Admin";

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}
const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return <>
        <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
                <Box>
                    <Box>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label='Login'></Tab>
                            <Tab label='Sign Up'></Tab>
                            <Tab label='Admin'></Tab>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <UserLogin />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Registration />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Admin />
                    </TabPanel>
                </Box>
            </Grid>
        </Grid>
    </>;
};

export default LoginReg;