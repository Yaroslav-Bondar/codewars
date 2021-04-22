class Cube {
    constructor(len) {
        this._length = len
    }
    static width
    set serfaceArea(x) {
        this._serfaceArea = x 
    }
    set volume(x) {
        this._volume = x 
    }
    get length() {
        console.log(this._length)
        return this._length
    }
    get serfaceArea() {
        console.log(6 * (this._length * this._length))
        return 6 * (this._length * this._length) 
    }
    get volume() {
        console.log(Math.pow(this._length, 3))
        return Math.pow(this._length, 3) 
    }
}
let cube = new Cube(1)
cube.length
// console.log(cube.length)
// cube.width = 2
// console.log(cube.width)