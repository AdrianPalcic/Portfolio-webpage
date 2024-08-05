import Header from '../Components/Header';

function Resume({ theme, func }) {
  return (
    <>
      <div className={`hr ${theme ? 'dark' : 'light'}`}></div>
      <div className={`resume ${theme ? 'dark' : 'light'}`}>
        <h1 className='resumeH1'>Resume</h1>
        <a className='resumeA' href="src\Docs\CV.pdf" download>Download PDF</a>
      </div>
    </>
  );
}

export default Resume;
