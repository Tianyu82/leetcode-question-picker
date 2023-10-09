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

app.listen(PORT, ()=> {
    console.log("The server is running on https://localhost:5000")
});