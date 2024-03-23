import DetermineNumberofQuestions from "./components/DetermineNumberOfNewQuestions";
import CreateNewQuiz from "./components/CreateNewQuiz";
import QuizID from "./components/getQuizId";
import JsonHandler from "./components/json-handler";
import Updater from "./components/Updater/updateQuiz"
import {useState} from 'react';

function CodeMaster() {
  const [quizId, setQuizId] = useState(null);
  const [showJsonHandler, setShowJson] = useState(false);
  const [numofQuestions, setnumofQuestions] = useState();

  function handleButtonClick(id){
    setQuizId(id);
    setShowJson(true);
  }

  function setQuestionsNum(num){
    setnumofQuestions(num)
  }


  return (
    <div>
      <DetermineNumberofQuestions prop = {setQuestionsNum}/>
      <CreateNewQuiz prop ={numofQuestions}/>
    </div>
    // <div className="App">
    //   <div className="header">
    //     <p>Hello CoderMaster!</p>
    //   </div>
    //   <div>
    //     <QuizID handleButtonClick={handleButtonClick}/>
    //   </div>
    //   {showJsonHandler &&
    //     <div className="appContainer">
    //       <JsonHandler quizId = {quizId}/>
    //     </div>
    //   }   
    //   {/* <Updater /> */}
    // </div>
  );
}

export default CodeMaster;



// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// // import PostPage from './components/postpage/PostPage';


// const App = () => {
//   const [apiData, setApiData] = useState([]);
//   const [singleDataPiece, setSingleDataPiece] = useState({});

//   // \/ GET ALL FUNCTIONS BELOW \/ \\
//   // Gets it all and gives it to ya.
//   // axiosGetData should be used inside a useEffect
//   // when being used for a component. Doesn't 
//   // always have to though.
//   const axiosGetAllData = async() => {
//     await axios.get('http://localhost:9000/api')
//     .then(res => {
//       const returnedApiData = res.data;
//       setApiData(returnedApiData);
//     })
//   }
//   // ||   Should be used for the initial get all
//   // \/ upon loading the display screen.
//   useEffect(() => {
//     axiosGetAllData();
//   }, []);
//   // /\ GET ALL FUNCTIONS ABOVE /\ \\

//   // \/ GET ONE FUNCTION BELOW \/ \\
//   const axiosGetOneItem = async(id) => {
//     await axios.get(`http://localhost:9000/getOne/${id}`)
//     .then((res) => setSingleDataPiece(res.data));
//   }
//   // /\ GET ONE FUNCTION ABOVE /\ \\

//   // \/ DELETE FUNCTION BELOW \/ \\
//   // Currently uses id for deletion but can easily be changed,
//   // speak to me if you would like to alter that.
//   const axiosDeleteData = async(id) => {
//     await axios.delete(`http://localhost:9000/deleteItem/${id}`);
//   }
//   // /\ DELETE FUNCTION ABOVE /\ \\

//   // \/ DELETE FUNCTION BELOW \/ \\
//   // You should build up a new version of the object that you'd like to change
//   // along with it's CORRECT ID, the same one it already has in the json file.
//   // Feed that object in as the argument.
//   const axiosUpdateItem = async(updateObject) => {
//     await axios.put(`http://localhost:9000/updateOne`, updateObject)
//   }
//   // /\ UPDATE FUNCTION ABOVE /\ \\


//   // let myCurrentObj = {questions: {"How do you define a function in Python?": "def",
//   // "How do you create a list in Python?": "[]",
//   // "How do you comment a single line in Python?": "#",
//   // "How do you convert an integer to a string in Python?": "str()",
//   // "How do you create a multi-line string in Python?":  "triple-quotes"}};
//   // {Object.keys(myCurrentObj.questions).map(each => <li>Question: {each}</li>)}

//   return (
//     <>
//       <div>
//         <ul>
//           {apiData.map((each) => <li>{each.language}</li>)}
//         </ul>
//         <button onClick={() => axiosGetAllData()} >Render</button>
//         <button onClick={() => axiosDeleteData(5)} >Delete</button>
//         <button onClick={() => axiosGetOneItem(1)} >Single</button>
//         <button onClick={() => axiosUpdateItem({"id": 2,"title": "YEET","year": 1994,"genre": "Drama","director": "Frank Darabont","cover": "ShawshankRedemption.jpg","actors": ["Tim Robbins","Morgan Freeman","Bob Gunton"]})} >Update</button>
//       </div>
//       {/* <PostPage /> */}
//     </> 
//   )
// }

// export default App















