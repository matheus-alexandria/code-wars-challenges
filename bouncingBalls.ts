export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0.0) {
    return -1;
  }

  if (bounce <= 0 || bounce >= 1) {
    return -1;
  }

  if (window >= h) {
    return -1;
  }

  let ballSeen = 1;
  let bounceHeight = h;
  bounceHeight = bounce * bounceHeight;
  while (bounceHeight >= window) {
    bounceHeight = bounce * bounceHeight;
    ballSeen += 2;
  }

  return ballSeen;
}

// console.log(bouncingBall(3.0, 0.66, 1.5));
// console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(30, 0.75, 1.5));
console.log(bouncingBall(30, 0.4, 10));
console.log(bouncingBall(0, 0.5, 1.4));