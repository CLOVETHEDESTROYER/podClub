import React from "react";
import Header from './Header';
import TinderCards from "./TinderCards";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Authorization from "./Authorization";



function App() {

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
        <Route path="/" element={<Authorization/>} />
          <Route path="/auth" element={<Authorization/>} />
          <Route path="/callback" element={<Authorization/>} />
          <Route path="/match" element={<TinderCards/>} />
        </Routes>
      </Router>
      <h1> PodPal PodCast Club</h1>        
    </div>
  );
}

export default App;
