const express = require("express");
const app = express();
const cors = require("cors");
const PORT=5000;

const pool = require("./db");

app.use(cors());
app.use(express.json());

//create a new record
app.post("/questions", async (req, res)=>{
    try {
        const {id, name, difficulty} = req.body;
        const newQuestion = await pool.query(
            "INSERT INTO questions (question_id, question_name, difficulty) VALUES($1, $2, $3) RETURNING *", 
            [id, name, difficulty]
        );
        res.json(newQuestion.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all records
app.get("/questions", async (req, res) =>{
    try {
        const records = await pool.query("SELECT * FROM questions");
        res.json(records.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a record
app.get("/questions/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        const record = await pool.query("SELECT * FROM questions WHERE question_id = $1", [id]);
        res.json(record.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get a number of random records with the customized difficulty(mode)
//mode = {easy, medium, hard}
app.get("/questions/random/:num/:mode", async (req, res) =>{
    try {
        const {num, mode} = req.params;
        const record = await pool.query("SELECT * FROM questions WHERE difficulty=$1 ORDER BY random() limit $2", [mode,num]);
        res.json(record.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//update a record
app.put("/questions/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        const {question_name, difficulty} = req.body;
        const updatedRecord = await pool.query(
            "UPDATE questions SET question_name=$1, difficulty=$2 WHERE question_id=$3 RETURNING *",
            [question_name, difficulty, id]
        );
        res.json(
            {
                message: "record is updated",
                updatedRecord: updatedRecord.rows[0]
            }
        );
    } catch (err) {
        console.error(err.message);
    }
});

//delete a record
app.delete("/questions/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        await pool.query("DELETE FROM questions WHERE question_id=$1", [id]);
        res.json("The question is successfully deleted");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(PORT, ()=> {
    console.log("The server is running on https://localhost:5000")
});