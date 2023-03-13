import React from 'react';
import './App.css';
import Calendar from './component/Calendar';

function App() {
  const presentDate = new Date('2023-2-26')
  return (
    <div className="App">
     <Calendar date={presentDate} />
    </div>
  );
}

export default App;
