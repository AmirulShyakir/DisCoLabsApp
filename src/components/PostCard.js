import * as React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function PostCard({ title, description, postOwner, participants, discussion }) {
  const linkStyle = {
    textDecoration: 'none', // Remove underlines
    color: 'inherit', // Inherit the text color
  };

  console.log(title);

  return (
    <Link
      style={linkStyle} // Apply custom style to the Link
      to='/post-details' // The target route
      state={{ 
        title: title,
        description: description,
        postOwner: postOwner,
        participants: participants,
        discussion: discussion,
      }} // The state to pass
    >
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">
              {description}
              <br />
              <br />
            </Typography>
            <div style={{display: "flex", gap: "10px"}}>
              <Avatar alt="Remy Sharp" src={`https://i.pravatar.cc/300?img=${postOwner.id}`} />
              <div>
                <p>{postOwner.name}</p>
                <p>{postOwner.role}</p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
    </Link>
  );
}