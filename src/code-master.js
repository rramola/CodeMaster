import DetermineNumberofQuestions from "./components/DetermineNumberOfNewQuestions";
import CreateNewQuiz from "./components/CreateNewQuiz";
import QuizID from "./components/JsonHandling/getQuizId";
import JsonHandler from "./components/JsonHandling/json-handler";
import EditQuiz from "./components/Updater/updateQuiz"
import {useState} from 'react';
import DeleteQuiz from "./components/DeleteQuiz/deleteQuiz";

function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [showJsonHandler, setShowJson] = useState(false);
  const [modifierId, setModifierId] = useState(null);
  const [numofQuestions, setnumofQuestions] = useState();
  const [name, setName] = useState('')

  function handleButtonClick(id, modifier){
    setQuizId(id);
    setShowJson(true);
    }


  function setQuestionsNum(num, name){
    setnumofQuestions(num);
    setName(name);
  }

  if (x === 3) {
  console.log("yay")
  }

  return (
    <div className="App">
      <DetermineNumberofQuestions prop = {setQuestionsNum}/>
      <CreateNewQuiz prop ={[numofQuestions, name]}/>
      {/* <div className="header">
        <p>Hello CoderMaster!</p>
      </div>
      <div>
        <QuizID handleButtonClick={handleButtonClick}/>
      </div>
      {showJsonHandler &&
        <div className="appContainer">
          <JsonHandler quizId = {quizId}/>
          {/* <EditQuiz quizId={quizId}/> */}
          <DeleteQuiz quizId={quizId}/>
        </div>
      } */}
      
    </div>   
  );
}
export default CodeMaster;



