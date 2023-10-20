import React, { useState } from 'react';
import'./Blog.css';
function Button() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <span id="dots" style={{ display: showMore ? 'inline' : 'none' }}></span>
      <span id="more" style={{ display: showMore ? 'none' : 'inline' }}></span>
      <button id="myBtn" onClick={handleToggle}>
        {showMore ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
}
export default'button';