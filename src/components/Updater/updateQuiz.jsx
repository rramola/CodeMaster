import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Updater() {
      const [apiData, setApiData] = useState([]);
      const [singleDataPiece, setSingleDataPiece] = useState({});


      const axiosGetAllData = async() => {
            await axios.get('http://localhost:9000/api')
            .then(res => {
              const returnedApiData = res.data;
              setApiData(returnedApiData);
            })
          }

          useEffect(() => {
    axiosGetAllData();
  }, []);

  const questions = apiData[0].questions
  questions.map((question) => <h1>{question}</h1>)
  console.log(questions)
  
}




//   const axiosGetOneItem = async(id) => {
//         await axios.get(`http://localhost:9000/getOne/${id}`)
//         .then((res) => setSingleDataPiece(res.data));
//       }

//       const axiosDeleteData = async(id) => {
//             await axios.delete(`http://localhost:9000/deleteItem/${id}`);
//           }

//             const axiosUpdateItem = async(updateObject) => {
//     await axios.put(`http://localhost:9000/updateOne`, updateObject)
//   }

//   return (
//         <>
//           <div>
//             <ul>
//               {apiData.map((each) => <li>{each.language}</li>)}
//             </ul>
//             <button onClick={() => axiosGetAllData()} >Render</button>
//             <button onClick={() => axiosDeleteData(5)} >Delete</button>
//             <button onClick={() => axiosGetOneItem(1)} >Single</button>
//             <button onClick={() => axiosUpdateItem({"id": 2,"title": "YEET","year": 1994,"genre": "Drama","director": "Frank Darabont","cover": "ShawshankRedemption.jpg","actors": ["Tim Robbins","Morgan Freeman","Bob Gunton"]})} >Update</button>
//           </div>
//           <PostPage />
//         </> 
//       )
//     }