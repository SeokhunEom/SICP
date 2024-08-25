#lang racket

(define (square x) (* x x))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

(define (sqrt-iter guess x)
  (if (good-enough? guess x)
          guess
          (sqrt-iter (improve guess x)
                     x)))

(define (sqrt x)
  (sqrt-iter 1.0 x))

(define (new-good-enough? guess x)
  (define tolerance (* 9/4 (expt 2 -52)))
  (or (= guess 0)
      (< (abs (- (improve guess x) guess))
         (* tolerance guess))))

(define (new-sqrt-iter guess x)
  (if (new-good-enough? guess x)
          guess
          (new-sqrt-iter (improve guess x)
                     x)))

(define (new-sqrt x)
  (new-sqrt-iter 1.0 x))

(sqrt 0.0001)
(new-sqrt 0.0001)