import React from 'react';
import Objective from './sections/Objective';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Workshops from './sections/Workshops';
import Activities from './sections/Activities';

const RightContent = ({ data, color }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='right-content'>
      {check(data.objective) && <Objective data={data} color={color} />}
      {check(data.education) && <Education data={data} color={color} />}
      {check(data.experience) && <Experience data={data} color={color} />}
      {check(data.certifications) && <Certifications data={data} color={color} />}
      {check(data.projects) && <Projects data={data} color={color} />}
      {check(data.workshops) && <Workshops data={data} color={color} />}
      {check(data.activities) && <Activities data={data} color={color} />}
    </div>
  );
};

export default RightContent;
