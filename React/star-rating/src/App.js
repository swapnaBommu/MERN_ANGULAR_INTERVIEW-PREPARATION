
import { useState } from 'react';
import './App.css';
import StarRating from './components/StarRating';

function App() {
  const [currentRating, setCurrentRating] = useState(2);

  const handleRatingChange = (newRating) =>{
    setCurrentRating(newRating);
  }
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <StarRating 
        size={5}
        rating={currentRating}
        onChange={handleRatingChange}
      />
      <p>currentRating : {currentRating}</p>
    </div>
  );
}

export default App;
