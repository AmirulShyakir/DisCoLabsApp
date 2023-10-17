import React from "react";
import { useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function PostDetails() {
  let { title, description, postOwner, participants } = useLocation().state;

  function ParticipantsList({ participants }) {
		return (
				participants.map((participant, index) => (
          <div style={{display: "flex", gap: "10px"}}>
					  <Avatar alt={participant.name} src={`https://i.pravatar.cc/300?img=${participant.id}`} />
            <div>
              <p>{participant.name}</p>
              <p>{participant.role}</p>
          </div>
          </div>
				))
		);
	}

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
          <Avatar alt={`${postOwner.name}`} src={`https://i.pravatar.cc/300?img=${postOwner.id}`} />
          <div>
            <p>{postOwner.name}</p>
            <p>{postOwner.role}</p>
          </div>
        </div>
        <h2>Participants</h2>
        <Stack spacing={2}>
          <ParticipantsList participants={participants}/>
        </Stack>
      </div>
    </div>
  );
}
