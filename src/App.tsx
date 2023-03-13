import React, {useState} from 'react';
import './App.css';
import Calendar from './component/Calendar';

function App() {
  const [presentDate, setPresentDate] = useState('')
  return (
    <div className="App">
      <input type="date"
      value={presentDate}
      onChange={(e) => {
        setPresentDate(e.target.value)
      }} />
     <Calendar date={new Date(presentDate)} />
    </div>
  );
}

export default App;
