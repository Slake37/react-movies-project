import Carousel from "../components/Carousel";
import HomeHeader from "../components/HomeHeader";
import Section from "../components/Section";
import { MovieIdContextProvider } from "../utils/MovieIdContext";
import { useState } from "react";
import Search from "../components/Search";

function Home() {
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    setText(search.replace(" ", "+"));
    e.preventDefault();
    setToggle(true);
    setSearch("");
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <MovieIdContextProvider>
        <HomeHeader handleSubmit={handleSubmit} handleChange={handleChange} />
        <Search
          toggle={toggle}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          text={text}
        />
        <Carousel />
        <Section />
      </MovieIdContextProvider>
    </div>
  );
}

export default Home;
