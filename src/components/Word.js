import React from "react";
import "./Word.css";

const Word = props => (
  <li>
    Słowo po angielsku:{props.english} <br />
    po tłumaczeniu {props.polish}
  </li>
);

export default Word;
