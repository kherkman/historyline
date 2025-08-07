document.addEventListener('DOMContentLoaded', function() {
    const scientists = [
        {
            name: "Pythagoras",
            dates: "c. 570–c. 495 BC",
            description: "Pythagoras of Samos was an ancient Ionian Greek philosopher, polymath and the eponymous founder of Pythagoreanism.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kapitolinischer_Pythagoras_adjusted.jpg/220px-Kapitolinischer_Pythagoras_adjusted.jpg",
            wiki: "https://en.wikipedia.org/wiki/Pythagoras",
            start: -570,
            end: -495
        },
        {
            name: "Archimedes",
            dates: "c. 287–c. 212 BC",
            description: "Archimedes of Syracuse was a Greek mathematician, physicist, engineer, astronomer, and inventor from the ancient city of Syracuse in Sicily.",
            img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Domenico-Fetti_Archimedes_1620.jpg",
            wiki: "https://en.wikipedia.org/wiki/Archimedes",
            start: -287,
            end: -212
        },
        {
            name: "Ptolemy",
            displayName: "Claudius Ptolemy",
            dates: "c. 100-170 AD",
            description: "Claudius Ptolemy was a Greek mathematician, astronomer, geographer and astrologer.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ptolemy-Map-of-the-World-15th-century-transparent.png/220px-Ptolemy-Map-of-the-World-15th-century-transparent.png",
            wiki: "https://en.wikipedia.org/wiki/Ptolemy",
            start: 90,
            end: 168
        },
        {
            name: "Aryabhata",
            displayName: "Aryabhata",
            dates: "476–550 AD",
            description: "Aryabhata was an Indian mathematician and astronomer of the classical age of Indian mathematics and Indian astronomy.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Aryabhata_-_statue_at_IUCAA%2C_Pune.JPG/220px-Aryabhata_-_statue_at_IUCAA%2C_Pune.JPG",
            wiki: "https://en.wikipedia.org/wiki/Aryabhata",
            start: 476,
            end: 550
        },
        {
            name: "Al-Khwarizmi",
            displayName: "Al-Khwarizmi",
            dates: "c. 780–c. 850",
            description: "Muhammad ibn Musa al-Khwarizmi was a Persian polymath who produced vastly influential works in mathematics, astronomy, and geography.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Khwarizmi_postcard.jpg/220px-Khwarizmi_postcard.jpg",
            wiki: "https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi",
            start: 780,
            end: 850
        },
        {
            name: "Alhazen",
            displayName: "Alhazen",
            dates: "c. 965–c. 1040",
            description: "Ibn al-Haytham, known in the West as Alhazen, was an Arab mathematician, astronomer, and physicist of the Islamic Golden Age.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ibn_al-Haytham.jpg/220px-Ibn_al-Haytham.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ibn_al-Haytham",
            start: 965,
            end: 1040
        },
        {
            name: "da Vinci",
            displayName: "Leonardo da Vinci",
            dates: "1452–1519",
            description: "Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.",
            img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png",
            wiki: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
            start: 1452,
            end: 1519
        },
        {
            name: "Galileo",
            displayName: "Galileo Galilei",
            dates: "1564–1642",
            description: "Galileo di Vincenzo Bonaiuti de' Galilei was an Italian astronomer, physicist and engineer, whose work is considered to be a major breakthrough of the Scientific Revolution.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/220px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
            wiki: "https://en.wikipedia.org/wiki/Galileo_Galilei",
            start: 1564,
            end: 1642
        },
        {
            name: "Newton",
            displayName: "Isaac Newton",
            dates: "1643–1727",
            description: "Sir Isaac Newton was an English polymath active as a mathematician, physicist, astronomer, alchemist, theologian, and author.",
            img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
            wiki: "https://en.wikipedia.org/wiki/Isaac_Newton",
            start: 1643,
            end: 1727
        },
        {
            name: "Darwin",
            displayName: "Charles Darwin",
            dates: "1809–1882",
            description: "Charles Robert Darwin was an English naturalist, geologist and biologist, widely known for his contributions to evolutionary biology.",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charles_Darwin_seated_crop.jpg",
            wiki: "https://en.wikipedia.org/wiki/Charles_Darwin",
            start: 1809,
            end: 1882
        },
        {
            name: "Curie",
            displayName: "Marie Curie",
            dates: "1867–1934",
            description: "Marie Skłodowska Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920.jpg/220px-Marie_Curie_c._1920.jpg",
            wiki: "https://en.wikipedia.org/wiki/Marie_Curie",
            start: 1867,
            end: 1934
        },
        {
            name: "Einstein",
            displayName: "Albert Einstein",
            dates: "1879–1955",
            description: "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest and most influential physicists of all time.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            wiki: "https://en.wikipedia.org/wiki/Albert_Einstein",
            start: 1879,
            end: 1955
        },
        {
            name: "Hypatia",
            displayName: "Hypatia",
            dates: "c. 350–370–415 AD",
            description: "Hypatia was a Greek mathematician, astronomer, and philosopher in Alexandria, Egypt, then part of the Eastern Roman Empire. She was the head of the Neoplatonic school at Alexandria, where she taught philosophy and astronomy. [7]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hypatia_-_la_filosofa_de_Alejandr%C3%ADa.jpg/220px-Hypatia_-_la_filosofa_de_Alejandr%C3%ADa.jpg",
            wiki: "https://en.wikipedia.org/wiki/Hypatia",
            start: 350,
            end: 415
        },
        {
            name: "Imhotep",
            displayName: "Imhotep",
            dates: "c. 2667–2600 BC",
            description: "An Egyptian polymath, Imhotep is considered the first physician, engineer, and architect in recorded history. [11, 13] His medical practices were based on a scientific approach, devoid of magical thinking. [11] While no writings of his are known to exist, the Edwin Smith Papyrus, a text with a rational and scientific approach to medicine, has been attributed to him. [11]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Imhotep-Louvre.JPG/220px-Imhotep-Louvre.JPG",
            wiki: "https://en.wikipedia.org/wiki/Imhotep",
            start: -2667,
            end: -2600
        },
        {
            name: "Hesy-Ra",
            displayName: "Hesy-Ra",
            dates: "fl. c. 2600 BC",
            description: "Hesy-Ra was an ancient Egyptian official who is recognized as the earliest known physician. He held the title 'Chief of Dentists and Physicians' to King Djoser in the 27th century BC. [12, 14]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hesy-Ra_relief_detail.jpg/220px-Hesy-Ra_relief_detail.jpg",
            wiki: "https://en.wikipedia.org/wiki/Hesy-Ra",
            start: -2650,
            end: -2600
        },
        {
            name: "Naburimannu",
            displayName: "Naburimannu",
            dates: "fl. c. 1800-1600 BC",
            description: "A Babylonian astronomer and mathematician, Naburimannu is credited by some with the creation of 'System A,' a set of rules for calculating the positions of the moon, sun, and planets. This system utilized step functions to represent the varying speeds of these celestial bodies across the zodiac.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Astronomical_cuneiform_tablet_WA_41002.jpg/220px-Astronomical_cuneiform_tablet_WA_41002.jpg",
            wiki: "https://en.wikipedia.org/wiki/Nabu-rimanni",
            start: -1800,
            end: -1600
        },
        {
            name: "Kidinnu",
            displayName: "Kidinnu",
            dates: "fl. c. 1400 BC",
            description: "A Chaldean astronomer and mathematician, Kidinnu is believed by many to be the creator of 'System B,' a more advanced method for predicting lunar and planetary positions. [9] This system treated the celestial bodies' changing speeds as a value that increased and decreased in a regular pattern. [9]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Babylonian_astronomy_tablet.jpg/220px-Babylonian_astronomy_tablet.jpg",
            wiki: "https://en.wikipedia.org/wiki/Kidinnu",
            start: -1400,
            end: -1300
        },
        {
            name: "Brahmagupta",
            displayName: "Brahmagupta",
            dates: "c. 598–c. 668 AD",
            description: "Brahmagupta was an Indian mathematician and astronomer. He is the author of two early works on mathematics and astronomy: the Brāhmasphuṭasiddhānta, a theoretical treatise, and the Khaṇḍakhādyaka, a more practical text. He was the first to give rules for computing with zero. [5, 8]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Brahmagupta.jpg/220px-Brahmagupta.jpg",
            wiki: "https://en.wikipedia.org/wiki/Brahmagupta",
            start: 598,
            end: 668
        },
        {
            name: "Bhaskara I",
            displayName: "Bhaskara I",
            dates: "c. 600 – c. 680 AD",
            description: "Bhaskara I was a 7th-century Indian mathematician and astronomer who was the first to write numbers in the Hindu decimal system with a circle for the zero, and who gave a unique and remarkable rational approximation of the sine function in his commentary on Aryabhata's work. [5, 8]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bhaskara_I_statue.jpg/220px-Bhaskara_I_statue.jpg",
            wiki: "https://en.wikipedia.org/wiki/Bhaskara_I",
            start: 600,
            end: 680
        },
        {
            name: "Al-Kindi",
            displayName: "Al-Kindi",
            dates: "c. 801–c. 873",
            description: "Al-Kindi was an Arab philosopher, polymath, mathematician, physician and musician. Al-Kindi was the first of the Islamic peripatetic philosophers, and is hailed as the 'father of Islamic philosophy'. He was a pioneer in psychotherapy and music therapy. [1, 13]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Al_Kindi.jpg/220px-Al_Kindi.jpg",
            wiki: "https://en.wikipedia.org/wiki/Al-Kindi",
            start: 801,
            end: 873
        },
        {
            name: "Al-Battani",
            displayName: "Al-Battani",
            dates: "c. 858–929",
            description: "Al-Battani was an Arab astronomer, and mathematician. He made a number of important contributions to astronomy, including the determination of the solar year as being 365 days, 5 hours, 46 minutes and 24 seconds, which is very close to the latest-accepted value. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Albategnius.jpg/220px-Albategnius.jpg",
            wiki: "https://en.wikipedia.org/wiki/Al-Battani",
            start: 858,
            end: 929
        },
        {
            name: "Al-Zahrawi",
            displayName: "Al-Zahrawi (Abulcasis)",
            dates: "936–1013",
            description: "Al-Zahrawi, known in the West as Abulcasis, was an Arab physician, surgeon and chemist from Al-Andalus. He is considered the greatest surgeon of the Middle Ages, and has been described as the father of surgery. [24]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Al-Zahrawi_-_Abulcasis.jpg/220px-Al-Zahrawi_-_Abulcasis.jpg",
            wiki: "https://en.wikipedia.org/wiki/Al-Zahrawi",
            start: 936,
            end: 1013
        },
        {
            name: "Robert Grosseteste",
            displayName: "Robert Grosseteste",
            dates: "c. 1175–1253",
            description: "Robert Grosseteste was an English statesman, scholastic philosopher, theologian, scientist and Bishop of Lincoln. He is considered the founder of scientific thought in Oxford and was a key figure in the English intellectual movement in the first half of the 13th century. [1, 15, 17]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Robert_Grosseteste.jpg/220px-Robert_Grosseteste.jpg",
            wiki: "https://en.wikipedia.org/wiki/Robert_Grosseteste",
            start: 1175,
            end: 1253
        },
        {
            name: "Albertus Magnus",
            displayName: "Albertus Magnus",
            dates: "c. 1200–1280",
            description: "Albertus Magnus was a German Catholic Dominican friar and bishop who was a key figure in introducing Greek and Islamic science into medieval universities. He was known for his vast knowledge and his defense of the peaceful coexistence of science and religion. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Albertus_Magnus_in_fresco_by_Tommaso_da_Modena_1352.jpg/220px-Albertus_Magnus_in_fresco_by_Tommaso_da_Modena_1352.jpg",
            wiki: "https://en.wikipedia.org/wiki/Albertus_Magnus",
            start: 1200,
            end: 1280
        },
        {
            name: "Roger Bacon",
            displayName: "Roger Bacon",
            dates: "c. 1220–c. 1292",
            description: "Roger Bacon was an English philosopher and Franciscan friar who placed considerable emphasis on the empirical study of nature. [3, 11] He is considered one of the earliest advocates of the modern scientific method and his work in optics was particularly noteworthy. [3, 11, 15]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Roger-bacon-statue-oxford.jpg/220px-Roger-bacon-statue-oxford.jpg",
            wiki: "https://en.wikipedia.org/wiki/Roger_Bacon",
            start: 1220,
            end: 1292
        },
        {
            name: "Ramon Llull",
            displayName: "Ramon Llull",
            dates: "c. 1232–c. 1315",
            description: "Ramon Llull was a mathematician, philosopher, and writer from the Kingdom of Majorca. He is credited with writing the first major work of Catalan literature and is considered a pioneer of computation theory.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ramon_Llull_-_Portrait_by_Post.jpg/220px-Ramon_Llull_-_Portrait_by_Post.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ramon_Llull",
            start: 1232,
            end: 1315
        },
        {
            name: "Theodoric of Freiberg",
            displayName: "Theodoric of Freiberg",
            dates: "c. 1250–c. 1310",
            description: "Theodoric of Freiberg was a German Dominican monk, a physicist and theologian. He was one of the first to give a correct geometrical analysis of the rainbow, which he supported with experimental evidence using a spherical flask. [18]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Theodoric_of_Freiberg_Manuscript_Illumination.jpg/220px-Theodoric_of_Freiberg_Manuscript_Illumination.jpg",
            wiki: "https://en.wikipedia.org/wiki/Theodoric_of_Freiberg",
            start: 1250,
            end: 1310
        },
        {
            name: "William of Ockham",
            displayName: "William of Ockham",
            dates: "c. 1287–1347",
            description: "William of Ockham was an English Franciscan friar, scholastic philosopher, and theologian. He is best known for the principle of parsimony known as Ockham's Razor, which is a fundamental concept in modern science. [3, 17]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/William_of_Ockham.png/220px-William_of_Ockham.png",
            wiki: "https://en.wikipedia.org/wiki/William_of_Ockham",
            start: 1287,
            end: 1347
        },
        {
            name: "Nicole Oresme",
            displayName: "Nicole Oresme",
            dates: "c. 1320–1382",
            description: "Nicole Oresme was a significant philosopher of the later Middle Ages. He wrote influential works on economics, mathematics, physics, astronomy, and theology, and was one of the most original thinkers of the 14th century. [1, 9, 11]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nicole_Oresme_et_le_roi_Charles_V.jpg/220px-Nicole_Oresme_et_le_roi_Charles_V.jpg",
            wiki: "https://en.wikipedia.org/wiki/Nicole_Oresme",
            start: 1320,
            end: 1382
        },
        {
            name: "Copernicus",
            displayName: "Nicolaus Copernicus",
            dates: "1473–1543",
            description: "A Renaissance-era mathematician and astronomer, Nicolaus Copernicus formulated a model of the universe that placed the Sun rather than Earth at the center. [1, 3] This heliocentric model marked a major event in the history of science, triggering the Copernican Revolution. [2, 11]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nikolaus_Kopernikus.jpg/220px-Nikolaus_Kopernikus.jpg",
            wiki: "https://en.wikipedia.org/wiki/Nicolaus_Copernicus",
            start: 1473,
            end: 1543
        },
        {
            name: "Paracelsus",
            displayName: "Paracelsus",
            dates: "1493–1541",
            description: "A Swiss physician, alchemist, and astrologer of the German Renaissance, Paracelsus was a pioneer in several aspects of the 'medical revolution' of the Renaissance, emphasizing the value of observation in combination with received wisdom. He is also credited for giving zinc its name.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Paracelsus.jpg/220px-Paracelsus.jpg",
            wiki: "https://en.wikipedia.org/wiki/Paracelsus",
            start: 1493,
            end: 1541
        },
        {
            name: "Tycho Brahe",
            displayName: "Tycho Brahe",
            dates: "1546–1601",
            description: "A Danish astronomer, writer, and nobleman known for his accurate and comprehensive astronomical observations. His observations were some of the most accurate of his time and were instrumental in the development of Kepler's laws of planetary motion. [5, 10, 11]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tycho_Brahe.JPG/220px-Tycho_Brahe.JPG",
            wiki: "https://en.wikipedia.org/wiki/Tycho_Brahe",
            start: 1546,
            end: 1601
        },
        {
            name: "Francis Bacon",
            displayName: "Francis Bacon",
            dates: "1561–1626",
            description: "An English philosopher and statesman who served as Attorney General and as Lord Chancellor of England. His works are credited with developing the scientific method and remained influential through the scientific revolution. [14]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Francis_Bacon_by_Frans_Pourbus_the_Younger.jpg/220px-Francis_Bacon_by_Frans_Pourbus_the_Younger.jpg",
            wiki: "https://en.wikipedia.org/wiki/Francis_Bacon",
            start: 1561,
            end: 1626
        },
        {
            name: "Johannes Kepler",
            displayName: "Johannes Kepler",
            dates: "1571–1630",
            description: "A German astronomer, mathematician, and astrologer. A key figure in the 17th-century scientific revolution, he is best known for his laws of planetary motion, which were foundational for Isaac Newton's theory of universal gravitation. [3, 7, 8]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Johannes_Kepler_1610.jpg/220px-Johannes_Kepler_1610.jpg",
            wiki: "https://en.wikipedia.org/wiki/Johannes_Kepler",
            start: 1571,
            end: 1630
        },
        {
            name: "William Harvey",
            displayName: "William Harvey",
            dates: "1578–1657",
            description: "An English physician who made seminal contributions in anatomy and physiology. He was the first known physician to describe completely, and in detail, the systemic circulation and properties of blood being pumped to the brain and body by the heart. [5, 7]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/William_Harvey_2.jpg/220px-William_Harvey_2.jpg",
            wiki: "https://en.wikipedia.org/wiki/William_Harvey",
            start: 1578,
            end: 1657
        },
        {
            name: "Robert Boyle",
            displayName: "Robert Boyle",
            dates: "1627–1691",
            description: "An Anglo-Irish natural philosopher, chemist, physicist, and inventor. Boyle is largely regarded today as the first modern chemist, and therefore one of the founders of modern chemistry, and one of the pioneers of modern experimental scientific method.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Robert_Boyle_0001.jpg/220px-Robert_Boyle_0001.jpg",
            wiki: "https://en.wikipedia.org/wiki/Robert_Boyle",
            start: 1627,
            end: 1691
        },
        {
            name: "Robert Hooke",
            displayName: "Robert Hooke",
            dates: "1635–1703",
            description: "An English scientist and architect, Robert Hooke was a polymath who made significant contributions to mechanics, microscopy, and biology. He is known for his law of elasticity (Hooke's Law) and for being the first person to use the word 'cell' to describe the basic unit of life.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Robert_Hooke_portrait.jpg/220px-Robert_Hooke_portrait.jpg",
            wiki: "https://en.wikipedia.org/wiki/Robert_Hooke",
            start: 1635,
            end: 1703
        },
        {
            name: "Antonie van Leeuwenhoek",
            displayName: "Antonie van Leeuwenhoek",
            dates: "1632–1723",
            description: "A Dutch businessman and scientist, Antonie van Leeuwenhoek is known as 'the Father of Microbiology'. He was the first to observe and describe single-celled organisms, which he originally referred to as 'animalcules'.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jan_Verkolje_-_Antonie_van_Leeuwenhoek.jpg/220px-Jan_Verkolje_-_Antonie_van_Leeuwenhoek.jpg",
            wiki: "https://en.wikipedia.org/wiki/Antonie_van_Leeuwenhoek",
            start: 1632,
            end: 1723
        },
        {
            name: "Gottfried Wilhelm Leibniz",
            displayName: "Gottfried Wilhelm Leibniz",
            dates: "1646–1716",
            description: "A German polymath, Gottfried Wilhelm Leibniz was a prominent figure in the history of mathematics and philosophy. He independently developed calculus and made significant contributions to physics, technology, and library science.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gottfried_Wilhelm_von_Leibniz_by_Christoph_Bernhard_Francke.jpg/220px-Gottfried_Wilhelm_von_Leibniz_by_Christoph_Bernhard_Francke.jpg",
            wiki: "https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz",
            start: 1646,
            end: 1716
        },
        {
            name: "Carl Linnaeus",
            displayName: "Carl Linnaeus",
            dates: "1707–1778",
            description: "A Swedish botanist, zoologist, and physician, Carl Linnaeus formalized binomial nomenclature, the modern system of naming organisms. He is known as the 'father of modern taxonomy'.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Carl_von_Linné.jpg/220px-Carl_von_Linné.jpg",
            wiki: "https://en.wikipedia.org/wiki/Carl_Linnaeus",
            start: 1707,
            end: 1778
        },
        {
            name: "Leonhard Euler",
            displayName: "Leonhard Euler",
            dates: "1707–1783",
            description: "A Swiss mathematician, physicist, astronomer, geographer, logician, and engineer, Leonhard Euler made profound and influential discoveries in many branches of mathematics, such as infinitesimal calculus and graph theory.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Leonhard_Euler.jpg/220px-Leonhard_Euler.jpg",
            wiki: "https://en.wikipedia.org/wiki/Leonhard_Euler",
            start: 1707,
            end: 1783
        },
        {
            name: "Henry Cavendish",
            displayName: "Henry Cavendish",
            dates: "1731–1810",
            description: "A British natural philosopher, scientist, and an important experimental and theoretical chemist and physicist. Cavendish is noted for his discovery of hydrogen or what he called 'inflammable air'.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Henry_Cavendish_by_George_Wilson.jpg/220px-Henry_Cavendish_by_George_Wilson.jpg",
            wiki: "https://en.wikipedia.org/wiki/Henry_Cavendish",
            start: 1731,
            end: 1810
        },
        {
            name: "Joseph Priestley",
            displayName: "Joseph Priestley",
            dates: "1733–1804",
            description: "An English chemist, natural philosopher, separatist theologian, grammarian, multi-subject educator, and liberal political theorist who published over 150 works. He is credited with the discovery of oxygen.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Joseph_Priestley_by_Gilbert_Stuart_1803-04.jpg/220px-Joseph_Priestley_by_Gilbert_Stuart_1803-04.jpg",
            wiki: "https://en.wikipedia.org/wiki/Joseph_Priestley",
            start: 1733,
            end: 1804
        },
        {
            name: "James Hutton",
            displayName: "James Hutton",
            dates: "1726–1797",
            description: "A Scottish geologist, physician, chemical manufacturer, naturalist, and experimental agriculturist. He is considered the 'Father of Modern Geology' and originated the theory of uniformitarianism.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/James_Hutton_by_Henry_Raeburn.jpg/220px-James_Hutton_by_Henry_Raeburn.jpg",
            wiki: "https://en.wikipedia.org/wiki/James_Hutton",
            start: 1726,
            end: 1797
        },
        {
            name: "William Herschel",
            displayName: "William Herschel",
            dates: "1738–1822",
            description: "A German-born British astronomer, composer and brother of Caroline Herschel. He is most famous for his discovery of the planet Uranus and its two major moons. He also discovered infrared radiation.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/William_Herschel_by_Lemuel_Francis_Abbott.jpg/220px-William_Herschel_by_Lemuel_Francis_Abbott.jpg",
            wiki: "https://en.wikipedia.org/wiki/William_Herschel",
            start: 1738,
            end: 1822
        },
        {
            name: "Edward Jenner",
            displayName: "Edward Jenner",
            dates: "1749–1823",
            description: "An English physician and scientist who was the pioneer of the smallpox vaccine, the world's first vaccine. He is considered the 'father of immunology'.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Edward_Jenner_by_James_Northcote.jpg/220px-Edward_Jenner_by_James_Northcote.jpg",
            wiki: "https://en.wikipedia.org/wiki/Edward_Jenner",
            start: 1749,
            end: 1823
        },
        {
            name: "Christiaan Huygens",
            displayName: "Christiaan Huygens",
            dates: "1629–1695",
            description: "A Dutch mathematician, physicist, astronomer and inventor, who is widely regarded as one of the greatest scientists of all time and a major figure in the scientific revolution. Among his many achievements, he invented the pendulum clock and was the first to describe Saturn's rings.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Christiaan_Huygens_by_Caspar_Netscher.jpg/220px-Christiaan_Huygens_by_Caspar_Netscher.jpg",
            wiki: "https://en.wikipedia.org/wiki/Christiaan_Huygens",
            start: 1629,
            end: 1695
        },
        {
            name: "Euclid",
            displayName: "Euclid",
            dates: "fl. 300 BC",
            description: "Euclid, sometimes called Euclid of Alexandria, was a Greek mathematician, often referred to as the 'founder of geometry' or the 'father of geometry'. His Elements is one of the most influential works in the history of mathematics. [3, 4, 9, 10]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Euclid.jpg/220px-Euclid.jpg",
            wiki: "https://en.wikipedia.org/wiki/Euclid",
            start: -325,
            end: -265
        },
        {
            name: "Hippocrates",
            displayName: "Hippocrates",
            dates: "c. 460 – c. 370 BC",
            description: "Hippocrates of Kos was a Greek physician of the Age of Pericles, and is considered one of the most outstanding figures in the history of medicine. He is often referred to as the 'Father of Medicine'.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Hippocrates_Light.jpg/220px-Hippocrates_Light.jpg",
            wiki: "https://en.wikipedia.org/wiki/Hippocrates",
            start: -460,
            end: -370
        },
        {
            name: "Jabir ibn Hayyan",
            displayName: "Jabir ibn Hayyan",
            dates: "c. 721 – c. 815",
            description: "Jabir ibn Hayyan, known in Europe by the Latinized version of his name, Geber, was a polymath, chemist, alchemist, astronomer, astrologer, engineer, geographer, philosopher, physicist, pharmacist and physician. He has been described as the father of early chemistry. [5, 6, 11]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Codex_Ashburnhamensis_1166_Geber_philosopher.jpg/220px-Codex_Ashburnhamensis_1166_Geber_philosopher.jpg",
            wiki: "https://en.wikipedia.org/wiki/Jabir_ibn_Hayyan",
            start: 721,
            end: 815
        },
        {
            name: "Ibn Sina",
            displayName: "Ibn Sina (Avicenna)",
            dates: "c. 980 – 1037",
            description: "Ibn Sina, also known as Avicenna, was a Persian polymath who is regarded as one of the most significant physicians, astronomers, thinkers and writers of the Islamic Golden Age. His most famous works are The Book of Healing and The Canon of Medicine.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ibn_Sina_pencilling.jpg/220px-Ibn_Sina_pencilling.jpg",
            wiki: "https://en.wikipedia.org/wiki/Avicenna",
            start: 980,
            end: 1037
        },
        {
            name: "Fibonacci",
            displayName: "Leonardo Fibonacci",
            dates: "c. 1170 – c. 1250",
            description: "Leonardo of Pisa, most commonly known as Fibonacci, was an Italian mathematician, considered to be 'the most talented Western mathematician of the Middle Ages'. He is best known to the modern world for spreading the Hindu–Arabic numeral system in Europe and for a number sequence named the Fibonacci numbers.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Fibonacci.jpg/220px-Fibonacci.jpg",
            wiki: "https://en.wikipedia.org/wiki/Fibonacci",
            start: 1170,
            end: 1250
        },
        {
            name: "Lavoisier",
            displayName: "Antoine Lavoisier",
            dates: "1743–1794",
            description: "Antoine Lavoisier was a French nobleman and chemist who was central to the 18th-century chemical revolution and who had a large influence on both the history of chemistry and the history of biology. [7, 18, 31]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/David_-_Portrait_of_Antoine-Laurent_Lavoisier_and_His_Wife.jpg/220px-David_-_Portrait_of_Antoine-Laurent_Lavoisier_and_His_Wife.jpg",
            wiki: "https://en.wikipedia.org/wiki/Antoine_Lavoisier",
            start: 1743,
            end: 1794
        },
        {
            name: "Faraday",
            displayName: "Michael Faraday",
            dates: "1791–1867",
            description: "Michael Faraday was an English scientist who contributed to the study of electromagnetism and electrochemistry. [4, 24] His main discoveries include the principles underlying electromagnetic induction, diamagnetism and electrolysis. [4, 24]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/M_Faraday_Th_Phillips_oil_1842.jpg/220px-M_Faraday_Th_Phillips_oil_1842.jpg",
            wiki: "https://en.wikipedia.org/wiki/Michael_Faraday",
            start: 1791,
            end: 1867
        },
        {
            name: "Mendel",
            displayName: "Gregor Mendel",
            dates: "1822–1884",
            description: "Gregor Mendel was a botanist, teacher, and Augustinian prelate who was the first person to lay the mathematical foundation of the science of genetics. [14, 15, 26]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Gregor_Mendel.png/220px-Gregor_Mendel.png",
            wiki: "https://en.wikipedia.org/wiki/Gregor_Mendel",
            start: 1822,
            end: 1884
        },
        {
            name: "Pasteur",
            displayName: "Louis Pasteur",
            dates: "1822–1895",
            description: "Louis Pasteur was a French chemist and microbiologist renowned for his discoveries of the principles of vaccination, microbial fermentation and pasteurization. [3, 17, 25, 36]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Louis_Pasteur_by_Albert_Edelfelt_1885.jpg/220px-Louis_Pasteur_by_Albert_Edelfelt_1885.jpg",
            wiki: "https://en.wikipedia.org/wiki/Louis_Pasteur",
            start: 1822,
            end: 1895
        },
        {
            name: "Tesla",
            displayName: "Nikola Tesla",
            dates: "1856–1943",
            description: "Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system. [5, 30, 35]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/220px-N.Tesla.JPG",
            wiki: "https://en.wikipedia.org/wiki/Nikola_Tesla",
            start: 1856,
            end: 1943
        },
        {
            name: "Planck",
            displayName: "Max Planck",
            dates: "1858–1947",
            description: "Max Planck was a German theoretical physicist whose discovery of energy quanta won him the Nobel Prize in Physics in 1918. [2, 16, 20, 29]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Max_Planck_1901.jpg/220px-Max_Planck_1901.jpg",
            wiki: "https://en.wikipedia.org/wiki/Max_Planck",
            start: 1858,
            end: 1947
        },
        {
            name: "Bohr",
            displayName: "Niels Bohr",
            dates: "1885–1962",
            description: "Niels Bohr was a Danish physicist who made foundational contributions to understanding atomic structure and quantum theory, for which he received the Nobel Prize in Physics in 1922. [1, 19, 21, 22]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/220px-Niels_Bohr.jpg",
            wiki: "https://en.wikipedia.org/wiki/Niels_Bohr",
            start: 1885,
            end: 1962
        },
        {
            name: "Franklin",
            displayName: "Rosalind Franklin",
            dates: "1920–1958",
            description: "Rosalind Franklin was an English chemist and X-ray crystallographer whose work was central to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite. [6, 13, 28, 32, 39]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Rosalind_Franklin_with_a_microscope.jpg/220px-Rosalind_Franklin_with_a_microscope.jpg",
            wiki: "https://en.wikipedia.org/wiki/Rosalind_Franklin",
            start: 1920,
            end: 1958
        },
        {
            name: "Tim Berners-Lee",
            displayName: "Tim Berners-Lee",
            dates: "Born 1955",
            description: "Sir Timothy John Berners-Lee, also known as TimBL, is an English computer scientist best known as the inventor of the World Wide Web.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/220px-Sir_Tim_Berners-Lee_%28cropped%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
            start: 1955,
            end: 1999
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117100;

    scientists.forEach(scientist => {
        const leftPosition = `calc((${scientist.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${scientist.end - scientist.start}) / ${totalYearsVar} * 100%)`;
        const displayName = scientist.displayName || scientist.name;

        const itemHTML = `
            <div class="timeline-item scientists" style="left: ${leftPosition}; width: ${itemWidth};">
                <div class="permanent-name">${scientist.name}</div>
                <div class="lifespan" style="width: 100%;"></div>
                <div class="marker"></div>
                <div class="timeline-content">
                    <img src="${scientist.img}" alt="${displayName}">
                    <h3>${displayName}</h3>
                    <p>${scientist.description}</p>
                    <p class="dates">${scientist.dates}</p>
                    <div class="links">
                        <a href="${scientist.wiki}" target="_blank" class="link wiki-link">Wiki</a>
                    </div>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', itemHTML);
    });
});
