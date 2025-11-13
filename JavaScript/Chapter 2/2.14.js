function make_interval(x, y) {
  return pair(x, y);
}

function upper_bound(interval) {
  return tail(interval);
}

function lower_bound(interval) {
  return head(interval);
}

function make_center_width(c, w) {
  return make_interval(c - w, c + w);
}

function center(interval) {
  return (lower_bound(interval) + upper_bound(interval)) / 2;
}

function width(interval) {
  return (upper_bound(interval) - lower_bound(interval)) / 2;
}

function percent(interval) {
  return (width(interval) / center(interval)) * 100;
}

function add_interval(x, y) {
  return make_interval(lower_bound(x) + lower_bound(y),
                       upper_bound(x) + upper_bound(y));
}

function mul_interval(x, y) {
  const p1 = lower_bound(x) * lower_bound(y);
  const p2 = lower_bound(x) * upper_bound(y);
  const p3 = upper_bound(x) * lower_bound(y);
  const p4 = upper_bound(x) * upper_bound(y);
  return make_interval(math_min(p1, p2, p3, p4),
                       math_max(p1, p2, p3, p4));
}

function div_interval(x, y) {
  return mul_interval(x, make_interval(1 / upper_bound(y), 1 / lower_bound(y)));
}

function sub_interval(x, y) {
  return make_interval(lower_bound(x) - upper_bound(y),
                       upper_bound(x) - lower_bound(y));
}

function make_center_percent(c, p) {
  return make_interval(c - c * p / 100, c + c * p / 100);
}

function par1(r1, r2) {
  return div_interval(mul_interval(r1, r2), add_interval(r1, r2));
}

function par2(r1, r2) {
  const one = make_interval(1, 1);
  return div_interval(one, add_interval(div_interval(one, r1), div_interval(one, r2)));
}

const i1 = make_center_percent(1000, 1);
const i2 = make_center_percent(2000, 2);

const o1 = div_interval(i1, i1);
const o2 = div_interval(i2, i2);
const o3 = div_interval(i1, i2);

o1;
center(o1); // 1.000200020002
width(o1); // 0.020002000200019965
percent(o1); // 1.9998000199979968
percent(par1(i1, i1)); // 2.9992002399280224
percent(par2(i1, i1)); // 1

o2; // [0.9607843137254902, 1.0408163265306123]
center(o2); // 1.0008003201280513
width(o2); // 0.04001600640256103
percent(o2); // 3.9984006397441028
percent(par1(i2, i2)); // 5.993607670795053
percent(par2(i2, i2)); // 2.0000000000000058


o3; // [0.4852941176470588, 0.5153061224489797]
center(o3); // 0.5003001200480193
width(o3); // 0.015006002400960422
percent(o3); // 2.9994001199760123
percent(par1(i1, i2)); // 4.663735385230344
percent(par2(i1, i2)); // 1.3334000200059972