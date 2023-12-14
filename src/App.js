import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import MainComponent from './Components/MainComponent';
import Ban from "./assets/Decore.png";
import Category from './Components/Category';
import Destination from './Components/Destination';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="Main container-fluid ban">
      <Navbar />
      <MainComponent />
      <Category />
      <Destination />
      <Footer />
    </div>
  );
}

export default App;
