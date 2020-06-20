import React from 'react';
import './App.css';
import Welcome from './Welcome'
import DevelopedBy from './DevelopInfo'

import Dish from './Dish'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome assignmentInfo="Assignment 2" topic="Parent child relation & Data passing" />
      </header>

      <body>
        <Dish dish1="CHICKEN BIRYANI" dish2="CHICKEN KARAHI"
        dish3="CHICKEN PULAO" dish4="CHICKEN TIKKA"/>
      </body>

      <footer>
        <DevelopedBy></DevelopedBy>
      </footer>

    </div>
  );
}

export default App;
