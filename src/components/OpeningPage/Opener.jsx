import React from 'react';

export default function Opener({displayOpener}){

    function handleSubmit(){
        displayOpener();
    }
    
    return(
        <div className="openingPage">
            <h1>Welcome Code Master</h1>
            <button className='loadingButton' onClick={handleSubmit}>Enter</button>
        </div>
    )
}