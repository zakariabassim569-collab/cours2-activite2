import React from "react";

function UserHeader({nom,age,profession}){
    return(
        <div className = "user-header">
            <h2>Nom complet : {nom}</h2>
            <p><strong>Age : </strong>{age}</p>
            <p><strong>Profession :</strong>{profession}</p>
        </div>
    );
}
export default UserHeader;