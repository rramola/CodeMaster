import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({handleNavbarClick, handleGoBack}) {

  function handleHomeClick(){
    handleGoBack();
  }

  function handleNewQuizClick(){
    handleNavbarClick();
  }

  return (
    <nav className="navBar">
      <h1>A great educational tool by Ctrl-alt-elite</h1>
      <ul>
        <li><Link to='/QuizID' onClick={handleHomeClick}>Home</Link></li>
        <li><Link to='/DetermineNumberOfNewQuestions' onClick={handleNewQuizClick}>Make A New Quiz</Link></li>
      </ul>
    </nav>
  );
}

