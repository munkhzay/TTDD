const { useEffect, useState } = require("react");

const Page = () => {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState([]);
  const [sub, setSub] = useState([]);
  const url = `https://api.giphy.com/v1/gifs/tranding?api_key=immHU992FSf9FM9h5FoYCSYA1Tdk1uDQ&q=marvel&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  // useEffect(() => {
  //   const gitGifs = async () => {
  //     const respose = await fetch(url);
  //     const { data } = await respose.json();
  //     console.log(data);

  //     setGifs(data);
  //   };
  //   gitGifs();
  // }, []);

  const Searchgif = () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=immHU992FSf9FM9h5FoYCSYA1Tdk1uDQ&q=${search}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const gitGifs = async () => {
      const respose = await fetch(url);
      const { data } = await respose.json();
      setGifs(data);
    };
    gitGifs();
  };
  return (
    <div>
      {" "}
      <input
        className="border mr-10"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button className="border" onClick={Searchgif}>
        Submit
      </button>
      {gifs.map((gif) => {
        return (
          <div>
            <img src={gif.images.fixed_height.url} />
          </div>
        );
      })}
    </div>
  );
};
export default Page;
