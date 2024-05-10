import React, { useState, useEffect } from "react";

function Apod() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    fetchApodData();
  }, []);

  const fetchApodData = async () => {
    const apiKey = "al1eBB4O0gZFKqguZa9Iqb5bk0ouHOc0SEZMqURL";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setApodData(data);
  };

  return (
    <div className="apod-container">
      {apodData && (
        <>
          <img className="apod-image" src={apodData.url} alt={apodData.title} />
          <h2 className="apod-title">{apodData.title}</h2>
          <p className="apod-explanation">{apodData.explanation}</p>
        </>
      )}
    </div>
  );
}

export default Apod;
