/*
φ = (1 + √5) / 2 ≈ 1.618...

증명:
고정점이란 함수 f(x) = x를 만족하는 x값입니다.
변환 f(x) = 1 + 1/x에 대해 고정점을 찾으면:
x = 1 + 1/x

양변에 x를 곱하면:
x² = x + 1
x² - x - 1 = 0

이차방정식의 해는:
x = (1 ± √5) / 2

양수 해만 취하면: x = (1 + √5) / 2 = φ (황금비)

따라서 황금비는 변환 x → 1 + 1/x의 고정점입니다.
*/

const tolerance = 0.00001;

function abs(x) {
  return x >= 0 ? x : -x;
}

function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }

  function try_with(guess) {
    const next = f(guess);
    return close_enough(guess, next) ? next : try_with(next);
  }

  return try_with(first_guess);
}

function golden_ratio() {
  return fixed_point(x => 1 + 1/x, 1.0);
}

golden_ratio(); // 1.6180327868852458
