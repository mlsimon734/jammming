import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'Playlist Name',
      playlistTracks: []
      //{name: 'Song'},{artist: 'Artist'},{album: 'Album'}
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    let playlist = this.state.playlistTracks;
    if (this.state.playlistTracks.indexOf(track) === -1) {
      playlist.push(track);
      this.setState({playlistTracks: playlist})
    }
  }
  removeTrack(track) {
    let playlist = this.state.playlistTracks;
    if (this.state.playlistTracks.indexOf(track) >= 0) {
      playlist.splice(this.state.playlistTracks.indexOf(track), 1);
      this.setState({playlistTracks: playlist})
    }
  }
  updatePlaylistName(name) {
     this.setState({playlistName: name});
  }
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => {return track.uri});
  }
  search(searchTerm) {
    console.log(searchTerm);
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
