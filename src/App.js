import React, { useState } from "react";
import Container from "./containers/container";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  

  
  return (
    <div className="App">
      <div className="Flipper__Input">
        <h2>Image Flipper</h2>

        <input
        value={imageUrl}
          type="url"
          placeholder="Type valid URL of image"
          onChange={e => setImageUrl(e.target.value)}
        />
        <button >Upload</button>
      </div>

      <Container imageUrl={imageUrl}/>
    </div>
  );
}

export default App;
