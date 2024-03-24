import DetermineNumberofQuestions from "./components/DetermineNumberOfNewQuestions";
import CreateNewQuiz from "./components/CreateNewQuiz";
import QuizID from "./components/getQuizId";
import JsonHandler from "./components/json-handler";
import {useState} from 'react';
import EditQuiz from "./components/Updater/updateQuiz";


function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [showJsonHandler, setShowJson] = useState(false);
  const [modifierId, setModifierId] = useState(null);
  const [numofQuestions, setnumofQuestions] = useState();

  function handleButtonClick(id, modifier){
    setQuizId(id);
    setShowJson(true);
    setModifierId(modifier)
  }
  
  if (modifierId === "1") {
    console.log("1")
  }
  if (modifierId === "2") {
    console.log("2")
  }
  if (modifierId === "3") {
    console.log("3")
  }
  if (modifierId === "4") {
    console.log("4")
  }

  function setQuestionsNum(num){
    setnumofQuestions(num)
  }

  return (
    <div className="App">
      <DetermineNumberofQuestions prop = {setQuestionsNum}/>
      <CreateNewQuiz prop ={numofQuestions}/>
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



