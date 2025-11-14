function square(x) {
  return x * x;
}

function square_list1(items) {
  function iter(things, answer) {
      return is_null(things) 
              ? answer
              : iter(tail(things), pair(square(head(things)), answer));
  }
  return iter(items, null);
}

function square_list2(items) {
  function iter(things, answer) {
      return is_null(things)
              ? answer
              : iter(tail(things), pair(answer, square(head(things))));
  }
  return iter(items, null);
}

square_list1(list(1, 2, 3, 4, 5)); // [25, [16, [9, [4, [1, null]]]]]
square_list2(list(1, 2, 3, 4, 5)); // [[[[[null, 1], 4], 9], 16], 25]