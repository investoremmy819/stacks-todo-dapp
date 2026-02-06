;; Simple on-chain todo list (per user)
(define-map todos { owner: principal, id: uint } { text: (string-ascii 64), done: bool })
(define-data-var next-id uint u1)

(define-public (add-todo (text (string-ascii 64)))
  (let ((id (var-get next-id)))
    (map-set todos { owner: tx-sender, id: id } { text: text, done: false })
    (var-set next-id (+ id u1))
    (ok id)
  )
)

(define-public (toggle-done (id uint))
  (match (map-get? todos { owner: tx-sender, id: id })
    todo
    (begin
      (map-set todos { owner: tx-sender, id: id }
        { text: (get text todo), done: (not (get done todo)) }
      )
      (ok true)
    )
    (err u404)
  )
)

(define-read-only (get-todo (owner principal) (id uint))
  (map-get? todos { owner: owner, id: id })
)

