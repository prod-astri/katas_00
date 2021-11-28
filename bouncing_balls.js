function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce > 1 || window >= h) {
    return -1;
  } else {
    let res = 1;
    let newHeight = h * bounce;
    while (newHeight > window) {
      res += 2;
      newHeight = newHeight * bounce;
    }
    return res;
  }
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 2, 1.5));
