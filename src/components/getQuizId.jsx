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
        idList.push(data[i].quiz.id)
    }

    return (
        <div>
            <form>
                <select>
                    {idList.map(item => <option value = {item}>{item}</option>)}
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}