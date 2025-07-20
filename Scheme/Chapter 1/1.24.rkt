(define (fast-prime? n times)
    (cond ((= time 0) true)
          ((fermat-test n) (fast-prime ? n (- times 1)))
          (else false)))

(define (fermat-test n)
    (define (try-it a)
        (= (expmod a n n) a))
    (try-it (+ 1 (random (- n 1)))))

(define (expmod base exp m)
    (cond ((= exp 0) 1)
          ((even? exp)
                  (remainder (square (expmod base (/ exp 2) m))
                             m))
              (else
                  (remainer (* base (expmod base (- exp 1) m))
                            m))))

(define (timed-prime-test n)
    (newline)
    (display n)
    (start-prime-test n (runtime)))

(define (start-prime-test n start-time)
    (if (prime? n)
        (report-prime (- (runtime) start-time))))
    
(define (report-prime elapsed-time)
    (display " *** ")
    (display elapsed-time))

(define (search-for-primes p? a b)
  (define (iter a b)
    (when (<= a b)
      (timed-prime-test p? a)
      (iter (+ a 2) b)))
  (iter (if (odd? a) a (+ a 1)) b))

(search-for-primes fast-prime? 1000 1000000)