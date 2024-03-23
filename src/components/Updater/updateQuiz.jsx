import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { queries } from '@testing-library/react';

export default function EditQuiz({props}){
    const questionsList = [];
    const [singleQuiz, setSingleQuiz] = useState({});
    const axiosGetOneItem = async(id) => {
        await axios.get(`http://localhost:9000/getOne/${id}`)
    .then((result) => {
        setSingleQuiz(result.data)
    });
    }
    const axiosUpdateItem = async(updateObject) => {
        await axios.put(`http://localhost:9000/updateOne`, updateObject)
      };
    
    function handleSubmit(e){
      const selectedQuestion = e.target.querySelector('#questionSelector').value;
      document.querySelector('.modifierContainer').classList.add('hidden')
      console.log(selectedQuestion)
      e.preventDefault();
    };
      let questions = singleQuiz.questions
      // for (let eachQuestion in singleQuiz.questions) {
      //   if (eachQuestion === "How do you define a function in Python?") {
      //       axiosUpdateItem( {
      //           "id": 0,
      //           "language": "Python",
      //           "questions": {
      //            "How do you define a function in Python?": "def",
      //            "How do you create a list in Python?": "[]",
      //            "How do you comment a single line in Python?": "#",
      //            "How do you convert an integer to a string in Python?": "str()",
      //            "How do you create a multi-line string in Python?": "triple-quotes"
      //           }
      //          })
      //   }
      // };
      for(const item in questions){
        questionsList.push(item)
      };

      useEffect(() => {
        axiosGetOneItem(props);
      }, []);

    return (
      <div className="modifierContainer" class="hidden">
        <form className="selectorForm" onSubmit={handleSubmit}>
            <select id="questionSelector" className="questionDropdown">
              {questionsList.map(item => <option key={item} value = {questionsList.indexOf(item)}>{item}</option>)}
            </select>
            <select id="modifierSelector" className="questionDropdown">
                <option value = "test">Modify question</option>
                {/* <option>Add new question</option> */}
            </select>
            <button>Submit</button>
        </form>               
      </div> 
        )


}

