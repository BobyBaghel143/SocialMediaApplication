import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from '@mui/icons-material/Share';

function PostCard({ authorFirstName, image, content }) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState("");

  function updateCount() {
    setCount(count + 1);      // Increasement count.
  }
  function decreaseCount() {
    setCount(count - 1);     // Decreasement count
  }

  return (
    <Card sx={{ maxWidth: 345, mb: "3rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {authorFirstName.substring(0, 1)}
          </Avatar>
        }

  
        action={
          <IconButton aria-label="settings" >
            <MoreVertIcon />
          </IconButton>
        }



        title={authorFirstName}
        subheader="July 14, 2023"
        // subheader= {new Date()}
      />

      {image.length > 0 ? (
        <CardMedia
          component="img"
          height="195"
          image={image}
          alt="Paella dish"
        />
      ) : null}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setIsLiked(!isLiked)}
        >
          {count}
          {isLiked ? (
            <FavoriteIcon onClick={decreaseCount} sx={{ color: red[500] }} />
          ) : (
            <FavoriteBorderIcon onClick={updateCount} />
          )}
        </IconButton>
         <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <button
        // onClick=(()=> SetIsRemove(id))
        >Delete</button>
          
      </CardActions>
    </Card>
  );
}

export default React.memo(PostCard);
