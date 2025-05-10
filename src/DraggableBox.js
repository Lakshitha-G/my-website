import React, { useRef } from 'react';
import Draggable from 'react-draggable';

function BrowserWindow() {
  //const nodeRef = useRef(null);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        bottom: 50, //space for taskbar
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    {/*< Draggable nodeRef={nodeRef} handle=".title-bar">*/}
        <div
          //ref={nodeRef}
          style={{
            width: 500,
            borderRadius: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            backgroundColor: 'white',
            overflow: 'hidden',
            fontFamily: 'sans-serif',
            position: 'absolute', // so it can move within the wrapper
          }}
        >
          {/* Title Bar */}
          <div
            className="title-bar"
            style={{
              backgroundColor: '#5E6A80',
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',// This pushes content to both ends
              padding: '0 10px',
              //cursor: 'move',
              borderBottom: '1px solid #ccc',
            }}
          >
            <div style={{ fontSize: 14, color: '#fff' }}>Home</div>
          </div>

          {/* Content */}
          <div style={{ padding: 16, backgroundColor: "#FCF0D6", height:250}}>
            <p>This window starts centered and is fully draggable 🚀</p>
          </div>
        </div>
      {/* </Draggable> */}
    </div>
  );
}

export default BrowserWindow;
