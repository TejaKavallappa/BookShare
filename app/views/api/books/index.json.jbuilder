json.array!(@books) do |book|
  json.extract! book, :title, :author, :description, :image_url, :id
  # json.url book_url(book, format: :json)
end
