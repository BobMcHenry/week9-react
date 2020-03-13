import React from 'react';
import FilmList from './FilmList'

// function MyUL(props) {
// return <ul>{props.listStuff.map((myLi) => <li>{myLi}</li>)}</ul>;
// }

function App() {
  return (
    <div className="App">
      <h1>My Sakila Film List</h1>
      <FilmList></FilmList>
      <footer>My Footer</footer>
    </div>
  );
}


export default App;
