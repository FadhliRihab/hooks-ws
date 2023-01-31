import React from 'react';
import './App.css';
import { moviesData } from './Assets/data';
import About from './Components/About';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';





function App() {
  return (
    <div className="App">
      <Navigation  />
      <About />
      <div>
      <MovieList data={moviesData} />
      </div>
      
    </div>
  );
}

export default App;
