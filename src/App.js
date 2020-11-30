import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Body from './components/body';

function App() {
  useEffect(() =>{
    M.AutoInit();
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
        <Body />
        </div>
      </div>
      
    </div>
  );
}

export default App;
