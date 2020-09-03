import React from "react";
import "../Components/Card.css";

function Card() {
  return (
    <div>
      <div className="sample-wallpaper">
        <article className="wallpaper">
          <img alt="" src={require("..//assets/venom-1.jpg")} />
        </article>

        <article className="wallpaper">
          <img alt="" src={require("..//assets/hulk-1.jpg")} />
        </article>

        <article className="wallpaper">
          <img alt="" src={require("..//assets/venom-2.jpg")} />
        </article>
      </div>
    </div>
  );
}

export default Card;
