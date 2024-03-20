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
        console.log(data[i].quiz.id);
        idList.push(data[i].quiz.id)
    }
    // console.log(data[0].quiz.hasOwnProperty('id'))
    console.log(idList);
    return (
        <div>
            <button onClick={() => handleButtonClick('python')}>Python</button>
            <button onClick={() => handleButtonClick('html_css')}>HTML/CSS</button>
        </div>
    )
}