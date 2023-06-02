import React from 'react';

const UserDetails = ({ props }) => {
    return (
        <div>
            <h2>User Details</h2>
            <p>Username: {props.userName}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
};

export default UserDetails;