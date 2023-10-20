import React from 'react';
import {Fragment, useState} from 'react';

const AddQuestions = () =>{

    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    
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
            <div class=" container justify-content-center align-items-center mt-3">
                <form class="form-inline" onSubmit={onSubmitForm}>
                    <label for="questionID">Question ID :  </label>
                    <input class="form-control ml-2" type="text" name="qID" id="questionID" size="5" value={id} onChange={e=>setID(e.target.value)} />
                    <label class="ml-3" for="questionName">Question Name :  </label>
                    <input class="form-control ml-2" type="text"  name="qName" id="questionName" size="50" value={name} onChange={e=>setName(e.target.value)}/>
                    <label class="ml-3" for="difficulty">Difficulty :  </label>
                    <select class="form-control ml-2" id="difficulty" onChange={e=>setDifficulty(e.target.value)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <button type="button" class="btn ml-5" onClick={onSubmitForm}>Add</button>
                </form>
            </div>
            
        </Fragment>
    );
}

export default AddQuestions;