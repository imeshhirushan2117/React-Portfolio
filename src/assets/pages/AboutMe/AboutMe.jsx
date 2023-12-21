import './styles.css'
import aboutme from '../../img/aboutMe.png'
import Button from '../../component/Button/Button'

function AboutMe() {
    return (
        <div className='aboutMe-cantainer'>
            <img className='aboutMe-img' src={aboutme} alt="aboutMe-img" />
            <div className='text-contect'>
                <h2>About <span style={{ color: "#4BFFA5" }}>Me</span> </h2>
                <h3>Full Stack <span style={{ color: "#4BFFA5" }}> Developer!</span></h3>
                <br />
                <p> <span style={{ color: "#4BFFA5" }}>Imesh Hirushan </span> I am from <span style={{ color: "#4BFFA5" }}>Sri Lanka </span> and I am a programmer, designer, and developer. 
                I study at the Institute of Java and Software Engineering (IJSE). Also, my school is St. John's College, Panadura. 
                Currently studying web application development. 
                I have a good knowledge of Programming Fundamental, DBMS, OOP, SE, MVC, and Layered Architectures.
                </p>
              
             <Button name={"Downloade CV"}width={"50%"}/>
        
            
            </div>
        </div>
    )
}

export default AboutMe