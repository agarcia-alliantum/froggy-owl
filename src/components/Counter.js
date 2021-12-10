export class Counter {
    constructor(timer, index, type, total) {
        //console.log('NEW COUNTER...', index, type, total)
        this.id = (Math.random(1) * (new Date()).getTime()).toString()
        this.timer = timer
        this.index = index
        this.type = type
        this.total = total
        this.current = 0
        this.loops = 0
        this.reset()
    }

    reset() {
        this.current = 0
    }

    inc() {
        if(this.current<this.total) {
            this.current += 1;
            return this.current
        } {
            this.loops += 1;
            return false
        }
    }

    totalString() {
        let t = this.total
        let h = parseInt(t/60).toString().padStart(2,'0')
        let m = (t%60).toString().padStart(2,'0')
        return `${h}:${m}`
    }

}