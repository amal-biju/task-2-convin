import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "../Styles/Post.module.css";

const useStyles = makeStyles({
   root: {
      minWidth: 275,
      marginBottom: "20px",
      width: "80%",
      margin: "auto",
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
});

export default function Post({ item, handleToggle }) {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
               Post - {item.id}
            </Typography>
            <Typography variant="h5" component="h2">
               {item.title}
            </Typography>
            <Typography variant="body2" component="p">
               {item.body}
            </Typography>
         </CardContent>
         <CardActions>
            <Paper onClick={() => handleToggle(item.id, item.isFavourite)} className={styles.toggle}>
               {item.isFavourite ? (
                  <Tooltip title="Remove from Favorites">
                     <BookmarkIcon color="secondary" />
                  </Tooltip>
               ) : (
                  <Tooltip title="Add to Favorites">
                     <BookmarkBorderIcon />
                  </Tooltip>
               )}
            </Paper>
         </CardActions>
      </Card>
   );
}
