import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

import './App.module.scss';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>  {/* Wrap the App component with Router */}
      <div className="App">
        <Header /> 

        {/* Rest of your application content */}
        <main>
          {/* Your application content goes here */}
        </main>
      </div>
    </Router>
  );
}

export default App;
