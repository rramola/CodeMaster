import React from 'react';

//Started making a component that would get the ID to only pull a single quiz
export default function QuizID({handleButtonClick}){
    return (
        <div>
            <button onClick={() => handleButtonClick('python')}>Python</button>
            <button onClick={() => handleButtonClick('html_css')}>HTML/CSS</button>
            <button onClick={() => handleButtonClick('javascript')}>JavaScript</button>
        </div>
    )
}