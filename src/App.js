import './App.css';

function App() {
  return (
    <section>
      <article>
        <h1>Image to Text</h1>
        <form>
          <input type='file' accept='png/jpg/jpeg/gif' />
          <input type='submit' value='Convert' />
        </form>
        <h3>Result:</h3>
        <p></p>
      </article>
    </section>
  );
}

export default App;
