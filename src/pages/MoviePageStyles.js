import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    color: "#cacaca",
  },
  movieBody: {
    display: "flex",
  },
  media: {
    width: "250px",
    height: "300px",
  },
  overview: {
    maxWidth: "800px",
    margin: "10px",
  },
  movieInfo: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,.24)",
    padding: "20px",
    margin: "10px 0",
  },
  ratingBlock: {
    display: "flex",
  },
  ratingStars: {
    alignSelf: "center",
  },
  ratingNum: {
    paddingLeft: "5px",
  },
  link:{
      textDecoration:'none'
  },
  btnContainer:{
      display:'flex',
      justifyContent:'center'
  },
  btn:{
      margin:'10px'
  }
}));
