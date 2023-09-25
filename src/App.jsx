import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "./axios"

//const API="https://jsonplaceholder.typicode.com"
//const API=process.env.baseURL;

function App() {
  const [myData, setMyData] = useState([])
  const [isError,setIsError] = useState("");
  


  // NOTE: using Promises

  // useEffect(()=>{
  //   axios
  //      .get("https://jsonplaceholder.typicode.com/posts") // How to Get Data from API, also work for put , delete,post
  //      .then((res)=> setMyData(res.data))
  //      //console.log(" ~ file: App.jsx ~ line 13 ~ useEffect ~ res", res.data)
  //      .catch((error)=> setIsError(error.message));
         
  //          //console.log(" ~ file: App.jsx ~ line 13 ~ useEffect ~ res", res.data)
    
  // },[]);


    // NOTE: using Async Await
    // const getApiData = async() =>{
       
    // };

    const getApiData = async(url) =>{
      try{
        //const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const res = await axios.get("/posts" );
        setMyData(res.data);
      }
      catch(error){
        setIsError(error.message);
      }

    }
    useEffect(() => {
      // getApiData(`${API}/posts`);
      getApiData()
    },[]);


  return (
    <>
  
       <h1>Axios Tutorial</h1>
       {isError !== "" && <h2>{isError}</h2>}

       
         <div className="grid">
            {myData.slice(0,12).map((post)=> {
             const{id, title, body}= post;

              return( 
                 <div className="card" key={id}>
                      <h2>{title.slice(0,15).toUpperCase()}</h2>
                      <p>{body.slice(0,100)}</p>
                  </div>
              );
          
           })}

         </div>
       
        
    </>
  

  );
}

export default App
