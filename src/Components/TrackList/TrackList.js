import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

class TrackList extends React.Component {
  render () {
      return (
        <div className="TrackList">
          {this.props.tracks.map(track => {
            return <Track track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} key={track.id}/>}
          )}
        </div>);
  }
}
export default TrackList;
