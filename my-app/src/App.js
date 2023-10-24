import './App.css';
import React, { Fragment } from 'react';

import AddQuestions from './components/addQuestion.js';
import Title from './components/title.js';
import GetQuestions from './components/getQuestions';
import QuestionDifficulty from './components/QuestionDifficulty';

function App() {
  return (
    <Fragment>
      <Title />
      <AddQuestions />
      <QuestionDifficulty />
      <GetQuestions />
    </Fragment>
  );
}

export default App;
