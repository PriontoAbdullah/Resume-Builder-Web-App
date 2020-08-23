import React, { useState, useEffect } from 'react';
import Files from 'react-files';

import '../styles/Form.scss';
import { Link } from 'react-router-dom';

const Form = ({ data, setData, preset, setColor }) => {
  let { name, photoUrl, location, phone, email, linkedin, github } = data.contact;
  let languages = data.languages;
  let references = data.references;
  let objective = data.objective;
  let education = data.education;
  let experience = data.experience;
  let certifications = data.certifications;
  let projects = data.projects;
  let projects_link = data.projects_link;
  let workshops = data.workshops;
  let activities = data.activities;

  // Handle JSON file upload
  const handleFileUpload = (files) => {
    var fileReader = new FileReader();
    fileReader.onload = (event) => {
      const temp = JSON.parse(event.target.result);
      console.log(temp);
      setData(temp);
      event.target.value = null;
    };
    fileReader.readAsText(files[files.length - 1]);
  };

  // Handle JSON file download
  const handleFileDownload = async () => {
    const fileName = 'resume';
    const json = JSON.stringify(data, undefined, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle photo upload
  const handlePhotoUpload = (files) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        photoUrl: URL.createObjectURL(files[files.length - 1]),
      },
    });
  };

  // skills
  const [skills, setSkills] = useState('');
  useEffect(() => {
    let temp = '';
    data.skills.map((item) => (temp = temp + item + ','));
    temp = temp.slice(0, -1);
    setSkills(temp);
  }, [data]);

  // Tools
  const [tools, setTools] = useState('');
  useEffect(() => {
    let temp = '';
    data.tools.map((item) => (temp = temp + item + ','));
    temp = temp.slice(0, -1);
    setTools(temp);
  }, [data]);

  // interests
  const [interests, setInterests] = useState('');
  useEffect(() => {
    let temp = '';
    data.interests.map((item) => (temp = temp + item + ','));
    temp = temp.slice(0, -1);
    setInterests(temp);
  }, [data]);

  // Contact
  const handleContactChange = (e) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Skills
  const handleSkillsUpdate = () => {
    var array = skills.split(',');
    setData({
      ...data,
      skills: array,
    });
  };

  // Tools
  const handleToolsUpdate = () => {
    var array = tools.split(',');
    setData({
      ...data,
      tools: array,
    });
  };

  // Interests
  const handleInterestsUpdate = () => {
    var array = interests.split(',');
    setData({
      ...data,
      interests: array,
    });
  };

  // Add Row
  const addRow = (section, structure) => {
    let temp = section;
    temp.push(structure);
    setData({
      ...data,
      section: temp,
    });
  };

  // Remove Row
  const removeRow = (section, index) => {
    let temp = section;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      section: temp,
    });
  };

  // Handle Change
  const handleChange = (e, index, section, type) => {
    let temp = section;
    temp[index][type] = e.target.value;

    if (section === languages && type === 'level') {
      if (e.target.value > 5) {
        temp[index][type] = 5;
      } else if (e.target.value < 1) {
        temp[index][type] = 1;
      } else {
        temp[index][type] = e.target.value;
      }
    }

    setData({
      ...data,
      section: temp,
    });
  };

  // Handle color scheme change
  const changeColorScheme = (item) => {
    setColor({ primary: item.primary, background: item.background, skills: item.skills });
  };

  return (
    <div className='form-container'>
      <div className='my-2'>
        <button className='btn btn-light'><Link to='/'>Back to Home Page</Link></button>
      </div>
      <div className='colorSchemeContainer'>
        <p>Select color scheme: </p>
        <div className='colorContainer'>
          {preset.map((item, key) => (
            // console.log(item)

            <div
              key={key}
              className='colorScheme'
              onClick={() => changeColorScheme(item)}
              style={{ backgroundColor: `${item.primary}` }}
            ></div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div title='Populate resume data from JSON file'>
          <Files
            className='files-dropzone file-btn'
            onChange={(files) => handleFileUpload(files)}
            onError={(err) => console.log(err)}
            accepts={['.json']}
            multiple
            maxFiles={100}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Upload JSON
          </Files>
        </div>

        <button
          className='file-btn'
          title='Download resume data as JSON file'
          onClick={handleFileDownload}
        >
          Download JSON
        </button>

        <div>
          <Files
            className='files-dropzone file-btn'
            onChange={(files) => handlePhotoUpload(files)}
            onError={(err) => console.log(err)}
            accepts={['image/jpeg', 'image/jpg', 'image/png', 'image/svg']}
            multiple
            maxFiles={100}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Upload Photo
          </Files>
        </div>
      </div>

      <div className='form'>
        <div className='section contact'>
          <hr />
          <h3 className='heading'>Contact</h3>
          <p className='label'>Name</p>
          {/* <span>Please use your full name</span> */}
          <input type='text' name='name' value={name} onChange={handleContactChange} />
          <p className='label'>Photo URL</p>
          <input type='text' name='photoUrl' value={photoUrl} onChange={handleContactChange} />
          <p className='label'>Location</p>
          <input type='text' name='location' value={location} onChange={handleContactChange} />
          <p className='label'>Phone</p>
          <input type='text' name='phone' value={phone} onChange={handleContactChange} />
          <p className='label'>Email</p>
          <input type='text' name='email' value={email} onChange={handleContactChange} />
          <p className='label'>LinkedIn</p>
          <input type='text' name='linkedin' value={linkedin} onChange={handleContactChange} />
          <p className='label'>Github</p>
          <input type='text' name='github' value={github} onChange={handleContactChange} />
        </div>

        <div className='section skills'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Skills</h3>
            <button className='btn btn-sm btn-primary' onClick={handleSkillsUpdate}>
              Done
            </button>
          </div>
          <textarea
            name='skills'
            cols='50'
            rows='5'
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>
        </div>

        <div className='section skills'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Tools</h3>
            <button className='btn btn-sm btn-primary' onClick={handleToolsUpdate}>
              Done
            </button>
          </div>
          <textarea
            name='skills'
            cols='50'
            rows='3'
            value={tools}
            onChange={(e) => setTools(e.target.value)}
          ></textarea>
        </div>

        <div className='section languages'>
          <hr />
          <h3 className='heading'>Languages</h3>
          {languages.map((item, index) => {
            return (
              <div className='row container-fluid' key={index}>
                <div className='ml-2 mr-2'>
                  <input
                    type='text'
                    name='language'
                    placeholder='Language'
                    value={item.language}
                    onChange={(e) => handleChange(e, index, languages, 'language')}
                  />
                  <input
                    type='number'
                    name='level'
                    placeholder='Level'
                    value={item.level}
                    onChange={(e) => handleChange(e, index, languages, 'level')}
                  />
                </div>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(languages, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() => addRow(languages, { language: '', level: '' })}
          >
            Add
          </button>
        </div>

        <div className='section skills'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Interests</h3>
            <button className='btn btn-sm btn-primary' onClick={handleInterestsUpdate}>
              Done
            </button>
          </div>
          <textarea
            name='skills'
            cols='50'
            rows='5'
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          ></textarea>
        </div>

        <div className='section references'>
          <hr />
          <h3 className='heading'>References</h3>
          {references.map((item, index) => {
            return (
              <div className='row container-fluid' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={item.name}
                    onChange={(e) => handleChange(e, index, references, 'name')}
                  />
                  <textarea
                    name='desig'
                    cols='30'
                    rows='3'
                    placeholder='Designation'
                    value={item.desig}
                    onChange={(e) => handleChange(e, index, references, 'desig')}
                  />
                  <input
                    type='text'
                    name='phone'
                    placeholder='Phone number'
                    value={item.phone}
                    onChange={(e) => handleChange(e, index, references, 'phone')}
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={item.email}
                    onChange={(e) => handleChange(e, index, references, 'email')}
                  />
                </div>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(references, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() => addRow(references, { name: '', desig: '', phone: '', email: '' })}
          >
            Add
          </button>
        </div>

        <div className='section objective'>
          <hr />
          <h3 className='heading'>Objective</h3>
          <textarea
            name='objective'
            cols='50'
            rows='5'
            value={objective}
            onChange={(e) => setData({ ...data, objective: e.target.value })}
          ></textarea>
        </div>

        <div className='section education'>
          <hr />
          <h3 className='heading'>Education</h3>
          {education.map((item, index) => {
            return (
              <div className='row container-fluid' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleChange(e, index, education, 'year')}
                  />
                  <input
                    type='text'
                    name='course'
                    placeholder='Course/Degree'
                    value={item.course}
                    onChange={(e) => handleChange(e, index, education, 'course')}
                  />
                  <input
                    type='text'
                    name='institution'
                    placeholder='School/College'
                    value={item.institution}
                    onChange={(e) => handleChange(e, index, education, 'institution')}
                  />
                  <input
                    type='text'
                    name='university'
                    placeholder='Board/University'
                    value={item.university}
                    onChange={(e) => handleChange(e, index, education, 'university')}
                  />
                  <input
                    type='number'
                    name='percentage'
                    placeholder='Percentage/GPA'
                    value={item.percentage}
                    onChange={(e) => handleChange(e, index, education, 'percentage')}
                  />
                  <input
                    type='text'
                    name='achievements'
                    placeholder='Achievements'
                    value={item.achievements}
                    onChange={(e) => handleChange(e, index, education, 'achievements')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(education, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() =>
              addRow(education, {
                year: '',
                course: '',
                institution: '',
                university: '',
                percentage: '',
                achievements: ''
              })
            }
          >
            Add
          </button>
        </div>

        <div className='section experience'>
          <hr />
          <h3 className='heading'>Experience</h3>
          {experience.map((item, index) => {
            return (
              <div className='row container-fluid' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleChange(e, index, experience, 'year')}
                  />
                  <input
                    type='text'
                    name='position'
                    placeholder='Role/Position'
                    value={item.position}
                    onChange={(e) => handleChange(e, index, experience, 'position')}
                  />
                  <input
                    type='text'
                    name='company'
                    placeholder='Company'
                    value={item.company}
                    onChange={(e) => handleChange(e, index, experience, 'company')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleChange(e, index, experience, 'description')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(experience, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() =>
              addRow(experience, { year: '', company: '', position: '', description: '' })
            }
          >
            Add
          </button>
        </div>

        <div className='section certifications'>
          <hr />
          <h3 className='heading'>Certifications</h3>
          {certifications.map((item, index) => {
            return (
              <div className='row container-fluid' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleChange(e, index, certifications, 'year')}
                  />
                  <input
                    type='text'
                    name='course'
                    placeholder='Course'
                    value={item.course}
                    onChange={(e) => handleChange(e, index, certifications, 'course')}
                  />
                  <input
                    type='text'
                    name='institution'
                    placeholder='Institution'
                    value={item.institution}
                    onChange={(e) => handleChange(e, index, certifications, 'institution')}
                  />
                  <input
                    type='text'
                    name='score'
                    placeholder='Score'
                    value={item.score}
                    onChange={(e) => handleChange(e, index, certifications, 'score')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleChange(e, index, certifications, 'description')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeRow(certifications, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() =>
              addRow(certifications, { year: '', institution: '', course: '', description: '' })
            }
          >
            Add
          </button>
        </div>

        <div className='section projects'>
          <hr />
          <h3 className='heading'>Projects</h3>
          {projects.map((item, index) => {
            return (
              <div className='row container-fluid' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={item.title}
                    onChange={(e) => handleChange(e, index, projects, 'title')}
                  />
                  <input
                    type='text'
                    name='link'
                    placeholder='Project URL'
                    value={item.link}
                    onChange={(e) => handleChange(e, index, projects, 'link')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleChange(e, index, projects, 'description')}
                  />
                </div>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(projects, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() => addRow(projects, { title: '', link: '', description: '' })}
          >
            Add
          </button>
          <input
            type='text'
            name='projects_link'
            placeholder='URL of More Projects'
            value={projects_link}
            onChange={(e) => setData({ ...data, projects_link: e.target.value })}
          />
        </div>

        <div className='section workshops'>
          <hr />
          <h3 className='heading'>Workshops</h3>
          {workshops.map((item, index) => {
            return (
              <div className='row container-fluid' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleChange(e, index, workshops, 'year')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleChange(e, index, workshops, 'description')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(workshops, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() => addRow(workshops, { year: '', description: '' })}
          >
            Add
          </button>
        </div>

        <div className='section projects'>
          <hr />
          <h3 className='heading'>Additional Activities</h3>
          {activities.map((item, index) => {
            return (
              <div className='container-fluid' key={index}>
                <div className='row item'>
                  <input
                    type='text'
                    name='title'
                    placeholder='Activities'
                    value={item.title}
                    onChange={(e) => handleChange(e, index, activities, 'title')}
                  />

                </div>
                <div className="row">
                  <button
                    className='btn btn-sm btn-danger'
                    onClick={() => removeRow(activities, index)}
                  >
                    Remove
                </button>
                </div>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() => addRow(activities, { title: '' })}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
