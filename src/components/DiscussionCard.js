import  React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';

export default function DiscussionCard({ discussion, postOwner }) {
  const [likes, setLikes] = useState(discussion.likes);
  const [hasLiked, setHasLiked] = useState(false);

  function toggleLike() {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(discussion.likes);
      setHasLiked(false);
    }
  }

	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant="outlined">
				<CardContent>
					<div style={{ display: "flex", gap: "10px" }}>
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
							<br />
						</div>
					</div>
					<Typography variant="body2">{discussion.comment}</Typography>
				</CardContent>
				<CardActions>
          
          <div style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <IconButton aria-label="like post" color="default">
            <ReplyIcon/>
            </IconButton>
            <p>Reply</p>
          </div>
          
          <div style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <IconButton aria-label="like post" color={hasLiked ? "primary" : "default"} onClick={toggleLike}>
              <FavoriteIcon />
            </IconButton>
            <p>{likes} Like{likes > 1 ? "s" : ""}</p>
          </div>
          
          <div style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <IconButton aria-label="share" color="default">
              <ShareIcon />
            </IconButton>
            <p>Share</p>
          </div>
				</CardActions>
			</Card>
		</Box>
	);
}
