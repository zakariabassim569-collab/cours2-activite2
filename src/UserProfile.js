import React from "react";
import UserHeader from "./UserHeader";
import UserList from "./UserList";

function UserProfile(){
    // Donnees de l utilisateur 
    const profil = {
        nomComplet : "Bassim Zakaria",
        age: 25,
        profession:"Etudiant",
        objectifs:["Objectif 1","Objectif 2","Objectif 3"],
        motivations:["Motivation 1","Motivation 2","Motivation 3"],
        frustrations:["Frustration 1","Frustration 2","Frustration 3"] 
    };
    return (
        <div className="user-profil-card" style={{border:"1px solide #ccc",padding:"20px",borderRadius:"8px",maxWidth:"400px",margin:"20px auto"}}>
            <UserHeader nom={profil.nomComplet} age={profil.age} profession ={profil.profession}/>
            
            <UserList titre ="Objectifs" elements={profil.objectifs}/>
            <UserList titre ="Motivations" elements={profil.motivations}/>
            <UserList titre ="Frustration" elements={profil.frustrations}/>
        </div>
    );
}
export default UserProfile;