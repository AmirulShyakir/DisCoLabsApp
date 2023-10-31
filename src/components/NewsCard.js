import * as React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function NewsCard({ title, type, description, link}) {
  let chipColor = "";
  if (type === "Grant") {
    chipColor = "primary";
  } else if (type === "Workshop") {
    chipColor = "secondary";
  }

  const linkStyle = {
    textDecoration: 'none', // Remove underlines
    color: 'inherit', // Inherit the text color
  };
  return (
    <a
      style={linkStyle} // Apply custom style to the Link
      href='https://www.singhealthdukenus.com.sg/research/grant-calendar/khoo-pilot-award-(kpa)' // The target route
    >
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Chip label={type} color={chipColor} style={{width: "50%"}}/>
            <Typography variant="body2">
              {description}
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
    </a>
  );
}