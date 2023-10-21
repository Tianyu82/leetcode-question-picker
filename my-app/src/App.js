import './App.css';
import React, { Fragment } from 'react';

import AddQuestions from './components/addQuestion.js';
import Title from './components/title.js';
import GetQuestions from './components/getQuestions';

function App() {
  return (
    <Fragment>
      <Title />
      <AddQuestions />
      <GetQuestions />
    </Fragment>
  );
}

export default App;
