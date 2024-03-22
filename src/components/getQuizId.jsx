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
        setQuizID(selectedQuiz);
        handleButtonClick(selectedQuiz);
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
      // ||   Should be used for the initial get all
      // \/ upon loading the display screen.
      useEffect(() => {
        axiosGetAllData();
      }, []);

    for(let i = 0; i < data.length; i++){
        idList.push(data[i].language)
    }  
    console.log(data)
    return (
        <div className="appContainer">
                <form className="selectorForm" onSubmit = {handleSubmit}>
                    <select id="categorySelector" className="quizDropdown">
                            {idList.map(item => <option key={item} value = {idList.indexOf(item)}>{item}</option>)}
                    </select>
                    <select id="questionSelector" className="quizDropdown">
    
                        <option value = "test">test</option>
                        <option>Add new quiz</option>

                    </select>
                    <button>Submit</button>
                </form>

                    
        </div>
    )
}