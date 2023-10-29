import React from 'react';
import {Fragment, useState} from 'react';

const AddQuestions = () =>{

    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("Easy");
    
    const onSubmitForm = async () =>{
        try {
            const body = {
                "id": id,
                "name": name,
                "difficulty": difficulty
            }
            const response = await fetch('http://localhost:5000/questions', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }
    
    return (
        <Fragment>
            <div className=" container justify-content-center align-items-center mt-3">
                <form className="form-inline" onSubmit={onSubmitForm}>
                    <label for="questionID">Question ID :  </label>
                    <input className="form-control ml-2" type="text" name="qID" id="questionID" size="5" value={id} onChange={e=>setID(e.target.value)} />
                    <label className="ml-3" for="questionName">Question Name :  </label>
                    <input className="form-control ml-2" type="text"  name="qName" id="questionName" size="50" value={name} onChange={e=>setName(e.target.value)}/>
                    <label className="ml-3" for="difficulty">Difficulty :  </label>
                    <select className="form-control ml-2" id="difficulty" onChange={e=>setDifficulty(e.target.value)}>
                        <option value="Easy" id="opt_easy">Easy</option>
                        <option value="Medium" id="opt_medium">Medium</option>
                        <option value="Hard" id="opt_hard">Hard</option>
                    </select>
                    <button type="button" className="btn ml-5" onClick={onSubmitForm}>Add</button>
                </form>
            </div>
            
        </Fragment>
    );
}

export default AddQuestions;