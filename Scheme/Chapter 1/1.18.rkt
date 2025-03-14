#lang racket

(define (double x)
  (+ x x))

(define (halve x)
  (/ x 2))

(define (fast-* a b)
  (define (iter a b c)
    (cond ((= b 0) c)
          ((even? b) (iter (double a) (halve b) c))
          (else (iter a (- b 1) (+ a c)))))
  (iter a b 0))

(fast-* 5 7) ;; 35