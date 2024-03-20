import React, {useEffect, useState} from 'react';

//Started making a component that would get the ID to only pull a single quiz
export default function QuizID({handleButtonClick}){
    const [data, setData] = useState([]);
    const [quizId, setQuizID] = useState ('');
    const idList = [];
    function handleSubmit(e){
        const selectedQuiz = e.target.querySelector('#categorySelector').value;
        setQuizID(selectedQuiz);
        handleButtonClick(selectedQuiz);
        e.preventDefault();
    }
    useEffect(() => {
        fetch('quizzes.json')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    for(let i = 0; i < data.length; i++){
        idList.push(data[i].language)
    }  

    return (
        <div className="appContainer">
            <form id="quizSelectorForm" onSubmit = {handleSubmit}>
                <select id="categorySelector" className="quizDropdown">
                        {idList.map(item => <option value = {idList.indexOf(item)}>{item}</option>)}
                </select>
                <select id="questionSelector" className="quizDropdown">
    
                    {/************PSUEDO CODE*************
                     
                     One possible solution

                     query selector to grab the categorySelector id value 
                     use variable of query selector to grab questions from data of selected quiz

                     ***this may need to have a separate function that runs a for loop on the quiz id's
                    and if the id matches the category value***
                        ***then it does this***

                     map the questions into select options

                    **************************************/}

                    <option value = "test">test</option>
                </select>
                <button>Submit</button>
            </form>

                    
        </div>
    )
}