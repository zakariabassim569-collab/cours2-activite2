import React from "react";

function UserList({titre,elements}){
    return(
        <div className = "user-section">
            <h3>{titre}</h3>
            <ul>
                {elements.map((item,index)=>(
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;