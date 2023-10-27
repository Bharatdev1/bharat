import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  title: {
    color: '#0693fe',
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: theme.spacing(3),
    color: '#0693fe',
  },
  secondaryText: {
    color: '#555',
  },
  skill: {
    background: '#0693fe',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    marginRight: '8px',
  },
  listItem: {
    borderBottom: '1px solid #ccc',
    paddingBottom: theme.spacing(1),
  },
  projectCard: {
    maxWidth: 300,
    margin: theme.spacing(2),
    background: '#f7f7f7',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  cardMedia: {
    height: 200,
  },
}));

const AboutAndPortfolio = () => {
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          About Me
        </Typography>
        <Typography variant="body1" className={classes.secondaryText}>
          My name is Bharat Vasnani, and I'm a Front-End Developer with a passion for creating elegant and responsive web applications. I'm based in Jaipur, Rajasthan, India, and you can reach me at +91 9079670528 or via email at bharatvasnani007@gmail.com.
        </Typography>

        <Typography variant="h6" className={classes.sectionTitle}>
          Professional Experience
        </Typography>
        <List>

        <ListItem className={classes.listItem}>
  <ListItemText
    primary="Front End Developer (UI Design) at Kriplus Hypermedia, Spain"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.secondaryText}
        >
          08/2022 - 08/2023
        </Typography>
        <ul>
          <li>
          Played a pivotal role in enhancing the user interface
        (UI) of the company website using cutting-edge
        technologies
          </li>
          <li>
          Utilized React JS, CSS, and Bootstrap to revamp the 
          website, improving its visual appeal and user
          experience.
          </li>
          
        </ul>
      </React.Fragment>
    }
  />
</ListItem>


          <ListItem className={classes.listItem}>
  <ListItemText
    primary="Internship at Grras Solutions Pvt. Ltd, India (MERN Stack)"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.secondaryText}
        >
          05/2021 - 11/2021
        </Typography>
        <ul>
          <li>
            Acquired proficiency in MERN (MongoDB, Express, React, Node) stack technologies through hands-on experience.
          </li>
          <li>
            Demonstrated skills in implementing Material UI, JavaScript, and CSS while working on real-world projects.
          </li>
          <li>
            Collaborated with a dynamic team to create innovative web solutions, gaining practical insights into web development.
          </li>
        </ul>
      </React.Fragment>
    }
  />
</ListItem>

          
        </List>

        <Typography variant="h6" className={classes.sectionTitle}>
          My Projects
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemText primary="E-commerce Website (MERN Stack)" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary="Wine Louise Santi Product Information Website" />
          </ListItem>
        </List>

        <Typography variant="h6" className={classes.sectionTitle}>
          My Skills
        </Typography>
        <Box component="div" className={classes.skill}>
          Languages: Java
        </Box>
        <Box component="div" className={classes.skill}>
          Technologies: MERN, ReactJS, Node, Express, MongoDB, JavaScript, Bootstrap, jQuery, CSS
        </Box>
        <Box component="div" className={classes.skill}>
          Concepts: Object-Oriented Programming, Agile, MVC, Functional Programming, Rest API
        </Box>

        <Typography variant="h6" className={classes.sectionTitle}>
          Hobbies
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemText primary="Teaching – Passion for sharing knowledge and mentoring others." />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          My Projects
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.projectCard}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://github.com/Bharatdev1/bharat/blob/main/public/images/sw.PNG?raw=true"
                  title="Project 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  E-commerce Website (MERN Stack)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.secondaryText}
                  >
                   Designed, developed, and launched a feature-rich
                    e-commerce platform utilizing the MERN stack
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.projectCard}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://github.com/Bharatdev1/bharat/blob/main/public/images/ww.PNG?raw=true"
                  title="Project 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  Wine Louise Santi Product Information Website <a target='blank' href='https://louisesannti.com/'>View</a>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.secondaryText}
                  >
                    Designed and developed a product information
                    website for Louise Santi, showcasing fresh and fine wines
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          

        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutAndPortfolio;
