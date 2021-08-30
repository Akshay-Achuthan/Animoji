import "./styles.css";
import React, { useState } from "react";
import emojidb from "./emojidb.js";

var emojiwehave = Object.keys(emojidb);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiinputhandler(event) {
    var userinput = event.target.value;

    var meaning = emojidb[userinput];

    if (meaning === undefined) {
      meaning = "!! oops we do not have it in our database";
    }

    setmeaning(meaning);
  }

  function emojiclickhandler(emoji) {
    var meaning = emojidb[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Animoji</h1>

      <input onChange={emojiinputhandler}></input>

      <h2>{meaning}</h2>

      <h3>Animoji's we have</h3>

      <div className="division">
        {emojiwehave.map(function (emoji) {
          return (
            <span onClick={() => emojiclickhandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
