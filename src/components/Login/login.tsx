import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../logo.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2196F3",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "36px",
    width: "100px",
    backgroundColor: "#2196F3",
  },
  logo: {
    height: "144px",
    backgroundColor: "white",
    marginBottom: "39px",
    marginTop: "39px",
  },
  text: {
    height: "60px",
    width: "302px",
    marginBottom: "15px",
    marginTop: "15px",
  },
}));

function LoginPage() {
  const history = useHistory();

  function loginToSurvey(event) {
    // If implementing survey code submission ourselves, add here
    history.push("/survey");
  }

  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      bgcolor="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img src={logo} alt="logo" className={classes.logo} />
      <Box
        className="input-container"
        width="337px"
        height="240px"
        bgcolor="white"
        flexDirection="column"
        alignItems="center"
        display="flex"
      >
        <TextField
          required
          id="outlined-basic"
          name="survey-code"
          label="Survey Code"
          type="survey-code"
          variant="outlined"
          style={{
            height: 60,
            width: 302,
            padding: 0,
            paddingBottom: 0,
            marginBottom: 15,
            marginTop: 15,
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={loginToSurvey}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;
