import React, {useEffect, useState} from 'react';


export default function DetermineNumberofQuestions({prop},{create}){
    
    function handleSubmit(e){
        e.preventDefault();
        let num = Number(document.querySelector('#number').value);
        let language = document.querySelector('#language').value;
        prop(num, language);
        document.querySelector('.languageSelectorFormContainer').style.display="none"
        document.querySelector('.newTestFormContainer').style.display="none";
        document.querySelector(".submitFormContainer").style.display="block"
    }
    
    return (
        <div className='newTestFormContainer'>
            <h1>Create A New Quiz</h1>
            <form className = 'newTestForm' onSubmit={handleSubmit}>
                <div className='newTestFormQuestions'>
                    <input 
                    id = 'language' 
                    type = 'text' 
                    placeholder = 'Enter language name'
                    required/>

                    <input 
                    id= 'number' 
                    type = 'number' 
                    min = "0" 
                    max = "10" 
                    placeholder='Number of Questions'
                    required/>
                </div>     
                <div className='submitContainer'>
                    <input type = 'submit'/>
                </div>
            </form>
        </div>
    )
}