import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Home from './components/Home';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [data,setData] = useState({});
  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try{
    const response=await Axios.get('http://localhost:3001/getData');
    setData(response.data);
    console.log(data.home);
  }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className="App">
      {data.home && <Home home={data.home} />}
      {data.resume && <Resume resume={data.resume} />}
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
