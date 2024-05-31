import React, { useEffect, useState } from 'react';

function Movemouse() {
  const [eventData, setEventData] = useState('');

  useEffect(() => {
    const logMouseMove = (e) => {
      setEventData(`x: ${e.clientX}, y: ${e.clientY}`);
    };

    window.addEventListener('mousemove', logMouseMove);

    return () => {
      window.removeEventListener('mousemove', logMouseMove);
    };
  }, []);

  return (
    <div className="Movemouse">
      <header className="Movemouse-header">
        <h1>Mouse Move</h1>
        <p>{eventData}</p>
      </header>
    </div>
  );
}

export default Movemouse;


