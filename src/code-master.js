import QuizID from "./components/getQuizId";
import JsonHandler from "./components/json-handler";
import {useState} from 'react';

function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [showJsonHandler, setShowJson] = useState(false);

  function handleButtonClick(id){
    setQuizId(id);
    setShowJson(true);
  }
  
  return (
    <div className="App">
      <div className="header">
        <p>Hello CoderMaster!</p>
      </div>
      <div>
        <QuizID handleButtonClick={handleButtonClick}/>
      </div>
      {showJsonHandler &&
        <div className="test-json">
          <JsonHandler quizId = {quizId}/>
        </div>
      }   
    </div>
  );
}

export default CodeMaster;
