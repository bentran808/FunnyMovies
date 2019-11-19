import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

class VideoItem extends Component {
  render () {
    const {video} = this.props;
    return (
      <Grid
        container
        direction="row"
        spacing={2}
        justify="center"
        alignItems="flex-start"
      >
        <Grid item md={4} xs={12}>
          <iframe
            width="420"
            height="245"
            src={`https://www.youtube.com/embed/${video.link.slice (17, 28)}`}
            allowFullScreen
            title="video"
            key={video.id}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <div key={video.id}>
            <Typography component="h2">{video.title}</Typography>
            <Typography component="h3">
              Shared by :
              {video.author}
              <IconButton aria-label="vote-up">
                <Icon>thumb_up</Icon>
              </IconButton>
              <IconButton aria-label="vote-down">
                <Icon>thumb_down</Icon>
              </IconButton>
            </Typography>
            <Typography component="h3">
              89<Icon fontSize="small">thumb_up</Icon>
              12<Icon fontSize="small">thumb_down</Icon>
            </Typography>
            <Typography component="h3">Description</Typography>
            <Typography component="p">{video.description}</Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default VideoItem;
