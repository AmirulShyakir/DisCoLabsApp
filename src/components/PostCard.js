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
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function PostCard({ title, description, postOwner, participants, discussion, likes }) {
  const linkStyle = {
    textDecoration: 'none', // Remove underlines
    color: 'inherit', // Inherit the text color
  };
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
        likes: likes,
      }} // The state to pass
    >
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", WebkitLineClamp: 1, marginBottom: 10 }}>
              {title}
            </Typography>
            <Typography variant="body2" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", WebkitLineClamp: 3, marginBottom: 10 }}>
              {description}
            </Typography>
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
              <div style={{position: "absolute", right: 15, display:"flex", flexDirection: "row", alignItems: "center"}}>
                <IconButton aria-label="like post" color="default">
                  <FavoriteIcon />
                </IconButton>
                <p>{likes} Like{likes > 1 ? "s" : ""}</p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
    </Link>
  );
}