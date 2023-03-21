import React from 'react';


function PersonalForm(props){
    return(
        <form>
            <input type="text" name="selfFirstName" placeholder="First Name" value={props.formData.firstName} onChange={props.onInputChange}></input>
            <input type="text" name="selfLastName" placeholder="Last Name" value={props.formData.lastName} onChange={props.onInputChange}></input>
            <input type="text" name="selfTitle" placeholder="Title" value={props.formData.title} onChange={props.onInputChange}></input>
            <input type="text" name="selfAddress" placeholder="Address" value={props.formData.address} onChange={props.onInputChange}></input>
            <input type="text" name="selfPhoneNumber" placeholder="Phone number" value={props.formData.phoneNumber} onChange={props.onInputChange}></input>
            <input type="text" name="selfEmail" placeholder="Email" value={props.formData.email} onChange={props.onInputChange}></input>
        </form>
    );
}

export default PersonalForm;
