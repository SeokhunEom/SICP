function plus(a, b) {
  return a === 0 ? b : inc(plus(dec(a), b));
}
// recursive
// plus(4, 5)
// inc(plus(3, 5))
// inc(inc(plus(2, 5)))
// inc(inc(inc(plus(1, 5))))
// inc(inc(inc(inc(plus(0, 5)))))
// inc(inc(inc(inc(5))))
// inc(inc(inc(6)))
// inc(inc(7))
// inc(8)
// 9

function plus2(a, b) {
  return a === 0 ? b : plus(dec(a), inc(b));
}
// iterative
// plus2(4, 5)
// plus2(3, 6)
// plus2(2, 7)
// plus2(1, 8)
// plus2(0, 9)
// 9
