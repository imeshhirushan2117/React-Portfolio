import './styles.css'
import Educad from '../../component/Educad/Educad'
import Progressbar, { MyCircularProgressbar } from '../../component/Progressbar/Progressbar'

function Skills() {



  return (
    <>
      <section className="skil-container">
        <h2>My <span style={{ color: "#4BFFA5" }}>Skills!</span> </h2>



        <div className='tbl-div'>
          <div className='edu-div'>
            <Educad date={" 2026 - Pending"} title={" BSc(Hons). in Computer Science"} prg={" University Of Bolton - UK Scheduled to be completed in 2026 (Pending)"} />
            <Educad date={" 2021 - 2023"} title={" Graduate Diploma in Software Engineering (GDSE)"} prg={" Institutes of Software Engineering 2021 - 2023"} />

            <Educad date={" 2019 - 2020"} title={" Professional English"} prg={"National Youth Services Council 2019 - 2020"} />
            <Educad date={" 2017 - 2019"} title={" G.C.E Advanced Level Examination in 2019"} prg={"St.John's National School, Panadura 2017 - 2019"} />
            <Educad date={" 2006 - 2016"} title={" G.C.E Ordinary Level Examination in 2016"} prg={"St.John's National School, Panadura 2006 - 2016"} />


          </div>

          <div className='anoth-skils' >
            <div className="tch-skills">
              <h2 className='skills-title'>Technical <span style={{ color: "#4BFFA5" }}>Skills</span> </h2>

              <div className='progress-bar' >
                <Progressbar name={'Java'} ptage={80} />
                <Progressbar name={'Html'} ptage={90} />
                <Progressbar name={'Css'} ptage={90} />
                <Progressbar name={'Bootstrap'} ptage={90} />
                <Progressbar name={'Javascript'} ptage={85} />
                <Progressbar name={'React'} ptage={95} />
                <Progressbar name={'Spring Boot'} ptage={70} />
                <Progressbar name={'React Native'} ptage={93} />
              </div>


            </div>


            <div className="prf-skills">
              <h2 className='skills-title'>Professional <span style={{ color: "#4BFFA5" }}>Skills</span> </h2>

              <div className='my-Pro-bar'>
                <MyCircularProgressbar cname={'Team Work'} percentage={90} />
                <MyCircularProgressbar cname={'Creativity'} percentage={80} />
                 <MyCircularProgressbar cname={'Communication'} percentage={70}/>           
              <MyCircularProgressbar cname={'Project Mangement'} percentage={70}/>
              </div>

            </div>
          </div>
        </div>


      </section>
    </>


  )
}
export default Skills