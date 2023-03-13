import React, {useState} from 'react';
import './App.css';
import Calendar from './component/Calendar';

function App() {
  const [presentDate, setPresentDate] = useState('2023-3-12')
  const [temp, setTemp] = useState('')
  return (
    <div className="App">
      <input type="date"
      value={temp}
      onChange={(e) => {
        setTemp(e.target.value)
      }} />
      <button 
      onClick={() => setPresentDate(temp)}
      disabled={temp?.length < 1}
      >Submit</button>
     <Calendar date={new Date(presentDate)} />
    </div>
  );
}

export default App;
