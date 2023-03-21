import React from 'react';

function EducationForm(props){
    return(
        <form>
            <input type="text" name="eduUniversityName" placeholder="University Name" value={props.formData.universityName} onChange={props.onInputChange}></input>
            <input type="text" name="eduCity" placeholder="City" value={props.formData.city} onChange={props.onInputChange}></input>
            <input type="text" name="eduDegree" placeholder="Degree" value={props.formData.degree} onChange={props.onInputChange}></input>
            <input type="text" name="eduSubject" placeholder="Subject" value={props.formData.subject} onChange={props.onInputChange}></input>
            <input type="text" name="eduFrom" placeholder="From" value={props.formData.from} onChange={props.onInputChange}></input>
            <input type="text" name="eduTo" placeholder="To" value={props.formData.to} onChange={props.onInputChange}></input>
        </form>
    );
}

export default EducationForm;
