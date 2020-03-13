/* eslint-disable no-useless-constructor */
import React from 'react';

class FilmTile extends React.Component {
    filmTileStyle = {
        backgroundColor: '#777',
        padding: '10px 4px',
        border: '1px #333 solid',
        borderRadius: '10px', 
        width: '50%'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <div className='FilmTile' style={this.filmTileStyle}>
            <p>{this.props.filmTitle}</p>
            <p>{this.props.filmDescription}</p>
            <p>{this.props.filmReleaseYear + " Rated: " + this.props.filmRating}</p>

        </div>;
    }
}

export default FilmTile;