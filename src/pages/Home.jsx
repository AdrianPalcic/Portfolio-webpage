import { useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Body from '../Components/Body';

function Home({ theme }) {
  const sliderRef = useRef(null);
  const [imageCount, setImageCount] = useState(1);
  const length = 5;

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
    <main className={`container-fluid ${theme ? 'dark' : 'light'}`}>
      
      <Body slider={sliderRef} left={goLeft} right={goRight} />
    </main>
  );
}

export default Home;
