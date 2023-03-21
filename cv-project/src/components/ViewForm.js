import React from 'react';

function ViewForm(props){
    return(
        <div className="viewInfo">
            <div className="personalInfo">
                <h3>Personal Information:</h3>
                <p>First Name: {props.formData.firstName}</p>
                <p>Last Name: {props.formData.lastName}</p>
                <p>Title: {props.formData.title}</p>
                <p>Address: {props.formData.address}</p>
                <p>Phone Number: {props.formData.phoneNumber}</p>
                <p>Email: {props.formData.email}</p>
            </div>
            <div className="experienceInfo">
                <h3>Experience:</h3>
                <p>Position: {props.formData.position}</p>
                <p>Company: {props.formData.company}</p>
                <p>City: {props.formData.city}</p>
                <p>From: {props.formData.from}</p>
                <p>To: {props.formData.to}</p>
            </div>
            <div className="educationInfo">
                <h3>Education:</h3>
                <p>University Name: {props.formData.universityName}</p>
                <p>Degree: {props.formData.degree}</p>
                <p>Subject: {props.formData.subject}</p>
                <p>From: {props.formData.eduFrom}</p>
                <p>To: {props.formData.eduTo}</p>
            </div>
        </div>
    );
}

export default ViewForm;
