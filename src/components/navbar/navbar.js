import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function NavBar(){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
          <AppBar style={{ background: '#e75300' }} position="static">
            <Toolbar>
              <Typography variant="h8" className={classes.title}>
                BANDEJAS
              </Typography>
              <Button color="inherit">Cerrar sesión</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default NavBar;
