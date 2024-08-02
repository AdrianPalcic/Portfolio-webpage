import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

     function Navbar() {

        const handleClick = () => {
            const sidebar = document.querySelector(".sidebar");
            sidebar.style.display = "flex";
        }
        const handleOtherClick = () => {
            const sidebar = document.querySelector(".sidebar");
            sidebar.style.display = "none";
        }

        return (
        <>
            <div className='navbar'>
                 <ul>
                     <Link className="change hide" to="page3"><li>About</li></Link>
                    <Link className="change hide" to="page1"> <li>Experience</li></Link>
                    <Link className="change hide" to="page4"> <li>Projects</li></Link>
                    <Link className="change hide" to="page2"> <li>Resume</li></Link>
                    <li  onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
                 </ul>
                 </div>
                 <ul className="sidebar">
                    <li onClick={handleOtherClick}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                     <Link className="change" to="page3"><li>About</li></Link>
                    <Link className="change" to="page1"> <li>Experience</li></Link>
                    <Link className="change" to="page4"> <li>Projects</li></Link>
                    <Link className="change" to="page2"> <li>Resume</li></Link>
                 </ul>
                 </>
            
        );
    }

    export default Navbar;