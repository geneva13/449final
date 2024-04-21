import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import AdviceComponent from './AdviceComponent'; 
import yourImage from './affirmations.png'; 
import yourImage2 from './Group2.png'; 

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
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getRandomQuote();
    getBooks();
  }, []);

  async function getRandomQuote() {
    let resp = await axios.get(`https://dummyjson.com/quotes/random`);
    setQuote(resp.data.quote);
    setAuthor(resp.data.author);
  }

  async function getBooks() {
    try {
      const response = await fetchSupabaseData();
      setBooks(response);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  async function fetchSupabaseData() {
    const supabaseUrl = 'https://bulkffxplgttqshuifys.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bGtmZnhwbGd0dHFzaHVpZnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzYyMjMsImV4cCI6MjAyNjM1MjIyM30.8zvPt_sRI68lEu5l-_1IllS10bO4xbfWKaXMRcZhqEQ';
    const supabase = createClient(supabaseUrl, supabaseKey);
    let { data: books, error } = await supabase.from('books').select('*');
    return books;
  }

  return (
    <div className='App'>
      <header className="App-header"> 
        <img src={yourImage2} alt="Your Image" style={{ width: '100px', height: 'auto' }} />
        <h1>Advice center</h1>
      </header>
      <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='advice'>
        <h2>Advice Slip</h2>
        <p>: reload every 2 seconds to draw a new piece of advice</p>
          <AdviceComponent /> 
          <h2>Quote Generator</h2>

          <Card className='bg-light custom-card'>
            <Card.Body className='text-center my-4'>
              <Card.Text>
                "{quote}"
              </Card.Text>
              <Card.Text className='text-end'>
                --- {author}
              </Card.Text>
              <Button className='bg-navy mt-3' onClick={getRandomQuote}>
                Generate Random Quote
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <h2>Supabase Books:</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.publisher}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img src={yourImage} alt="Your Image" style={{ width: '600px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default App;