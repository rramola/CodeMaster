import React, { useState } from 'react';
import axios from 'axios';


// need to make sure they can't add quizes of the same language
export default function CreateNewQuiz({ prop }) {
    // console.log(prop)
    let num = prop[0];
    let name = prop[1];

    function handleSubmit(e) {
        e.preventDefault();
        const questionsObject = {};

        for (let i = 1; i <= num; i ++) {
            const questionInput = `Question ${i}`;
            const answerInput = `Answer ${i}`;
            const question = e.target.querySelector(`input[name="${questionInput}"]`).value;
            const answer = e.target.querySelector(`input[name="${answerInput}"]`).value;

        questionsObject[question] = answer;
        }

        const newObject = {
            language: name,
            questions: questionsObject
        };

        console.log(newObject);

        const axiosPostData = (newObject) => {
            axios.post(`http://localhost:9000/addItem`, newObject)
            .then(response => {
              console.log(response);
            });
          };

        axiosPostData(newObject);
    }

    return (
        <form onSubmit={handleSubmit}>
        {Array.from({ length: num }, (_, index) => {
            return (
                <div key={index}>
                    <label>{`Question ${index + 1}`}</label>
                    <input 
                    type="text"
                    name = {`Question ${index + 1}`}
                    placeholder = {`Question ${index + 1}`} 
                    required />

                    <label>{`Answer ${index + 1}`}</label>
                    <input 
                    type="text" 
                    name = {`Answer ${index + 1}`}
                    placeholder={`Answer ${index + 1}`} 
                    required />
                </div>
            );
        })}
        <button type='submit'>Submit Questions</button>
    </form>
    );
}