# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(
      username: "alice",
      password: "bookshares"
)
User.create!(
      username: "frodo",
      password: "bookspace"
)
User.create!(
      username: "teja",
      password: "bookspace"
)
# 7.times do
#   User.create!(
#     username: Faker::Internet.user_name,
#     password: "password"
#   )
# end

# 20.times do
#   Book.create!(
#         title: Faker::Book.title,
#         author: Faker::Book.author,
#         owner_id: 1
#   )
# end
# 20.times do
#   Book.create!(
#         title: Faker::Book.title,
#         author: Faker::Book.author,
#         owner_id: 2
#   )
# end
# 20.times do
#   Book.create!(
#         title: Faker::Book.title,
#         author: Faker::Book.author,
#         owner_id: 3
#   )
# end
#
# Book.create!(
#       title: "1984",
#       author: "George Orwell",
#       description: "The year 1984 has come and gone, but George Orwell's prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of 'negative utopia' -a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words.",
#       owner_id: 1,
#       image_url: "http://farm1.static.flickr.com/126/4545312810_6841a6a870_m.jpg"
#     )
# Book.create!(
#       title: "Wild",
#       author: "Cheryl Strayed",
#       description: "Pacific crest trail",
#       owner_id: 1,
#       image_url: "http://www.literarytraveler.net/wp-content/uploads/2012/07/Wild.jpg"
#     )
# Book.create(
#       title: "The Brothers Karamazov",
#       author: "George Orwell",
#       description: "Dystopian fiction",
#       owner_id: 2,
#       image_url: "https://magrudy-assets.storage.googleapis.com/__sized__/9781406790092-thumbnail-300x400.jpg"
# )
# Book.create!(
#       title: "Emma",
#       author: "Jane Austen",
#       owner_id: 2,
#       description: "Beautiful, clever, rich - and single - Emma Woodhouse is perfectly content with her life and sees no need for either love or marriage. Nothing, however, delights her more than interfering in the romantic lives of others. But when she ignores the warnings of her good friend Mr. Knightley and attempts to arrange a suitable match for her protegee Harriet Smith, her carefully laid plans soon unravel and have consequences that she never expected. With its imperfect but charming heroine and its witty and subtle exploration of relationships, Emma is often seen as Jane Austen's most flawless work."
#
# )
# Book.create!(
#       title: "Animal Farm",
#       author: "George Orwell",
#       owner_id: 3,
#       image_url: "http://farm1.static.flickr.com/126/4545312810_6841a6a870_m.jpg"
#     )
# Book.create!(
#       title: "Where eagles dare",
#       author: "Alistair McLean",
#       description: "World war II",
#       owner_id: 3,
#       image_url: "http://www.literarytraveler.net/wp-content/uploads/2012/07/Wild.jpg"
#     )
# Book.create(
#       title: "Thud",
#       author: "Terry Pratchett",
#       description: "Fantasy",
#       owner_id: 2,
#       image_url: "https://magrudy-assets.storage.googleapis.com/__sized__/9781406790092-thumbnail-300x400.jpg"
# )
# Book.create!(
#       title: "Pride and Prejudice",
#       author: "Jane Austen",
#       owner_id: 1
#
# )
# Borrowing.create!(
#       owner_id: 1,
#       borrower_id: 2,
#       book_id: 1,
#       request_status: "pending"
# )

bookImages = ["http://ecx.images-amazon.com/images/I/51vq2QkyX8L.jpg",
"http://ecx.images-amazon.com/images/I/51fI82moh8L.jpg",
"http://ecx.images-amazon.com/images/I/51fIgKM9NUL.jpg",
"http://ecx.images-amazon.com/images/I/51GC3Acu0WL.jpg",
"http://ecx.images-amazon.com/images/I/51NdYfj9yKL.jpg",
"http://ecx.images-amazon.com/images/I/61ITyv1lTML.jpg",
"http://ecx.images-amazon.com/images/I/51H8x07Fd7L.jpg",
"http://ecx.images-amazon.com/images/I/51fUUVAZ5PL.jpg",
"http://ecx.images-amazon.com/images/I/51HGuoYiOZL.jpg",
"http://ecx.images-amazon.com/images/I/41jFVZL72YL.jpg",
"http://ecx.images-amazon.com/images/I/51OtTRrGdHL.jpg",
"http://ecx.images-amazon.com/images/I/41WoaUsRRcL.jpg",
"http://ecx.images-amazon.com/images/I/41VU8jWz36L.jpg",
"http://ecx.images-amazon.com/images/I/61MN6PINJ3L.jpg",
"http://ecx.images-amazon.com/images/I/515p3OrN1KL.jpg",
"http://ecx.images-amazon.com/images/I/51OwOyFs7FL.jpg",
"http://ecx.images-amazon.com/images/I/51kf7XbQ2lL.jpg",
"http://ecx.images-amazon.com/images/I/61ODSzRm0AL.jpg",
"http://ecx.images-amazon.com/images/I/51LOMFLbcvL.jpg",
"http://ecx.images-amazon.com/images/I/51P1c42DyLL.jpg",
"http://ecx.images-amazon.com/images/I/51aje84UleL.jpg",
"http://ecx.images-amazon.com/images/I/51elxrLjjLL.jpg",
"http://ecx.images-amazon.com/images/I/51MIi4p2YyL.jpg",
"http://ecx.images-amazon.com/images/I/415szoQBbPL.jpg",
"http://ecx.images-amazon.com/images/I/51uQhXdSVQL.jpg",
"http://ecx.images-amazon.com/images/I/51QnGhuWWSL.jpg",
"http://ecx.images-amazon.com/images/I/51XXeZxablL.jpg",
"http://ecx.images-amazon.com/images/I/61XGdLECZ5L.jpg",
"http://ecx.images-amazon.com/images/I/51OnErKGDtL.jpg",
"http://ecx.images-amazon.com/images/I/41zqrOnjpTL.jpg"]


bookImages.each do |book_link|
  Book.create!(
        title: Faker::Book.title,
        author: Faker::Book.author,
        owner_id: rand(3),
        image_url: book_link
  )
end
