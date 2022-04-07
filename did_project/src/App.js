import logo from './logo.svg';
import './App.css'
import Order from './components/Order';
import Ing from './components/Ing';
import Clear from './components/Clear';
import { useState } from 'react';

function App(props) {
  const [numList, setNumList] = useState([0])

  const onAddNum = () =>{
    let countArr = [...numList]
    let counter
  }


return (
    <div className="App">
      
      <Order/>
      <Ing/>
      <Clear/>

     
    </div>
  );
}

export default App;
