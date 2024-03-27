import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function QuizID({handleButtonClick}){
  const [data, setData] = useState([]);

    const axiosGetAllData = async() => {
        await axios.get('http://localhost:9000/api')
        .then(res => {
          const returnedApiData = res.data;
          setData(returnedApiData);
        })
      }
    
    function handleSubmit(e){
        e.preventDefault();
        const selectedQuiz = e.target.querySelector('#categorySelector').value;
        handleButtonClick(selectedQuiz);
    }

    useEffect(() => {
        axiosGetAllData();
    }, []);

    return (
        <div className="languageSelectorFormContainer">
            <form className="languageSelectorForm" onSubmit = {handleSubmit}>
                <h1>Select A Language</h1>
                <select id="categorySelector" className = 'quizDropdown'>
                    {data.map(item => <option key={item} value={item.id}>{item.language}</option>)}
                </select>
                    <button type='submit'>Submit</button>
            </form>             
        </div>
    )
}