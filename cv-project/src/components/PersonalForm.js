import React from 'react';

function PersonalForm(props){
    const { formData, onInputChange } = props;

    return(
        <form>
            <input type="text" name="selfFirstName" placeholder="First Name" value={formData.selfFirstName} onChange={onInputChange}></input>
            <input type="text" name="selfLastName" placeholder="Last Name" value={formData.selfLastName} onChange={onInputChange}></input>
            <input type="text" name="selfTitle" placeholder="Title" value={formData.selfTitle} onChange={onInputChange}></input>
            <input type="text" name="selfAddress" placeholder="Address" value={formData.selfAddress} onChange={onInputChange}></input>
            <input type="text" name="selfPhoneNumber" placeholder="Phone number" value={formData.selfPhoneNumber} onChange={onInputChange}></input>
            <input type="text" name="selfEmail" placeholder="Email" value={formData.selfEmail} onChange={onInputChange}></input>
        </form>
    );
}

export default PersonalForm;
