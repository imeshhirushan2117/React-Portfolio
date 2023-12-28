import './styles.css'
import Educad from '../../component/Educad/Educad'


function Skills(){
    return(
       <>
        <section className="skil-container">
           <h2>My <span style={{ color: "#4BFFA5" }}>Skills!</span> </h2>
          
           
        
         <div className='tbl-div'>
       <div className='edu-div'>
            <Educad date={" 2026 - Pending"} title={" BSc(Hons). in Computer Science"} prg={" University Of Bolton - UK Scheduled to be completed in 2026 (Pending)"}/>
            <Educad date={" 2021 - 2023"} title={" Graduate Diploma in Software Engineering (GDSE)"} prg={" Institutes of Software Engineering 2021 - 2023"}/>
            <Educad date={" 2019 - 2020"} title={" Professional English"} prg={"National Youth Services Council 2019 - 2020"}/>
            <Educad date={" 2017 - 2019"} title={" G.C.E Advanced Level Examination in 2019"} prg={"St.John's National School, Panadura 2017 - 2019"}/>
            <Educad date={" 2006 - 2016"} title={" G.C.E Ordinary Level Examination in 2016"} prg={"St.John's National School, Panadura 2006 - 2016"}/>

           
       </div>

            <div>
                <div className="tch-skills">
                    <p>TEC r gjijr irji ghigerigjerigjijgeiorg herug gherguioer ghgwio gherguioer go</p>
                </div>
                <div className="prf-skills">
                <p>PRF r gjijr irji ghigerigjerigjijgeiorg herug gherguioer ghgwio gherguioer go</p>
                </div>
            </div>
         </div>
         
      
           </section>
       </>
           
     
    )
}
export default Skills