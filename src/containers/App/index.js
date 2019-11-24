import React, {Component} from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../../commons/Theme';
import VideoList from '../VideoList';
import Header from '../../components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShareVideo from '../ShareVideo';
import {Provider} from 'react-redux';
import configureStore from '../../redux/configureStore';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

const store = configureStore ();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <ToastContainer />
            <Header />
            <Switch>
              <Route path="/" exact component={VideoList} />
              <Route path="/share" component={ShareVideo} />
              <Route render={() => <h3>Not Found</h3>} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles (styles) (App);
