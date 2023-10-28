/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

import Portfolio from "../../assets/recentprojects/react-portfolio.png";
import Veritru from "../../assets/recentprojects/veritru.png";
import Lofo from "../../assets/recentprojects/lofo.png";
import Startup from "../../assets/recentprojects/startup.png";
import Lacalle from "../../assets/recentprojects/lacalle.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "React Portfolio",
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: "React Portfolio",
      image: `${Portfolio}`,
    },
    {
      id: 2,
      title: "Building Digital",
      description: `This project is a fake digital agency! A lovely project which,
       I learnt SCSS with that.Designed and developed with React.js & SCSS. `,
      alter: "VeriTru Project",
      image: `${Veritru}`,
    },
    {
      id: 3,
      title: "Quiz",
      description: `That's fantastic quiz web page which, designed and developed
      by React.js.`,
      alter: "LoFo Project",
      image: `${Lofo}`,
    },
    {
      id: 4,
      title: "WeLinked",
      description: `That is a charity web site which, linked the recruiters and 
      employees.This app designed and developed by React.js and It made with
      professional team work! we proud of this project because we designed
       the UI part as well `,
      alter: "Startup Project",
      image: `${Startup}`,
    },
    {
      id: 5,
      title: "Rainy play time",
      description: `This a weather app which, designed and developed by
      React.js and SCSS.`,
      alter: "Startup Project",
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
