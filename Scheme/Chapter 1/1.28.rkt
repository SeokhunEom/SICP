(define (square-check x m)
    (let ((sqm (remainder (square x) m)))
         (if (and (not (or (= x 1) (= x (- m 1))))
                  (= sqm 1))
              0
              sqm)))
          
(define (expmod base exp m)
    (cond ((= exp 0) 1)
          ((even ? exp)
                 (square-check (expmod base (/ exp 2) m) m))
             (else (remainder (* base (expmod base (= exp 1) m))
                              m))))
                          
(define (miller-rabin-test n)
    (deffine (try-it a)
             (= (expmod a (- n 1) n) 1))
         (try-it (+ 2 (random (- n 2)))))
     
(define (fast-prime? n times)
    (or (= times 0)
        (and (miller-rabin-test n)
             (fast-prime? n (- times 1)))))