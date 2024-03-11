
import React from 'react';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import cards from './data/cardsData.js';
import './styles/app.css';

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <div role="main" className='content'>
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <Card {...card} id={index} />
              {index < cards.length - 1 && <hr className='rule' />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;