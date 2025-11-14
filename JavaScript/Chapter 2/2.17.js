function last_pair(lst) {
  if (is_null(tail(lst))) {
    return head(lst);
  } else {
    return last_pair(tail(lst));
  }
}

last_pair(list(23, 72, 149, 34)); // 34