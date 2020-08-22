import React, { Fragment } from 'react';
import Default from '../../images/default.jpg';

const Contact = ({ data, color }) => {
  const { name, photoUrl, location, phone, email, linkedin, github } = data.contact;

  return (
    <Fragment>
      <div className='photo-container'>
        <img src={photoUrl.trim().length !== 0 ? photoUrl : Default} alt='' />
      </div>
      {name && (
        <div className='name' style={{ color: `${color.primary}` }}>
          {name}
        </div>
      )}
      <div className='contact'>
        {location && (
          <div className='item'>
            <p className='material-icons icon' style={{ color: `${color.primary}` }}>
              location_on
            </p>
            <p className='text'>{location}</p>
          </div>
        )}
        {phone && (
          <div className='item'>
            <p className='material-icons icon' style={{ color: `${color.primary}` }}>
              phone
            </p>
            <p className='text'>
              <a href={'tel:' + phone}>{phone}</a>
            </p>
          </div>
        )}
        {email && (
          <div className='item'>
            <p className='material-icons icon' style={{ color: `${color.primary}` }}>
              email
            </p>
            <p className='text'>
              <a href={'mailto:' + email}>{email}</a>
            </p>
          </div>
        )}
        {linkedin && (
          <div className='item'>
            <i className='fab fa-linkedin icon' style={{ color: `${color.primary}` }}></i>
            <p className='text'>
              <a href={'https://www.' + linkedin} target='_blank' rel='noopener noreferrer'>
                {linkedin}
              </a>
            </p>
          </div>
        )}
        {github && (
          <div className='item'>
            <i className='fab fa-github icon' style={{ color: `${color.primary}` }}></i>
            <p className='text'>
              <a href={'https://www.' + github} target='_blank' rel='noopener noreferrer'>
                {github}
              </a>
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Contact;
