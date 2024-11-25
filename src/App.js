import logo from './logo.svg';
import './App.css';
import Navbar from './dashbordFiles/navbar';
import SideBar from './dashbordFiles/SideBar';
import { Router } from 'react-router-dom';
import DataShow from './dashbordFiles/dataShow';

function App() {
  return (
    <>
      <Navbar/>
      <div className="flex">
        <SideBar/>
        <DataShow/>
      </div>
    </>
  );
}

export default App;
