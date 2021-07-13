
import Category from "../models/Category";

export const CATEGORIES = [
    new Category('c1', 'Fantacy', 'darkcyan'),
    new Category('c2', 'History', 'coral'),
    new Category('c3', 'Romance', 'darkviolet'),
    new Category('c4', 'Kids', 'lightslategrey'),
    new Category('c5', 'Scientific', 'firebrick'),
    new Category('c6', 'Mystery', 'gold'),
]

// import:
import Book from "../models/Book";

// add data for Trips:

export const BOOKS = [  
    new Book(
        "t1",
        ["c1"],
        "Harry Potter and the Philosopher's Stone",
        "Free Shipping",
        "55$",
        "https://tygeronline.com/store/wp-content/uploads/2020/09/0747554560-harry-potter-philosophers-stone.jpg",
        "Excellent book -John Cena 5 stars from 5",
         "9.10 * 6.10 * 1.30 Inches (L*W*H)",     
        [
           `Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.
            The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, 
            a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, 
            and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.`
        ],
        false,
        false,
        true,
        false
    ),
    new Book(
        "t2", // id
        ['c1'], // countryIds
        "Harry Potter and the Chamber of Secrets",
        "Free Shipping",
        "55$",
        "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg", //imageUrl
        "Excellent book -Jet Li 4.5 stars from 5",
        "9.22 x 6.46 x 1.14 Inches (L*W*H)",
        [
            `
            Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series.
             The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry,
              during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families.
               These threats are found after attacks that leave residents of the school petrified.
                Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.
            The book was published in the United Kingdom on 2 July 1998 by Bloomsbury and later in the United States on 2 June 1999 by Scholastic Inc. Although Rowling says she found it difficult to finish the book, 
            it won high praise and awards from critics, young readers, and the book industry, although some critics thought the story was perhaps too frightening for younger children. Much like with other novels in the series, Harry Potter and the Chamber of Secrets triggered religious debates; 
            some religious authorities have condemned its use of magical themes, whereas others have praised its emphasis on self-sacrifice and the way one's character is the result of one's choices.
            `
        ],
        true, //isFamilyAvailable
        false, //isSuitableForDisabled
        true, //isWaterAccess
        true //isUrban
    ),
    new Book(
        "t3",
        ['c1'],
        "Harry Potter and the Prisoner of Azkaban",
        "Free Shipping",
        "55$",
        "https://www.thegallerylondon.org/wp-content/uploads/2020/05/Harry-Potter-and-the-Prisoner-of-Azkaban-1.jpg",
        "Good book - Bruce Wayne 4 stars from 5",
        "5.20(w) x 7.50(h) x 2.10(d)",
        [
            `Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series.
             The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.
              Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.
            The book was published in the United Kingdom on 8 July 1999 by Bloomsbury and in the United States on 8 September 1999 by Scholastic, Inc.[1][2][3][4] Rowling found the book easy to write, finishing it just a year after she began writing it. The book sold 68,000 copies in just three days after its release in the United Kingdom and since has sold over three million in the country. The book won the 1999 Whitbread Children's Book Award, the Bram Stoker Award, and the 2000 Locus Award for Best Fantasy Novel and was short-listed for other awards, including the Hugo.`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t4",
        ['c1'],
        "Harry Potter and the Order of the Phoenix",
        "Free Shipping",
        "55$",
        "https://images-na.ssl-images-amazon.com/images/I/91paGQ+vARL.jpg",
        "Good book - John Flor Wayne 4 stars from 5",
        "5.20(w) x 7.50(h) x 2.10(d)",
        [
            `Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series.
             It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.
              The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.[1] It is the longest book of the series.  
            Harry Potter and the Order of the Phoenix won several awards, including the American Library Association Best Book Award for Young Adults in 2003. The book was also made into a 2007 film, and a video game by Electronic Arts.`
        ],
        true,
        false,
        true,
        true
    ),
    
    new Book(
        "t5",
        ['c4'],
        "The Very Hungry Caterpillar",
        "Free Shipping",
        "13$",
        "https://cdn.shopify.com/s/files/1/0173/8676/products/hungry_caterpillar.jpg?v=1353141617",
        "Good book - Mustafa 4 stars from 5",
        "4.90 x 7.10 x 0.70 Inches",
        [
            `The Very Hungry Caterpillar is a children's picture book designed, illustrated, and written by Eric Carle, first published by the World Publishing Company in 1969, later published by Penguin Putnam.
             The book features a very hungry caterpillar who eats his way through a wide variety of foodstuffs before pupating and emerging as a butterfly.
              The winner of many children's literature awards and a major graphic design award, it has sold almost 50 million copies worldwide.
               It has been described as having sold the equivalent of a copy per minute since its publication, and as "one of the greatest childhood classics of all time".
                It was voted the number two children's picture book in a 2012 survey of School Library Journal readers.`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t6",
        ['c4'],
        "Where the Wild Things Are",
        "Free Shipping",
        "10$",
        "https://images-na.ssl-images-amazon.com/images/I/A1wx+e0rJ2L.jpg",
        "everage book - Boris 3.2 stars from 5",
        "10.5 x 9.5 x 0.5 inches",
        [
            `Where the Wild Things Are is a 1963 children's picture book by American writer and illustrator Maurice Sendak, originally published by Harper & Row. The book has been adapted into other media several times, including an animated short in 1973 (with an updated version in 1988); a 1980 opera; and a live-action 2009 feature-film adaptation. The book had sold over 19 million copies worldwide as of 2009, with 10 million of those being in the United States.

            Sendak won the annual Caldecott Medal from the children's librarians in 1964, recognizing Wild Things as the previous year's "most distinguished American picture book for children". It was voted the number one picture book in a 2012 survey of School Library Journal readers, not for the first time.`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t7",
        ['c4'],
        "The Giving Tree",
        "Free Shipping",
        "14$",
        "https://cdn.shoplightspeed.com/shops/621012/files/10667580/1652x2313x1/the-giving-tree.jpg",
        "10.10 x 7.80 x 0.60 Inches",
        "not intresting book at all - Jhony Bravo 3.2 stars from 5",
        [
            `The Giving Tree is an American children's picture book written and illustrated by Shel Silverstein. First published in 1964 by Harper & Row, it has become one of Silverstein's best-known titles, and has been translated into numerous languages.

            This book has been described as "one of the most divisive books in children's literature"; the controversy stems from whether the relationship between the main characters (a boy and the eponymous tree) should be interpreted as positive (i.e., the tree gives the boy selfless love) or negative (i.e., the boy and the tree have an abusive relationship).`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t8",
        ['c4'],
        "A Tale of Five Balloons",
        "Free Shipping",
        "8$",
        "https://kidsbest.co.il/wp-content/uploads/2020/03/maase_behamish_balonim.jpg",
        "no details about This bood dimensions",
        "lovely chilhood execelent book - Boris Sholkov 5 stars from 5",
        [
            `A Tale of Five Balloons (Hebrew: מעשה בחמישה בלונים, Ma'ase b'Khamisha Balonim) is an Israeli children's book by Miriam Roth published in 1974 and illustrated by Ora Ayal. The book has become a classic of Israeli children's literature`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t9",
        ['c3'],
        "It Ends With Us",
        "Free Shipping",
        "31$",
        "https://images-na.ssl-images-amazon.com/images/I/91OT29EvAXL.jpg",
        'im not connected to Rommance books - Shlomo Artzi 1 stars from 5',
        "8.20 x 5.30 x 1.10 Inches",
        [
            `Sometimes it is the one who loves you who hurts you the most.

            Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town in Maine where she grew up—she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true.
            
            Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place.
            
            As questions about her new relationship overwhelm her, so do thoughts of her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.
            `
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t10",
        ['c3'],
        "Jane Eyre",
        "Free Shipping",
        "15$",
        "https://images.booksense.com/images/499/282/9781788282499.jpg",
        'one of the best Romance  books that i read - idan Hadad 5 stars from 5',
        "6.69 x 0.66 x 9.61 inches",
        [
            `Jane Eyre /ɛər/ (originally published as Jane Eyre: An Autobiography) is a novel by English writer Charlotte Brontë, published under the pen name "Currer Bell", on 16 October 1847, by Smith, Elder & Co. of London. The first American edition was published the following year by Harper & Brothers of New York.[1] Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.[2]

            The novel revolutionised prose fiction by being the first to focus on its protagonist's moral and spiritual development through an intimate first-person narrative, where actions and events are coloured by a psychological intensity. Charlotte Brontë has been called the "first historian of the private consciousness", and the literary ancestor of writers like Proust and Joyce.[3]
            
            The book contains elements of social criticism with a strong sense of Christian morality at its core,
             and it is considered by many to be ahead of its time because of Jane's individualistic character and how the novel approaches the topics of class, sexuality, 
             religion, and feminism.[4][5] It, along with Jane Austen's Pride and Prejudice, is one of the most famous romance novels of all time.`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t11",
        ['c3'],
        "Fifty Shades of Grey",
        "Free Shipping",
        "23$",
        "https://static.wixstatic.com/media/88d3ca_dd5358f2fc44492e8ccc8ccddf53894d~mv2.jpg/v1/fill/w_1376,h_1948,al_c,q_85/88d3ca_dd5358f2fc44492e8ccc8ccddf53894d~mv2.jpg",
        'more belong to erotic  Category than Romanse  - Mira Levi 3.8 stars from 5',
        "‎8.00 x 5.10 x 0.90 Inches",
        [
            `Fifty Shades of Grey is a 2011 erotic romance novel by British author E. L. James.[1] It became the first instalment in the Fifty Shades novel series that follows the deepening relationship between a college graduate,
             Anastasia Steele, and a young business magnate, Christian Grey. It is notable for its explicitly erotic scenes featuring elements of sexual practices involving BDSM (bondage/discipline, dominance/submission, and sadism/masochism). Originally self-published as an ebook and print-on-demand in June 2011,
              the publishing rights to the novel were acquired by Vintage Books in March 2012.
            Fifty Shades of Grey has topped best-seller lists around the world. It has been translated into 52 languages, and set a record in the United Kingdom as the fastest-selling paperback of all time. Critical reception of the book, however, has tended towards the negative, with the quality of its prose generally seen as poor, while its portrayal of BDSM has been targeted for criticism from a variety of perspectives. Universal Pictures and Focus Features produced an American film adaptation, which was released on 13 February 2015,[2] and also received unfavourable reviews even though it was a box office success.`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t12",
        ['c3'],
        "The Unhoneymooners",
        "Free Shipping",
        "93$",
        "https://images-na.ssl-images-amazon.com/images/I/711UaUepObS.jpg",
        'very lovly book with colorful cover  -Haim Revivo 4.5 stars from 5',
        "8.20 x 5.30 x 1.00 Inches",
        [
            `Olive is always unlucky: in her career, in love, in…well, everything. Her identical twin sister Ami,
             on the other hand, is probably the luckiest person in the world. Her meet-cute with her fiancé is something out of a romantic comedy (gag) and she’s managed to finance her entire wedding by winning a series of Internet contests (double gag).
              Worst of all, she’s forcing Olive to spend the day with her sworn enemy, Ethan, who just happens to be the best man.
            Olive braces herself to get through 24 hours of wedding hell before she can return to her comfortable, 
            unlucky life. But when the entire wedding party gets food poisoning from eating bad shellfish, the only people who aren’t affected are Olive and Ethan. And now there’s an all-expenses-paid honeymoon in Hawaii up for grabs.
            Putting their mutual hatred aside for the sake of a free vacation, Olive and Ethan head for paradise, determined to avoid each other at all costs. But when Olive runs into her future boss, the little white lie she tells him is suddenly at risk to become a whole lot bigger. She and Ethan now have to pretend to be loving newlyweds, and her luck seems worse than ever. But the weird thing is that she doesn’t mind playing pretend. In fact, she feels kind of... lucky.`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t13",
        ['c2'],
        "1491: New Revelations of the Americas Before Columbus",
        "Free Shipping",
        "93$",
        "https://images-na.ssl-images-amazon.com/images/I/812bCWhIkoL.jpg",
        'very long and boring book  -Haim Revivo 2.5 stars from 5',
        "5.20(w) x 7.90(h) x 1.30(d) inches",
        [
            `1491: New Revelations of the Americas Before Columbus is a 2005 non-fiction book by American author and science writer Charles C. Mann about the pre-Columbian Americas.
             It was the 2006 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, 
             engineering or medicine.
            The book presents recent research findings in different fields that suggest human populations in the Western Hemisphere—that is, the indigenous peoples of the Americas—were more numerous, had arrived earlier, were more sophisticated culturally, and controlled and shaped the natural landscape to a greater extent than scholars had previously thought.
            The author notes that, according to these findings, two of the first six independent centers of civilization arose in the Americas: the first, Norte Chico or Caral-Supe, in present-day northern Peru; and that of Formative-era Mesoamerica in what is now southern Mexico.`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t14",
        ['c2'],
        "War and Peace",
        "Free Shipping",
        "87$",
        "https://images-na.ssl-images-amazon.com/images/I/71lPZpwz0HL.jpg",
        'Leo tolstoy one of the great authers i like his book like all of his others books -Yakov Levi 4.8 stars from 5',
        "198 x 129 x 61 mm",
        [
            `War and Peace (pre-reform Russian: Война и миръ; post-reform Russian: Война и мир, romanized: Voyna i mir [vɐjˈna i ˈmʲir]) is a literary work mixed with chapters on history and philosophy by the Russian author Leo Tolstoy,
             first published serially, then published in its entirety in 1869.
              It is regarded as one of Tolstoy's finest literary achievements and remains an internationally praised classic of world literature.
            The novel chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families.
             Portions of an earlier version, titled The Year 1805, were serialized in The Russian Messenger from 1865 to 1867 before the novel was published in its entirety in 1869.
            Tolstoy said War and Peace is "not a novel, even less is it a poem, and still less a historical chronicle." Large sections, especially the later chapters, are philosophical discussions rather than narrative. Tolstoy also said that the best Russian literature does not conform to standards and hence hesitated to call War and Peace a novel. Instead, he regarded Anna Karenina as his first true novel.`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t15",
        ['c2'],
        "August 1914",
        "Free Shipping",
        "93$",
        "https://upload.wikimedia.org/wikipedia/en/2/21/August_1914_Bodley_Head_Cover_1972.jpg",
        "Very Boring im not an History lover so i will give 2.5 stars from 5",
        "6.75 x 2.25 x 9.5 inches",
        [
            `August 1914 (Russian: Август четырнадцатого) is a Russian novel by Nobel Prize-winning writer Aleksandr Solzhenitsyn about the defeat of the Imperial Russian Army at the Battle of Tannenberg in East Prussia. The novel was completed in 1970, first published in 1971,
             with an English translation the following year. The novel is an unusual blend of fiction narrative and historiography,
              and has given rise to extensive and often bitter controversy, both from the literary as well as from the historical point of view.
            Some episodes of the book had caused in accusations of the author in anti-Semitism, mostly rebutted at the time,
             but these were renewed later, regarding Two Hundred Years Together.`
        ],
        true,
        false,
        true,
        true
    ),
    new Book(
        "t16",
        ['c2'],
        "The Rise and Fall of the Third Reich",
        "Free Shipping",
        "93$",
        "https://media.karousell.com/media/photos/products/2020/11/2/the_rise_and_fall_of_the_third_1604323666_cec070f9_progressive.jpg",
        "I Hate The Nazis so even i not a favor of a historicals books i enjoy read Hitller falling -Artyom brilliant give 4.01 stars from 5",
        "58x 234 x 157 (W*H*L)",
        [
            `The Rise and Fall of the Third Reich: A History of Nazi Germany is a book by the journalist William L. Shirer,
             in which the author chronicles the rise and fall of Nazi Germany from the birth of Adolf Hitler in 1889 to the end of World War II in Europe in 1945. 
             It was first published in 1960, by Simon & Schuster in the United States. It was a bestseller in both the United States and Europe, and a critical success outside Germany; 
             in Germany, criticism of the book stimulated sales. The book was feted by journalists, as reflected by its receipt of the National Book Award for non-fiction,
             but the reception from academic historians was mixed.

            The book is based upon captured Nazi documents, the available diaries of propaganda minister Joseph Goebbels, of General Franz Halder, and of the Italian Foreign Minister Galeazzo Ciano, evidence and testimony from the Nuremberg trials, British Foreign Office reports, and the author's recollection of his six years in Germany (from 1934 to 1940) as a journalist, reporting on Nazi Germany for newspapers, the United Press International (UPI), and CBS Radio. The work was written and initially published in four parts, but a larger one-volume edition has become more common.`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t17",
        ['c6'],
        "The Talented Mr. Ripley",
        "Free Shipping",
        "75$",
        "https://i.ebayimg.com/images/g/WGcAAOSw-0dgw36a/s-l1600.jpg",
        "Ripley is very cool persona and talented like his book -love him very much - Yoni bloch 3 stars from 5",
        "198 x 129 x 17 mm ",
        [
            `Tom Ripley is a young man struggling to make a living in New York City by whatever means necessary, including a series of small-time confidence scams. One day,
             he is approached by shipping magnate Herbert Greenleaf to travel to "Mongibello", 
             in Italy, to persuade Greenleaf's errant son, Dickie, to return to the United States and join the family business.
              Ripley agrees, exaggerating his friendship with Dickie, a half-remembered acquaintance, in order to gain the elder Greenleaf's trust.

            Shortly after his arrival in Italy, Ripley meets Dickie and Dickie's girlfriend Marge Sherwood, 

            and Dickie allows Tom Ripley to stay with him in his Italian home. As Ripley and Dickie spend more time together,

             Marge feels left out. However, soon after Ripley arrives, Freddie Miles, a school friend of Dickie's, visits Dickie's summer home. 
             Tom begins to grow jealous of Freddie, and grows closer to Marge over their shared anguish in Dickie's shifting loyalty.

            Dickie becomes upset when he unexpectedly finds Ripley in his bedroom dressed up in his clothes and imitating his mannerisms. 

            From this moment on, Ripley senses that Dickie has begun to tire of him, resenting his constant presence and growing personal dependence. Ripley has indeed become obsessed with Dickie, which is further reinforced by his desire to imitate and maintain the wealthy lifestyle Dickie has afforded him. As a gesture to Ripley, Dickie agrees to travel with him on a short holiday to San Remo. Sensing that he is about to cut him loose, Ripley finally decides to murder Dickie and assume his identity. When the two set sail in a small rented boat, Ripley beats him to death with an oar, dumps his anchor-weighted body into the water, and scuttles the boat.

            Ripley assumes Dickie's identity, living off the latter's trust fund and carefully providing communications to Marge to assure her that Dickie has dumped her. Ripley forges checks and changes his appearance to better resemble Dickie in order to continue the lavish lifestyle he has enjoyed. Freddie Miles, an old friend of Dickie's from Dickie's same social set, encounters Ripley at what he supposes to be Dickie's apartment in Rome; he soon suspects something is wrong. When Miles finally confronts him, Ripley kills him with a stone bust found in his presumed apartment. He later disposes of the body on the outskirts of Rome, attempting to make the police believe that robbers have murdered Miles.

            Ripley enters a cat-and-mouse game with the Italian police but manages to keep himself safe by restoring his own identity and moving to Venice. In succession, Marge, Dickie's father, and an American private detective confront Ripley, who suggests to them that Dickie was depressed and may have committed suicide. Marge stays for a while at Ripley's rented house in Venice. When she discovers Dickie's rings in Ripley's possession, she seems to be on the verge of realizing the truth. Panicked, Ripley contemplates murdering Marge, but she is saved when she says that if Dickie gave his rings to Ripley, then he probably meant to kill himself.

            The story concludes with Ripley traveling to Greece and resigning himself to eventually getting caught. However, he discovers that the Greenleaf family has accepted that Dickie is dead and that they have transferred his inheritance to Ripley – in accordance with a will forged by Ripley on Dickie's Hermes typewriter. Though Marge is still holding to the idea that Tom Ripley killed Dickie, she is brushed aside as the angry "widow" (they are not yet married), and all of her accusations are dismissed by Dickie's father and the private investigator he hired. While the book ends with Ripley happily rich, it also suggests that he may forever be dogged by paranoia. In one of the final paragraphs, he nervously envisions a group of police officers waiting to arrest him, and Highsmith leaves her protagonist wondering, "...was he going to see policemen waiting for him on every pier that he ever approached?"`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t18",
        ['c6'],
        "The Thursday Murder Club",
        "Free Shipping",
        "75$",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582287740l/46016436._SY475_.jpg",
        " no comments",
        " 58x 234 x 157 (W*H*L)",
        [
            `The Thursday Murder Club is the debut novel by Pointless and House of Games presenter Richard Osman. It was published on 3 September 2020 by Viking Press, a subsidiary of Penguin Random House.
            A group of pensioners (Elizabeth, a former intelligence agent; Ron, a former trade unionist; Joyce, a former nurse; and Ibrahim, a former psychiatrist)[1] set about solving the mystery of the murder of a property developer in the luxurious Cooper's Chase retirement village in Kent.`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t19",
        ['c6'],
        "In the Woods",
        "Free Shipping",
        "75$",
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1431/9780143113492.jpg",
        " Very scary very mystirous there into the Forest but this it how should to be a mystery book - lena philip 5 stars from 5 ",
        " 5.12 x 1.73 x 7.8 inches",
        [
            `In the Woods is a 2007 mystery novel by Tana French about a pair of Irish detectives and their investigation of the murder of a twelve-year-old girl.
             It is the first book in French's Dublin Murder Squad series.
              The novel won several awards such as the 2008 Edgar Award for Best First Novel by an American Author,
               the 2008 Barry Award for Best First Novel,[3] the 2008 Macavity Award for Best First Mystery Novel, and the 2008 Anthony Award for Best First Novel.
                In the Woods and The Likeness, the second book of the Dublin Murder Squad series,
                 are the inspiration for the BBC and Starz's 2019 Dublin Murders, an eight-episode series.`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t20",
        ['c6'],
        "The Wife Between Us",
        "Free Shipping",
        "75$",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1513300706l/37538890._SY475_.jpg",
        "The Wife is a Wonderful thing evrebody should have One :)) but the book not so intersting but i give 3.7 stars from 5",
        "4.10(w) x 7.30(h) x 1.30(d)",
        [
            `The New York Times wrote "The novel is halfway over before the first reveal, but it’s worth the wait, if only for its singularity. Then the twists come fast and furious."[1]

            Vanessa is watching her ex husband's new fiancée. She lives with her aunt in New York City and is working at a clothing store to get by after her divorce from Richard. Nellie is Richard's new fiancée, a pre-school teacher. We learn that Vanessa and Nellie are the same person (Vanessa being her present self, and Nellie being her past self). It was Richard's idea to give Vanessa the nickname Nellie, because when they first met, she was a "nervous nellie."
            
            Part two starts with what happened between Vanessa and Richard. Richard started gas-lighting and abusing Vanessa, cutting her off from friends and family. She starts seeing a therapist, who points out that Vanessa needs to leave. However, Vanessa knows Richard will not let her go and that he needs to decide to divorce her himself. She sets Richard up with his assistant, Emma, and the two begin an affair. Vanessa is finally free of her abusive marriage only to find out that Richard intends on marrying Emma. To save her, Vanessa tells Emma Richard's reality but Emma does not believe her. Emma tells Richard, who confronts Vanessa. Vanessa tells Emma the first signs she saw of him controlling her. Emma then realizes she is being manipulated by Richard and agrees to leave him.
            
            This leads to a explosive fight between Richard and Vanessa. Richard attempts to strangle her before Emma and Richard's sister, Maureen, intervene. Flash-forward, Richard is in a psych ward. Vanessa visits him only to find Maureen there; she seems to think there is something going on between the two. Vanessa tells her therapist she can finally move on. It is revealed that Vanessa's therapist is Richard's other ex wife, who he threw down a flight of stairs. All three women are connected by their experiences.`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t21",
        ['c5'],
        "On the Origin of Species",
        "Free Shipping",
        "65$",
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8485/9781848588790.jpg",
        "Wonderful book about wonderful species of diffrent Orgin animals- Meni Levi 5 stars from 5",
        "4.25 x 0.91 x 6.8 inches",
        [
            ` Charles Darwin's classic that exploded into public controversy, 
            revolutionized the course of science, and continues to transform our views of the world.
             Few other books have created such a lasting storm of controversy as The Origin of Species. 
             Darwin's theory that species derive from other species by a gradual evolutionary process and that the average level of each species is heightened by the "survival of the fittest" stirred up popular debate to fever pitch. Its acceptance revolutionized the course of science.
              As Sir Julian Huxley, the noted biologist, points out in his illuminating introduction, the importance of Darwin's contribution to modern scientific knowledge is almost impossible to evaluate: "a truly great book, one which can still be read with profit by professional biologist." Includes an Introduction by Sir Julian Huxley`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t22",
        ['c5'],
        "The Brain",
        "Free Shipping",
        "65$",
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4736/9781473629370.jpg",
        "Reading about how does the brain Workes is very interesting to me - Jhon Lenon 5 4.5 stars from 5",
        "no Information",
        [
            ` Congratulations! You're the proud owner of the most complex information processing device in the known universe. The human brain comes equipped with all sorts of useful design features, but also many bugs and weaknesses. Problem is you don't get an owner's manual. You have to just plug and play.

            As a result, most of us never properly understand how our brains work and what they're truly capable of. We fail get the best out of them, ignore some of their most useful features and struggle to overcome their design faults.
            
            Featuring witty essays and fascinating 'try this at home' experiments, New Scientist take you on a journey through intelligence, memory, creativity, the unconscious and beyond. From the strange ways to distort what we think of as 'reality' to the brain hacks that can improve memory, The Brain: A User's Guide will help you understand your brain and show you how to use it to its full potential.`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t23",
        ['c5'],
        "The Science of the Ocean : The Secrets of the Seas",
        "Free Shipping",
        "65$",
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2414/9780241415252.jpg",
        "like Diving under the Deep Sea - Vadim Lohov 5 stars from 5",
        "12.13 x 1.1 x 10.24 inches",
        [
            `Dive into this uniquely elegant visual exploration of the sea

            An informative and utterly beautiful introduction to marine life and the ocean environment, The Science of the Ocean book brings the riches of the underwater world onto the printed page.
            
            Astounding photography reveals an abundance of life, from microscopic plankton to great whales, seaweed to starfish. Published in association with the Natural History Museum, the book explores every corner of the oceans, from coral reefs and mangrove swamps to deep ocean trenches.
            
            Along the way, and with the help of clear, simple illustrations, it explains how life has adapted to the marine environment, revealing for example how a stonefish delivers its lethal venom and how a sponge sustains itself by sifting food from passing currents. It also examines the physical forces and processes that shape the oceans, from global circulation systems and tides to undersea volcanoes and tsunamis.
            
            To most of us, the marine world is out of reach. But with the help of photography and the latest technology, The Science of the Ocean brings us up close to animals, plants, and other living things that inhabit a fantastic and almost incomprehensibly beautiful other dimension.`
        ],
        true,
        false,
        true,
        true
    ),

    new Book(
        "t24",
        ['c5'],
        "The Selfish Gene",
        "Free Shipping",
        "65$",
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1987/9780198788607.jpg",
        "i D'ont like Selfish Books like pepole- Anonymus 0 stars from 5",
        "5.10(w) x 7.50(h) x 1.60(d)",
        [
            ` The million copy international bestseller, critically acclaimed and translated into over 25 languages.

            As influential today as when it was first published, The Selfish Gene has become a classic exposition of evolutionary thought. Professor Dawkins articulates a gene's eye view of evolution - a view giving centre stage to these persistent units of information, and in which organisms can be seen as vehicles for their replication. This imaginative, powerful, and stylistically brilliant work not only brought the insights of Neo-Darwinism to a wide audience, but galvanized the biology
            community, generating much debate and stimulating whole new areas of research. Forty years later, its insights remain as relevant today as on the day it was published.
            
            This 40th anniversary edition includes a new epilogue from the author discussing the continuing relevance of these ideas in evolutionary biology today, as well as the original prefaces and foreword, and extracts from early reviews.
            
            Oxford Landmark Science books are 'must-read' classics of modern science writing which have crystallized big ideas, and shaped the way we think.`
        ],
        true,
        false,
        true,
        true
    ),



   
];

