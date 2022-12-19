import './App.css';
import HOME from './components/HOME';
import Mode1 from './components/Mode1';
import Feedback from './components/Feedback.js';
import Mode0 from './components/Mode0';
import {BrowserRouter as BrowserRouter1,Route,Routes} from "react-router-dom";



function App() {

  return (
    <BrowserRouter1>
    <>
        <Routes>
          
          <Route path="/" element = {<HOME />} />
          <Route path="/Mode0" element = {<Mode0 />} />
          <Route path="/Mode1" element = {<Mode1 />} />
          <Route path="/Feedback" element = {<Feedback />} />
        </Routes>
    </>
    </BrowserRouter1>
    
  );
}

export default App;