import React, {useState, useEffect} from "react";

export default function JsonHandler({quizId}) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('quizzes.json')
        .then(response => response.json())
        .then(res => setData(res))
        .catch((err) => console.error(err))
    }, [])

    // console.log(data)
    let myCurrentObject = data[quizId];
    // const questions = Object.keys(myCurrentObject.questions);
    console.log(myCurrentObject);
    // console.log(questions)
    if (!myCurrentObject){
        return (<div>Something went wrong...</div>)
    }
    return (
        // THIS IS FOR TESTING PURPOSE FOR NOW
        <div>
            {Object.keys(myCurrentObject.questions).map(each => <p>Question: {each}</p>)}
        </div>
    )
}