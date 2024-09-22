#lang racket

;; recursive process
(define (f n)
  (cond ((< n 3) n)
        (else (+ (f (- n 1))
                (* 2 (f (- n 2)))
                (* 3 (f (- n 3)))))))

;; iterative process
(define (f2 n)
  (define (f2-iter a b c count)
    (cond ((< n 3) n)
          ((<= count 0) a)
          (else (f2-iter (+ a (* 2 b) (* 3 c)) a b (- count 1)))))
  (f2-iter 2 1 0 (- n 2)))
