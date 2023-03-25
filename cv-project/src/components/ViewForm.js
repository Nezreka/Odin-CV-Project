import React from 'react';

function ViewForm(props){
    const { formData } = props;

    return(
        <div className="viewInfo">
            <div className="personalInfo">
                <h3>Personal Information:</h3>
                {formData.selfFirstName && <p>First Name: {formData.selfFirstName}</p>}
                {formData.selfLastName && <p>Last Name: {formData.selfLastName}</p>}
                {formData.selfTitle && <p>Title: {formData.selfTitle}</p>}
                {formData.selfAddress && <p>Address: {formData.selfAddress}</p>}
                {formData.selfPhoneNumber && <p>Phone Number: {formData.selfPhoneNumber}</p>}
                {formData.selfEmail && <p>Email: {formData.selfEmail}</p>}
            </div>
            <div className="experienceInfo">
                <h3>Experience:</h3>
                {formData.expPosition && <p>Position: {formData.expPosition}</p>}
                {formData.expCompany && <p>Company: {formData.expCompany}</p>}
                {formData.expCity && <p>City: {formData.expCity}</p>}
                {formData.expFrom && <p>From: {formData.expFrom}</p>}
                {formData.expTo && <p>To: {formData.expTo}</p>}
            </div>
            <div className="educationInfo">
                <h3>Education:</h3>
                {formData.eduUniversityName && <p>University Name: {formData.eduUniversityName}</p>}
                {formData.eduCity && <p>City: {formData.eduCity}</p>}
                {formData.eduDegree && <p>Degree: {formData.eduDegree}</p>}
                {formData.eduSubject && <p>Subject: {formData.eduSubject}</p>}
                {formData.eduFrom && <p>From: {formData.eduFrom}</p>}
                {formData.eduTo && <p>To: {formData.eduTo}</p>}
            </div>
        </div>
    );
}

export default ViewForm;
