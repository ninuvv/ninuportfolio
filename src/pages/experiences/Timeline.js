import "./Timeline.css";
import  { ReactComponent as WorkIcon } from "../../assets/img/experience/work.svg";
import{ ReactComponent as SchoolIcon } from "../../assets/img/experience/school.svg";


import timelineElements from "./Timeline-data";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div id="experience">
       <h1 className="text-center font-details-b text-white pb-4">EXPERIENCE</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
      
          return (
            
            <VerticalTimelineElement
       
              key={element.key}
              date={element.date}   
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
         
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
