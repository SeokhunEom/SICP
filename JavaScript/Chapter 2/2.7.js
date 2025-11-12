function make_interval(x, y) {
  return pair(x, y);
}

function upper_bound(interval) {
  return tail(interval);
}

function lower_bound(interval) {
  return head(interval);
}