import React from 'react';

export default function Opener(){

    function handleSubmit(){
        document.querySelector('.openingPage').style.display="none";
        document.querySelector('.languageSelectorForm').style.display="flex";
        document.querySelector('.newTestFormContainer').style.display="flex";
        document.querySelector('.header').style.display="flex";
    }
    return(
        <div className="openingPage">
            <h1>Welcome Code Master</h1>
            <button className='loadingButton' onClick={handleSubmit}>Enter</button>
        </div>
    )
}