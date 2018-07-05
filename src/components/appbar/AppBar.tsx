import { AppBar as TopBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import * as React from "react";
import me from './me.jpeg';

export class AppBar extends React.Component {
    public render() {
        return (
            <TopBar position="static">
                <Toolbar>
                    <Avatar alt="Me" src={me} />
                    <Typography variant="title" color="inherit">
                        Alessandro Galli
                    </Typography>
                    <Button color="inherit">Me</Button>
                    <Button color="inherit">Projects</Button>
                </Toolbar>
            </TopBar> 
        )
    }
}