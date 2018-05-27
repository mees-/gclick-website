export default class FPSCounter {
  length: number
  constructor(length: number) {
    this.length = length
  }

  deltas: number[] = []
  lastTimestamp = performance.now()

  tick() {
    this.deltas.push(performance.now() - this.lastTimestamp)
    if (this.deltas.length > this.length) {
      this.deltas.shift()
    }
    this.lastTimestamp = performance.now()
  }

  fps() {
    return Math.round(
      1 /
        (this.deltas.reduce((acc, curr) => acc + curr, 0) /
          this.deltas.length /
          1000)
    )
  }
}
