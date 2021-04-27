import React from "react";


export const Highlights = ({ data, match }) => {
  const title = match.params.title;

  console.log(data);

  return (
    <div>
      {data.map((d) =>
          d.title === title && (
            <div key={d.id}>
              
              <h1>{title}</h1>
              <p>{d.competition.name}</p>
              <a href={d.url}>Full Match Stats</a>

              <div>
                {d.videos.map((video) => (
                  <div className="video-container">
                    <h4>Highlights</h4>
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
