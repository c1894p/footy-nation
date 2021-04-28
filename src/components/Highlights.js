import React from "react";
import {useParams} from 'react-router-dom'


export const Highlights = ({ data }) => {
  const { title } = useParams()

  console.log(data);

  return (
    <div className="highlight-container">
      {data.map((d) =>
          d.title === title && (
            <div key={d.id}>
              
              <h1 className="highlight-title">{title}</h1>
              <p className="comp-title">{d.competition.name}</p>
              <a className="full-stats" href={d.url}> Full Match Stats</a>

              <div>
              <h4 className="video-title">🚨  Highlights 🚨 </h4>
                {d.videos.map((video) => (
                  <div className="video-container">
                    <div dangerouslySetInnerHTML={{ __html: video.embed }} />
                  </div>
                ))}
              </div>

            </div>
          )
      )}
    </div>
  );
};
