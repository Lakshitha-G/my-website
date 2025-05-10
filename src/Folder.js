import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import './App.css';

const Folder = ({ name, content, zIndex, bringToFront, folderImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleFolder = () => {
    if (!isOpen) {
      setIsOpen(true);
      bringToFront(name); // Bring folder to front when opened
    }
  };

  const closeDraggableBox = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    bringToFront(name); // Bring folder to front when clicked
  };

  return (
    <div className="folder-container" style={{ marginRight: '20px', display: 'inline-block' }}>
      <div className="folder-icon" onClick={toggleFolder}>
        <img
          src={folderImage}
          alt={`${name} icon`}
          style={{ width: 40, height: 40, cursor: 'pointer' }}
        />
      </div>
      <p style={{ textAlign: 'center',
    fontSize: 14,
    color: '#333333', 
    //fontWeight: 'bold',
    marginTop: 3,
    textAlign: 'center',
    textWrap: 'balance',
    maxWidth: 100,
    wordWrap: 'break-word',
    lineHeight: 1.2 }}>{name}</p>

      {isOpen && (
        <Draggable
          nodeRef={nodeRef}
          bounds="body"
          onStart={() => bringToFront(name)} // Bring folder to front on drag start
        >
          <div
            ref={nodeRef}
            onMouseDown={handleClick}
            style={{
              width: 600,
              borderRadius: 8,
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              backgroundColor: 'white',
              overflow: 'hidden',
              fontFamily: 'sans-serif',
              position: 'absolute',
              top: 100,
              left: 100,
              zIndex: zIndex, // Ensure dynamic zIndex for stacking
            }}
          >
            <div
              style={{
                backgroundColor: '#963A2D',
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 10px',
                cursor: 'move',
                borderBottom: '1px solid #ccc',
              }}
            >
              <span style={{ fontSize: 14, color: '#fff' }}>{name}</span>
              <div style={{ display: 'flex', color: 'white', cursor: 'pointer' }} onClick={closeDraggableBox}>
                <p>[x]</p>
              </div>
            </div>
            <div style={{ padding: 10 }}>
              <p >{content}</p>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Folder;
