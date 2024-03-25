import DetermineNumberofQuestions from "./components/CreateQuiz/DetermineNumberOfNewQuestions";
import CreateNewQuiz from "./components/CreateQuiz/CreateNewQuiz";
import QuizID from "./components/JsonHandling/getQuizId";
import JsonHandler from "./components/JsonHandling/json-handler";
import EditQuiz from "./components/Updater/updateQuiz"
import DeleteQuiz from "./components/DeleteQuiz/deleteQuiz"
import {useState} from 'react';

function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [showJsonHandler, setShowJson] = useState(false);
  const [numofQuestions, setnumofQuestions] = useState();
  const [name, setName] = useState('');

  function handleButtonClick(id){
    setQuizId(id);
    setShowJson(true) 
  }

  function setQuestionsNum(num, name){
    setnumofQuestions(num);
    setName(name);
  }

  return (
    <div className="App">
      <div class="appContainer">
      <div className="header">
        <p>Hello CodeMaster!</p>
      </div>
      {/* VIEW */}
      <QuizID handleButtonClick={handleButtonClick}/>
      <h1 className="divider">OR</h1>
      {/* CREATE */}
      <DetermineNumberofQuestions prop = {setQuestionsNum}/>
      <CreateNewQuiz prop ={[numofQuestions, name]}/>
    </div>
    {showJsonHandler &&
      <div className="appContainer">
        {/* Grab */}
        <JsonHandler quizId = {quizId}/>
        {/* EDIT */}
        <EditQuiz quizId={quizId}/> 

        {/* DELETE */}
        <DeleteQuiz quizId={quizId}/>
    </div>
    }
    </div>
  );
}

export default CodeMaster;


