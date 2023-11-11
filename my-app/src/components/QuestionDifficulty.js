import React, {useState} from 'react';

const QuestionDifficulty = ()=>{
    
    const [difficulty, setDifficulty] = useState("Chill Mode");
    const [questionLinkNames, setQuestionLinkName] = useState([]);

    const getQuestions = async (e) =>{
        e.preventDefault();
        try {
            const modeName = parseModeName(difficulty);
            const response = await fetch(`http://localhost:5000/questions/random/${modeName}`); 
            const jsonData = await response.json();
            console.log(jsonData);
            const names = jsonData.map(question => question.question_name); 
            const links = names.map(convertQuestionNameToLink);
            setQuestionLinkName(links);
        } catch (err) {
            console.error(err.message);
        }
    };

    const parseModeName = (difficulty) => difficulty.split(" ")[0];

    const convertQuestionNameToLink = (questionName)=>{
        let linkString = "https://leetcode.com/problems/";
        const splitedArray = questionName.split(" ");
        for(var i=0; i<splitedArray.length; i++){
            linkString = linkString + splitedArray[i] + "-";
        }
        linkString = linkString.slice(0, linkString.length-1) + "/";
        return linkString;
    };

    const handleDifficulty = (e) =>{
        setDifficulty(e.target.value);
    };

    return(
        <div className="container justify-content-center align-items-center">
            <form onSubmit={getQuestions}>
                <label>Choose your intervie mode : </label>
                <select className="mt-5 ml-3" value={difficulty} onChange={handleDifficulty}>
                    <option value="Chill Mode" key="Chill">Chill Mode</option>
                    <option value="Moderate Mode" key="Moderate">Moderate Mode</option>
                    <option value="Challenging Mode" key="Challenging">Challenging Mode</option>
                </select>
                <button className="ml-5 btn btn-success" type="submit">Start Interview</button>
            </form>

            <div>
                <ul>
                    {questionLinkNames.map((name, index) => (
                        <span key={index}>
                            <li> <a  href={name}> {name} </a> </li>
                        </span>
                    ))}
                </ul>
            </div>
        </div>
        
    );
};

export default QuestionDifficulty;