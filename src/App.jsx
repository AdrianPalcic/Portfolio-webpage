import { useState, useRef, useEffect } from 'react';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const sliderRef = useRef(null);
  const [imageCount, setImageCount] = useState(1);
  const images = [
    'C:/Users/Adrian/Desktop/adrian/Programiranje i web dizajn/someReact/Personal-portfolio/src/assets/react.svg',
    'src/assets/js-brands-solid.svg',
    "src/assets/images/html5-brands.png",
    "src/assets/images/css3-alt-brands.png",
    "src/assets/images/git-alt-brands (1).png",
  ];
  const length = images.length;


  const nextSlide = () => {
    setImageCount((prevCount) => prevCount + 1);
    sliderRef.current.style.transform = `translateX(-${imageCount * 250}px)`;
  };

  const prevSlide = () => {
    setImageCount((prevCount) => prevCount - 1);
    sliderRef.current.style.transform = `translateX(-${(imageCount - 2) * 250}px)`;
  };

  const getFirstSlide = () => {
    setImageCount(1);
    sliderRef.current.style.transform = `translateX(0px)`;
  };

  const getLastSlide = () => {
    setImageCount(length);
    sliderRef.current.style.transform = `translateX(-${(length - 1) * 250}px)`;
  };

  const goRight = () => {
    imageCount < length ? nextSlide() : getFirstSlide();
  };

  const goLeft = () => {
    imageCount === 1 ? getLastSlide() : prevSlide();
  };

  return (
    <main className='container-fluid'>
      <div className='header'>
        <div className='name-surname'>
          &lt;/&gt;
          Adrian Palcic
        </div>

        <div className='navbar'>
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Skills</li>
          </ul>
        </div>

        <div className='light-dark'>
        <i class="fa-solid fa-moon"></i>
        </div>
      </div>
      <div className='hr'></div>

      <div className='seller'>
        <div className='left'>
          <div className='name'>
            Adrian Palcic,
          </div>
          <div className='job-desc'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime odit<br /> quia corrupti eveniet aperiam nobis repellendus dolore distinctio ad et nemo placeat,<br /> unde veritatis rerum praesentium consectetur. Sapiente, saepe.</p>
          </div>
        </div>
        <div className='right'>
          <button onClick={goLeft}>&lt;</button>
          <div className='frame'>
            <div className='slider' ref={sliderRef}>
              {images.map((src, index) => (
                <img key={index} className='image' src={src} alt={"Icon"} />
              ))}
            </div>
          </div>
          <button onClick={goRight}>&gt;</button>
        </div>
      </div>
    </main>
  );
}

export default App;
