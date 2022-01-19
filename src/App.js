import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotosFromApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setPhotos(response.data);
  };

  useEffect(() => {
    getPhotosFromApi();
  }, []);

  return (
    <div className="App">
      {photos.map((photo) => {
        return <Card photo={photo} key={photo.id} />;
      })}
    </div>
  );
}

export default App;
