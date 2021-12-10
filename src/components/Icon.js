import { Component, useState, tags } from "@odoo/owl";

import ICON_TEMPLATE from '../templates/Icon.html'

export class Icon extends Component {
    static template = tags.xml `${ICON_TEMPLATE}`
    static props = {
        icon: { type: String, optional: true },
    }
}