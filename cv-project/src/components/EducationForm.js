import React from 'react';

function EducationForm(props){
    const { formData, onInputChange } = props;

    return(
        <form>
            <input type="text" name="eduUniversityName" placeholder="University Name" value={formData.eduUniversityName} onChange={onInputChange}></input>
            <input type="text" name="eduCity" placeholder="City" value={formData.eduCity} onChange={onInputChange}></input>
            <input type="text" name="eduDegree" placeholder="Degree" value={formData.eduDegree} onChange={onInputChange}></input>
            <input type="text" name="eduSubject" placeholder="Subject" value={formData.eduSubject} onChange={onInputChange}></input>
            <input type="text" name="eduFrom" placeholder="From" value={formData.eduFrom} onChange={onInputChange}></input>
            <input type="text" name="eduTo" placeholder="To" value={formData.eduTo} onChange={onInputChange}></input>
            
        </form>
    );
}

export default EducationForm;
