import './App.css';
import convertImageToText from "./apis/image_to_text";
import { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    convertImageToText(file);
  }

  return (
    <section>
      <article>
        <h1>Image to Text</h1>
        <form onSubmit={handleSubmit}>
          <input type='file' onChange={(e) => setFile(e.target.files[0])} />
          <button>Convert</button>
        </form>
        <h3>Result:</h3>
        <p id='result'></p>
      </article>
    </section>
  );
}

export default App;
