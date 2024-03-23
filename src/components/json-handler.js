import React, {useState, useEffect} from "react";
import axios from "axios"

export default function JsonHandler({quizId}) {
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('quizzes.json')
    //     .then(response => response.json())
    //     .then(res => setData(res))
    //     .catch((err) => console.error(err))
    // }, [])
    // \/ GET ALL FUNCTIONS BELOW \/ \\
  // Gets it all and gives it to ya.
  // axiosGetData should be used inside a useEffect
  // when being used for a component. Doesn't 
  // always have to though.
  const axiosGetAllData = async() => {
    await axios.get('http://localhost:9000/api')
    .then(res => {
      const returnedApiData = res.data;
      setData(returnedApiData);
    })
  }
  // ||   Should be used for the initial get all
  // \/ upon loading the display screen.
  useEffect(() => {
    axiosGetAllData();
  }, []);

    let myCurrentObject = data[quizId];
    // const questions = Object.keys(myCurrentObject.questions);
    // console.log(myCurrentObject);
    // console.log(questions)
    if (!myCurrentObject){
        return (<div>Something went wrong...</div>)
    }

    //TEMPLATE QUIZ EDITOR

}