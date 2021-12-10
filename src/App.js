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
      new Timer({ name: "First",   timers: [15, 55, 5], types: ["inbox", "work", "pause"], current: true }),
      new Timer({ name: "Second",  timers: [55, 5],     types: ["work", "pause"],          current: false }),
      new Timer({ name: "Third",   timers: [55, 5],     types: ["work", "pause"],          current: false }),
      new Timer({ name: "Fourth",  timers: [55],        types: ["work"],                   current: false }),
      new Timer({ name: "Pause",   timers: [20],        types: ["pause"],                  current: false }),
      new Timer({ name: "Fifth",   timers: [55, 5],     types: ["work", "pause"],          current: false }),
      new Timer({ name: "Sixth",   timers: [55, 5],     types: ["work", "pause"],          current: false }),
      new Timer({ name: "Seventh", timers: [55, 5],     types: ["work", "pause"],          current: false }),
      new Timer({ name: "Eighth",  timers: [50, 10],    types: ["work", "sumup"],          current: false }),
    ],
    selectedTimer: {},
  });

  constructor(...args) {
    super(...args);
    this.state.selectedTimer = this.state.timers.find(t => t.current)
    //this.onTimerChosen({detail: {selectedTimer: this.state.timers.find(t => t.current)}});
  }

  onTimerChosen(ev) {
    console.log('SELECTED TIMER', ev.detail.selectedTimer)
    this.state.selectedTimer = ev.detail.selectedTimer
    this.state.timers.forEach((s) => {
      s.current = false
    })
    this.state.selectedTimer.current = true
    console.log('SEL', this.state.selectedTimer)
    /*
    this.timeout = setInterval(() =>{
      if(this.state.selectedTimer.currentMinute>=this.state.selectedTimer.minutes) {
        clearInterval(this.timeout)
        return true;
      }
      console.log('200 TICK', this.state.selectedTimer.currentMinute++)
    },200)
    */
  }

  onNewTimer(ev) {
    console.log('onNewTimer', ev)
    this.state.timers.push(
      //new Timer({ name: "New timer",   t1: "0:55", t2: "0:05", type: "work", current: false }),
    )
  }
}
