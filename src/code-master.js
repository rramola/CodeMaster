import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Opener from "./components/OpeningPage/Opener";
import QuizID from "./components/JsonHandling/QuizID";
import DeleteQuiz from "./components/DeleteQuiz/deleteQuiz";
import JsonHandler from './components/JsonHandling/JsonHandler';
import DetermineNumberofQuestions from "./components/CreateQuiz/DetermineNumberOfNewQuestions";
import EditQuiz from "./components/Updater/updateQuiz";
import CreateNewQuiz from "./components/CreateQuiz/CreateNewQuiz";
import TakeQuiz from "./components/TakeQuiz/TakeQuiz";
import Header from './Styling/Header';
import Footer from "./Styling/Footer";



export default function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [displayOpener, setDisplayOpener] = useState(true);
  const [quizIdVisible, setquizIdVisible] = useState(true);
  const [showDetermineNumber, setShowDetermineNumber] = useState(false);
  const navigate = useNavigate();

  function handleDisplayOpener() {
    setDisplayOpener(false);
  }

  function handleButtonClick(id){
    setQuizId(id);
    setquizIdVisible(!quizIdVisible);
    navigate('/JsonHandler');
  }

  function handleNavbarClick(){
    setShowDetermineNumber(true);
    setquizIdVisible(false);
    navigate('/DetermineNumberOfNewQuestions');
  }

  function handleGoBack(){
    setquizIdVisible(true);
    navigate('/QuizID');
  }

  return (
    <div>
      {displayOpener ? (
        <Opener displayOpener={handleDisplayOpener} />
      ) : (
        <>
          <Header handleNavbarClick={handleNavbarClick} handleGoBack={handleGoBack}/>
          <Routes>
            {showDetermineNumber && <Route path='/DetermineNumberOfNewQuestions' element={<DetermineNumberofQuestions />} />}
            {quizId && (
              <>
                <Route path='/TakeQuiz' element={<TakeQuiz handleGoBack={handleGoBack}/>} />
                <Route path='/QuizID' element={<QuizID handleButtonClick={handleButtonClick}/>} />
                <Route path='/JsonHandler' element={<JsonHandler quizId={quizId} handleGoBack={handleGoBack} />} />
                <Route path='/DeleteQuiz' element={<DeleteQuiz handleGoBack={handleGoBack} quizId={quizId}/>} />
                <Route path='/UpdateQuiz' element={<EditQuiz quizId={quizId}/>} />
                <Route path='/CreateNewQuiz' element={<CreateNewQuiz/>}/>
              </>
            )}
            {quizIdVisible && (
              <Route path='/QuizID' element={<QuizID handleButtonClick={handleButtonClick}/>} />
            )}
          </Routes>
        </>
      )}
    </div>
  );
}
