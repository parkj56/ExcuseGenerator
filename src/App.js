import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';



function App() {

  const [genExcuse, setGenExcuse] = useState("");

  const fetchExcuse = (excuse) =>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
      setGenExcuse(res.data[0].excuse);
    });
  }
  useEffect(()=>{
    fetchExcuse()
  }, []);

  return (
    <div className="App">
      <h1>Need an excuse?</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Work</button>
      <button onClick={() => fetchExcuse("college")}>College</button>
      <button onClick={() => fetchExcuse("3")}>Random</button>
      <h1>{genExcuse}</h1>
      <img src='ferris.png' alt='Ferris Buller'></img>
    </div>
  );
}

export default App;
