import React from 'react';

function ExperienceForm(props){
    return(
        <form>
            <input type="text" name="position" placeholder="Position" value={props.formData.position} onChange={props.onInputChange}></input>
            <input type="text" name="company" placeholder="Company" value={props.formData.company} onChange={props.onInputChange}></input>
            <input type="text" name="city" placeholder="City" value={props.formData.city} onChange={props.onInputChange}></input>
            <input type="text" name="from" placeholder="From" value={props.formData.from} onChange={props.onInputChange}></input>
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={props.formData.phoneNumber} onChange={props.onInputChange}></input>
            <input type="text" name="to" placeholder="To" value={props.formData.to} onChange={props.onInputChange}></input>
        </form>
    );
}

export default ExperienceForm;
