import React, { useState, useEffect } from "react";

import Card from "./Card";
import Header from "./Header";

import Axios from "axios";

//

// console.log("after", data);

function CardView() {
  const [data, setData] = useState("loading...");

  useEffect(() => {
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15"
    )
      .then(res => setData(res.data))
      .catch(err => console.log("err", err));
  }, []);

  return (
    <div>
      <Header data={data} />
      <Card data={data} />
    </div>
  );
}

export default CardView;
