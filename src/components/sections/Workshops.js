import React from 'react';

const Workshops = ({ data, color }) => {
  const workshops = data.workshops;
  return (
    <div className='workshops'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        <span className='material-icons' style={{ color: `${color.primary}` }}>
          developer_board
        </span>
        Workshops
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {workshops.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <span className='fas fa-calendar-alt' />
                {item.year}
              </p>
            )}
          </div>
          <div className='right-column'>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workshops;
