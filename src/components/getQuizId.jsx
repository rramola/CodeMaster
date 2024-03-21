import React, {useEffect, useState} from 'react';

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
                <form className="selectorForm" onSubmit = {handleSubmit}>
                    <select id="categorySelector" className="quizDropdown">
                            {idList.map(item => <option value = {idList.indexOf(item)}>{item}</option>)}
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