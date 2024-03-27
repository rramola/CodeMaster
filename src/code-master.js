import Opener from "./components/OpeningPage/Main";
import DetermineNumberofQuestions from "./components/CreateQuiz/DetermineNumberOfNewQuestions";
import CreateNewQuiz from "./components/CreateQuiz/CreateNewQuiz";
import QuizID from "./components/JsonHandling/getQuizId";
import JsonHandler from "./components/JsonHandling/json-handler";
import EditQuiz from "./components/Updater/updateQuiz"
import DeleteQuiz from "./components/DeleteQuiz/deleteQuiz"
import Header from './Styling/Header';
import Footer from "./Styling/Footer";
import NavBar from "./Styling/Navbar";
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
      <NavBar/>
      <Header/>
        <div class="appContainer">
        <div className="loadingScreen">
          <Opener />
        </div>
        {/* VIEW */}
        <QuizID handleButtonClick={handleButtonClick} />
        <h1 className="divider">OR</h1>
        {/* CREATE */}
        <DetermineNumberofQuestions prop = {setQuestionsNum}/>
        <CreateNewQuiz prop ={[numofQuestions, name]}/>
      {showJsonHandler &&
        <div className="appContainer">
          {/* Grab */}
          <JsonHandler quizId = {quizId} />
          {/* EDIT */}
          <EditQuiz quizId={quizId} /> 

          {/* DELETE */}
          <DeleteQuiz quizId={quizId} />

        </div>
      }</div>
      <Footer/>
  </div>
  );
}

export default CodeMaster;


