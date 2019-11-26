import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './styles';
import VideoItem from '../../components/VideoItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/video';
import PropTypes from 'prop-types';

class ListVideo extends Component {
  componentDidMount () {
    const {videoActionsCreators} = this.props;
    const {fetchListVideo} = videoActionsCreators;
    fetchListVideo ();
  }

  renderVideo () {
    let xhtml = null;
    const {listVideo} = this.props;

    xhtml = (
      <div>
        {listVideo.map (video => {
          return <VideoItem video={video} />;
        })}
      </div>
    );
    return xhtml;
  }

  render () {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        {this.renderVideo ()}
      </div>
    );
  }
}

ListVideo.propTypes = {
  classes: PropTypes.object,
  videoActionsCreators: PropTypes.shape ({
    fetchListVideo: PropTypes.func,
  }),
  listVideo: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listVideo: state.video.listVideo,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    videoActionsCreators: bindActionCreators (videoActions, dispatch),
  };
};

export default withStyles (styles) (
  connect (mapStateToProps, mapDispatchToProps) (ListVideo)
);
