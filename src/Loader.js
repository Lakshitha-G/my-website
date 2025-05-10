import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from './loading.json';

const Loader = () => {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2); // 2x speed
    }
  }, []);

  return ( // <-- Added return
    <div style={styles.loader} aria-label="Loading content">
      <Lottie
        lottieRef={lottieRef} // <-- Attach the ref here
        animationData={animationData}
        loop
        autoplay
        style={{ height: 400, width: 400 }}
      />
    </div>
  );
};

const styles = {
  loader: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF8E5',
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    left: 0,
  },
};

export default Loader;
