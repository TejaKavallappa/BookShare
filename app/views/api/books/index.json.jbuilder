json.array!(@books) do |book|
  json.extract! book, :title, :author, :description, :image_url, :id, :owner_id, :borrow_status
  # json.url book_url(book, format: :json)
end
