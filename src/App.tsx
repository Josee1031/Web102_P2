import './App.css';
import Card from './components/card';
import { useState } from 'react';
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
    question: "What Fender Stratocaster is known for its distinctive three single-coil pickups?",
    answer: "Fender Stratocaster",
    img: Strat, // Directly use imported image
  },
  {
    question: "What brand of electric guitar is known for its V-shaped body?",
    answer: "Gibson Flying V",
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

  const handleToggle = () => {
    // Update the current index to the next item, wrapping back to 0 if at the end of the array
    setCurrentIndex((prevIndex) => (prevIndex + 1) % electricGuitarTriviaData.length);
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
        <button onClick={handleToggle}>Next Card</button>
      </div>
    </>
  );
}

export default App;
