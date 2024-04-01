//import logo from './logo.svg';
import './App.css';


const movielist = [
  {id: 1, title: 'Scott Pilgrim VS The World', isAvailable: true},
  {id: 2, title: 'SpiderMan Far from Home', isAvailable: true},
  {id: 3, title: 'Elf (2003)', isAvailable: false},
];
const Book = {
title: 'Back to the Future',
director: 'Robert Zemeckis',
};
function MovieRack() {
  const listMovies = movielist.map(movielist =>
    <li
    key={movielist.id}
    style={{
      color: movielist.isAvailable ? 'green' : 'red'
    }}
  >
  {movielist.title}
  </li>
  );
  return (
    <ul>{listMovies}</ul>
  )
}

function Bookshelf() {
  return(
    <>
    <p>Title: {Book.title}</p>
    <p>Director: {Book.director}</p>
    
    </>
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <h2>Our Current Movie Recommendation:</h2>

        <Bookshelf />
      <h2>Trending Titles: (Green if IMBD rating over 8)</h2>
        <MovieRack />
      </header>
    </div>
  );
}

export default App;
 