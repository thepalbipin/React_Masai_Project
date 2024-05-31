import './App.css';
import React, { useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="App">
      <label htmlFor='focusInput'>Focus Input</label>
      <input id='focusInput' type='text' ref={inputRef} />
    </div>
  );
}

export default App;
