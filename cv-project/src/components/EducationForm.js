import React from 'react';

function EducationForm(props){
    return(
        <form>
            <input type="text" name="universityName" placeholder="University Name" value={props.formData.universityName} onChange={props.onInputChange}></input>
            <input type="text" name="city" placeholder="City" value={props.formData.city} onChange={props.onInputChange}></input>
            <input type="text" name="degree" placeholder="Degree" value={props.formData.degree} onChange={props.onInputChange}></input>
            <input type="text" name="subject" placeholder="Subject" value={props.formData.subject} onChange={props.onInputChange}></input>
            <input type="text" name="from" placeholder="From" value={props.formData.from} onChange={props.onInputChange}></input>
            <input type="text" name="to" placeholder="To" value={props.formData.to} onChange={props.onInputChange}></input>
        </form>
    );
}

export default EducationForm;
