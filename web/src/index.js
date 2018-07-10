import React from 'react';
import ReactDOM from "react-dom";
import {RPSApp} from "./RPSApp";
import {RPS} from "rps";
import InMemoryRoundRepo from "../../rps/src/InMemoryRoundRepo";

const domFixture = document.createElement('div');
domFixture.id = 'reactApp';
document.querySelector('body').appendChild(domFixture);


ReactDOM.render(
  <RPSApp usecases={new RPS(new InMemoryRoundRepo())}/>,
  domFixture
);
