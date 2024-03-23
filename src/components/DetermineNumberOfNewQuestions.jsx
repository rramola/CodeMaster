import React, {useEffect, useState} from 'react';


export default function DetermineNumberofQuestions({prop}){

    function handleSubmit(e){
        e.preventDefault();
        let num = Number(document.querySelector('#number').value);
        prop(num);
        // console.log(num);
    }

    // useEffect(()=>{
        // const axiosPostData = (newObject) => {
        //     axios.post(`http://localhost:9000/addItem`, newObject)
        //     .then(response => {
        //       console.log(response);
        //     });
        //   };
    // })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type = 'text' 
                placeholder = 'Enter language name'
                required></input>

                <input 
                id= 'number' 
                type = 'number' 
                min = "0" 
                max = "10" 
                placeholder='Number of Questions'
                required></input>

                <input type = 'submit'></input>
            </form>
        </div>
    )
    
    // function getNumberofQuestions(e){;
    //     // console.log(e.target);
    //     let n = Number(document.querySelector('#SelectNumber').value);
    //     document.querySelector('#numbersForm').classList.add('hidden')
    //     // console.log(typeof n)
    //     console.log(n);
    //     e.preventDefault();

    //     return(
    //         <form id = 'numbersForm' onSubmit={handleSubmit}>
    //             <div>
    //                 <input id = "SelectNumber" type ='number' placeholder="Number of Questions"></input>
    //                 <input type='submit'></input>
    //             </div>
    //         </form>
    //     )
    // }


}