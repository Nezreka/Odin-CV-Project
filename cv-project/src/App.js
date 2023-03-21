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

  const handlePersonalFormSubmit = (data) => {
    console.log("Personal form submitted:", data);
  }

  const handleExperienceFormSubmit = (data) => {
    console.log("Experience form submitted:", data);
  }

  const handleEducationFormSubmit = (data) => {
    console.log("Education form submitted:", data);
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
            <div className='title'>
              Education
            </div>
            <EducationForm
              formData={formData}
              onInputChange={handleInputChange}
              onEducationFormSubmit={handleEducationFormSubmit}
            />
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
