import React from 'react';

const Certifications = ({ data, color }) => {
  const certifications = data.certifications;
  return (
    <div className='certifications'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        <span className='material-icons' style={{ color: `${color.primary}` }}>
          card_membership
        </span>
        Certifications
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {certifications.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <span className='fas fa-calendar-alt' />
                {item.year}
              </p>
            )}
            {item.score && (
              <p className='score' style={{ color: `${color.primary}` }}>
                Score: {item.score}
              </p>
            )}
          </div>
          <div className='right-column'>
            <p className='course'>{item.course}</p>
            <p className='institution'>{item.institution}</p>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
