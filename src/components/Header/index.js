import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  TextField,
  List,
  ListItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

class Header extends Component {
  state = {
    left: false,
  };

  render () {
    const {classes} = this.props;
    const toggleDrawer = (side, open) => event => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      this.setState ({...this.state, [side]: open});
    };

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer (side, false)}
        onKeyDown={toggleDrawer (side, false)}
      >
        <List>
          <ListItem component={Link} to="/">List Video</ListItem>
          <ListItem component={Link} to="/share">Share Video</ListItem>
        </List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer ('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <HomeIcon fontSize="large" />Funny Movies
            </Typography>
            <div>
              <TextField
                id="standard-basic"
                className={classes.textField}
                label="Username"
                type="email"
                color="secondary"
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                className={classes.textField}
                label="Password"
                type="password"
                color="secondary"
              />
            </div>
            <Button
              color="inherit"
            >
              Login / Register
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={toggleDrawer ('left', false)}>
          {sideList ('left')}
        </Drawer>
      </div>
    );
  }
}

export default withStyles (styles) (Header);
