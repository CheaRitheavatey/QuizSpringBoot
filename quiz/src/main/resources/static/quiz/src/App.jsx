import { useState } from 'react';
import './App.css';

function App() {
  const [option, setOption] = useState(false);
  const handleClick = () => {
    setOption(true)
  }


  return (

    <>
    <div className="font-inter">Hello</div>

      <div className="p-4">
      {!option && (
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
          Show Options
        </button>
      )}

      {option && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button type='button' className="btn btn-outline-success">Option A</button>
          <button className="btn btn-outline-warning">Option C</button>
          <button className="btn btn-outline-primary">Option B</button>
          <button className="btn btn-outline-info">Option D</button>
        </div>
      )}
    </div>
    </>
  
)
    
}

export default App;
