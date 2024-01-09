import './styles.css'
import footer from '../../assets/img/home.png'

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-image">
                    <img src={footer} alt="home"loading="lazy" />
            </div>

            <div className='footer-text'>
                <h6>Copyright ©2024 by Codehal <span style={{color:"#4BFFA5"}}>|</span>  All Rights reserved by<span style={{color:"#4BFFA5", cursor:'pointer'}}> Imesh Hirushan</span></h6>
                <a href="imeshhirushan2117@gmail.com">imeshhirushan2117@gmail.com</a>
              
            </div>

          

        </footer>
    )
} export default Footer
