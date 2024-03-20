import React, {useEffect, useState} from 'react';

//Started making a component that would get the ID to only pull a single quiz
export default function QuizID({handleButtonClick}){

    const [data, setData] = useState([]);
    let idList = [];

    useEffect(() => {
        fetch('quizzes.json')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    for(let i = 0; i < data.length; i++){
        idList.push(data[i].id)
    }  

    return (
        <div className="appContainer">
            <form id="quizSelectorForm">
                <select id="categorySelector" className="quizDropdown">
                        {idList.map(item => <option value = {item} >{item}</option>)}
                </select>
                <select id="quizSelector" className="quizDropdown">
    
                    {/************PSUEDO CODE*************
        
                    { for quiz in quizzes
                        if quiz[id] == category 
                            for questions in quiz[id];
                            console.log(questions) */}

                    <option value = "test">test</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}