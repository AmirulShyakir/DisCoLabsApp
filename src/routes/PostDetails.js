import React from "react";
import { useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';

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
        <p>{postOwner.name}</p>
        <p>{postOwner.role}</p>
        <h2>Participants</h2>
      </div>
    </div>
  );
}
