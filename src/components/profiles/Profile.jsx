import React from 'react';

const Profile =(props)=> {
    
    const {FirstName, LastName, Gender} = props.profile
    return ( 
        <div style={profileStyle}>
            <fieldset style={fieldsetStyle}>
                <legend style={legendStyle}> Personal Details</legend>
                <p><b>First Name:</b> {FirstName}</p>
                <p><b>Last Name:</b> {LastName}</p>
                <p><b>Gender:</b> {Gender}</p>
            </fieldset>

            <fieldset style={fieldsetStyle}>
                <legend style={legendStyle}> Other Details </legend>
                    <p><b>Latitude:</b> {props.profile.Latitude}</p>
                    <p><b>Credit card number:</b> {props.profile.CreditCardNumber}</p>
                    <p><b>Credit card type:</b> {props.profile.CreditCardType}</p>
                    <p><b>Email:</b> {props.profile.Email}</p>
                    <p><b>Domain Name:</b> {props.profile.DomainName}</p>
                    <p><b>Phone Number:</b> {props.profile.PhoneNumber}</p>
                    <p><b>Mac Address:</b> {props.profile.MacAddress}</p>
                    <p><b>URL:</b> {props.profile.URL}</p>
                    <p><b>Username:</b> {props.profile.UserName}</p>
                    <p><b>Last login:</b> {props.profile.LastLogin}</p>
                    <p><b>Payment Method:</b> {props.profile.PaymentMethod}</p>
            </fieldset>    

        </div>
        );
}


const profileStyle = {
    marginBottom: '20px',
    border: "1px solid gray",
    background: "#eeeeee",
    padding: "20px",
}


const fieldsetStyle = {
    backgroundColor: "#eeeeee",
}


const legendStyle = {
    backgroundColor: "gray",
    color: '#fff',
    padding: "5px 10px",
}
 
export default Profile;