import React, { useState, useEffect } from 'react';

function Taskbar() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    updateTime();

    const timer = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const formattedDate = now.toLocaleDateString(undefined, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    setTime(formattedTime);
    setDate(formattedDate);
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: '#963A2D',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        fontSize: 14,
        justifyContent: 'flex-end', // Align to the right
      }}
    >
      <div style={{ marginLeft: 'auto' }}> {/* Push content to the right */}
        <div>{time}</div>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default Taskbar;
