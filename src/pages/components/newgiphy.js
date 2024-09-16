const { useState } = require("react");

const Page = () => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=immHU992FSf9FM9h5FoYCSYA1Tdk1uDQ&q=${value}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const [gifs, setGifs] = useState([]);
  const [value, setValue] = useState([]);
  const Gitgifs = async () => {
    const respose = await fetch(url);
    const { data } = await respose.json();
    setGifs(data);
  };
  Gitgifs();

  return (
    <div>
      <input value={(e) => setValue(e.target.value)} placeholder="search" />
      <button onClick={Gitgifs}>Submit</button>{" "}
      {gifs.map((gif) => {
        return (
          <div>
            {" "}
            <img src={gif.images.fixed_height.url} />
          </div>
        );
      })}
    </div>
  );
};
