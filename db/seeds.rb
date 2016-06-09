# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

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
  owner_id: rand(4..8),
  image_url: "http://stang.sc.mahidol.ac.th/ReadforLife/images/10_.jpg"
)
Book.create!(
  title: "The Giving tree",
  author: "Shel Silverstein",
  owner_id: rand(4..8),
  image_url: "http://ecx.images-amazon.com/images/I/516dsrPeFDL._SX375_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Quiet",
  author: "Susan Cain",
  owner_id: rand(4..8),
  image_url: "http://ecx.images-amazon.com/images/I/41m0N7IIcsL._SX323_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "My Uncle Oswald",
  author: "Roald Dahl",
  owner_id: rand(4..8),
  image_url: "http://ecx.images-amazon.com/images/I/41XcxYvcYiL._SX300_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Lost Horizon",
  author: "James Hilton",
  owner_id: rand(4..8),
  image_url: "http://ecx.images-amazon.com/images/I/51CVBz6b8fL._SX331_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Murder on the Orient Express",
  author: "Agatha Christie",
  owner_id: rand(4..8),
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51drUi8B0HL._SX330_BO1,204,203,200_.jpg"
)
#
Book.create!(
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
  owner_id: rand(4..8),
  image_url: "http://ecx.images-amazon.com/images/I/41aQPTCmeVL._SX331_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "The Fellowship of the Ring",
  author: "J. R. R. Tolkien",
  owner_id: rand(4..8),
  description: "The first volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
  image_url: "http://ecx.images-amazon.com/images/I/41i-SJkyCQL._SX331_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "The Silmarillion",
  author: "J. R. R. Tolkien",
  owner_id: rand(4..8),
  description: "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT. Tolkien considered THE SILMARILLION his most important work, and, though it was published last and posthumously, this great collection of tales and legends clearly sets the stage for all his other writing. The story of the creation of the world and of the the First Age, this is the ancient drama to which the characters in THE LORD OF THE RINGS look back and in whose events some of them, such as Elrond and Galadriel, took part. The three Silmarils were jewels created by Feanor, most gifted of the Elves. Within them was imprisoned the Light of the Two Trees of Valinor before the Trees themselves were destroyed by Morgoth, the first Dark Lord. Thereafter, the unsullied Light of Valinor lived on only in the Silmarils, but they were seized by Morgoth and set in his crown, which was guarded in the impenetrable fortress of Angband in the north of Middle-earth.",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51tDzXVWy4L._SX296_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "The Lady Tasting Tea",
  author: "David Salsburg",
  owner_id: rand(4..8),
  description: "Examines the works of statistics pioneer Ronald Fisher as well as other revolutionary thinkers in the field, covering the rise and fall of Karl Pearson's theories, the methods that contributed to Japan's post-war rebuilding, a pivotal early study on a Guinness beer cask, and more.",
  image_url: "http://ecx.images-amazon.com/images/I/51TruAK%2BQ-L._SX311_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "The Stranger",
  author: "Albert Camus",
  owner_id: rand(4..8),
  description: "Through the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach, Camus explored what he termed 'the nakedness of man faced with the absurd.' First published in 1946",
  image_url: "https://s-media-cache-ak0.pinimg.com/736x/f7/1c/95/f71c9503747dc53c40e487d0dc8033d2.jpg"
)
Book.create!(
  title: "The Amulet Of Samarkand",
  author: "Jonathan Stroud",
  owner_id: rand(4..8),
  description: "Nathaniel, a magician's apprentice, summons up the djinni Bartimaeus and instructs him to steal the Amulet of Samarkand from the powerful magician Simon Lovelace.",
  image_url: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Amulet_of_Samarkand.png"
)
Book.create!(
  title: "Gödel, Escher, Bach",
  author: "Douglas R. Hofstadter",
  owner_id: rand(4..8),
  description: "'What is a self and how can a self come out of inanimate matter?' This is the riddle that drove Douglas Hofstadter to write this extraordinary book. In order to impart his original and personal view on the core mystery of human existence - our intangible sensation of 'I'-ness - Hofstadter defines the playful yet seemingly paradoxical notion of 'strange loop', and explicates this idea using analogies from many disciplines.",
  image_url: "http://d.gr-assets.com/books/1331382003l/24115.jpg"
)
Book.create!(
  title: "Where Eagles Dare",
  author: "Alistair MacLean",
  owner_id: rand(4..8),
  description: "The classic World War II thriller from the acclaimed master of action and suspense. Now reissued in a new cover style.",
  image_url: "http://d.gr-assets.com/books/1345031718l/1164086.jpg"
)
Book.create!(
  title: "Gorky Park",
  author: "Martin Cruz Smith",
  owner_id: rand(4..8),
  description: "In Soviet Russia, a triple murder in Moscow amusement centre, Gorky Park, leaves three corpses frozen in the snow. But when Senior Investigator in the Moscow Prosecutor's Office Arkady Renko arrives, he finds that the brutal murder leaves the victims unidentifiable with faces and fingers missing. Renko must battle political and corporate corruption internationally, from the USSR to the USA, to uncover the truth - and he must fight for his own life in doing so. Meanwhile, he is falling in love with a beautiful, headstrong dissident for whom he may risk everything... ",
  image_url: "http://ecx.images-amazon.com/images/I/51rPUEvKF%2BL._SX324_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Memoirs of a Geisha",
  author: "Arthur Golden",
  owner_id: rand(4..8),
  description: "Speaking to us with the wisdom of age and in a voice at once haunting and startlingly immediate, Nitta Sayuri tells the story of her life as a geisha. It begins in a poor fishing village in 1929, when, as a nine-year-old girl with unusual blue-gray eyes, she is taken from her home and sold into slavery to a renowned geisha house. We witness her transformation as she learns the rigorous arts of the geisha: dance and music; wearing kimono, elaborate makeup, and hair; pouring sake to reveal just a touch of inner wrist; competing with a jealous rival for men's solicitude and the money that goes with it. ",
  image_url: "https://upload.wikimedia.org/wikipedia/en/0/09/Memoirs_of_a_Geisha_Poster.jpg"
)
Book.create!(
  title: "The Good Earth",
  author: "Pearl S. Buck",
  owner_id: rand(4..8),
  description: "A Chinese peasant overcomes the forces of nature and the frailties of human nature to become a wealthy landowner.",
  image_url: "http://ecx.images-amazon.com/images/I/51zRzieodBL._SX320_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "My Family and Other Animals",
  author: "Gerald Durrell",
  owner_id: rand(4..8),
  description: "This very funny story is about an English family who go to live on the Greek island of Corfu. Gerald, the youngest boy, loves animals and insects. He brings scorpions, spiders, birds, snakes and other animals to the house, and they get him into lots of trouble.",
  image_url: "http://ecx.images-amazon.com/images/I/41rC5qKvgaL.jpg"
)
Book.create!(
  title: "The Eighth Commandment",
  author: "Lawrence Sanders",
  owner_id: rand(4..8),
  description: "When a rare coin vanishes, an appraiser tries to clear her name—and exposes one family’s lethal secrets Appraising rare coins for Grandby & Sons, a venerable Madison Avenue auction house, is a dream come true for Mary Lou Bateson. She even gets a chance to inspect the Havistock Collection of priceless coins, which includes the Demaretion, a rare, ancient Greek silver piece. But when the Demaretion disappears just after her assessment, the young numismatist becomes the number-one suspect. Placed on indefinite leave, Bateson enlists the help of a New York Police Department cop and an insurance detective to go behind the closed doors of one of New York’s most powerful and untouchable families. The Havistocks are keeping some dangerous secrets, including a kleptomaniac daughter, a sex-addicted daughter-in-law, and a sleazy nest of adultery, pornography, and damning secrets someone is willing to kill to keep.",
  image_url: "http://d.gr-assets.com/books/1386005584l/19101046.jpg"
)
Book.create!(
  title: "A Strangeness in My Mind",
  author: "Orhan Pamuk",
  owner_id: rand(4..8),
  description: "Since his boyhood in a poor village in Central Anatolia, Mevlut Karatas has fantasized about what his life would become. Not getting as far in school as he'd hoped, at the age of twelve, he comes to Istanbul-'the center of the world'-and is immediately enthralled both by the city being demolished and the new one that is fast being built. ",
  image_url: "http://ecx.images-amazon.com/images/I/51-Lr1056oL._SX336_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "One Hundred Years of Solitude",
  author: "Gabriel García Márquez",
  owner_id: rand(4..8),
  description: "As Melquiades excites Buendia's father with new inventions and tales of adventure, neither can know the significance of the indecipherable manuscript that the gypsy passes into their hands. The tribulations of the Buendia household push memories of the manuscript aside. Few remember its existence and one will discover the message that it holds.",
  image_url: "http://ecx.images-amazon.com/images/I/61O-ltKJb9L._SX330_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Antifragile",
  author: "Nassim Nicholas Taleb",
  owner_id: rand(4..8),
  description: "The best-selling author of The Black Swan shares philosophical insights into how adversity and chaos can bring out the best in individuals and communities, drawing on multiple disciplines to consider such topics as the superiority of city states over nation states, the drawbacks of debt and why modern developments usually fail.",
  image_url: "http://ecx.images-amazon.com/images/I/41y%2B-2A1XZL.jpg"
)
Book.create!(
  title: "The Inimitable Jeeves",
  author: "P. G. Wodehouse",
  owner_id: rand(4..8),
  description: "This classic collection of linked stories feature some of the funniest episodes in the life of Bertie Wooster, gentleman, and Jeeves, his gentleman’s gentleman—in which Bertie's terrifying Aunt Agatha stalks the pages, seeking whom she may devour, while Bertie’s friend Bingo Little falls in love with seven different girls in succession (he marries the last, bestselling romantic novelist Rosie M. Banks). And Bertie, with Jeeves’s help, just evades the clutches of the terrifying Honoria Glossop. ",
  image_url: "http://ecx.images-amazon.com/images/I/517JNzaZJmL.jpg"
)
Book.create!(
  title: "The Jungle Book",
  author: "Rudyard Kipling",
  owner_id: rand(4..8),
  image_url: "https://s-media-cache-ak0.pinimg.com/736x/a5/3c/a3/a53ca3df032315e52558294be2f30d4c.jpg"
)
Book.create!(
  title: "Outlander",
  author: "Diana Gabaldon",
  owner_id: rand(4..8),
  description: "Twenty years ago, Gabaldon swept readers into her mesmerizing world brimming with history, romance, and adventure. ",
  image_url: "http://d.gr-assets.com/books/1402600310l/10964.jpg"
)
Book.create!(
  title: "The Power of Habit",
  author: "Charles Duhigg",
  owner_id: rand(4..8),
  description: "In The Power of Habit, Pulitzer Prize–winning business reporter Charles Duhigg takes us to the thrilling edge of scientific discoveries that explain why habits exist and how they can be changed. Distilling vast amounts of information into engrossing narratives that take us from the boardrooms of Procter & Gamble to sidelines of the NFL to the front lines of the civil rights movement, Duhigg presents a whole new understanding of human nature and its potential. At its core, The Power of Habit contains an exhilarating argument: The key to exercising regularly, losing weight, being more productive, and achieving success is understanding how habits work. As Duhigg shows, by harnessing this new science, we can transform our businesses, our communities, and our lives.",
  image_url: "http://d.gr-assets.com/books/1366758683l/12609433.jpg"
)
Book.create!(
  title: "Norwegian Wood",
  author: "Haruki Murakami",
  owner_id: rand(4..8),
  description: "Toru, a quiet and preternaturally serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. Toru begins to adapt to campus life and the loneliness and isolation he faces there, but Naoko finds the pressures and responsibilities of life unbearable. As she retreats further into her own world, Toru finds himself reaching out to others and drawn to a fiercely independent and sexually liberated young woman. A poignant story of one college student's romantic coming-of-age, Norwegian Wood takes us to that distant place of a young man's first, hopeless, and heroic love.",
  image_url: "http://d.gr-assets.com/books/1386924361l/11297.jpg"
)
Book.create!(
  title: "Americanah",
  author: "Chimamanda Ngozi Adichie",
  owner_id: rand(4..8),
  description: "A powerful, tender story of race and identity by Chimamanda Ngozi Adichie, the award-winning author of Half of a Yellow Sun. Ifemelu and Obinze are young and in love when they depart military-ruled Nigeria for the West. Beautiful, self-assured Ifemelu heads for America, where despite her academic success, she is forced to grapple with what it means to be black for the first time. Quiet, thoughtful Obinze had hoped to join her, but with post-9/11 America closed to him, he instead plunges into a dangerous, undocumented life in London. Fifteen years later, they reunite in a newly democratic Nigeria, and reignite their passion—for each other and for their homeland.",
  image_url: "http://ecx.images-amazon.com/images/I/51mSJNECGyL.jpg"
)
Book.create!(
  title: "The White Lioness",
  author: "Henning Mankell",
  owner_id: rand(4..8),
  description: "In peaceful southern Sweden, Louise Akerblom, an estate agent, pillar of the Methodist church, wife and mother, disappears. There is no explanation and no motive. Inspector Kurt Wallander and his team are called in to investigate. As Inspector Wallander is introduced to this missing persons case, he has a gut feeling that the victim will never be found alive, but he has no idea how far he will have to go in search of the killer. In South Africa, meanwhile Nelson Mandela has made his long walk to freedom. Wallander find himself caught up in a conspiracy involving renegade members of the South African secret service and a former KGB agent, all of them set upon halting Mandela's rise to power. Faced with a world in which terrorism knows no frontiers Wallander must prevent a hideous crime that means to dam the tide of history.",
  image_url: "http://ecx.images-amazon.com/images/I/41nuFF8u18L._SX322_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Fun Home",
  author: "Alison Bechdel",
  owner_id: rand(4..8),
  description: "A memoir done in the form of a graphic novel by a cult favorite comic artist offers a darkly funny family portrait that details her relationship with her father--a funeral home director, high school English teacher, and closeted homosexual.",
  image_url: "https://upload.wikimedia.org/wikipedia/en/3/31/Fun_Home_French_cover.jpg"
)
Book.create!(
  title: "Persepolis",
  author: "Marjane Satrapi",
  owner_id: rand(4..8),
  description: "The great-granddaughter of Iran's last emperor and the daughter of ardent Marxists continues her description of growing up in Tehran, a country plagued by political upheaval and vast contradictions between public and private life, in a memoir told in the form of a graphic novel.",
  image_url: "http://ecx.images-amazon.com/images/I/51mASzxex8L._SX317_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "In Patagonia",
  author: "Bruce Chatwin",
  owner_id: rand(4..8),
  description: "The masterpiece of travel writing that revolutionized the genre and made its author famous overnight An exhilarating look at a place that still retains the exotic mystery of a far-off, unseen land, Bruce Chatwin’s exquisite account of his journey through Patagonia teems with evocative descriptions, remarkable bits of history, and unforgettable anecdotes. Fueled by an unmistakable lust for life and adventure and a singular gift for storytelling, Chatwin treks through 'the uttermost part of the earth'—that stretch of land at the southern tip of South America, where bandits were once made welcome—in search of almost-forgotten legends, the descendants of Welsh immigrants, and the log cabin built by Butch Cassidy. ",
  image_url: "http://d.gr-assets.com/books/1386924798l/79909.jpg"
)
Book.create!(
  title: "The Kite Runner",
  author: "Khaled Hosseini",
  owner_id: rand(4..8),
  image_url: "http://d.gr-assets.com/books/1311705989l/11296523.jpg"
)
Book.create!(
  title: "The Brief Wondrous Life of Oscar Wao",
  author: "Junot Diaz",
  owner_id: rand(4..8),
  description: "Things have never been easy for Oscar. A ghetto nerd living with his Dominican family in New Jersey, he's sweet but disastrously overweight. He dreams of becoming the next J.R.R. Tolkien and he keeps falling hopelessly in love. Poor Oscar may never get what he wants, thanks to the Fuk - the curse that has haunted his family for generations. With dazzling energy and insight Daz immerses us in the tumultuous lives of Oscar; his runaway sister Lola; their beautiful mother Belicia; and in the family's uproarious journey from the Dominican Republic to the US and back. Rendered with uncommon warmth and humour, The Brief Wondrous Life of Oscar Wao is a literary triumph, that confirms Junot Daz as one of the most exciting writers of our time.",
  image_url: "https://upload.wikimedia.org/wikipedia/en/5/5f/Junot_wao_cover.jpg"
)
Book.create!(
  title: "Maximum City",
  author: "Suketu Mehta",
  owner_id: rand(4..8),
  description: "A native of Bombay, Suketu Mehta gives us an insider’s view of this stunning metropolis. He approaches the city from unexpected angles, taking us into the criminal underworld of rival Muslim and Hindu gangs; following the life of a bar dancer raised amid poverty and abuse; opening the door into the inner sanctums of Bollywood; and delving into the stories of the countless villagers who come in search of a better life and end up living on the sidewalks. ",
  image_url: "http://ecx.images-amazon.com/images/I/51KSGC7PNKL.jpg"
)
Book.create!(
  title: "The Reluctant Fundamentalist",
  author: "Mohsin Hamid",
  owner_id: rand(4..8),
  description: "At a café table in Lahore, a bearded Pakistani man converses with an uneasy American stranger. As dusk deepens to night, he begins the tale that has brought them to this fateful encounter . . . Changez is living an immigrant’s dream of America. At the top of his class at Princeton, he is snapped up by an elite valuation firm. He thrives on the energy of New York, and his budding romance with elegant, beautiful Erica promises entry into Manhattan society at the same exalted level once occupied by his own family back in Lahore. But in the wake of September 11, Changez finds his position in his adopted city suddenly overturned, and his relationship with Erica shifting. And Changez’s own identity is in seismic shift as well, unearthing allegiances more fundamental than money, power, and maybe even love.",
  image_url: "http://ecx.images-amazon.com/images/I/51CmX2J1qzL._SX331_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Foundation",
  author: "Isaac Asimov",
  owner_id: rand(4..8),
  description: "For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Sheldon, creator of the revolutionary science of psychohistory, can see into the future--to a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save mankind, Seldon gathers the best minds in the Empire--both scientists and scholars--and brings them to a bleak planet at the edge of the Galaxy to serve as a beacon of hope for a fututre generations. He calls his sanctuary the Foundation. But soon the fledgling Foundation finds itself at the mercy of corrupt warlords rising in the wake of the receding Empire. Mankind's last best hope is faced with an agonizing choice: submit to the barbarians and be overrun--or fight them and be destroyed.",
  image_url: "http://ecx.images-amazon.com/images/I/51aKk%2BWF2XL._SX298_BO1,204,203,200_.jpg"
)

Book.create!(
  title: "Stories of Your Life and Others",
  author: "Ted Chiang",
  owner_id: rand(4..8),
  description: "Stories of Your Life and Others presents characters who must confront sudden change—the inevitable rise of automatons or the appearance of aliens—while striving to maintain some sense of normalcy. In the amazing and much-lauded title story, a grieving mother copes with divorce and the death of her daughter by drawing on her knowledge of alien languages and non-linear memory recollection. ",
  image_url: "http://ecx.images-amazon.com/images/I/51Hg%2B6Y8eiL.jpg"
)

Book.create!(
  title: "Lucky Jim",
  author: "Kingsley Amis",
  owner_id: rand(4..8),
  description: "Amis’s scabrous debut leads the reader through a gallery of emphatically English bores, cranks, frauds, and neurotics, with each of whom Dixon must contend in one way or another in order to hold on to his cushy academic perch and win the girl of his fancy. More than just a merciless satire of cloistered college life and stuffy post-war manners, Lucky Jim is an attack on the forces of boredom, whatever form they may take, and a work of art that at once distills and extends an entire tradition of English comic writing, from Fielding and Dickens through Wodehouse and Waugh.",
  image_url: "http://ecx.images-amazon.com/images/I/51jP2wfmAjL._SX311_BO1,204,203,200_.jpg"
)
