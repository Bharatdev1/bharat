import React from 'react';
import { Container, Typography, TextField, Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    background: '#f7f7f7',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  title: {
    color: '#0693fe',
    fontWeight: 'bold',
    fontSize: '28px',
  },
  form: {
    marginTop: theme.spacing(2),
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    background: '#0693fe',
    color: '#fff',
    '&:hover': {
      background: '#0574c4',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Contact Me
        </Typography>

        <form className={classes.form}>
          <TextField
            label="Name"
            variant="outlined"
            className={classes.input}
          />
          <TextField
            label="Email"
            variant="outlined"
            className={classes.input}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            className={classes.input}
          />
          <Button
            variant="contained"
            className={classes.button}
          >
            Send
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
