export class Timer {
    constructor(opt) {
      this.name = opt.name
      this.type = opt.type
      this.current = opt.current
      this.t1 = opt.t1
      this.t2 = opt.t2
      let a = this.t1.split(':')
      this.h1 = parseInt(a[0]);
      this.m1 = parseInt(a[1]);
      a = this.t2.split(':')
      this.h2 = parseInt(a[0]);
      this.m2 = parseInt(a[1]);
      console.log('HOURS', this.h1)
      console.log('HOURS', this.m1)
    }

    total() {
        return this.h1 + this.m1;
    }

    totalMinutes() {
        let h = (this.h1 + this.h2) * 60
        let m = this.m1 + this.m2
        return h+m
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