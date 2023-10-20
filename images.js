import React from'react';
import'./Blog.css';
import React, { useState } from 'react';

function images() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="image1">
        <img src="/images/hotdog.png" width="430px" height="350px" alt="hotdog" />
      </div>

      <div className="relative">
        <p style={{ fontSize: 'larger' }}>
          <strong>Eat food. Not too much<br />mostly plants.</strong>
        </p>

        <p>
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Phasellus imperdiet,
          nulla et dictum<br /> interdum, nisi lorem egestas vitae<br /> scelerisque enim ligula
          venenatis dolor. Maecenas<br /> nisl est, ultrices nec congue<br /> eget, auctor vitae massa.
          Fusce<br /> luctus vestibulum augue ut aliquet.<br />
          Nunc sagittis dictum nisi sed,<br /> ullamcorper ipsum dignissim ac.
          <span style={{ display: showMore ? 'inline' : 'none' }}>
            <br />erisque enim ligula<br /> venenatis dolor. Maecenas<br /> nisl est, ultrices
            nec congue<br /> eget, auctorvitae massa.Fusce<br /> luctus vestibulum augue ut aliquet.
            <br />Nunc sagittis dictum nisi sed,<br /> ullamcorper ipsum dignissim ac.
          </span>
        </p>

        <button onClick={handleToggle} id="myBtn">
          {showMore ? 'Show less' : 'Read more'}
        </button>
      </div>

      <div className="image3">
        <img src="/images/burger.png" width="430px" height="350px" alt="burger" />
      </div>
    </div>
  );
}

export default 'images';