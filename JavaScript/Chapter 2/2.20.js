function plus_curried(x) {
  return y => x + y;
}

function brooks(f, args) {
  return is_null(args)
          ? f
          : brooks(f(head(args)), tail(args));
}

function brooks_curried(args) {
  return brooks(head(args), tail(args));
}

brooks(plus_curried, list(3, 4)); // 7
brooks_curried(list(plus_curried, 3, 4)); // 7
brooks_curried(list(brooks_curried, list(plus_curried, 3, 4))); // 7
brooks_curried(list(brooks_curried, list(brooks_curried, list(plus_curried, 3, 4)))); // 7
