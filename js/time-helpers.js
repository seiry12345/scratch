export const timeHelpers = {
    methods: {
        convertStrToTs(val) {
            let [h, m] = val.split(':').map(Number);
            let str = `01/01/1970 ${h}:${m}:00` // <---- hh:mm: + 00(seconds)
            return new Date(str).getTime()
        },
        calculateSumOfDates(a, b) {
            return this.convertStrToTs(a) + this.convertStrToTs(b)
        },
        calculateDiffOfDates(a,b) {
            return this.convertStrToTs(a) - this.convertStrToTs(b)
        },
        getHours(val) {
            return Math.floor(val/(1000 * 60 * 60));
        },
        getMinutes(val) {
            return Math.floor(val/(1000 * 60));
        }
    }
}
