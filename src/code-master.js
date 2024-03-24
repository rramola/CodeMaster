import DetermineNumberofQuestions from "./components/DetermineNumberOfNewQuestions";
import CreateNewQuiz from "./components/CreateNewQuiz";
import QuizID from "./components/getQuizId";
import JsonHandler from "./components/json-handler";
import EditQuiz from "./components/Updater/updateQuiz"
import {useState} from 'react';

function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [showJsonHandler, setShowJson] = useState(false);
  const [modifierId, setModifierId] = useState(null);
  const [numofQuestions, setnumofQuestions] = useState();

  function handleButtonClick(id){
    setQuizId(id);
    setShowJson(true);
  }

  function setQuestionsNum(num){
    setnumofQuestions(num)
  }

  return (
    <div className="App">
      {/* <DetermineNumberofQuestions prop = {setQuestionsNum}/>
      <CreateNewQuiz prop ={numofQuestions}/> */}
      <div className="header">
        <p>Hello CoderMaster!</p>
      </div>
      <div>
        <QuizID handleButtonClick={handleButtonClick}/>
      </div>
      {showJsonHandler &&
        <div className="appContainer">
          <JsonHandler quizId = {quizId}/>
          <EditQuiz quizId={quizId}/>
        </div>
      }
      
    </div>   
  );
}

export default CodeMaster;



