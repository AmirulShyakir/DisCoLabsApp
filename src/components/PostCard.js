import * as React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function PostCard({ title, description, postOwner }) {
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
        postOwner: postOwner
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
              {postOwner.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
    </Link>
  );
}