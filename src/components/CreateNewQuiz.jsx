import React, { useState } from 'react';

export default function CreateNewQuiz({ prop }) {
    const [questions, setQuestions] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(questions);
        // Perform submission logic here
    }

    function promptQuestions() {
        const questionsArray = [];
        for (let i = 1; i <= prop; i++) {
            const question = prompt(`Enter Question ${i}:`);
            const answer = prompt(`Enter Answer ${i}:`);
            questionsArray.push({ question, answer });
        }
        setQuestions(questionsArray);
    }

    useState(() => {
        promptQuestions();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {questions.map((qa, index) => (
                    <div key={index}>
                        <p>Question {index + 1}: {qa.question}</p>
                        <p>Answer {index + 1}: {qa.answer}</p>
                    </div>
                ))}
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}