import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function Profile() {
  return (
    <div className="content">
      <h1>Profile</h1>
      <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
        <Avatar 
          alt="Jeffry Hartanto" 
          src={`https://media.licdn.com/dms/image/C5603AQHQAtjjii2bXA/profile-displayphoto-shrink_800_800/0/1633504787029?e=1703116800&v=beta&t=1sE60Pk5zvv_JLXlAp-nEdLEx9_HZdi9J3ziCk3kQWs`}
          sx={{ width: 66, height: 66 }}
        />
        <div>
          <h2>Jeffry Hartanto</h2>
          <p>Research Fellow at National Dental Centre Singapore</p>
        </div>
      </div>
      <Button variant="contained" style={{width: "25%", marginTop: "20px"}}>Log Out</Button>
    </div> 
  );
}

export default Profile;
