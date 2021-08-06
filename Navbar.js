import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";



const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [example] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "primary" : example}
        className={`${isCustomColor && classes.customColor} ${isCustomHeight && classes.customHeight
          }`}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            size="small"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CUSTOMER MANAGEMENT SYSTEM
          </Typography>

          <IconButton color="inherit" size="small" className={classes.menuButton}
            onClick={() => { history.push("/") }}>
            <Typography variant="h16" className={classes.push}> Home
            </Typography>
          </IconButton>

          <IconButton color="inherit" size="small" className={classes.menuButton}
            onClick={() => { history.push("/addcustomer") }}>
            <Typography variant="h16" className={classes.push}>  Add Customer 
            </Typography>
          </IconButton>

          <IconButton color="inherit" size="small" className={classes.menuButton}
            onClick={() => { history.push("/customers") }}  >
            <Typography variant="h16" className={classes.push}>
              Show All
            </Typography>
          </IconButton>

        </Toolbar>
      </AppBar>
      <Toolbar />


    </React.Fragment>
  );
}
