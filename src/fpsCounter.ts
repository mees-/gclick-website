const fpsCounter = () => {
  let lastRun: number = performance.now()

  return () => {
    const delta = (performance.now() - lastRun) / 1000
    lastRun = performance.now()
    return Math.floor(1 / delta)
  }
}

export default fpsCounter
