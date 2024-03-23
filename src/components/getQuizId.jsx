import React, {useEffect, useState} from 'react';
import axios from 'axios';

//Started making a component that would get the ID to only pull a single quiz
export default function QuizID({handleButtonClick}){
    const [data, setData] = useState([]);
    const [quizId, setQuizID] = useState ('');
    const idList = [];



    function handleSubmit(e){
        // console.log(e.target);
        const selectedQuiz = e.target.querySelector('#categorySelector').value;
        const modifierOption = e.target.querySelector('#questionSelector').value;

        setQuizID(selectedQuiz);
        handleButtonClick(selectedQuiz);
        if (modifierOption === "1"){
            console.log("1")
        }
        if (modifierOption === "2"){
            console.log("2")
        }
        if (modifierOption === "3"){
            console.log("3")
        }
        if (modifierOption === "4"){
            console.log("4")
        }
        document.querySelector('.appContainer').classList.add('hidden')
        e.preventDefault();
    }



    
    const axiosGetAllData = async() => {
        await axios.get('http://localhost:9000/api')
        .then(res => {
          const returnedApiData = res.data;
          setData(returnedApiData);
        })
      }

      useEffect(() => {
        axiosGetAllData();
      }, []);

    for(let i = 0; i < data.length; i++){
        idList.push(data[i].language)
    }  

    return (
        <div className="appContainer">
                <form className="selectorForm" onSubmit = {handleSubmit}>
                    <select id="categorySelector" className="quizDropdown">
                            {idList.map(item => <option key={item} value = {idList.indexOf(item)}>{item}</option>)}
                    </select>
                    <select id="questionSelector" className="quizDropdown">
                        <option value="1">View Quizzes</option>
                        <option value="2">Create Quiz</option>
                        <option value="3">Modify Quiz</option>
                        <option value="4">Delete Quiz</option>
                    </select>
                    <button>Submit</button>
                </form>               
        </div>
    )
}