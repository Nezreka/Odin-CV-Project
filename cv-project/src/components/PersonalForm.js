import React from 'react';


function PersonalForm(props){
    return(
        <form>
            <input type="text" name="firstName" placeholder="First Name" value={props.formData.firstName} onChange={props.onInputChange}></input>
            <input type="text" name="lastName" placeholder="Last Name" value={props.formData.lastName} onChange={props.onInputChange}></input>
            <input type="text" name="title" placeholder="Title" value={props.formData.title} onChange={props.onInputChange}></input>
            <input type="text" name="address" placeholder="Address" value={props.formData.address} onChange={props.onInputChange}></input>
            <input type="text" name="phoneNumber" placeholder="Phone number" value={props.formData.phoneNumber} onChange={props.onInputChange}></input>
            <input type="text" name="email" placeholder="Email" value={props.formData.email} onChange={props.onInputChange}></input>
        </form>
    );
}

export default PersonalForm;
