import { Counter } from "./counter";
export class Timer {
    constructor(opt) {
        //console.log('NEW TIMER')
        this.name = opt.name
        this.types = opt.types
        this.current = opt.current
        this.timers = opt.timers
        this.counters = this.timers.map((c, i) => new Counter(this, i, this.types[i], c))
        this.counter_index = 0
    }

    totalMinutes() {
        return this.counters.reduce((a,b) => a + b.total, 0)
    }

    totalString() {
        let t = this.totalMinutes()
        let h = parseInt(t/60).toString().padStart(2,'0')
        let m = (t%60).toString().padStart(2,'0')
        return `${h}:${m}`
    }
}