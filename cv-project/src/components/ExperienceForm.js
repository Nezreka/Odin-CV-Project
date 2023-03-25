import React from 'react';

function ExperienceForm(props){
    const { formData, onInputChange } = props;

    return(
        <form>
            <input type="text" name="expPosition" placeholder="Position" value={formData.expPosition} onChange={onInputChange}></input>
            <input type="text" name="expCompany" placeholder="Company" value={formData.expCompany} onChange={onInputChange}></input>
            <input type="text" name="expCity" placeholder="City" value={formData.expCity} onChange={onInputChange}></input>
            <input type="text" name="expFrom" placeholder="From" value={formData.expFrom} onChange={onInputChange}></input>
            <input type="text" name="expTo" placeholder="To" value={formData.expTo} onChange={onInputChange}></input>
        </form>
    );
}

export default ExperienceForm;
