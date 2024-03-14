import {useState} from 'react';

const Input = (props:{answer: string}) => {
    const [currentAnswer,setAnswer] = useState('');
    return(
        <div>
            <input type='text' value={currentAnswer} onChange={(e)=>setAnswer(e.target.value)} className='form' />
            <button onClick={()=>props.answer.toLowerCase() === currentAnswer.toLowerCase() ? alert('Correct') : alert('Incorrect')}>Submit</button>
        </div>
    )

}

export default Input;