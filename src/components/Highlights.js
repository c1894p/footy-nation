import React  from "react";
import ReactPlayer from 'react-player'

export const Highlights = ({ data, match }) => {
  const title = match.params.title;

  console.log(data);


  return (
    <div>
      {data.map((d)=> (d.title === title && 
        <div key={d.id}>
            <h1 >{title}</h1>
            <p>{d.competition.name}</p>
            <p>{d.embed}</p>
            <ReactPlayer url='https://www.scorebat.com/embed/g/971927/?utm_source=api&utm_medium=match&utm_campaign=dflt'/>
        </div>))}

    </div>
  );
};
