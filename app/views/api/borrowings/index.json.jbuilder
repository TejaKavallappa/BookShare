json.array!(@borrowings) do |borrowing|
    json.id borrowing.id
    json.book borrowing.book, :author, :title, :id, :image_url
    json.borrower borrowing.borrower, :username, :id
    json.owner borrowing.owner, :username, :id
end
