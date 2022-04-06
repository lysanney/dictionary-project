import React from "react";
import "./Dictionary.css";
import Synonyms from "./Synonyms";
// import Examples from "./Examples.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>
              {/* <Examples examples={definition.example} /> */}
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
