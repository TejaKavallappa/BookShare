# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Book.create!(
      title: "1984",
      author: "George Orwell",
      description: "Dystopian fiction",
      owner_id: 1,
      image_url: "https://flavorwire.files.wordpress.com/2011/06/screen-shot-2011-06-25-at-8-15-31-am.jpg"
    )
Book.create!(
      title: "Wild",
      author: "Cheryl Strayed",
      description: "Pacific crest trail",
      owner_id: 1,
      image_url: "https://flavorwire.files.wordpress.com/2011/06/screen-shot-2011-06-25-at-8-15-31-am.jpg"
    )
Book.create(
      title: "The Brothers Karamazov",
      author: "George Orwell",
      description: "Dystopian fiction",
      owner_id: 1,
      image_url: "https://flavorwire.files.wordpress.com/2011/06/screen-shot-2011-06-25-at-8-15-31-am.jpg"
)
