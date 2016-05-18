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
      username: "arthur",
      password: "bookspace"
)
User.create!(
      username: "scout",
      password: "bookspace"
)
User.create!(
      username: "arkady",
      password: "bookspace"
)
User.create!(
      username: "anne",
      password: "bookspace"
)
User.create!(
      username: "kathy",
      password: "bookspace"
)
User.create!(
      username: "jane",
      password: "bookspace"
)


  # Book.create!(
  #       title: "Harry Potter and the cursed child",
  #       author: "J.K.Rowling",
  #       owner_id: 1
  #       image_url: "http://ecx.images-amazon.com/images/I/51vq2QkyX8L.jpg"
  # )

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


Book.create!(
  title: "The Dharma Bums",
  author: "Jack Kerouac",
  description: "During the 1950s the search for Buddhist truths takes two young Bohemians through a series of bizarre experiences in California.",
  owner_id: rand(1..3),
  image_url: "http://books.google.com/books/content?id=P4WYPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
)
Book.create!(
  title: "Freakonomics",
  author: "Steven D. Levitt",
  description: "Modern life can be baffling and chaotic. Is there any way of making sense of it? The answer, explains groundbreaking thinker Steven Levitt, lies in economics. Not ordinary economics, but freakonomics. It is at the heart of everything we see and do and the subjects that bedevil us daily: from parenting to crime, sport to politics, fat to cheating, fear to traffic jams. away the jargon and calculations of the experts' to explore the riddles of everyday life and examine topics such as: how chips are more likely to kill you than murder or a terrorist attack; why sportsmen cheat and how fraud can be spotted; why violent crime can be linked not to gun laws, policing or poverty, but to abortion; why a road is more efficient when everyone travels at 20mph; how the name you give your child can give them an advantage in later life; and what really causes obesity epidemics. Ultimately, he shows us that economics is all about how people get what they want, and what makes them do it. contemporary living and reaching some astonishing conclusions, Freakonomics will make you see the familiar world through a completely original lens.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51mb6DELsQL._SX330_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "The Rosie Project",
  author: "Graeme Simsion",
  description: "A socially awkward genetics professor who has never been on a second date sets out to find the perfect wife, but instead finds Rosie Jarman, a fiercely independent barmaid who is on a quest to find her biological father.",
  owner_id: rand(1..3),
  image_url: "http://covers.booktopia.com.au/big/9781922079770/the-rosie-project.jpg"
)
Book.create!(
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K.Rowling",
  description: "'Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.' Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51vq2QkyX8L.jpg"
)
Book.create!(
  title: "Alexander Hamilton",
  author: "Ron Chernow",
  description: "The personal life of Alexander Hamilton, an illegitimate, largely self-taught orphan from the Caribbean who rose to become George Washington's aide-de-camp and the first Treasury Secretary of the United States, is captured in a definitive biography by the National Book Award-winning author of The House of Morgan.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51fIgKM9NUL.jpg"
)
Book.create!(
  title: "Oh, the Places You'll Go!",
  author: "Dr. Seuss",
  description: "Filled with glorious pop-ups, detailed pop-up booklets, special effects, and the complete original text, this Dr. Seuss classic bursts with vibrant new energy, thanks to the talents of paper engineer Carter. Appropriate for graduates of all ages, this joyful book is an ideal gift for anyone starting out on a new adventure.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51GC3Acu0WL.jpg"
)
Book.create!(
  title: "The Last Mile",
  author: "David Baldacci",
  description: "Convicted murderer Melvin Mars is counting down the last hours before his execution--for the violent killing of his parents twenty years earlier--when he's granted an unexpected reprieve. Another man has confessed to the crime.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51uQhXdSVQL.jpg"
)
Book.create!(
  title: "The Girl on the Train",
  author: "Paula Hawkins",
  description: "Rachel takes the same commuter train every morning and night. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck. She’s even started to feel like she knows them. Jess and Jason, she calls them. Their life—as she sees it—is perfect. Not unlike the life she recently lost. UNTIL TODAY And then she sees something shocking. It’s only a minute until the train moves on, but it’s enough. Now everything’s changed. Unable to keep it to herself, Rachel goes to the police. But is she really as unreliable as they say? Soon she is deeply entangled not only in the investigation but in the lives of everyone involved. Has she done more harm than good? ",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51kf7XbQ2lL.jpg"
)
Book.create!(
  title: "The Food Lab",
  author: "J. Kenji Lopez-Alt",
  description: "A grand tour of the science of cooking explored through popular American dishes, illustrated in full color.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/41WoaUsRRcL.jpg"
)
Book.create!(
  title: "Mr. Penumbra's 24-Hour Bookstore",
  author: "Robin Sloan",
  description: "A gleeful and exhilarating tale of global conspiracy, complex code-breaking, high-tech data visualization, young love, rollicking adventure, and the secret to eternal life—mostly set in a hole-in-the-wall San Francisco bookstore The Great Recession has shuffled Clay Jannon out of his life as a San Francisco Web-design drone—and serendipity, sheer curiosity, and the ability to climb a ladder like a monkey has landed him a new gig working the night shift at Mr. Penumbra's 24-Hour Bookstore.",
  owner_id: rand(1..3),
  image_url: "https://books.google.com/books/content?id=3D-ApB1cvX8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
)
Book.create!(
  title: "The Mind's Eye",
  author: "Oliver Sacks",
  description: "In The Mind's Eye, Sacks examines questions ranging from the primary experiences of how we perceive depth or color or motion to the complex matter of how different individuals have varied ways of thinking and experiencing or recreating the visual world.",
  owner_id: rand(1..3),
  image_url: "http://bookcoverarchive.com/wp-content/uploads/amazon/the_minds_eye.jpg"
)
Book.create!(
  title: "Kafka on the Shore",
  author: "Haruki Murakami",
  description: "Kafka on the Shore is powered by two remarkable characters: a teenage boy, Kafka Tamura, who runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister; and an aging simpleton called Nakata, who never recovered from a wartime affliction and now is drawn toward Kafka for reasons that, like the most basic activities of daily life, he cannot fathom. As their paths converge, and the reasons for that convergence become clear, Haruki Murakami enfolds readers in a world where cats talk, fish fall from the sky, and spirits slip out of their bodies to make love or commit murder. Kafka on the Shore displays one of the world’s great storytellers at the peak of his powers.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/81wBg2-QXYL.jpg"
)
Book.create!(
  title: "Never Let Me Go",
  author: "Kazuo Ishiguro",
  description: "Hailsham seems like a pleasant English boarding school, far from the influences of the city. Its students are well tended and supported, trained in art and literature, and become just the sort of people the world wants them to be. But, curiously, they are taught nothing of the outside world and are allowed little contact with it. Within the grounds of Hailsham, Kathy grows from schoolgirl to young woman, but it’s only when she and her friends Ruth and Tommy leave the safe grounds of the school (as they always knew they would) that they realize the full truth of what Hailsham is.",
  owner_id: rand(1..3),
  image_url: "https://upload.wikimedia.org/wikipedia/en/2/25/Never_Let_Me_Go.jpg"
)

Book.create!(
  title: "An Astronaut's Guide to Life on Earth",
  author: "Chris Hadfield",
  description: "Colonel Chris Hadfield has spent decades training as an astronaut and has logged nearly 4000 hours in space. During this time he has broken into a Space Station with a Swiss army knife, disposed of a live snake while piloting a plane, and been temporarily blinded while clinging to the exterior of an orbiting spacecraft. The secret to Col. Hadfield's success-and survival-is an unconventional philosophy he learned at NASA: prepare for the worst-and enjoy every moment of it. In An Astronaut's Guide to Life on Earth, Col. Hadfield takes readers deep into his years of training and space exploration to show how to make the impossible possible. Through eye-opening, entertaining stories filled with the adrenaline of launch, the mesmerizing wonder of spacewalks, and the measured, calm responses mandated by crises, he explains how conventional wisdom can get in the way of achievement-and happiness. His own extraordinary education in space has taught him some counterintuitive lessons: don't visualize success, do care what others think, and always sweat the small stuff. You might never be able to build a robot, pilot a spacecraft, make a music video or perform basic surgery in zero gravity like Col. Hadfield. But his vivid and refreshing insights will teach you how to think like an astronaut, and will change, completely, the way you view life on Earth-especially your own.",
  owner_id: rand(1..3),
  image_url: "http://sites.psu.edu/outofthisworld/wp-content/uploads/sites/6475/2014/02/guide.jpg"
)
Book.create!(
  title: "Little Brother",
  author: "Cory Doctorow",
  description: "Marcus, a.k.a 'w1n5t0n,' is only seventeen years old, but he figures he already knows how the system works–and how to work the system. Smart, fast, and wise to the ways of the networked world, he has no trouble outwitting his high school's intrusive but clumsy surveillance systems. But his whole world changes when he and his friends find themselves caught in the aftermath of a major terrorist attack on San Francisco. In the wrong place at the wrong time, Marcus and his crew are apprehended by the Department of Homeland Security and whisked away to a secret prison where they're mercilessly interrogated for days. When the DHS finally releases them, Marcus discovers that his city has become a police state where every citizen is treated like a potential terrorist. He knows that no one will believe his story, which leaves him only one option: to take down the DHS himself.",
  owner_id: rand(1..3),
  image_url: "http://d.gr-assets.com/books/1349673129l/954674.jpg"
)
Book.create!(
  title: "Flowers for Algernon",
  author: "Daniel Keyes",
  description: "The beloved, classic story of a mentally disabled man whose experimental quest for intelligence mirrors that of Algernon, an extraordinary lab mouse.",
  owner_id: rand(1..3),
  image_url: "https://upload.wikimedia.org/wikipedia/en/e/ea/FlowersForAlgernon.jpg"
)
Book.create!(
  title: "Totto-Chan",
  author: "Tetsuko Kuroyanagi",
  description: "An actress, television personality, and writer recounts her experiences as a 'problem child' at school, which lead to her being sent to an independent school, where she proved the goal of the school: to develop the potential of each child",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/41iUvdQME%2BL._SX298_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Frederica",
  author: "Georgette Heyer",
  description: "Frederica only wants what's best for her family, even if it means sacrificing her own happiness. When she brings her younger siblings to London, she may find the chance to give them everything-and find love along the way. Determined to secure a brilliant marriage for her beautiful sister, Frederica seeks out their distant cousin the Marquis of Alverstoke. Lovely, competent, and refreshingly straightforward, Frederica makes such a strong impression that to his own amazement, the Marquis agrees to help launch them all into society.",
  owner_id: rand(1..3),
  image_url: "http://www.sourcebooks.com/store/images/thumbnails/0/500/9781402214769.jpg"
)
Book.create!(
  title: "Asterix The Legionary",
  author: "Goscinny and Uderzo",
  description: "",
  owner_id: rand(1..3),
  image_url: "https://usercontent2.hubstatic.com/5043949_f520.jpg"
)
Book.create!(
  title: "Stuff Matters",
  author: "Mark Miodownik",
  description: "Why is glass see-through? What makes elastic stretchy? Why does any material look and behave the way it does? These are the sorts of questions that renowned materials scientist Mark Miodownik constantly asks himself. Miodownik studies objects as ordinary as an envelope and as unexpected as concrete cloth, uncovering the fascinating secrets that hold together our physical world. In Stuff Matters, Miodownik explores the materials he encounters in a typical morning, from the steel in his razor to the foam in his sneakers.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51AvnJhc0GL._SX329_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  description: "Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacation—each of these can be understood only by knowing how the two systems shape our judgments and decisions.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51oXKWrcYYL.jpg"
)
Book.create!(
  title: "Midnight's Children",
  author: "Salman Rushdie",
  description: "Saleem Sinai is born at the stroke of midnight on August 15, 1947, the very moment of India’s independence. Greeted by fireworks displays, cheering crowds, and Prime Minister Nehru himself, Saleem grows up to learn the ominous consequences of this coincidence. His every act is mirrored and magnified in events that sway the course of national affairs; his health and well-being are inextricably bound to those of his nation; his life is inseparable, at times indistinguishable, from the history of his country. Perhaps most remarkable are the telepathic powers linking him with India’s 1,000 other “midnight’s children,” all born in that initial hour and endowed with magical gifts.",
  owner_id: rand(1..3),
  image_url: "http://ecx.images-amazon.com/images/I/51yqNUCZu6L._SX322_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "The Design of Everyday Things",
  author: "Donald A. Norman",
  description: "'The Design of Everyday Things' shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints. The goal: guide the user effortlessly to the right action on the right control at the right time. ",
  owner_id: rand(1..3),
  image_url: "https://books.google.com/books/content?id=nVQPAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
)
Book.create!(
  title: "Surely You're Joking, Mr. Feynman!",
  author: "Richard P. Feynman",
  description: "Richard Feynman, winner of the Nobel Prize in physics, thrived on outrageous adventures. Here he recounts in his inimitable voice his experience trading ideas on atomic physics with Einstein and Bohr and ideas on gambling with Nick the Greek; cracking the uncrackable safes guarding the most deeply held nuclear secrets; accompanying a ballet on his bongo drums; painting a naked female toreador. In short, here is Feynman's life in all its eccentric—a combustible mixture of high intelligence, unlimited curiosity, and raging chutzpah.",
  owner_id: rand(1..3),
  image_url: "https://books.google.com/books/content?id=7papZR4oVssC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
)
Book.create!(
  title: "Breakfast of Champions",
  author: "Kurt Vonnegut",
  owner_id: rand(1..3),
  image_url: "http://bookcoverarchive.com/wp-content/uploads/amazon/breakfast_of_champions.jpg"
)
Book.create!(
  title: "One Two Three Infinity",
  author: "George Gamow",
  owner_id: rand(3..6),
  image_url: "http://stang.sc.mahidol.ac.th/ReadforLife/images/10_.jpg"
)
Book.create!(
  title: "The Giving tree",
  author: "Shel Silverstein",
  owner_id: rand(3..6),
  image_url: "http://ecx.images-amazon.com/images/I/516dsrPeFDL._SX375_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Quiet",
  author: "Susan Cain",
  owner_id: rand(3..6),
  image_url: "http://ecx.images-amazon.com/images/I/41m0N7IIcsL._SX323_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "My Uncle Oswald",
  author: "Roald Dahl",
  owner_id: rand(3..6),
  image_url: "http://ecx.images-amazon.com/images/I/41XcxYvcYiL._SX300_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Lost Horizon",
  author: "James Hilton",
  owner_id: rand(1..6),
  image_url: "http://ecx.images-amazon.com/images/I/51CVBz6b8fL._SX331_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Murder on the Orient Express",
  author: "Agatha Christie",
  owner_id: rand(1..6),
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51drUi8B0HL._SX330_BO1,204,203,200_.jpg"
)
