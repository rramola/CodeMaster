import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DetermineNumberofQuestions({ prop }) {
    const [data, setData] = useState([]);
    const [showExistingQuizDiv, setShowExistingQuizDiv] = useState(false);

    const axiosGetAllData = async () => {
        await axios.get('http://localhost:9000/api')
            .then(res => {
                const returnedApiData = res.data;
                setData(returnedApiData);
            })
    }

    useEffect(() => {
        axiosGetAllData();
    }, []);

    const nameList = data.map(item => item.language.toLowerCase());

    console.log(nameList);

    function handleSubmit(e) {
        e.preventDefault();
        let num = Number(document.querySelector('#number').value);
        let language = document.querySelector('#language').value;

        if (nameList.includes(language.toLowerCase())) {
            setShowExistingQuizDiv(true);
            return;
        }

        prop(num, language);
        document.querySelector('.languageSelectorFormContainer').style.display = "none";
        document.querySelector('.newTestFormContainer').style.display = "none";
        document.querySelector(".submitFormContainer").style.display = "grid";
        document.querySelector('.buttonContainer').style.display = "flex";
    }

    function handleDivClick() {
        setShowExistingQuizDiv(false);
    }

    return (
        <div className='newTestFormContainer'>
            <h1>Create A New Quiz</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id='language'
                        type='text'
                        placeholder='Enter language name'
                        required />

                    <input
                        id='number'
                        type='number'
                        min="1"
                        max="10"
                        placeholder='Number of Questions'
                        required />

                    <button type='submit'>Submit</button>
                </div>
            </form>
            {showExistingQuizDiv && (
                <div id='hiddenDiv' className='hiddenDiv' onClick={handleDivClick}>
                    <p>
                        A quiz for this language already exists!!! Please choose a different language!
                        <p className = 'closeMessage'>*Click here to close this message*</p>
                    </p>
                </div>
            )}
        </div>
    );
}
