/* 
Proof that Fib(n) is the closest integer to φ^n/√5, where φ = (1+√5)/2.

First, let's prove that Fib(n) = (φ^n - ψ^n)/√5, where ψ = (1-√5)/2, using induction.

Base cases:
For n = 0: Fib(0) = 0 and (φ^0 - ψ^0)/√5 = (1-1)/√5 = 0. ✓
For n = 1: Fib(1) = 1 and (φ^1 - ψ^1)/√5 = ((1+√5)/2 - (1-√5)/2)/√5 = √5/√5 = 1. ✓

Inductive step:
Assume the formula holds for Fib(k) and Fib(k+1).
We need to prove it holds for Fib(k+2).

By definition: Fib(k+2) = Fib(k+1) + Fib(k)

By inductive hypothesis:
Fib(k+1) = (φ^(k+1) - ψ^(k+1))/√5
Fib(k) = (φ^k - ψ^k)/√5

Therefore:
Fib(k+2) = (φ^(k+1) - ψ^(k+1))/√5 + (φ^k - ψ^k)/√5
         = (φ^(k+1) + φ^k - ψ^(k+1) - ψ^k)/√5
         = (φ^k(φ + 1) - ψ^k(ψ + 1))/√5

Now we need to show that φ + 1 = φ^2 and ψ + 1 = ψ^2:

For φ = (1+√5)/2:
φ^2 = ((1+√5)/2)^2 = (1+2√5+5)/4 = (6+2√5)/4 = (3+√5)/2 = (1+√5)/2 + 1 = φ + 1 ✓

For ψ = (1-√5)/2:
ψ^2 = ((1-√5)/2)^2 = (1-2√5+5)/4 = (6-2√5)/4 = (3-√5)/2 = (1-√5)/2 + 1 = ψ + 1 ✓

Therefore:
Fib(k+2) = (φ^k(φ^2) - ψ^k(ψ^2))/√5 = (φ^(k+2) - ψ^(k+2))/√5 ✓

Now, to prove that Fib(n) is the closest integer to φ^n/√5, we need to show that |Fib(n) - φ^n/√5| < 1/2.

|Fib(n) - φ^n/√5| = |(φ^n - ψ^n)/√5 - φ^n/√5| = |ψ^n|/√5

Since |ψ| = |(1-√5)/2| ≈ 0.618 < 1, and |ψ| decreases exponentially as n increases, we have |ψ^n|/√5 < 0.5 for all n ≥ 0.

Therefore, Fib(n) is the closest integer to φ^n/√5.
*/
