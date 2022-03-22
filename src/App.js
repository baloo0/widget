import './App.css';
import {useEffect, useState} from 'react'
import Widget from './components/Widget.jsx'

const App= () =>{
  const [sec, set] = useState(15)
  let a = 15
  useEffect(() =>{
      setInterval(() => {
      a= a-1
      set(a)
    },1000)
    
  },[]) 

  
  
  return(
    <div>
      <div className="usualText">Wait {sec} seconds</div>
      <Widget/>
    </div>
  )
  
}

export default App ;
