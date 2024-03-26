import React from 'react';
import axios from 'axios';


export default function CreateNewQuiz({ prop }) {
    let num = prop[0];
    let name = prop[1];

    function handleReturn(){
        return(
            <></>
        )
    }

    function handleSubmit(e) {
        const questionsObject = {};
        document.querySelector('.submitFormContainer').style.display="none";
        document.querySelector('.languageSelectorFormContainer').style.display="flex";

        for (let i = 1; i <= num; i ++) {
            const question = e.target.querySelector(`input[name="${`Question ${i}`}"]`).value;
            const answer = e.target.querySelector(`input[name="${`Answer ${i}`}"]`).value;
            questionsObject[question] = answer;
        }

        const newObject = {
            language: name,
            questions: questionsObject
        };

        const axiosPostData = (newObject) => {
            axios.post(`http://localhost:9000/addItem`, newObject)
            .then(response => {
              console.log(response);
            });
          };

        axiosPostData(newObject);
    }

    return (
        <div className='submitFormContainer'>
            <h1>Enter {name} Questions</h1>
            <form onSubmit={handleSubmit} className='submitQuizForm'>
            {Array.from({ length: num }, (_, index) => {
                return (
                    <div key={index}>
                        <input 
                        type="text"
                        name = {`Question ${index + 1}`}
                        placeholder = {`Question ${index + 1}`} 
                        required />

                        <input 
                        type="text" 
                        name = {`Answer ${index + 1}`}
                        placeholder={`Answer ${index + 1}`} 
                        required />
                    </div>
                );
            })}
            <div className = 'createQuizButtons'>
                <div className='buttonContainer'>
                    <button type='submit'>Submit</button>
                </div>
                <div className = 'createReturnButton'>
                    <form onSubmit = {handleReturn}>
                        <button>Go Back</button>
                    </form>
                </div>
            </div> 
        </form>
    </div>
    );
}