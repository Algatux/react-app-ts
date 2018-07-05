import { AppBar as TopBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from "react";

export class AppBar extends React.Component {
    public render() {
        return (
            <TopBar position="static">
                <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                    Title
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </TopBar> 
        )
    }
}