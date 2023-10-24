/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName},Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo condimentum augue eget gravida. Donec neque ex, gravida eget nunc vitae, sodales finibus tortor. Praesent vitae quam mauris. Integer varius massa turpis, ac euismod turpis consequat id. Proin tristique odio sed maximus euismod. Nulla ex neque, scelerisque at sollicitudin posuere, convallis nec leo. Maecenas felis nunc, rhoncus in consequat blandit, tristique mollis eros. Aenean cursus ante et nulla finibus vehicula. Nam enim orci, sodales ut massa at, faucibus rhoncus turpis. Vivamus purus augue, elementum quis condimentum eget, auctor in nisl. Phasellus non nisl gravida sem sagittis lobortis. Mauris laoreet et nisi in vestibulum. Fusce bibendum lorem eros, quis efficitur nunc semper a. Vivamus aliquam massa quis justo auctor fermentum.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
