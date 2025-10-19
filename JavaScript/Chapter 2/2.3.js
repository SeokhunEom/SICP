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

function make_rectangle(p1, p2) {
  const x1 = x_point(p1);
  const y1 = y_point(p1);
  const x2 = x_point(p2);
  const y2 = y_point(p2);
  const bottom_left = make_point(math_min(x1, x2), math_min(y1, y2));
  const top_right = make_point(math_max(x1, x2), math_max(y1, y2));
  return pair(bottom_left, top_right);
}

function width_rectangle(rect) {
  const bottom_left = head(rect);
  const top_right = tail(rect);
  return x_point(top_right) - x_point(bottom_left);
}

function height_rectangle(rect) {
  const bottom_left = head(rect);
  const top_right = tail(rect);
  return y_point(top_right) - y_point(bottom_left);
}

function area_rectangle(rect) {
  return width_rectangle(rect) * height_rectangle(rect);
}

function perimeter_rectangle(rect) {
  const bottom_left = head(rect);
  const top_right = tail(rect);
  return 2 * (width_rectangle(rect) + height_rectangle(rect));
}

function print_rectangle(rect) {
  display("Area: " + stringify(area_rectangle(rect)));
  display("Perimeter: " + stringify(perimeter_rectangle(rect)));
}

const p1 = make_point(2, 2);
const p2 = make_point(4, 6);
const rect = make_rectangle(p1, p2);

print_point(midpoint_segment(make_segment(p1, p2))); // (3, 4)
print_rectangle(rect);