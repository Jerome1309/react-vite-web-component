import { useEffect, useState } from "react";
import styles from "./StarWars.scss";
import root from "react-shadow";

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
    var event = new CustomEvent("onWidgetBtnClick", {
      detail: "Example of an event from the web component",
    });

    const el = document.getElementById(props.widgetid);
    el.dispatchEvent(event);
  };

  return (
    <root.div id={props.widgetid}>
      <style type="text/css">{styles}</style>
      <div className="global">
        <h1>React web component v5</h1>
        <h2>{props.title}</h2>
        <h3>Widget id: {props.widgetid}</h3>
        {data && (
          <>
            <p>
              Name: <span className="name">{data.name}</span>
            </p>
            <p>Model: {data.model}</p>
            <p>Length: {data.length}</p>
          </>
        )}

        <button onClick={sendData}>Click me</button>
      </div>
    </root.div>
  );
};

export default StarWars;
