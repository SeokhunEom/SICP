function reverse(lst) {
  function iter(lst1, lst2) {
    if (is_null(lst1)) {
      return lst2;
    } else {
      return iter(tail(lst1), pair(head(lst1), lst2));
    }
  }
  return iter(lst, null);
}

reverse(list(1, 4, 9, 16, 25)); // [25, [16, [9, [4, [1, null]]]]]