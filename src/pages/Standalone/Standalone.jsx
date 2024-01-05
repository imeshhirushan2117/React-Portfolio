import './styles.css'
import Projects from '../../component/Projects/Projects'
import pic from '../../assets/img/pic.jpeg'

export default function Standalone() {
  return (
    <div className='standalone-div'>
     <h2>Standa<span style={{ color: "#4BFFA5" }}>lone!</span> </h2>
     
      <div className='standalone-container'>
        <Projects img={pic} title={'Student Management System'} text={'This Project Use MVC Architecture'} />
        <Projects img={pic} title={'Student Management System'} text={'This Project Use MVC Architecture'} />
        <Projects img={pic} title={'Student Management System'} text={'This Project Use MVC Architecture'} />
      </div>
    </div>
  )
}
