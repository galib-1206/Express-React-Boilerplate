import './App.css';
//axios provide api 
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

  const[listofPosts, setListOfPosts] = useState([]);

  useEffect(  () =>{
    // server theke data receive & then(stored thakbe)
    axios.get("http://localhost:3001/posts").then((response)=>{
    setListOfPosts(response.data);
   // console.log(response.data);

    });
  },[]);
  
  
  return(
    <div classname="App">
      {listofPosts.map((value,key)=>{
    
        return(

          <div className="post">
            <div className='title'>{value.title}</div>
            <div className='body'>{value.postText}</div>
            <div className='footer'>{value.userName}</div>
            </div>
        );
      })}
      </div>
  );
    }     
export default App ;
