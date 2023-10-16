import React from "react";
import { useLocation } from 'react-router-dom';

export default function PostDetails() {
  let { title, description, postOwner } = useLocation().state;

  return (
    <div className="content">
      <h1>{title}</h1>
      <h2>Overview</h2>
      <p>{description}</p>
      <p>Posted by: {postOwner.name}</p>
      <p>Role: {postOwner.role}</p>
    </div>
  );
}
