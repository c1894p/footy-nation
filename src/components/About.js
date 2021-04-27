import React from "react";

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-head">Welcome to Footy Nation!</h1>

      <p className="a body">
        Footy nation is place for fútbol/soccer fans all around the world. Show
        casing the most recent goals and highlights from a number of
        fútbol leagues and tournaments including the Premier League, Champions
        League, La Liga, Serie A, Europa League and many more!
      </p>

      <p className="a source">Content source: <a className ="content-source" href="https://www.scorebat.com/">ScoreBat</a></p>

      <p className="disclaimer">Disclaimer: Some videos have been disabled by the owner for playback. You can click on the quick link to watch on Youtube!</p>
    </div>
  );
};
