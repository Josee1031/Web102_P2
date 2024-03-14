import './App.css';
import Card from './components/card';
import { useState } from 'react';
import Input from './components/input'
import Gibson from './assets/gibson.jpeg';
import Strat from './assets/strat.jpeg';
import SRV from './assets/SRV.jpg';
import FV from './assets/FV.jpeg';

interface ElectricGuitarTrivia {
  question: string;
  answer: string;
  img: string; // Adjusted to string since imported images are resolved to strings
}

const electricGuitarTriviaData: ElectricGuitarTrivia[] = [
  {
    question: "What is the name of the iconic double-cutaway electric guitar designed by Les Paul?",
    answer: "Gibson Les Paul",
    img: Gibson, // Directly use imported image
  },
  {
    question: "What Fender is known for its distinctive three single-coil pickups?",
    answer: "Stratocaster",
    img: Strat, // Directly use imported image
  },
  {
    question: "What brand of electric guitar is known for its V-shaped body?",
    answer: "Flying V",
    img: FV, // Directly use imported image
  },
  {
    question: "Who is the legendary guitarist known as 'The King of the Blues' and a pioneer of the Stratocaster?",
    answer: "Stevie Ray Vaughan",
    img: SRV, // Directly use imported image
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize state to track the current index

  const handleToggleForward = () => {
    // Update the current index to the next item, wrapping back to 0 if at the end of the array
    setCurrentIndex((prevIndex) => (prevIndex + 1) % electricGuitarTriviaData.length);
  };
  const handleToggleBackward = () => {
    // Update the current index to the next item, wrapping back to 0 if at the end of the array
    setCurrentIndex((prevIndex) => (prevIndex - 1) >= 0 ? prevIndex - 1 : 0)
  };


  return (
    <>
      <h1>Electric Guitar Trivia</h1>
      <div>
        {/* Display only the current card based on currentIndex */}
        <Card
          question={electricGuitarTriviaData[currentIndex].question}
          answer={electricGuitarTriviaData[currentIndex].answer}
          img={electricGuitarTriviaData[currentIndex].img} // Passed directly as a string
        />
        {/* Button to toggle to the next card */}
      
        <Input answer = {electricGuitarTriviaData[currentIndex].answer}/>
      </div>
      <div>
        <button onClick={handleToggleBackward} className ='button'> Back </button>
        <button onClick={handleToggleForward} className ='button'>Next</button>
      </div>
    </>
  );
}

export default App;
