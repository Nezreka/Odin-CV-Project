import React from 'react';

function ExperienceForm(props){
    return(
        <form>
            <input type="text" name="expPosition" placeholder="Position" value={props.formData.position} onChange={props.onInputChange}></input>
            <input type="text" name="expCompany" placeholder="Company" value={props.formData.company} onChange={props.onInputChange}></input>
            <input type="text" name="expCity" placeholder="City" value={props.formData.city} onChange={props.onInputChange}></input>
            <input type="text" name="expFrom" placeholder="From" value={props.formData.from} onChange={props.onInputChange}></input>
            <input type="text" name="expTo" placeholder="To" value={props.formData.to} onChange={props.onInputChange}></input>
        </form>
    );
}

export default ExperienceForm;
