import './styles.css'
import home from '../../assets/img/home.png'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Line from '../../component/Line/Line.jsx';

function Home() {
    return (
        <>
        <div className='main-container'>
         
            <img className='home-img' src={home} alt="home-img"/>
      
            <div className='contend-div'>
                <h2>Hi, It’s Me,</h2>
                <h1 style={{ color: '#4BFFA5' }}>Imeh Hiushan</h1>
                <h2>And I'm A</h2>
                <p>I'm <span className='p-span'>Programmer</span> and <span className='p-span'>Developer</span> from Sri Lanka.</p>
            </div>
            <div class="social-media">
            <Line/>
                <a href="https://github.com/imeshhirushan2117" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/imesh-hirushan-b2aab1224/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
                <a href="https://twitter.com/imesh_57" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                <a href="https://www.instagram.com/_imesh_hirushan_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.facebook.com/imesh.hirushan.98/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <Line/>
            </div>
        </div>
        </>
    )
}

export default Home