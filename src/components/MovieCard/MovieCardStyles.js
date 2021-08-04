import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    border:'0',
    backgroundColor:'#2b2b2b',
    color: "#cacaca",
  },
  cardTitle:{
    margin:0,
    padding:0,
    textAlign:'left'
  },
  innerCard: {
    display: "flex",
    margin:'0',
    padding:'0',
  },
  media: {
    display: "block",
    width: "200px",
    height: "300px",
  },
  cardInfo:{
      maxWidth:'800px',
  },
  cardBody:{
    margin:'5px 10px',
    padding:0,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  },
  dividerRoot:{
    height:'2px'
  },
  ratingBlock:{
    display:'flex'
  },
  ratingStars:{
    alignSelf:'center'
  },
  ratingNum:{
    paddingLeft:'5px'
  },
  link:{
    textDecoration:'none',
    color:'#cacaca'
  }
}));
