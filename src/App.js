import { Component, tags, useState } from "@odoo/owl";
import { TimersList } from "./components/TimersList";
import { CurrentTimer } from "./components/CurrentTimer";
import { Timer } from "./components/Timer";

import APP_TEMPLATE from './templates/App.html';

export class App extends Component {
  static template = tags.xml `${APP_TEMPLATE}`;
  static components = { TimersList, CurrentTimer };
  state = useState({
    timers: [
      new Timer({ name: "First",   t1: "0:55", t2: "0:05", type: "work", current: true }),
      new Timer({ name: "Second",  t1: "0:55", t2: "0:05", type: "work", current: false }),
      new Timer({ name: "Third",   t1: "0:55", t2: "0:05", type: "work", current: false }),
      new Timer({ name: "Fourth",  t1: "0:55", t2: "0:05", type: "work", current: false }),
      new Timer({ name: "Pause",   t1: "0:30", t2: "0:00", type: "pause", current: false }),
      new Timer({ name: "Fifth",   t1: "0:55", t2: "0:05", type: "work", current: false }),
      new Timer({ name: "Sixth",   t1: "0:55", t2: "0:05", type: "work", current: false }),
      new Timer({ name: "Seventh", t1: "0:55", t2: "0:05", type: "work", current: false }),
      new Timer({ name: "Eighth",  t1: "0:55", t2: "0:05", type: "work", current: false }),
    ],
    selectedTimer: {},
  });

  constructor(...args) {
    super(...args);
    this.selectedTimer
  }

  onTimerChosen(ev) {
    //console.log('onTimerChosen', ev)
    this.state.selectedTimer = ev.detail.selectedTimer
    this.state.timers.forEach((s) => {
      s.current = false
    })
    //ev.detail.selectedTimer.current = true
    this.state.selectedTimer.current = true
  }

  onNewTimer(ev) {
    console.log('onNewTimer', ev)
    this.state.timers.push(
      new Timer({ name: "New timer",   t1: "0:55", t2: "0:05", type: "work", current: false }),
    )
  }
}
