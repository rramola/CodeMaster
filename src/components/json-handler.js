import React, {useState, useEffect} from "react";

export default function JsonHandler() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("quizzes.json")
        .then((res) => res.json())
        .then((res) => {setData(res)})
        .catch((err) => console.error(err))
    }, [])

    return (
        // THIS IS FOR TESTING PURPOSE FOR NOW
        <div>
            {data.map((quizzes) => (
                <ul> 
                    <p>Question: {quizzes.quiz.questions.questionOne}</p>
                    <p>Answer: {quizzes.quiz.answers.answerOne}</p>
                </ul>
            ))}
        </div>
    )
}
