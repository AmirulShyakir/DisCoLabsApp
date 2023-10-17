import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PostCard from "../components/PostCard";
import DiscussionCard from "../components/DiscussionCard";

export default function PostDetails() {
  let { title, description, postOwner, participants, discussion } = useLocation().state;
  const [userJoined, setUserJoined] = useState(false);

  const ownerAndParticipants = [postOwner, ...participants];

  function handleToggleJoinDiscussion() {
    setUserJoined(!userJoined);
  }

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

  function CardList({ discussion, postOwner, participants }) {
		return (
      discussion.map((item, index) => {
        // Find the discussion post owner in the combined array
        const discussionPoster = ownerAndParticipants.find(participant => participant.id === item.posterId);
  
        if (discussionPoster) {
          return (
            <DiscussionCard
              key={index}
              discussion={item}
              postOwner={discussionPoster}
            />
          );
        }
        return null;
      })
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
        {!userJoined && (
          <p>"You have not joined the discussion"</p> 
        )}
        {userJoined && (
          <CardList discussion={discussion} postOwner={postOwner} participants={participants}/>
        )}
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
        <Button variant="contained" style={{ marginTop: "20px"}} onClick={handleToggleJoinDiscussion}>
          {userJoined ? "Leave Discussion" : "Join Discussion"}
        </Button>
      </div>
    </div>
  );
}
