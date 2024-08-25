#lang racket

(define (new-if predicate then-clause else-clause)
  (cond (predicate then-clause)
        (else else-clause)))

(new-if (= 2 3) 0 5)

(new-if (= 1 1) 0 5)

(define (square x) (* x x))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

(define (sqrt-iter guess x)
  (new-if (good-enough? guess x)
          guess
          (sqrt-iter (improve guess x)
                     x)))

(define (sqrt x)
  (sqrt-iter 1.0 x))

(sqrt 3)

;; this code will results in infinite loop.

;; becuase new-if run in applicative order.
;; new-if evaluate both then-clause and else-clause.
;; so, in sqrt-iter run both `guess` and `(sqrt-iter (improve guess x) x)))`
;; therefore, even if good-enough is true it runs `(sqrt-iter (improve guess x) x)))`