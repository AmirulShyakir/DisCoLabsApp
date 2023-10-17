import  React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';

export default function DiscussionCard({ discussion, postOwner }) {
  const [likes, setLikes] = useState(discussion.likes);
  const [hasLiked, setHasLiked] = useState(false);

  function incrementLike() {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  }

	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant="outlined">
				<CardContent>
					<div style={{ display: "flex", gap: "10px" }}>
						<Avatar
							alt="Remy Sharp"
							src={`https://i.pravatar.cc/300?img=${postOwner.id}`}
						/>
						<div>
							<p>{postOwner.name}</p>
							<p>{postOwner.role}</p>
							<br />
						</div>
					</div>
					<Typography variant="body2">{discussion.comment}</Typography>
				</CardContent>
				<CardActions>
          
          <div style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <IconButton aria-label="like post" color="primary">
            <ReplyIcon/>
            </IconButton>
            <p>Reply</p>
          </div>
          
          <div style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <IconButton aria-label="like post" color="primary" onClick={incrementLike}>
              <FavoriteIcon />
            </IconButton>
            <p>{likes} Like{likes > 1 ? "s" : ""}</p>
          </div>
          
          <div style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <IconButton aria-label="share" color="primary">
              <ShareIcon />
            </IconButton>
            <p>Share</p>
          </div>
				</CardActions>
			</Card>
		</Box>
	);
}
