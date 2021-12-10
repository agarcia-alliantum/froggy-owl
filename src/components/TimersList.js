import { Component, useState, tags, hooks } from "@odoo/owl";

import { Icon } from "./Icon";

import TIMERS_LIST_TEMPLATE from '../templates/TimersList.html'

export class TimersList extends Component {
    static template = tags.xml `${TIMERS_LIST_TEMPLATE}`
    static components = { Icon }
    static props = {
        timers: {
            type: Array,
        },
    }
    state = useState({})

    getTimers() {
        return this.props.timers;
    }

    handleClick(item) {
        //this.trigger("input", item.name);
        this.trigger("chosen", { selectedTimer: item });
        //Object.assign(this.state, {
        //  chosenOption: item.name,
        //  showOptions: false,
        //  searchTerm: item.name,
        //});
    }

    totalMinutes() {
        return this.props.timers.reduce((a,b) => {
            return a + b.totalMinutes()
        }, 0)
    }

    totalString() {
        let t = this.totalMinutes()
        let h = parseInt(t/60).toString()
        let m = (t%60).toString()
        if(h.length<2) h = '0'+h
        if(m.length<2) m = '0'+m
        return `${h}:${m}`
    }
}