 
 function Body ({slider, left, right}) {

    const images = [
        'src/assets/react.svg',
        'src/assets/js-brands-solid.svg',
        "src/assets/images/html5-brands.png",
        "src/assets/images/css3-alt-brands.png",
        "src/assets/images/git-alt-brands (1).png",
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