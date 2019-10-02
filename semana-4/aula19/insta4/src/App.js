import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Post} from './components/Post/Post.js'

function App() {
  return (
    <section className="App">
      <Post nome="Dan" avatar="http://picsum.photos/60/60" postImage="http://picsum.photos/500/500?a=1"/>
      <Post nome="Dan" avatar="http://picsum.photos/60/60" postImage="http://picsum.photos/500/500?a=1"/>
      <Post nome="Dan" avatar="http://picsum.photos/60/60" postImage="http://picsum.photos/500/500?a=1"/>
    </section>
  );
}

export default App;
