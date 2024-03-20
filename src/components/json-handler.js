import React, {useState, useEffect} from "react";

export default function JsonHandler({quizId}) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("quizzes.json")
        .then((res) => res.json())
        .then((res) => {setData(res)})
        .catch((err) => console.error(err))
    }, [])
    let myCurrentObject = data[quizId];
    // console.log(data[quizId])

    return (
        // THIS IS FOR TESTING PURPOSE FOR NOW
        <div>
            {data.map((quizzes) => (
                    <p>Question: {Object.keys(myCurrentObject.questions)}</p>
            ))}
        </div>
    )
}