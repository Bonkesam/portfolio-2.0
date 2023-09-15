import React from 'react';
const music = [
    {
    url:"https://open.spotify.com/embed/track/6cViXqp01e3FrAaseuiSAV?utm_source=generator",
  },
  {
    url: "https://open.spotify.com/embed/track/4kbj5MwxO1bq9wjT5g9HaA?utm_source=generator" 
  },
  {
    url: "https://open.spotify.com/embed/track/503OTo2dSqe7qk76rgsbep?utm_source=generator"
  },
  {
    url: "https://open.spotify.com/embed/track/55cwGtYrExG7slEAor5jeR?utm_source=generator"
  }
]

const SpotifyPlayer = () => {
  return (
    <div className=" bg-none rounded-lg w-full max-w-sm mx-auto">
        {music.map((item) => (
            <iframe
            className="rounded-xl bg-origin-content mb-2"
            src={item.url}
            width="100%"
            height="80"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ))}
      
    </div>
  );
};

export default SpotifyPlayer;
