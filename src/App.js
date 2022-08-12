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
        <article className="Image">
          <img src="https://via.placeholder.com/600/92c952" alt = "background" />
          <p className="Image-text">name</p>
        </article>
      </div>
      <div className="Button-area">
        
      </div>
    </div>
  );
}

export default App;
