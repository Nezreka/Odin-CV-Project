import React, { useState } from 'react';
import PersonalForm from './components/PersonalForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import ViewForm from './components/ViewForm';
import './styles/styles.css';

function App() {
  const [formData, setFormData] = useState({
    selfFirstName: "",
    selfLastName: "",
    selfTitle: "",
    selfAddress: "",
    selfPhoneNumber: "",
    selfEmail: "",
    expPosition: "",
    expCompany: "",
    expCity: "",
    expFrom: "",
    expTo: "",
    eduUniversityName: "",
    eduCity: "",
    eduDegree: "",
    eduSubject: "",
    eduFrom: "",
    eduTo: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handlePersonalFormSubmit = (e) => {
    e.preventDefault();
    console.log("Personal form submitted:", formData);
  }

  const handleExperienceFormSubmit = (e) => {
    e.preventDefault();
    console.log("Experience form submitted:", formData);
  }

  const handleEducationFormSubmit = (e) => {
    e.preventDefault();
    console.log("Education form submitted:", formData);
  }

  return (
    <div className="primary-content">
      <header>
        <h2>Header Text</h2>
      </header>
      <main>
        <div className="main-content">
          <div className="split-container form-entry">
            <div className='title'>
              Personal Information
            </div>
            <PersonalForm
              formData={formData}
              onInputChange={handleInputChange}
              onPersonalFormSubmit={handlePersonalFormSubmit}
            />
            <div className='title'>
              Experience
            </div>
            <ExperienceForm
              formData={formData}
              onInputChange={handleInputChange}
              onExperienceFormSubmit={handleExperienceFormSubmit}
            />
            <button>Add</button>
            <div className='title'>
              Education
            </div>
            <EducationForm
              formData={formData}
              onInputChange={handleInputChange}
              onEducationFormSubmit={handleEducationFormSubmit}
            />
            <button>Add</button>
          </div>
          <div className="split-container form-display">
            <ViewForm formData={formData} />
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
