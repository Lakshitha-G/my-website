import React, { useState, useEffect } from 'react';
import Taskbar from './TaskBar';
import BrowserWindow from './DraggableBox';
import Folder from './Folder';
import './App.css';
import Loader from './Loader';

function App() {
  const [zIndices, setZIndices] = useState({});
  const [currentTopZIndex, setCurrentTopZIndex] = useState(1000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const bringToFront = (name) => {
    const newTopZIndex = currentTopZIndex + 1;
    setZIndices((prev) => ({
      ...prev,
      [name]: newTopZIndex,
    }));
    setCurrentTopZIndex(newTopZIndex);
  };

  if (loading) return <Loader />;

  return (
    <div>
      <div className="folder">
        <Folder
          name="About Me"
          content={ <div class="about-me">
            <h2>Hi! I'm Sai Lakshitha</h2>
            <p>
              I'm a passionate and curious Computer Science & Statistics student with a love for building clean,
              user-friendly websites and apps. I enjoy turning complex ideas into elegant, interactive experiences
              — whether that's through code, design, or a mix of both.
            </p>
            
            <p>
              Right now, I'm diving deeper into full-stack development, UI/UX design, and exploring the intersection of
              data and software. I've built everything from shopping apps to client dashboards, and I'm always excited
              to learn new tools and take on new challenges.
            </p>
            
            <p>
              When I'm not coding, you’ll probably find me designing mockups in Figma, exploring the world of cybersecurity,
              or reading a good book.
            </p>
          </div>}
           
          folderImage="txt_icon1.png"
          zIndex={zIndices['About Me'] || 0}
          bringToFront={bringToFront}
        />
        <Folder
          name="Skills"
          content={<div class="skills-container">
            <div class="skill-box">HTML</div>
            <div class="skill-box">CSS</div>
            <div class="skill-box">JavaScript</div>
            <div class="skill-box">Python</div>
            <div class="skill-box">React</div>
            <div class="skill-box">Kotlin</div>
            <div class="skill-box">MySQL</div>
            </div>}
          folderImage="folder_icon2.png"
          zIndex={zIndices['Skills'] || 0}
          bringToFront={bringToFront}
        />
        
      </div>
      {/*<div className="browser-window">
        <BrowserWindow />
      </div>*/}
      <Taskbar />
    </div>
  );
}

export default App;
