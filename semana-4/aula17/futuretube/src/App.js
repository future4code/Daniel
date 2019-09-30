import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li><h1>FutureTube</h1></li>
          <li><input placeholder="Busca" /></li>
        </ul>
      </header>
      <main>
        <nav>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>

        <section>
          <div className="video-card-container">
            <div className="video-card">
              <img src="https://placeimg.com/640/480/any" />
              <h2>Titulo do video</h2>
            </div>
            <div className="video-card">
              <img src="https://placeimg.com/640/480/any" />
              <h2>Titulo do video</h2>
            </div>
            <div className="video-card">
              <img src="https://placeimg.com/640/480/any" />
              <h2>Titulo do video</h2>
            </div>
            <div className="video-card">
              <img src="https://placeimg.com/640/480/any" />
              <h2>Titulo do video</h2>
            </div>
            <div className="video-card">
              <img src="https://placeimg.com/640/480/any" />
              <h2>Titulo do video</h2>
            </div>
            <div className="video-card">
              <img src="https://placeimg.com/640/480/any" />
              <h2>Titulo do video</h2>
            </div>
            <div className="video-card">
              <img src="https://placeimg.com/640/480/any" />
              <h2>Titulo do video</h2>
            </div>
            <div className="video-card">
              <img src="https://placeimg.com/640/480/any" />
              <h2>Titulo do video</h2>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <h1>Oi, eu moro no footer</h1>
      </footer>
    </div>
  );
}

export default App;
