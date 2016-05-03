json.array!(@borrowings) do |borrowing|
    json.id borrowing.id
    json.book do |book|
      json.author borrowing.book.author
      json.title borrowing.book.title
      json.book_id borrowing.book.id
      json.image_url borrowing.book.image_url
    end

    json.borrower do |user|
      json.username borrowing.borrower.username
      json.borrower_id borrowing.borrower.id
    end

end
