function square(x) {
  return x * x;
}

function square_list(items) {
  return is_null(items)
          ? null
          : pair(square(head(items)), square_list(tail(items)));
}

function square_list1(items) {
  return map(square, items);
}

square_list(list(1, 2, 3, 4, 5)); // [1, [4, [9, [16, [25, null]]]]]
square_list1(list(1, 2, 3, 4, 5)); // [1, [4, [9, [16, [25, null]]]]]