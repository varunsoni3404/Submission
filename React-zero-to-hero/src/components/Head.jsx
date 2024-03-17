import React from "react";

function Head() {
  return (
    <div className="p-6 h-10 w-full flex items-center justify-between">
      <h1>This is a header</h1>
      <div id="links" className="flex justify-end items-center gap-10">
        <h1>Home</h1>
        <h1>About Us</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default Head;
