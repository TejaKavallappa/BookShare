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
      image_url: "http://farm1.static.flickr.com/126/4545312810_6841a6a870_m.jpg"
    )
Book.create!(
      title: "Wild",
      author: "Cheryl Strayed",
      description: "Pacific crest trail",
      owner_id: 1,
      image_url: "http://www.literarytraveler.net/wp-content/uploads/2012/07/Wild.jpg"
    )
Book.create(
      title: "The Brothers Karamazov",
      author: "George Orwell",
      description: "Dystopian fiction",
      owner_id: 1,
      image_url: "https://magrudy-assets.storage.googleapis.com/__sized__/9781406790092-thumbnail-300x400.jpg"
)
