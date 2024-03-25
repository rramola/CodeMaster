import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function QuizID({handleButtonClick}){
    const [data, setData] = useState([]);
    
    function handleSubmit(e){
        const selectedQuiz = e.target.querySelector('#categorySelector').value;
        handleButtonClick(selectedQuiz);
        document.querySelector('.languageSelectorFormContainer').style.display="none";
        document.querySelector('.newTestFormContainer').style.display="none";
        document.querySelector('.divider').style.display="none";
        // document.querySelector(".questionsContainer").style.display="flex"

        e.preventDefault();
    }
    
    const axiosGetAllData = async() => {
        await axios.get('http://localhost:9000/api')
        .then(res => {
          const returnedApiData = res.data;
          setData(returnedApiData);
        })
      }

      useEffect(() => {
        axiosGetAllData();
      }, []);

    return (
        <div className="languageSelectorFormContainer">
            <form className="languageSelectorForm" onSubmit = {handleSubmit}>
                <h1>Select A Language To View Quiz</h1>
                <select id="categorySelector" className="quizDropdown">
                    {data.map(item => <option key={item} value={item.id}>{item.language}</option>)}
                </select>
                    <button type='submit'>Submit</button>
            </form>               
        </div>
    )
}