import { useEffect, useState } from "react";



function App() {  
  const [counter, setCounter] = useState(0);
  function onClick(){
    setCounter((current) => current+1);
  }
  useEffect(() => { console.log('useEffect') }, [])
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick ={onClick}>Click Me</button>
    </div>
  );
}

export default App;
