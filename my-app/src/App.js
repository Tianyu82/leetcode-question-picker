import './App.css';
import React, { Fragment } from 'react';

import AddQuestions from './components/addQuestion.js';
import Title from './components/title.js';

function App() {
  return (
    <Fragment>
      <Title />
      <AddQuestions />
    </Fragment>
  );
}

export default App;
