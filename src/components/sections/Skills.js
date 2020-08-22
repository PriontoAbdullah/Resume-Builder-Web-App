import React from 'react';

const Skills = ({ data, color }) => {
  const skills = data.skills;
  return (
    <div className='skills'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        {/* <span className='fas fa-puzzle-piece' /> */}
        <span className='material-icons' style={{ color: `${color.primary}` }}>
          assignment_turned_in
        </span>
        Skills
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      <div className='skills-container'>
        {skills.map((item, index) => {
          if (item.trim().length > 0) {
            return (
              <div
                key={index}
                className='item'
                style={{
                  backgroundColor: `${color.skills}`,
                  boxShadow: `0 0 0 1px ${color.primary}`,
                }}
              >
                {item}
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    </div>
  );
};

export default Skills;
