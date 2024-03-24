import React, {useState, useEffect} from "react";
import axios from "axios"

export default function JsonHandler({quizId}) {
  
    const [data, setData] = useState([]);

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

    let myCurrentObject = data[quizId];
    if (!myCurrentObject){
        return (<div>Something went wrong...</div>)
    }

    return (
      <div>
        <h1>Questions:</h1>
        {Object.keys(myCurrentObject.questions).map(each => <p>Question: {each}</p>)}
    </div>
    )

}