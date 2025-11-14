function for_each(func, items) {
  if (is_null(items)) {
    return undefined;
  } else {
    func(head(items));
    for_each(func, tail(items));
  }
}

for_each(x => display(x), list(57, 321, 88));