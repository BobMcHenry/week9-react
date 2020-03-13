import React from 'react';
import FilmTile from './FilmTile'
class FilmList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {myApiCall:  []};
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/film/all')
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((resData) => {
                this.setState({myApiCall: resData});
            })
            .catch((err) => console.error("An Error occured", err));
    }

    render() {
        return <ul> {this.state.myApiCall.map(
        (myLi) => <FilmTile 
                filmTitle={myLi.title} 
                filmDescription={myLi.description}
                filmReleaseYear={myLi["release_year"]}
                filmRating={myLi.rating}
            ></FilmTile>)
        } </ul>
    }
}

export default FilmList;

/*
{"film_id":1,
"title":"ACADEMY DINOSAUR",
"description":"A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
"release_year":2006,"language_id":1,
"original_language_id":null,"rental_duration":6,"rental_rate":0.99,"length":86,
"replacement_cost":20.99,
"rating":"PG","special_features":"Deleted Scenes,Behind the Scenes",
"last_update":"2006-02-15T13:03:42.000Z"}
*/