import { Component, useState, tags, hooks } from "@odoo/owl";

import CURRENT_TIMER_TEMPLATE from '../templates/CurrentTimer.html'

export class CurrentTimer extends Component {
    static template = tags.xml `${CURRENT_TIMER_TEMPLATE}`
    static props = {
        selectedTimer: {
            type: Object,
            optional: true,
        },
    }
}