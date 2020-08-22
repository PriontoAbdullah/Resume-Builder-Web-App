import React from 'react';

const Objective = ({ data, color }) => {
  const objective = data.objective;
  return (
    <div className='objective'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        {/* <span className='material-icons'>gps_fixed</span> */}
        <span className='material-icons' style={{ color: `${color.primary}` }}>
          assistant
        </span>
        Objective
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      <div className='item'>{objective}</div>
    </div>
  );
};

export default Objective;
