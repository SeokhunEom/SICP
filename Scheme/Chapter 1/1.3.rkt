#lang racket

(define (square x) (* x x))

(define (func a b c)
  (- (+ (square a) (square b) (square c))
     (square (min a b c))))
