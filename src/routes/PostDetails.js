import React from "react";
import { useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function PostDetails() {
  let { title, description, postOwner } = useLocation().state;

  return (
    <div style={{display: "flex"}}>
      <div className="content" style={{flex: 4}}>
        <h1>{title}</h1>
        <h2>Overview</h2>
        <p>{description}</p>
        <Divider/>
        <h2>Discussion</h2> 
      </div>
      <div className="discussionMembers" style={{flex: 1}}>       
        <h2>Posted By</h2>
        <div style={{display: "flex", gap: "10px"}}>
          <Avatar alt="Remy Sharp" src={`https://i.pravatar.cc/300?img=${postOwner.id}`} />
          <div>
            <p>{postOwner.name}</p>
            <p>{postOwner.role}</p>
          </div>
        </div>
        <h2>Participants</h2>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300?img=3" />
          <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=69" />
          <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/300?img=25" />
        </Stack>
      </div>
    </div>
  );
}
