class Wheelsurf {
  constructor(selector) {
    this.selector = selector
    this.isRotating = false
  }
  rotate(deg, dur, cb) {
    if (this.isRotating) return
    this.isRotating = true
    this.selector.style.transitionDuration = `${dur}s`
    this.selector.style.transform = `rotate(${deg}deg)`
    setTimeout(() => {
      this.isRotating = false
      cb && cb()
    }, dur * 1000)
  }
}

export default Wheelsurf