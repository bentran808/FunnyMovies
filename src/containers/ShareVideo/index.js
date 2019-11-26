import React, {Component} from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import styles from '../ShareVideo/styles';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import {compose, bindActionCreators} from 'redux';
import {reduxForm, Field} from 'redux-form';
import renderTextField from '../../components/TextField';
import {connect} from 'react-redux';
import * as videoActions from '../../actions/video';
import {Link} from 'react-router-dom';

class ShareVideo extends Component {
  handleSubmitForm = data => {
    const {videoActionsCreators} = this.props;
    const {shareVideo} = videoActionsCreators;
    const {title, description, link} = data;
    shareVideo (link, title, description);
  };

  required = value => {
    let error = 'Please enter youtube url';
    if (
      value !== null &&
      typeof value !== 'undefined' &&
      value.trim () !== ''
    ) {
      error = null;
    }
    return error;
  };

  render () {
    const {classes, handleSubmit, invalid, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit (this.handleSubmitForm)}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Share a Youtube movie
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Field
                  id="outlined-url"
                  label="Youtube URL"
                  name="link"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  component={renderTextField}
                  validate={this.required}
                />
                <Field
                  id="outlined-title"
                  label="Title"
                  name="title"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  component={renderTextField}
                />
                <Field
                  id="outlined-description"
                  label="Description"
                  name="description"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  component={renderTextField}
                />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              variant="contained"
              type="submit"
              disabled={invalid || submitting}
              component={Link}
              to="/"
            >
              Share
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

ShareVideo.propTypes = {
  classes: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  videoActionsCreators: PropTypes.shape ({
    shareVideo: PropTypes.func,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    videoActionsCreators: bindActionCreators (videoActions, dispatch),
  };
};

const FORM_NAME = 'SHARE_VIDEO';

const withReduxForm = reduxForm ({
  form: FORM_NAME,
});

const withConnect = connect (mapStateToProps, mapDispatchToProps);

export default compose (withStyles (styles), withReduxForm, withConnect) (
  ShareVideo
);
