import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    width: "100%",
    backgroundColor: "#2196f3 !important", // Sky blue
    color: "#fff !important",
    borderRadius: 4,
    fontWeight: "bold",
    textTransform: "none",
    fontSize: "1rem",
    boxShadow: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 0",
  },
}));
