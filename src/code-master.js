import DetermineNumberofQuestions from "./components/Creator/DetermineNumberOfNewQuestions";
import CreateNewQuiz from "./components/Creator/CreateNewQuiz";
import QuizID from "./components/JsonHandling/getQuizId";
import JsonHandler from "./components/JsonHandling/json-handler";
import EditQuiz from "./components/Updater/updateQuiz"
import {useState} from 'react';
import DeleteQuiz from "./components/DeleteQuiz/deleteQuiz";

function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [showJsonHandler, setShowJson] = useState(false);
  const [numofQuestions, setnumofQuestions] = useState();
  const [name, setName] = useState('')

  function handleButtonClick(id){
    setQuizId(id);
    setShowJson(true);
  }

  function setQuestionsNum(num, name){
    setnumofQuestions(num);
    setName(name);
  }

  return (
    <div className="App">
      <div className="header">
        <p>Hello CoderMaster!</p>
      </div>
      <div>
        {/* VIEW */}
        <QuizID handleButtonClick={handleButtonClick}/>
      </div>
      {showJsonHandler &&
        <div className="appContainer">

          {/* VIEW */}
          <JsonHandler quizId = {quizId}/>

          {/* CREATE */}
          <DetermineNumberofQuestions prop = {setQuestionsNum}/>
          <CreateNewQuiz prop ={[numofQuestions, name]}/>

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



