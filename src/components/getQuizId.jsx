import React, {useState, useEffect} from 'react',

//Started making a component that would get the ID to only pull a single quiz
export default function QuizID({id}){
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
    fetch("quizzes.json")
    .then(response => response.json())
    .then(data)   
    })
}