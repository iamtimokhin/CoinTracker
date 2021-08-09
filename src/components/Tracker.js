import React, { useState, useEffect } from "react";
import NotFound from ".//NotFound";

const Tracker = ({ coin, isLoading }) => {
  const [element, setElement] = useState(6);
  const slice = coin.slice(0, element);

  const loadMore = () => {
    setElement(element + element);
  };

  return (
    <>
      {isLoading ? (
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      ) : (
        <section className="coin coin--warapper">
          {slice.map((val, el) => (
            <div key={el} className="flip">
              <div className="front">
                <img className="front__image" src={val.image} />
                <h3 className="text-shadow">{val.name}</h3>
              </div>
              <div className="back">
                <h2>{val.name}</h2>
                <p className="coin__text">
                  Good tools make application development quicker and easier to
                  maintain than if you did everything by hand..
                </p>
              </div>
            </div>
          ))}
          {element < coin.length && (
            <button className="loading__more" onClick={() => loadMore()}>
              Load More
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default Tracker;
