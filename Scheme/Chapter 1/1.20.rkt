#lang racket

(define (gcd a b)
  (if (= b 0)
      a
      (gcd b (remainder a b))))

(gcd 206 40)

;; normal-order
;; remainder is called 25 times

;; applicative-order
;; remainder is called 4 times