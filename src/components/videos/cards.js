import React ,{useEffect , useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import {VideoArticles} from '../../Redux/Actions/videoArticles'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {

  const dispatch = useDispatch()
const [state, setstate] = useState(null)
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    dispatch(VideoArticles())
  
  }, [])


  
  const video = useSelector(state => state.VideoArticle.VideoArticles)
  console.log(video)
  useEffect(() => {
    
    setstate(video)
  
    console.log(state)
  }, [video])



  // const state = useSelector(state => state.state)
  

  return (
   <div>
     {
       state && state.map((item)=>{
         return  <Card className={classes.root}>
         <CardMedia
           className={classes.media}
         />
         <CardMedia
           className={classes.media}
          //  image="https://www.w3schools.com/images/picture.jpg"
          image = {item.image}
           title="Paella dish"
         />
         <CardContent>
           <date>Mon , 29 Mar, 2021</date>
   
           <Typography variant="body2" color="textSecondary" component="p">
             {/* This impressive paella is a perfect party dish and a fun meal to cook. */}

             {
               item.description
             }
           </Typography>
         </CardContent>
       </Card>
       })
     }
   </div>
  );
}
