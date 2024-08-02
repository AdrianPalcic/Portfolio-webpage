import { useState } from 'react';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';
import Home from './pages/Home';
import Header from './Components/Header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    console.log("this is getting clicked")
    setTheme(!theme);
  }

  return (
    <Router>
      <Header theme={theme} func={toggleTheme} />
      <div className='hr'></div>
      <Routes>
        <Route path='/' element={<Home theme={theme} func={toggleTheme} />} />
        <Route path="page1" element={<Experience theme={theme} func={toggleTheme} />} />
        <Route path="page2" element={<Resume theme={theme} func={toggleTheme} />} />
        <Route path="page3" element={<About theme={theme} func={toggleTheme} />} />
        <Route path="page4" element={<Projects theme={theme} func={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
