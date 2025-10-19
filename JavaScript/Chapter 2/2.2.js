function print_point(p) {
  return display("(" + stringify(x_point(p)) + ", " + stringify(y_point(p)) + ")");
}

function x_point(p) {
  return head(p);
}

function y_point(p) {
  return tail(p);
}

function make_point(x, y) {
  return pair(x, y);
}

function make_segment(p1, p2) {
  return pair(p1, p2);
}

function start_segment(s) {
  return head(s);
}

function end_segment(s) {
  return tail(s);
}

function midpoint_segment(s) {
  const x_mid = (x_point(start_segment(s)) + x_point(end_segment(s))) / 2;
  const y_mid = (y_point(start_segment(s)) + y_point(end_segment(s))) / 2;
  return make_point(x_mid, y_mid);
}

const p1 = make_point(2, 2);
const p2 = make_point(4, 6);
const s = make_segment(p1, p2);

print_point(midpoint_segment(s)); // (3, 4)