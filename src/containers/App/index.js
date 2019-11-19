import React, {Component} from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../../common/Theme';
import VideoList from '../VideoList';

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <VideoList />
      </ThemeProvider>
    );
  }
}

export default withStyles (styles) (App);
