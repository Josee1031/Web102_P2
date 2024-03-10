import { useState } from 'react'

const Card = (props:{ question:string, answer:string, img:string }) => {
    const [showAnswer,setShowAnswer] = useState(false); 
    const toggleAnswer = () => setShowAnswer(!showAnswer);
   

    return (
        <>
        <div className='card' onClick={toggleAnswer}>
            <h2>{showAnswer ? props.answer :  props.question} </h2>
            <div>
                <img src={showAnswer ? props.img: ''}  /></div>
        </div>
        
        </>
        

    )
    }
export default Card