import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './styles';
import VideoItem from '../../components/VideoItem';

const listVideo = [
  {
    id: 1,
    title: 'Birds',
    author: 'bentran808@gmail.com',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: 'https://youtu.be/vOXZkm9p_zY',
  },
  {
    id: 2,
    title: 'Natural',
    author: 'bentran808@gmail.com',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: 'https://youtu.be/0I647GU3Jsc',
  },
  {
    id: 3,
    title: 'Bad Liar',
    author: 'bentran808@gmail.com',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: 'https://youtu.be/uEDhGX-UTeI',
  },
];

class ListVideo extends Component {
  renderVideo () {
    let xhtml = null;
    xhtml = (
      <div>
        {listVideo.map (video => {
          return (
            <VideoItem video={video}></VideoItem>
          );
        })}
      </div>
    );
    return xhtml;
  }

  render () {
    return (
      <div>
        {this.renderVideo ()}
      </div>
    );
  }
}

export default withStyles (styles) (ListVideo);
