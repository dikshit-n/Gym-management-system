import React, { useEffect, useState } from "react";

import './animationDelay.css'

const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div className='center'
        style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} ${show ? '2.5s' : '0.25s' }` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;