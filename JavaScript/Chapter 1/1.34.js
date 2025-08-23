function f(g) {
  return g(2);
}

function square(x) {
  return x * x;
}

f(square); // 4
f(z => z * (z + 1)); // 6
// f(f);
// 1. f(f) calls the function f with f itself as the argument
// 2. Inside f, it executes return g(2) where g is now the function f
// 3. So it becomes return f(2)
// 4. This calls f again, but now with 2 as the argument
// 5. Inside f again, it tries to execute return g(2) where g is now 2 (a number)
// 6. This becomes return 2(2), which tries to call the number 2 as a function
// This will throw a TypeError because numbers are not functions and cannot be called.