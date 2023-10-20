import React from'react';
import'./Blog.css';
function Images(){
        const [showMore, setShowMore] = useState(false);

        const handleToggle = () => {
          setShowMore(!showMore);
        };
      
        return (
          <div className="relative">
            <p style={{ fontSize: 'larger' }}>
              <strong>Eat food. Not too much</strong>
              <br />mostly plants.
            </p>
      
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Phasellus imperdiet,
              nulla et dictum
              <br /> interdum, nisi lorem egestas vitae
              {showMore && (
                <>
                  <br />
                  erisque enim ligula
                  <br /> venenatis dolor. Maecenas
                  <br /> nisl est, ultrices
                  <br /> nec congue
                  <br /> eget, auctorvitae massa.Fusce
                  <br /> luctus vestibulum augue ut aliquet.
                  <br /> Nunc sagittis dictum nisi sed,
                  <br /> ullamcorper ipsum dignissim ac.
                </>
              )}
            </p>
      
            <button onClick={handleToggle} id="myBtn">
              {showMore ? 'Read less' : 'Read more'}
            </button>
          </div>
    );
}
export default'Images'