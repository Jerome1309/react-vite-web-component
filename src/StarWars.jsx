import { useEffect, useState } from "react";
import styles from "./StarWars.module.css";

const StarWars = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const setStarWarsData = async () => {
      const starWarsData = await getData();
      setData(starWarsData);
    };

    setStarWarsData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://swapi.dev/api/starships/9/");
    const data = response.json();

    return data;
  };

  const sendData = () => {
    props.btn("data from webcomponent");
  };

  return (
    <div>
      <h1>React web component</h1>
      <h2>{props.title}</h2>
      {data && (
        <>
          <p>
            Name: <span className={styles.name}>{data.name}</span>
          </p>
          <p>Model: {data.model}</p>
          <p>Length: {data.length}</p>
        </>
      )}

      <button onClick={sendData}>Click me</button>
    </div>
  );
};

export default StarWars;
