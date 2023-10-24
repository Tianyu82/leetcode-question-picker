import React, {useState} from 'react';

const QuestionDifficulty = ()=>{
    
    const [difficulty, setDifficulty] = useState("Chill Mode");

    return(
        <div class="container justify-content-center align-items-center">
            <form >
                <label>Choose your intervie mode : </label>
                <select class="mt-5 ml-3">
                    <option value="Chill Mode">Chill Mode</option>
                    <option value="Moderate Mode">Moderate Mode</option>
                    <option value="Challenging Mode">Challenging MOde</option>
                </select>
                <button class="ml-5 btn btn-success">Start Interview</button>
            </form>
        </div>
        
    );
};

export default QuestionDifficulty;