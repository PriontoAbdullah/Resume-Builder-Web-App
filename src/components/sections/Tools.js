import React from 'react';

const Tools = ({ data, color }) => {
    const tools = data.tools;
    return (
        <div className='skills'>
            <p className='heading' style={{ color: `${color.primary}` }}>
                <span className='material-icons' style={{ color: `${color.primary}` }}>
                    build
        </span>
        Tools
      </p>
            <hr style={{ borderColor: `${color.primary}` }} />
            <div className='skills-container'>
                {tools.map((item, index) => {
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

export default Tools;
