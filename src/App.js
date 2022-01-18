import React, { useEffect, useState } from 'react';
import Quote from './components/Quote';

const quoteDB = [
  {
    id: 1,
    quote: 'It is my belief that nearly any invented quotation, played with confidence, stands a good chance to deceive.',
    author: 'Mark Twain'
  },
  {
    id: 2,
    quote: 'Most people sell their souls, and live with a good conscience on the proceeds.',
    author: 'Logan Pearsall Smith'
  },
  {
    id: 3,
    quote: 'You cannot help the poor man by destroying the rich.',
    author: 'William J. H. Boetcker'
  },
  {
    id: 4,
    quote: 'Faith is not belief without proof, but trust without reservations.',
    author: 'Elton Trueblood'
  },
  {
    id: 5,
    quote: 'An inflated consciousness is always egocentric and conscious of nothing but its own existence. It is incapable of learning from the past, incapable of understanding contemporary events, and incapable of drawing right conclusions about the future. It is hypnotized by itself and therefore cannot be argued with. It inevitably dooms itself to calamities that must strike it dead.',
    author: 'Carl Gustav Jung'
  }
];

function App() {
  const [quote, setQuote] = useState(quoteDB[0])

  const handleQuotePrevClick = (e) => {
    if (quote.id == 1) { setQuote(quoteDB[quoteDB.length - 1]) }
    else setQuote(quoteDB[quote.id - 2])
  };

  const handleQuoteNextClick = (e) => {
    if (quote.id == quoteDB.length) { setQuote(quoteDB[0]) }
    else setQuote(quoteDB[quote.id]);
  };

  return(
    <div className="app">
      <h1>Re-Mind App</h1>
      <h3>let's get this app party started!</h3>
      <Quote 
        idnum={quote.id}
        quote={quote.quote}
        author={quote.author}
        handleQuotePrevClick={handleQuotePrevClick}
        handleQuoteNextClick={handleQuoteNextClick}
      />
    </div>
  );
};

export default App;