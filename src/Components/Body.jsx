 


import Javascript from "../assets/js.svg";
import Reacct from '../assets/react.svg';
import Css3 from "../assets/images/css3.png";
import Html from "../assets/images/html.png";
import Git from "../assets/images/git.png";


 function Body ({slider, left, right}) {

    const images = [
            Reacct,
            Javascript,
            Html,
            Css3,
            Git,
      ];
      

    return  (
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
          <button onClick={left}>&lt;</button>
          <div className='frame'>
            <div className='slider' ref={slider}>
              {images.map((src, index) => (
                <img key={index} className='image' src={src} alt={"Icon"} />
              ))}
            </div>
          </div>
          <button onClick={right}>&gt;</button>
        </div>
      </div>
    );

 }

 export default Body;