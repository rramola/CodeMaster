import Opener from "./components/OpeningPage/Main";
import DetermineNumberofQuestions from "./components/CreateQuiz/DetermineNumberOfNewQuestions";
import CreateNewQuiz from "./components/CreateQuiz/CreateNewQuiz";
import QuizID from "./components/JsonHandling/getQuizId";
import JsonHandler from "./components/JsonHandling/json-handler";
import EditQuiz from "./components/Updater/updateQuiz"
import DeleteQuiz from "./components/DeleteQuiz/deleteQuiz"
import Header from './Styling/Header';
import {useEffect, useState} from 'react';

function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [showJsonHandler, setShowJson] = useState(false);
  const [numofQuestions, setnumofQuestions] = useState();
  const [name, setName] = useState('');
  const [opener, setOpener] = useState(true);

  function handleButtonClick(id){
    setQuizId(id);
    setShowJson(true) 
  }

  function setQuestionsNum(num, name){
    setnumofQuestions(num);
    setName(name);
  }

  function setOpenerFalse(){
    setOpener(false);
  }

  useEffect(() => {
    setOpenerFalse();
  }, []);
  
    return(
      opener ? <QuizID/> : <Opener/>
    )
  // return (
  //   <div className="App">
  //       <div class="appContainer">

  //       {/* VIEW */}
  //       <QuizID handleButtonClick={handleButtonClick} />

  //       {/* CREATE */}
  //       <DetermineNumberofQuestions prop = {setQuestionsNum}/>
  //       <CreateNewQuiz prop ={[numofQuestions, name]}/>
  //     {showJsonHandler &&
  //       <div className="appContainer">
  //         {/* Grab */}
  //         <JsonHandler quizId = {quizId} />
  //         {/* EDIT */}
  //         <EditQuiz quizId={quizId} /> 

  //         {/* DELETE */}
  //         <DeleteQuiz quizId={quizId} />

  //       </div>
  //     }</div>
  // </div>
  // );
}

export default CodeMaster;

