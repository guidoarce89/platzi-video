import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist(props) {
  const playlist = props.playlist;

  return (
    <div className="Playlist">
      {
        playlist.map((item) => {
          return <Media key={item.id} handleClick={props.handleOpenModal} {...item} />
        })
      }
    </div>
  )
}

export default Playlist;