import React, {useEffect, useState} from 'react';


export default function DetermineNumberofQuestions({prop}){

    function handleSubmit(e){
        e.preventDefault();
        let num = Number(document.querySelector('#number').value);
        prop(num);
        document.querySelector('#NewTestForm').classList.add('hidden')
    }


    return (
        <div>
            <form id = 'NewTestForm' onSubmit={handleSubmit}>
                
                <input 
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

                <input type = 'submit'/>
            </form>
        </div>
    )
}