import './App.css';
import React, {useRef, useEffect } from 'react';

function App() {

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  useEffect(()=>{
    nameInputRef.current.focus();
  },[])

  function handleSubmit(e){
    e.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(emailInputRef.current.value);
    console.log(messageInputRef.current.value);
  }

  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            placeholder='Enter Name'
            type='text'
            id='name'
            ref={nameInputRef}
          />
          <label htmlFor='email'>Enter Email</label>
          <input
            placeholder='Enter Email'
            type='text'
            id='email'
            ref={emailInputRef}
          />
          <label htmlFor='message'>Enter Message</label>
          <input
            placeholder='Enter Message'
            type='text'
            id='message'
            ref={messageInputRef}
          />
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
// handling_side_effects_using_useEffect