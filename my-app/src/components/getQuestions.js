import React from 'react';
import {useState, useEffect, Fragment} from 'react';


const GetQuestions = () =>{
    
    const [searchText, setSearchText] = useState("");
    const [questions, setQuestions] = useState([]);

    const onSearchQuestion = async (searchText) =>{
        try {
            const response = await fetch(`http://localhost:5000/questions/${searchText}`);
            const jsonData = await response.json();
            const questionsArray = Array.isArray(jsonData) ? jsonData : [jsonData];
            setQuestions(questionsArray);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleInputChange = (e) =>{
        setSearchText(e.target.value);
    };

    useEffect(() => {
        onSearchQuestion(searchText);
    }, [searchText]);

    return (
        <Fragment>
            <div class="container mt-5 justify-content-center align-items-center">
                <form>
                    Search questions by id or name : <input type="search" placeholder="Search Here" value={searchText} onChange={handleInputChange} />
                    <button type="button" class="ml-3" onClick={()=>onSearchQuestion(searchText)}>Search</button>
                    <button type="button" class="ml-2" onClick={()=>setSearchText("")}>Clear</button>
                </form>
            </div>
            
            <table class="table mt-5 text-center">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Difficulty</th>
                </tr>
                </thead>
                <tbody>
                {questions.map(question=>(
                    <tr>
                        <td>{question.question_id}</td>
                        <td>{question.question_name}</td>
                        <td>{question.difficulty}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default GetQuestions;


