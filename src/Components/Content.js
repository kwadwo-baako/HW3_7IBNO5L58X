import React from "react";
import "../Components/global.css";
import "../Components/layout.css";
import "../Components/search.css";

function Content() {
  return (
    <header>
      <div>
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeHolder="Search" />
        </div>
      </div>
    </header>
  );
}

export default Content;
