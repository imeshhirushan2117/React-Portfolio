import './styles.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Timeline({ data }) {
    return (
        <div>
            <VerticalTimeline lineColor="#4BFFA5">
                {
                    data?.map((val, index)=> (
                        <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
    
                        contentStyle={{ background: '#14181E', color: 'white', padding: '10px', marginRight:'-20px', marginLeft: '-20px'}}
                        contentArrowStyle={{ borderRight: '8px solid  #4BFFA5' }}
                        dateClassName="custom-date-class"
                        date={val.date}
                        iconStyle={{ background: '#4BFFA5', color: 'black' ,fontSize:'10px'}}
                        icon={val.icon}
                    >
                        <div className='custom-text-class' >
                            <h5 className="vertical-timeline-element-title titleTi">{val.title}</h5>
                            <p className='pgTi'>{val.pg}</p>
                        </div>
                    </VerticalTimelineElement>
                    ))
                }
            
            </VerticalTimeline>
        </div>
    )
}

