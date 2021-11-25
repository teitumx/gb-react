import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
  },
  header: {
    textAlign: "right",
    color: "blue",
  },
  topicsWindow: {
    width: "30%",
    borderRight: "1px solid #FAFAFA",
  },
  chatWindow: {
    width: "100%",
    padding: "20px",
  },
  chatBox: {
    width: "100%",
    padding: "10px",
    justifyContent: "center",
  },
  flexInput: {
    padding: "10px",
    justifyContent: "center",
  },
  myMessage: {
    backgroundColor: "tomato",
    marginLeft: "auto",
  },
  inputsBox: {
    display: "flex",
    justifyContent: "right",
    textAlign: "center",
  },
}));

export default useStyles;
