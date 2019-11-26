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
  List,
  ListItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {reduxForm, Field} from 'redux-form';
import renderTextField from '../../components/TextField';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
  state = {
    left: false,
  };

  email = value => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test (value)
      ? 'Invalid email address'
      : undefined;
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
            <Typography className={classes.title}>
              <HomeIcon fontSize="large" />
              <Typography variant="h4">Funny Movies</Typography>
            </Typography>
            <div>
              <Field
                id="standard-basic"
                className={classes.textField}
                label="Username"
                type="email"
                name="email"
                color="secondary"
                validate={this.email}
                component={renderTextField}
              />
            </div>
            <div>
              <Field
                id="standard-basic"
                className={classes.textField}
                label="Password"
                type="password"
                name="password"
                color="secondary"
                component={renderTextField}
              />
            </div>
            <Button color="inherit">
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

Headers.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = null;

const mapDispatchToProps = null;

const FORM_NAME = 'LOGIN_REGISTER';

const withReduxForm = reduxForm ({
  form: FORM_NAME,
});

const withConnect = connect (mapStateToProps, mapDispatchToProps);

export default compose (withStyles (styles), withReduxForm, withConnect) (
  Header
);
