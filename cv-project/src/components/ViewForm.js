import React from 'react';

function ViewForm(props){
    return(
        <div className="viewInfo">
            <div className="personalInfo">
                <h3>Personal Information:</h3>
                <p>First Name: {props.formData.selfFirstName}</p>
                <p>Last Name: {props.formData.selfLastName}</p>
                <p>Title: {props.formData.selfTitle}</p>
                <p>Address: {props.formData.selfAddress}</p>
                <p>Phone Number: {props.formData.selfPhoneNumber}</p>
                <p>Email: {props.formData.selfEmail}</p>
            </div>
            <div className="experienceInfo">
                <h3>Experience:</h3>
                <p>Position: {props.formData.expPosition}</p>
                <p>Company: {props.formData.expCompany}</p>
                <p>City: {props.formData.expCity}</p>
                <p>From: {props.formData.expFrom}</p>
                <p>To: {props.formData.expTo}</p>
            </div>
            <div className="educationInfo">
                <h3>Education:</h3>
                <p>University Name: {props.formData.eduUniversityName}</p>
                <p>City: {props.formData.eduCity}</p>
                <p>Degree: {props.formData.eduDegree}</p>
                <p>Subject: {props.formData.eduSubject}</p>
                <p>From: {props.formData.eduFrom}</p>
                <p>To: {props.formData.eduTo}</p>
            </div>
        </div>
    );
}

export default ViewForm;
