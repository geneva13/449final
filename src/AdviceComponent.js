import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const AdviceComponent = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        const { advice } = response.data.slip;
        setAdvice(advice);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };

    fetchAdvice();
  }, []);

  return (
    <Card className="bg-light custom-card">
      <Card.Body className="text-center my-4">
        <Card.Title>Your Results:</Card.Title>
        <Card.Text>{advice}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AdviceComponent;
