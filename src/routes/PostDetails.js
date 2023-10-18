import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DiscussionCard from "../components/DiscussionCard";
import TextField from '@mui/material/TextField';

export default function PostDetails() {
  let { title, description, postOwner, participants, discussion } = useLocation().state;
  const [userJoined, setUserJoined] = useState(false);
  const [allParticipants, setAllParticipants] = useState([...participants]);
  const [allDiscussion, setAllDiscussion] = useState([...discussion]);

  const ownerAndParticipants = [postOwner, ...allParticipants];

  const user = {
    name: "Jeffry Hartanto",
    role: "Research Fellow at National Dental Centre Singapore",
    id: 100,
  }

  function handleToggleJoinDiscussion() {
    if (!userJoined) {
      // If the user is joining the discussion, add them to the list of participants
      setAllParticipants([...allParticipants, user]);
    } else {
      // If the user is leaving the discussion, remove them from the list of participants
      setAllParticipants(allParticipants.filter(participant => participant.id !== user.id));
    }
    setUserJoined(!userJoined);
  }

  function ParticipantsList({ participants }) {
		return (
      participants.map((participant, index) => (
        <div style={{display: "flex", gap: "10px"}}>
          <Avatar 
            alt={participant.name} 
            src={participant.id === 100
            ? "https://media.licdn.com/dms/image/C5603AQHQAtjjii2bXA/profile-displayphoto-shrink_800_800/0/1633504787029?e=1703116800&v=beta&t=1sE60Pk5zvv_JLXlAp-nEdLEx9_HZdi9J3ziCk3kQWs"
            : `https://i.pravatar.cc/300?img=${participant.id}`
            }
          />
          <div>
            <p>{participant.name}</p>
            <p>{participant.role}</p>
        </div>
        </div>
      ))
		);
	}

  function CardList({ discussion}) {
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
  const [userComment, setUserComment] = useState('');
  const handleUserCommentChange = (event) => {
    setUserComment(event.target.value);
  };
  const handleCommentSubmit = () => {
    // Create a new comment object
    const newComment = {
      comment: userComment,
      likes: 0,
      posterId: user.id, // Use the user's ID
    };
  
    // Add the new comment to the discussion array
    setAllDiscussion([...allDiscussion, newComment]);
  
    // Clear the user's comment input field
    setUserComment('');
  };
  
  

  return (
    <div style={{display: "flex"}}>
      <div className="content" style={{flex: 4}}>
        <h1>{title}</h1>
        <h2>Overview</h2>
        <p>{description}</p>
        <Divider/>

        <h2>Discussion</h2>
        {!userJoined && (
          <p>You have not joined the discussion</p> 
        )}
        {userJoined && (
          <>
            <p>Comment as Jeffry Hartanto</p>
            <TextField
              id="outlined-basic"
              label="Comment Here"
              variant="outlined"
              multiline
              rows={4}
              value={userComment}
              onChange={handleUserCommentChange}
            />
            <Button
              type="submit"
              variant="contained"
              style={{ width: "25%" }}
              onClick={handleCommentSubmit}
            >
              Comment
            </Button>
            <CardList discussion={allDiscussion}/>
          </>
        )}
      </div>
      
      <div className="discussionMembers" style={{flex: 1}}>       
        <h2>Posted By</h2>
        <div style={{display: "flex", gap: "10px"}}>
          <Avatar 
            alt={postOwner.name} 
            src={postOwner.id === 100
            ? "https://media.licdn.com/dms/image/C5603AQHQAtjjii2bXA/profile-displayphoto-shrink_800_800/0/1633504787029?e=1703116800&v=beta&t=1sE60Pk5zvv_JLXlAp-nEdLEx9_HZdi9J3ziCk3kQWs"
            : `https://i.pravatar.cc/300?img=${postOwner.id}`
            }
          />
          <div>
            <p>{postOwner.name}</p>
            <p>{postOwner.role}</p>
          </div>
        </div>
        <h2>Participants</h2>
        <Stack spacing={2}>
          <ParticipantsList participants={allParticipants}/>
        </Stack>
        <Button variant="contained" style={{ marginTop: "20px"}} onClick={handleToggleJoinDiscussion}>
          {userJoined ? "Leave Discussion" : "Join Discussion"}
        </Button>
      </div>
    </div>
  );
}
