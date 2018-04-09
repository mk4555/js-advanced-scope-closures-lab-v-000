function produceDrivingRange(blocks) {
  return function(start, end) {
    let s = start.slice(0,2)
    let e = end.slice(0,2)
    if ((e-s) > blocks) {
      let over = (e-s) - blocks
      return `${over} blocks out of range`
    } else {
      return `within range by ${e-s}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(price) {
    return price * percentage
  }
}
