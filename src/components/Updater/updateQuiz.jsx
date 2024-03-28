import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditQuiz({ quizId }) {
  const [singleQuiz, setSingleQuiz] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const axiosGetOneItem = async (id) => {
      const response = await axios.get(`http://localhost:9000/getOne/${id}`);
      setSingleQuiz(response.data);
    };
    axiosGetOneItem(quizId);
  }, [quizId]);

  async function handleSubmit(e) {
    e.preventDefault();
    const newQuestion = e.target.querySelector('#createQuestion').value;
    const newAnswer = e.target.querySelector('#createAnswer').value;

    if (!isNaN(newQuestion.trim())) {
    } else {
      const updatedQuestions = { ...singleQuiz.questions, [newQuestion]: newAnswer };
      await axios.put(`http://localhost:9000/updateOne`, {
        id: singleQuiz.id,
        language: singleQuiz.language,
        questions: updatedQuestions
      });
      navigate('/QuizID');
    }
  }

  return (
    <div className="updateContainer">
      <form className="selectorForm" onSubmit={handleSubmit}>
        <h1>Question Creator</h1>
        <input placeholder='Please type new question here' id="createQuestion" required />
        <input placeholder='Please type answer here' id="createAnswer" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
