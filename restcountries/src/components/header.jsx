import React from "react";

function HeaderComponent() {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1> Where in the country? </h1>
      <form>
        <input type="text" placeholder="Search for a country..." />
        <button type="button">Search</button>
      </form>
    </div>
  );
}

export default HeaderComponent;
