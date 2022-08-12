//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  const shuffle = (array) => {
    //recursive function

  }

  useEffect(() => {
    const fetchPhotos = () => {
      fetch('http://jsonplaceholder.typicode.com/photos')
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw response;
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error("Error fetching data: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
      })
    }

    fetchPhotos();
  }, []);

  const handleClick = () => {
    shuffle(data);
    alert('clicked');
  };

  return (
    <div className="App">
      <div className="Photos-area">
        {data.map((photo) => (
          <article className = "Article">
            <img className="Image" src= {photo.url} alt={photo.id}/>
            <h1 className="Image-text">{photo.title}</h1>
          </article>
        ))}
      </div>


      <div className="Button-area">
        <button className="Button" onClick={handleClick}>
          <b>Shuffle</b>
        </button>
      </div>
    </div>
  );
}

export default App;
