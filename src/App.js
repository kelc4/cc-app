//import logo from './logo.svg';
import './App.css';
//import { useEffect } from 'react';

function App() {

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('http://jsonplaceholder.typicode.com/photos')
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       throw response;
  //     })
  //     .then(data => {
  //       setData(data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     })
  // }, []);

  // const photoArray = data.

  return (
    <div className="App">
      <div className="Photos-area">
        <article className = "Article">
          <img className="Image" src= "https://via.placeholder.com/600/92c952" alt="background"/>
          <h1 className="Image-text">AHHHHHHHHHH</h1>
        </article>

        <article className = "Article">
          <img className="Image" src= "https://via.placeholder.com/600/92c952" alt="background"/>
          <h1 className="Image-text">AHHHHHHHHHH</h1>
        </article>

        <article className = "Article">
          <img className="Image" src= "https://via.placeholder.com/600/92c952" alt="background"/>
          <h1 className="Image-text">AHHHHHHHHHH</h1>
        </article>

        <article className = "Article">
          <img className="Image" src= "https://via.placeholder.com/600/92c952" alt="background"/>
          <h1 className="Image-text">AHHHHHHHHHH</h1>
        </article>
      </div>

      
      <div className="Button-area">
        <button>
          <h1>Shuffle</h1>
        </button>
      </div>
    </div>
  );
}

export default App;
