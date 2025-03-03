#lang racket

(define (count-change amount)
  (define (cc a n)
    (cond ((< a 0) 0)
          ((= a 0) 1)
          ((= n 0) 0)
          (else (+ (cc a (- n 1))
                   (cc (- a (first-denomination n)) n)))))
  (cc amount 5))

(define (first-denomination kinds-of-coins)
  (vector-ref '#(1 5 10 25 50) (- kinds-of-coins 1)))

(count-change 11)

;; Steps: O(n^5)
;; Spaces: O(n)