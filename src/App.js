//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);
  const [reRender, setReRender] = useState(false);

  const photos = [];

  //Shuffles data
  const shuffle = (array) => {
    const length = array.length;
    shuffleHelper(array, length);
  }

  // Shuffle Helper Function
  const shuffleHelper = (array, num) => {
    //base case
    if(num <= 1) {
      return array;
    }

    //Choose random index to swap with last element in shortened array
    const randNum = Math.floor(Math.random() * num);
    //alert(randNum);
    const temp = array[num - 1];

    array[num - 1] = array[randNum];
    array[randNum] = temp;

    return shuffleHelper(array, num - 1);
  }

  // Written with the help of https://www.freecodecamp.org/news/fetch-data-react/
  useEffect(() => {
    const photos = [];
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
          photos.push(data.url);
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
    setReRender(!reRender);
  };

  // Load Images into browser
  const preloadImages = (array) => {
    if (!preloadImages.list) {
      preloadImages.list = [];
    }
    var list = preloadImages.list;
    for(var i = 0; i < array.length; i++) {
      var img = new Image();
      img.onload = function() {
        var index = list.indexOf(this);
        if(index !== -1) {
          list.splice(index, 1);
        }
      }
      list.push(img);
      img.src = array[i];
    }
  }
  preloadImages(photos);

  return (
    <div className="App">
      {/* Top area for photos */}
      <div className="Photos-area">
        {data.map((photo) => (
          <article className = "Photo-container" key="{photo}">
            <img className="Image" src= {photo.url} alt={photo.id}/>
            <h1 className="Image-text">{photo.title}</h1>
          </article>
        ))}

      </div>

      {/* Bottom area for shuffle button */}
      <div className="Button-area">
        <button className="Button" onClick={handleClick}>
          <b>Shuffle</b>
        </button>
      </div>
    </div>
  );
}

export default App;
