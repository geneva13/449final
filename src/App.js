import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdviceComponent from './AdviceComponent'; 
import yourImage2 from './Group2.png'; 
import brain from './KYB_Brain_Basics_Brain040522.png';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getRandomQuote();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted email:', email);

    setEmail('');
  };

  async function getRandomQuote() {
    let resp = await axios.get(`https://dummyjson.com/quotes/random`);
    setQuote(resp.data.quote);
    setAuthor(resp.data.author);
  }





  return (
    <div className='App'>
      <header className="App-header"> 
      <img className="img-top" src={yourImage2} alt="logo" style={{ width: 100, height: 'auto' }} />
        <h1>ADVICE GENERATOR</h1>
      </header>

      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="left-column">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body d-flex justify-content-center align-items-center">
            <img className="card-img-top" src={brain} alt="Brain" style={{ width: 100, height: 'auto' }} />
            </div>
            <div className="card-body">
              <p className="card-text">Advice can be useful for an array of human situations including self transformation, knowledge, and decision making. In this site, we've compiled a selection of advice and quote producing APIs, that regenerate by clicking or loading the screen.</p>
            </div>
          </div>
        </div>

        <div className='advice'>
          <h2>Advice Slip</h2>
          <p>Reload every 2 seconds to draw a new piece of randomly-generated advice</p>
          <AdviceComponent /> 
          <h2>Quote Generator</h2>
          <Card className='bg-light custom-card'>
            <Card.Body className='text-center my-4'>
              <Card.Text>"{quote}"</Card.Text>
              <Card.Text className='text-end'>--- {author}</Card.Text>
              <Button className='bg-navy mt-3' onClick={getRandomQuote}>Generate Random Quote</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='form-center'>
      <h3 style={{ marginRight: '10px' }}>Subscribe to recieve weekly knowledge</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="custom-email-input" />
        </Form.Group>
        <Button variant="primary" type="submit">Subscribe</Button>
      </Form>
    </div>
    </div>
  );
}

export default App;