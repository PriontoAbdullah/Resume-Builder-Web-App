import React from 'react';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import References from './sections/References';
import Interests from './sections/Interests';
import Tools from './sections/Tools';

const LeftContent = ({ data, color }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='left-content' style={{ backgroundColor: `${color.background}` }}>
      <Contact data={data} color={color} />
      {check(data.skills) && <Skills data={data} color={color} />}
      {check(data.tools) && <Tools data={data} color={color} />}
      {check(data.languages) && <Languages data={data} color={color} />}
      {check(data.interests) && <Interests data={data} color={color} />}
      {check(data.references) && <References data={data} color={color} />}
    </div>
  );
};

export default LeftContent;

