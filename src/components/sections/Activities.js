import React from 'react';

const Activities = ({ data, color }) => {
    const activities = data.activities;
    return (
        <div className='projects'>
            <p className='heading' style={{ color: `${color.primary}` }}>
                <span className='material-icons' style={{ color: `${color.primary}` }}>
                    pending_actions
        </span>
        Additional Activities
      </p>
            <hr style={{ borderColor: `${color.primary}` }} />
            {activities.map((item, index) => (
                <ul key={index} className='row-table'>
                    <li>
                        <span className='description'>{item.title}</span>
                    </li>
                    {/* <p className='description'>{item.description}</p> */}
                </ul>
            ))}
        </div>
    );
};

export default Activities;
