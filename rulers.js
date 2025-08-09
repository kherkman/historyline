document.addEventListener('DOMContentLoaded', function() {
    const rulers = [
        {
            name: "Alexander the Great",
            dates: "r. 336–323 BC",
            description: "Alexander III of Macedon, commonly known as Alexander the Great, was a king of the ancient Greek kingdom of Macedon.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexander_the_Great_mosaic.jpg/220px-Alexander_the_Great_mosaic.jpg",
            wiki: "https://en.wikipedia.org/wiki/Alexander_the_Great",
            start: -336,
            end: -323
        },
                {
            name: "Djoser",
            dates: "r. c. 2686–2649 BC",
            description: "Djoser was an ancient Egyptian pharaoh of the 3rd Dynasty during the Old Kingdom and the founder of this epoch. He is well known for his step pyramid at Saqqara.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cairo_Museum_Statue_of_Djoser.jpg/220px-Cairo_Museum_Statue_of_Djoser.jpg",
            wiki: "https://en.wikipedia.org/wiki/Djoser",
            start: -2686,
            end: -2649
        },
        {
            name: "Cyrus the Great",
            dates: "r. 559–530 BC",
            description: "Cyrus the Great was the founder of the Achaemenid Empire, the first Persian Empire.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pasargadae_-_Cyrus_the_Great_Tomb_-_panoramic_view.jpg/220px-Pasargadae_-_Cyrus_the_Great_Tomb_-_panoramic_view.jpg",
            wiki: "https://en.wikipedia.org/wiki/Cyrus_the_Great",
            start: -559,
            end: -530
        },
        {
            name: "Darius the Great",
            dates: "r. 522–486 BC",
            description: "Darius I, commonly known as Darius the Great, was the third Persian king of the Achaemenid Empire. He ruled the empire at its peak.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Darius_I_the_Great_Tomb_Relief.jpg/220px-Darius_I_the_Great_Tomb_Relief.jpg",
            wiki: "https://en.wikipedia.org/wiki/Darius_the_Great",
            start: -522,
            end: -486
        },
        {
            name: "Xerxes I",
            dates: "r. 486–465 BC",
            description: "Xerxes I, commonly known as Xerxes the Great, was the fourth King of Kings of the Achaemenid Empire. He is best known for his massive invasion of Greece.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Xerxes_I_-_Vase_of_Xerxes_I_-_National_Museum_of_Iran.jpg/220px-Xerxes_I_-_Vase_of_Xerxes_I_-_National_Museum_of_Iran.jpg",
            wiki: "https://en.wikipedia.org/wiki/Xerxes_I",
            start: -486,
            end: -465
        },
        {
            name: "Thutmose III",
            dates: "r. 1479–1425 BC",
            description: "Thutmose III was the sixth pharaoh of the Eighteenth Dynasty. During the first 22 years of his reign, he was co-regent with his stepmother, Hatshepsut.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Thutmose_III_in_the_Luxor_Museum-2.jpg/220px-Thutmose_III_in_the_Luxor_Museum-2.jpg",
            wiki: "https://en.wikipedia.org/wiki/Thutmose_III",
            start: -1479,
            end: -1425
        },
        {
            name: "Amenhotep III",
            dates: "r. c. 1388–1351 BC",
            description: "Amenhotep III was the ninth pharaoh of the Eighteenth Dynasty. His reign was a period of unprecedented prosperity and artistic splendor.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Colossi_of_Memnon_in_2017.jpg/220px-Colossi_of_Memnon_in_2017.jpg",
            wiki: "https://en.wikipedia.org/wiki/Amenhotep_III",
            start: -1388,
            end: -1351
        },
        {
            name: "Qin Shi Huang",
            dates: "r. 221–210 BC",
            description: "Qin Shi Huang was the founder of the Qin dynasty and the first emperor of a unified China.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Terracotta_Army_in_Xian.jpg/220px-Terracotta_Army_in_Xian.jpg",
            wiki: "https://en.wikipedia.org/wiki/Qin_Shi_Huang",
            start: -221,
            end: -210
        },
        {
            name: "Emperor Wu of Han",
            displayName: "Emperor Wu",
            dates: "r. 141–87 BC",
            description: "Emperor Wu was the seventh emperor of the Han dynasty of China, ruling for 54 years, a record not broken until the reign of the Kangxi Emperor more than 1,800 years later.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Han_Wudi.jpg/220px-Han_Wudi.jpg",
            wiki: "https://en.wikipedia.org/wiki/Emperor_Wu_of_Han",
            start: -141,
            end: -87
        },
        {
            name: "K'inich Janaab' Pakal",
            displayName: "Pakal the Great",
            dates: "r. 615–683",
            description: "K'inich Janaab' Pakal I, also known as Pacal the Great, was ajaw of the Maya city-state of Palenque. He was responsible for the construction of some of Palenque's most notable surviving inscriptions and monumental architecture.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sarcophagus_lid_of_Palenque_ruler_K'inich_Janaab'_Pakal.jpg/220px-Sarcophagus_lid_of_Palenque_ruler_K'inich_Janaab'_Pakal.jpg",
            wiki: "https://en.wikipedia.org/wiki/K'inich_Janaab'_Pakal",
            start: 615,
            end: 683
        },
        {
            name: "Yik'in Chan K'awiil",
            dates: "r. 734–c. 755",
            description: "Yik'in Chan K'awiil was a Mayan king of the city of Tikal. He was one of Tikal's most successful and expansionary rulers.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Tikal_Temple4_Lintel3_Drawing.jpg/220px-Tikal_Temple4_Lintel3_Drawing.jpg",
            wiki: "https://en.wikipedia.org/wiki/Yik%27in_Chan_K%27awiil",
            start: 734,
            end: 755
        },
        {
            name: "Emperor Taizong of Tang",
            displayName: "Emperor Taizong",
            dates: "r. 626–649",
            description: "Emperor Taizong was the second emperor of the Tang dynasty of China. His reign is regarded as a golden age of Chinese history and he is considered one of the greatest emperors in Chinese history.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Emperor_Taizong_of_Tang_in_Thirteen_Emperors_Scroll.jpg/220px-Emperor_Taizong_of_Tang_in_Thirteen_Emperors_Scroll.jpg",
            wiki: "https://en.wikipedia.org/wiki/Emperor_Taizong_of_Tang",
            start: 626,
            end: 649
        },
        {
            name: "Hongwu Emperor",
            displayName: "Zhu Yuanzhang",
            dates: "r. 1368–1398",
            description: "The Hongwu Emperor, personal name Zhu Yuanzhang, was the founding emperor of the Ming dynasty.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Portrait_of_the_Hongwu_Emperor.jpg/220px-Portrait_of_the_Hongwu_Emperor.jpg",
            wiki: "https://en.wikipedia.org/wiki/Hongwu_Emperor",
            start: 1368,
            end: 1398
        },
        {
            name: "Kangxi Emperor",
            displayName: "Kangxi",
            dates: "r. 1661–1722",
            description: "The Kangxi Emperor was the fourth emperor of the Qing dynasty, and the second Qing emperor to rule over China proper, reigning for 61 years, making him the longest-reigning Chinese emperor.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/The_Kangxi_Emperor_in_Court_Dress.jpg/220px-The_Kangxi_Emperor_in_Court_Dress.jpg",
            wiki: "https://en.wikipedia.org/wiki/Kangxi_Emperor",
            start: 1661,
            end: 1722
        },
                {
            name: "Narmer",
            dates: "r. c. 3100 BC",
            description: "Believed to be the successor to the predynastic Scorpion and/or Ka, he is considered by some to be the unifier of Egypt and founder of the First Dynasty, and therefore the first king of all Egypt.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Narmer_Palette.jpg/220px-Narmer_Palette.jpg",
            wiki: "https://en.wikipedia.org/wiki/Narmer",
            start: -3100,
            end: -3050
        },
        {
            name: "Sneferu",
            dates: "r. c. 2613–2589 BC",
            description: "Sneferu was the founding pharaoh of the Fourth Dynasty of Egypt during the Old Kingdom. He is credited with building three pyramids, including the Red Pyramid and the Bent Pyramid.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Red_Pyramid.jpg/220px-Red_Pyramid.jpg",
            wiki: "https://en.wikipedia.org/wiki/Sneferu",
            start: -2613,
            end: -2589
        },
        {
            name: "Menkaure",
            dates: "r. c. 2532–2503 BC",
            description: "Menkaure was an ancient Egyptian king (pharaoh) of the 4th dynasty during the Old Kingdom. He is well known for his pyramid tomb at Giza.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mykerinos_pyramid.jpg/220px-Mykerinos_pyramid.jpg",
            wiki: "https://en.wikipedia.org/wiki/Menkaure",
            start: -2532,
            end: -2503
        },
        {
            name: "Pepi II",
            dates: "r. c. 2278–2184 BC",
            description: "Pepi II Neferkare was a pharaoh of the Sixth Dynasty in Egypt's Old Kingdom who reigned from c. 2278 BC. His reign of 94 years is the longest of any monarch in history.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pepi_II_and_Ankhesenpepi_II_Brooklyn_Museum.jpg/220px-Pepi_II_and_Ankhesenpepi_II_Brooklyn_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Pepi_II_Neferkare",
            start: -2278,
            end: -2184
        },
        {
            name: "Ashurnasirpal II",
            dates: "r. 883–859 BC",
            description: "Ashurnasirpal II was king of Assyria from 883 to 859 BC. He was known for his military campaigns and the construction of a new capital at Kalhu (Nimrud).",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Relief_of_Ashurnasirpal_II-British_Museum.jpg/220px-Relief_of_Ashurnasirpal_II-British_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ashurnasirpal_II",
            start: -883,
            end: -859
        },
        {
            name: "Shalmaneser III",
            dates: "r. 859–824 BC",
            description: "Shalmaneser III was a king of the Neo-Assyrian Empire who reigned from 859 to 824 BC. His reign was marked by a series of campaigns against the eastern tribes, the Babylonians, and the nations of Mesopotamia and Syria.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Black_Obelisk_of_Shalmaneser_III_-_Jehu_bowing.jpg/220px-Black_Obelisk_of_Shalmaneser_III_-_Jehu_bowing.jpg",
            wiki: "https://en.wikipedia.org/wiki/Shalmaneser_III",
            start: -859,
            end: -824
        },
        {
            name: "Tiglath-Pileser III",
            dates: "r. 745–727 BC",
            description: "Tiglath-Pileser III was a prominent king of Assyria in the eighth century BC who introduced advanced civil, military, and political systems into the Neo-Assyrian Empire.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tiglath-Pileser_III_in_his_chariot.jpg/220px-Tiglath-Pileser_III_in_his_chariot.jpg",
            wiki: "https://en.wikipedia.org/wiki/Tiglath-Pileser_III",
            start: -745,
            end: -727
        },
        {
            name: "Sargon II",
            dates: "r. 722–705 BC",
            description: "Sargon II was a king of the Neo-Assyrian Empire. He was a son of Tiglath-Pileser III and is recognized as one of the most important Neo-Assyrian kings.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sargon_II_and_dignitary.jpg/220px-Sargon_II_and_dignitary.jpg",
            wiki: "https://en.wikipedia.org/wiki/Sargon_II",
            start: -722,
            end: -705
        },
        {
            name: "Sennacherib",
            dates: "r. 705–681 BC",
            description: "Sennacherib was the king of the Neo-Assyrian Empire from the death of his father Sargon II in 705 BC to his own death in 681 BC. He is known for his military campaigns, particularly against Babylon and Judah.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sennacherib_on_his_throne.jpg/220px-Sennacherib_on_his_throne.jpg",
            wiki: "https://en.wikipedia.org/wiki/Sennacherib",
            start: -705,
            end: -681
        },
        {
            name: "Ashurbanipal",
            dates: "r. 668–627 BC",
            description: "Ashurbanipal was the king of the Neo-Assyrian Empire from 668 to c. 627 BC, the son of Esarhaddon and the last strong king of the empire.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lion_Hunt_of_Ashurbanipal_in_the_British_Museum.jpg/220px-Lion_Hunt_of_Ashurbanipal_in_the_British_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ashurbanipal",
            start: -668,
            end: -627
        },
                {
            name: "Ur-Nammu",
            dates: "r. c. 2112–2095 BC",
            description: "The founder of the Third Dynasty of Ur, Ur-Nammu is credited with creating one of the oldest known law codes. [2, 18] He reunified much of southern Mesopotamia after the fall of the Akkadian Empire. [2, 3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Stele_of_Ur-Nammu_%28restored%29.jpg/220px-Stele_of_Ur-Nammu_%28restored%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ur-Nammu",
            start: -2112,
            end: -2095
        },
        {
            name: "Shulgi",
            dates: "r. c. 2094–2047 BC",
            description: "A king of the Third Dynasty of Ur, Shulgi's long reign was marked by the consolidation and centralization of the empire. He was deified during his lifetime, a practice established by earlier Akkadian rulers. [16]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shulgi_Louvre.jpg/220px-Shulgi_Louvre.jpg",
            wiki: "https://en.wikipedia.org/wiki/Shulgi",
            start: -2094,
            end: -2047
        },
        {
            name: "Sargon of Akkad",
            dates: "r. c. 2334–2279 BC",
            description: "Sargon of Akkad founded the Akkadian Empire, the first great empire in Mesopotamian history. [4, 6] His dynasty, including his sons Rimush and Manishtusu and his grandson Naram-Sin, ruled for 142 years. [4, 5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sargon_of_Akkad_and_his_royal_court.jpg/220px-Sargon_of_Akkad_and_his_royal_court.jpg",
            wiki: "https://en.wikipedia.org/wiki/Sargon_of_Akkad",
            start: -2334,
            end: -2279
        },
        {
            name: "Naram-Sin",
            dates: "r. c. 2254–2218 BC",
            description: "The grandson of Sargon, Naram-Sin's reign marked the peak of the Akkadian Empire. [4, 20] He was the first Mesopotamian king to be deified and was called the 'God of Akkad'. [6]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Victory_stele_of_Naram_Sin_from_Sippar_in_Mesopotamia_2250_BC_Louvre_Museum.jpg/220px-Victory_stele_of_Naram_Sin_from_Sippar_in_Mesopotamia_2250_BC_Louvre_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Naram-Sin_of_Akkad",
            start: -2254,
            end: -2218
        },
        {
            name: "Mentuhotep II",
            dates: "r. c. 2055–2004 BC",
            description: "Credited with reunifying Egypt after the tumultuous First Intermediate Period, Mentuhotep II is considered the founder of the Middle Kingdom. [7, 10] He moved the capital to Thebes and oversaw a cultural and architectural renaissance. [7, 10]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Statue_of_Mentuhotep_II_in_the_Egyptian_Museum.jpg/220px-Statue_of_Mentuhotep_II_in_the_Egyptian_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Mentuhotep_II",
            start: -2055,
            end: -2004
        },
        {
            name: "Senusret III",
            dates: "r. c. 1878–1839 BC",
            description: "Often regarded as the most powerful pharaoh of the Middle Kingdom, Senusret III led successful military campaigns into Nubia and implemented significant economic reforms to centralize power. [7, 10]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Head_of_a_statue_of_Senusret_III_from_the_British_Museum.jpg/220px-Head_of_a_statue_of_Senusret_III_from_the_British_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Senusret_III",
            start: -1878,
            end: -1839
        },
        {
            name: "Amenemhat III",
            dates: "r. c. 1860–1814 BC",
            description: "The reign of Amenemhat III marked the height of the Middle Kingdom's economic prosperity. [10] He is known for the extensive exploitation of Egypt's natural resources and major construction projects, including the expansion of the Faiyum Oasis. [10]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Head_of_Amenemhat_III_as_a_young_man_Ny_Carlsberg_Glyptotek.jpg/220px-Head_of_Amenemhat_III_as_a_young_man_Ny_Carlsberg_Glyptotek.jpg",
            wiki: "https://en.wikipedia.org/wiki/Amenemhat_III",
            start: -1860,
            end: -1814
        },
        {
            name: "Hattusili I",
            dates: "r. c. 1650–1620 BC",
            description: "An early king of the Hittite Old Kingdom, Hattusili I is credited with establishing the Hittite capital at Hattusa and expanding its territory into northern Syria. [17, 32]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hittite_Relief_from_the_royal_gate_at_Hattusa.jpg/220px-Hittite_Relief_from_the_royal_gate_at_Hattusa.jpg",
            wiki: "https://en.wikipedia.org/wiki/Hattusili_I",
            start: -1650,
            end: -1620
        },
        {
            name: "Mursili I",
            dates: "r. c. 1620–1590 BC",
            description: "The grandson of Hattusili I, Mursili I is famous for his raid on Babylon, which brought an end to the Amorite dynasty. [17] His assassination led to a period of dynastic struggle. [17]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lion_Gate_at_Hattusa.jpg/220px-Lion_Gate_at_Hattusa.jpg",
            wiki: "https://en.wikipedia.org/wiki/Mursili_I",
            start: -1620,
            end: -1590
        },
                {
            name: "Justinian I",
            dates: "r. 527–565 AD",
            description: "Justinian I, also known as Justinian the Great, was a Byzantine emperor who sought to revive the empire's greatness and reconquer the lost western half of the historical Roman Empire. [23]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Meister_von_San_Vitale_in_Ravenna_003.jpg/220px-Meister_von_San_Vitale_in_Ravenna_003.jpg",
            wiki: "https://en.wikipedia.org/wiki/Justinian_I",
            start: 527,
            end: 565
        },
        {
            name: "Harun al-Rashid",
            dates: "r. 786–809 AD",
            description: "Harun al-Rashid was the fifth Abbasid Caliph. His reign is traditionally regarded to be the beginning of the Islamic Golden Age.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Harun_al-Rashid_and_the_Barmakids.jpg/220px-Harun_al-Rashid_and_the_Barmakids.jpg",
            wiki: "https://en.wikipedia.org/wiki/Harun_al-Rashid",
            start: 786,
            end: 809
        },
        {
            name: "Emperor Taizong of Tang",
            displayName: "Emperor Taizong",
            dates: "r. 626–649",
            description: "Emperor Taizong was the second emperor of the Tang dynasty of China. His reign, the 'Reign of Zhenguan', is considered a golden age in Chinese history and he is considered one of the greatest emperors in Chinese history. [9]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Emperor_Taizong_of_Tang_in_Thirteen_Emperors_Scroll.jpg/220px-Emperor_Taizong_of_Tang_in_Thirteen_Emperors_Scroll.jpg",
            wiki: "https://en.wikipedia.org/wiki/Emperor_Taizong_of_Tang",
            start: 626,
            end: 649
        },
        {
            name: "Empress Wu Zetian",
            displayName: "Wu Zetian",
            dates: "r. 690–705",
            description: "Wu Zetian was the only female emperor of China, reigning during the Tang dynasty. She was known for her political and military leadership, and her reign saw a significant expansion of the empire.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wu_Zetian_as_Emperor.jpg/220px-Wu_Zetian_as_Emperor.jpg",
            wiki: "https://en.wikipedia.org/wiki/Wu_Zetian",
            start: 690,
            end: 705
        },
        {
            name: "Alfred the Great",
            dates: "r. 871–899",
            description: "Alfred the Great was King of the West Saxons. He successfully defended his kingdom against the Viking attempt at conquest and by the time of his death had become the dominant ruler in England. [31]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Alfred_the_Great_by_Samuel_Woodforde.jpg/220px-Alfred_the_Great_by_Samuel_Woodforde.jpg",
            wiki: "https://en.wikipedia.org/wiki/Alfred_the_Great",
            start: 871,
            end: 899
        },
        {
            name: "Rajaraja I",
            dates: "r. 985–1014",
            description: "Rajaraja I was a Chola emperor who ruled over a vast region in southern India. [18] He is remembered for the construction of the Brihadisvara Temple in Thanjavur, a UNESCO World Heritage Site.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Brihadisvara_Temple_at_Thanjavur.jpg/220px-Brihadisvara_Temple_at_Thanjavur.jpg",
            wiki: "https://en.wikipedia.org/wiki/Rajaraja_I",
            start: 985,
            end: 1014
        },
        {
            name: "Basil II",
            dates: "r. 976–1025",
            description: "Basil II, known as the 'Bulgar-Slayer', was a Byzantine emperor of the Macedonian dynasty. He oversaw the stabilization of the eastern frontier and the complete subjugation of the First Bulgarian Empire, the empire's foremost European foe. [5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Basil_II_in_his_triumph.jpg/220px-Basil_II_in_his_triumph.jpg",
            wiki: "https://en.wikipedia.org/wiki/Basil_II",
            start: 976,
            end: 1025
        },
        {
            name: "William the Conqueror",
            dates: "r. 1066–1087",
            description: "William I, usually known as William the Conqueror, was the first Norman King of England. He launched the Norman conquest of England in 1066. [30]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bayeux_Tapestry_scene57_Harold_death.jpg/220px-Bayeux_Tapestry_scene57_Harold_death.jpg",
            wiki: "https://en.wikipedia.org/wiki/William_the_Conqueror",
            start: 1066,
            end: 1087
        },
        {
            name: "Saladin",
            dates: "r. 1174–1193",
            description: "Saladin was a Sunni Muslim Kurd who became the first sultan of both Egypt and Syria, and was the founder of the Ayyubid dynasty. He led the Muslim military campaign against the Crusader states in the Levant.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Saladin-Krach_des_Chevaliers.jpg/220px-Saladin-Krach_des_Chevaliers.jpg",
            wiki: "https://en.wikipedia.org/wiki/Saladin",
            start: 1174,
            end: 1193
        },
        {
            name: "Emperor Go-Daigo",
            dates: "r. 1318–1339",
            description: "Emperor Go-Daigo was the 96th emperor of Japan. He is known for launching the Kenmu Restoration in 1333, an attempt to reassert imperial power against the Kamakura shogunate. [25, 7]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Emperor_Go-Daigo.jpg/220px-Emperor_Go-Daigo.jpg",
            wiki: "https://en.wikipedia.org/wiki/Emperor_Go-Daigo",
            start: 1318,
            end: 1339
        },
                {
            name: "Pericles",
            dates: "General of Athens c. 461–429 BC",
            description: "Pericles was a prominent and influential Greek statesman, orator and general of Athens during its golden age – specifically the time between the Persian and Peloponnesian wars.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Pericles_Pio-Clementino_Inv269.jpg/220px-Pericles_Pio-Clementino_Inv269.jpg",
            wiki: "https://en.wikipedia.org/wiki/Pericles",
            start: -461,
            end: -429
        },
        {
            name: "Chandragupta Maurya",
            dates: "r. c. 322–297 BC",
            description: "Chandragupta Maurya was the founder of the Maurya Empire in ancient India. He built one of the largest empires on the Indian subcontinent.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Chandragupta_Maurya_in_Imagination.jpg/220px-Chandragupta_Maurya_in_Imagination.jpg",
            wiki: "https://en.wikipedia.org/wiki/Chandragupta_Maurya",
            start: -322,
            end: -297
        },
        {
            name: "Ashoka the Great",
            dates: "r. c. 268–232 BC",
            description: "Ashoka was an Indian emperor of the Maurya Dynasty who ruled almost all of the Indian subcontinent. He is credited with the spread of Buddhism across Asia.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_Capital_of_Ashoka.jpg/220px-Lion_Capital_of_Ashoka.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ashoka",
            start: -268,
            end: -232
        },
        {
            name: "Attila the Hun",
            dates: "r. 434–453",
            description: "Attila, frequently called Attila the Hun, was the ruler of the Huns from 434 until his death in March 453. He was a leader of the Hunnic Empire, a tribal confederation consisting of Huns, Ostrogoths, and Alans among others, on the territory of Central and Eastern Europe.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Attila_the_Hun_by_Delacroix.jpg/220px-Attila_the_Hun_by_Delacroix.jpg",
            wiki: "https://en.wikipedia.org/wiki/Attila",
            start: 434,
            end: 453
        },
        {
            name: "Isabella I of Castile",
            dates: "r. 1474–1504",
            description: "Isabella I was Queen of Castile from 1474 until her death. Her marriage to Ferdinand II of Aragon became the basis for the political unification of Spain. She and Ferdinand are known for completing the Reconquista and for financing Christopher Columbus's 1492 voyage.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Isabel_la_Cat%C3%B3lica_%28Museo_del_Prado%29.jpg/220px-Isabel_la_Cat%C3%B3lica_%28Museo_del_Prado%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Isabella_I_of_Castile",
            start: 1474,
            end: 1504
        },
        {
            name: "Montezuma II",
            dates: "r. 1502–1520",
            description: "Moctezuma II, variant spellings include Montezuma, was the ninth tlatoani or ruler of Tenochtitlan, reigning from 1502 to 1520. The first contact between indigenous civilizations of Mesoamerica and Europeans took place during his reign.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Moctezuma_II.jpg/220px-Moctezuma_II.jpg",
            wiki: "https://en.wikipedia.org/wiki/Moctezuma_II",
            start: 1502,
            end: 1520
        },
        {
            name: "Akbar the Great",
            dates: "r. 1556–1605",
            description: "Abu'l-Fath Jalal-ud-din Muhammad Akbar, popularly known as Akbar the Great, was the third Mughal emperor, who reigned from 1556 to 1605. Akbar succeeded his father, Humayun, and gradually enlarged the Mughal Empire to include nearly all of the Indian Subcontinent.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Akbar_and_Tansen_in_the_imperial_court_of_the_Mughal_Empire.jpg/220px-Akbar_and_Tansen_in_the_imperial_court_of_the_Mughal_Empire.jpg",
            wiki: "https://en.wikipedia.org/wiki/Akbar",
            start: 1556,
            end: 1605
        },
        {
            name: "Peter the Great",
            dates: "r. 1682–1725",
            description: "Peter the Great was a monarch of the Tsardom of Russia and later the Russian Empire from 7 May [O.S. 27 April] 1682 until his death in 1725, jointly ruling before 1696 with his elder half-brother, Ivan V.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Peter_the_Great_by_Paul_Delaroche_%281838%2C_Hamburg%29.jpg/220px-Peter_the_Great_by_Paul_Delaroche_%281838%2C_Hamburg%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Peter_the_Great",
            start: 1682,
            end: 1725
        },
        {
            name: "Napoleon Bonaparte",
            dates: "Emperor of the French 1804–1814, 1815",
            description: "Napoléon Bonaparte was a French military and political leader who rose to prominence during the French Revolution and led several successful campaigns during the French Revolutionary Wars. He was Emperor of the French as Napoleon I from 1804 until 1814 and again briefly in 1815 during the Hundred Days.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/220px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
            wiki: "https://en.wikipedia.org/wiki/Napoleon",
            start: 1804,
            end: 1815
        },
        {
            name: "Julius Caesar",
            dates: "Dictator 49–44 BC",
            description: "Gaius Julius Caesar was a Roman general and statesman.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Green_Caesar.jpg/220px-Green_Caesar.jpg",
            wiki: "https://en.wikipedia.org/wiki/Julius_Caesar",
            start: -49,
            end: -44
        },
        {
            name: "Augustus",
            dates: "r. 27 BC – 14 AD",
            description: "Augustus was a Roman statesman and military leader who became the first emperor of the Roman Empire.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Augustus_of_Prima_Porta-Vatican_Museum-colosseum-2.jpg/220px-Augustus_of_Prima_Porta-Vatican_Museum-colosseum-2.jpg",
            wiki: "https://en.wikipedia.org/wiki/Augustus",
            start: -27,
            end: 14
        },
        {
            name: "Cleopatra VII",
            dates: "r. 51–30 BC",
            description: "Cleopatra VII Philopator was the last active ruler of the Ptolemaic Kingdom of Egypt.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Cleopatra_VII_Altes_Museum_Berlin_3.jpg/220px-Cleopatra_VII_Altes_Museum_Berlin_3.jpg",
            wiki: "https://en.wikipedia.org/wiki/Cleopatra",
            start: -51,
            end: -30
        },
        {
            name: "Khufu",
            dates: "r. 2589–2566 BC",
            description: "Khufu was an ancient Egyptian monarch who was the second pharaoh of the Fourth Dynasty, in the first half of the Old Kingdom period.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Khufu_statuette_Egypt_Museum_Cairo.jpg/220px-Khufu_statuette_Egypt_Museum_Cairo.jpg",
            wiki: "https://en.wikipedia.org/wiki/Khufu",
            start: -2589,
            end: -2566
        },
        {
            name: "Hatshepsut",
            dates: "r. 1478–1458 BC",
            description: "Hatshepsut was the fifth pharaoh of the Eighteenth Dynasty of Egypt and one of the most successful female pharaohs.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hatshepsut_in_the_Grand_Egyptian_Museum.jpg/220px-Hatshepsut_in_the_Grand_Egyptian_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Hatshepsut",
            start: -1478,
            end: -1458
        },
        {
            name: "Akhenaten",
            dates: "r. 1353–1336 BC",
            description: "Akhenaten was an ancient Egyptian pharaoh of the 18th Dynasty who ruled for 17 years and died perhaps in 1336 BC or 1334 BC.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Akhenaten_as_a_Sphinx_at_the_Egyptian_Museum_in_Cairo.jpg/220px-Akhenaten_as_a_Sphinx_at_the_Egyptian_Museum_in_Cairo.jpg",
            wiki: "https://en.wikipedia.org/wiki/Akhenaten",
            start: -1353,
            end: -1336
        },
        {
            name: "Tutankhamun",
            dates: "r. 1332–1323 BC",
            description: "Tutankhamun, the 'boy king', was an Egyptian pharaoh of the 18th dynasty, during the period of Egyptian history known as the New Kingdom.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tuthankhamun_Egyptian_Museum.jpg/220px-Tuthankhamun_Egyptian_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Tutankhamun",
            start: -1332,
            end: -1323
        },
        {
            name: "Ramesses II",
            dates: "r. 1279–1213 BC",
            description: "Ramesses II, also known as Ramesses the Great, was the third pharaoh of the Nineteenth Dynasty of Egypt.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Abu_Simbel%2C_Ramesses_II%2C_Egypt%2C_Oct_2004.jpg/220px-Abu_Simbel%2C_Ramesses_II%2C_Egypt%2C_Oct_2004.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ramesses_II",
            start: -1279,
            end: -1213
        },
        {
            name: "Nero",
            dates: "r. 54–68 AD",
            description: "Nero was the fifth Roman emperor, ruling from 54 to 68. His infamous reign is associated with tyranny and extravagance.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Nero_Glyptothek_Munich_322.jpg/220px-Nero_Glyptothek_Munich_322.jpg",
            wiki: "https://en.wikipedia.org/wiki/Nero",
            start: 54,
            end: 68
        },
        {
            name: "Trajan",
            dates: "r. 98–117 AD",
            description: "Trajan was Roman emperor from 98 to 117. Officially declared by the Senate optimus princeps ('the best ruler'), Trajan is remembered as a successful soldier-emperor.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Trajan_pushkin.jpg/220px-Trajan_pushkin.jpg",
            wiki: "https://en.wikipedia.org/wiki/Trajan",
            start: 98,
            end: 117
        },
        {
            name: "Hadrian",
            dates: "r. 117–138 AD",
            description: "Hadrian was Roman emperor from 117 to 138. He is known for building Hadrian's Wall, which marked the northern limit of Britannia.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hadrian_in_military_dress_Musei_Capitolini_MC815.jpg/220px-Hadrian_in_military_dress_Musei_Capitolini_MC815.jpg",
            wiki: "https://en.wikipedia.org/wiki/Hadrian",
            start: 117,
            end: 138
        },
        {
            name: "Marcus Aurelius",
            dates: "r. 161–180 AD",
            description: "Marcus Aurelius was Roman emperor from 161 to 180 and a Stoic philosopher.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Marcus_Aurelius_Glyptothek_Munich_337.jpg/220px-Marcus_Aurelius_Glyptothek_Munich_337.jpg",
            wiki: "https://en.wikipedia.org/wiki/Marcus_Aurelius",
            start: 161,
            end: 180
        },
        {
            name: "Diocletian",
            dates: "r. 284–305 AD",
            description: "Diocletian was a Roman emperor from 284 to 305. Born to a family of low status, Diocletian rose through the ranks of the military to become Roman emperor.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Statue_of_the_Tetrarchs_in_Venice_-_My_Cat.jpg/220px-Statue_of_the_Tetrarchs_in_Venice_-_My_Cat.jpg",
            wiki: "https://en.wikipedia.org/wiki/Diocletian",
            start: 284,
            end: 305
        },
        {
            name: "Constantine the Great",
            displayName: "Constantine the Great",
            dates: "r. 306–337 AD",
            description: "Constantine the Great, also known as Constantine I, was a Roman emperor from 306 to 337 AD.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Head_of_the_colossal_statue_of_Constantine_I%2C_Musei_Capitolini%2C_Rome.jpg/220px-Head_of_the_colossal_statue_of_Constantine_I%2C_Musei_Capitolini%2C_Rome.jpg",
            wiki: "https://en.wikipedia.org/wiki/Constantine_the_Great",
            start: 306,
            end: 337
        },
        {
            name: "Charlemagne",
            dates: "r. 768–814",
            description: "Charlemagne, also known as Charles the Great, was King of the Franks from 768, King of the Lombards from 774, and the first Holy Roman Emperor from 800.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Duerer-charlemagne-out.jpg/220px-Duerer-charlemagne-out.jpg",
            wiki: "https://en.wikipedia.org/wiki/Charlemagne",
            start: 768,
            end: 814
        },
        {
            name: "Genghis Khan",
            dates: "r. 1206–1227",
            description: "Genghis Khan was the founder and first Great Khan of the Mongol Empire.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/220px-YuanEmperorAlbumGenghisPortrait.jpg",
            wiki: "https://en.wikipedia.org/wiki/Genghis_Khan",
            start: 1206,
            end: 1227
        },
        {
            name: "Suleiman the Magnificent",
            displayName: "Suleiman the Magnificent",
            dates: "r. 1520–1566",
            description: "Suleiman I, commonly known as Suleiman the Magnificent in the West and 'the Lawgiver' in his realm, was the tenth and longest-reigning Sultan of the Ottoman Empire from 1520 until his death in 1566.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Suleiman_the_Magnificent_by_Titian%2C_1530.jpg/220px-Suleiman_the_Magnificent_by_Titian%2C_1530.jpg",
            wiki: "https://en.wikipedia.org/wiki/Suleiman_the_Magnificent",
            start: 1520,
            end: 1566
        },
        {
            name: "Elizabeth I",
            dates: "r. 1558–1603",
            description: "Elizabeth I was Queen of England and Ireland from 17 November 1558 until her death in 1603.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Darnley_stage_3.jpg/220px-Darnley_stage_3.jpg",
            wiki: "https://en.wikipedia.org/wiki/Elizabeth_I",
            start: 1558,
            end: 1603
        },
        {
            name: "Louis XIV",
            displayName: "Louis XIV",
            dates: "r. 1643–1715",
            description: "Louis XIV, also known as the Sun King, was King of France from 14 May 1643 until his death in 1715.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/220px-Louis_XIV_of_France.jpg",
            wiki: "https://en.wikipedia.org/wiki/Louis_XIV",
            start: 1643,
            end: 1715
        },
        {
            name: "Catherine the Great",
            displayName: "Catherine the Great",
            dates: "r. 1762–1796",
            description: "Catherine II, most commonly known as Catherine the Great, was the last reigning Empress Regnant of Russia and the country's longest-ruling female leader.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Catherine_II_by_J.B.Lampi_%281780s%2C_Hermitage%29.jpg/220px-Catherine_II_by_J.B.Lampi_%281780s%2C_Hermitage%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Catherine_the_Great",
            start: 1762,
            end: 1796
        },
        {
            name: "Queen Victoria",
            dates: "r. 1837–1901",
            description: "Victoria was Queen of the United Kingdom of Great Britain and Ireland from 20 June 1837 until her death in 1901.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Queen_Victoria_by_Bassano.jpg/220px-Queen_Victoria_by_Bassano.jpg",
            wiki: "https://en.wikipedia.org/wiki/Queen_Victoria",
            start: 1837,
            end: 1901
        },
        {
            name: "Benito Mussolini",
            dates: "Prime Minister 1922–1943",
            description: "Benito Mussolini was an Italian politician and journalist who founded and led the National Fascist Party.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Benito_Mussolini_formal_portrait.jpg/220px-Benito_Mussolini_formal_portrait.jpg",
            wiki: "https://en.wikipedia.org/wiki/Benito_Mussolini",
            start: 1922,
            end: 1943
        },
        {
            name: "Joseph Stalin",
            dates: "Leader of the Soviet Union 1924–1953",
            description: "Joseph Stalin was a Georgian revolutionary and Soviet politician who led the Soviet Union from 1924 until his death in 1953.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Stalin_in_the_1930s.jpg/220px-Stalin_in_the_1930s.jpg",
            wiki: "https://en.wikipedia.org/wiki/Joseph_Stalin",
            start: 1924,
            end: 1953
        },
        {
            name: "Adolf Hitler",
            dates: "Führer of Germany 1934–1945",
            description: "Adolf Hitler was an Austrian-born German politician who was the dictator of Germany from 1933 to 1945.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hitler_portrait_crop.jpg/220px-Hitler_portrait_crop.jpg",
            wiki: "https://en.wikipedia.org/wiki/Adolf_Hitler",
            start: 1934,
            end: 1945
        },
        {
            name: "Francisco Franco",
            dates: "Dictator of Spain 1939–1975",
            description: "Francisco Franco Bahamonde was a Spanish general who led the Nationalist forces in overthrowing the Second Spanish Republic during the Spanish Civil War and thereafter ruled over Spain from 1939 to 1975 as a dictator.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Francisco_Franco_in_1930.jpg/220px-Francisco_Franco_in_1930.jpg",
            wiki: "https://en.wikipedia.org/wiki/Francisco_Franco",
            start: 1939,
            end: 1975
        },
        {
            name: "Mao Zedong",
            dates: "Leader of China 1949–1976",
            description: "Mao Zedong, also known as Chairman Mao, was a Chinese communist revolutionary who was the founder of the People's Republic of China, which he ruled as the chairman of the Chinese Communist Party from its establishment in 1949 until his death in 1976.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mao_Zedong_portrait.jpg/220px-Mao_Zedong_portrait.jpg",
            wiki: "https://en.wikipedia.org/wiki/Mao_Zedong",
            start: 1949,
            end: 1976
        },
        {
            name: "Idi Amin",
            dates: "President of Uganda 1971–1979",
            description: "Idi Amin Dada Oumee was a Ugandan military officer who served as the third president of Uganda from 1971 to 1979.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Idi_Amin_1973.jpg/220px-Idi_Amin_1973.jpg",
            wiki: "https://en.wikipedia.org/wiki/Idi_Amin",
            start: 1971,
            end: 1979
        },
        {
            name: "Augusto Pinochet",
            dates: "Dictator of Chile 1973–1990",
            description: "Augusto Pinochet was a Chilean general, politician and dictator who ruled Chile from 1973 to 1990, first as the leader of the Military Junta of Chile from 1973 to 1981, before becoming President of the Republic by a joint decree of the junta.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Augusto_Pinochet_en_1973.jpg/220px-Augusto_Pinochet_en_1973.jpg",
            wiki: "https://en.wikipedia.org/wiki/Augusto_Pinochet",
            start: 1973,
            end: 1990
        },
        {
            name: "Pol Pot",
            dates: "Leader of Cambodia 1975–1979",
            description: "Pol Pot was a Cambodian revolutionary and politician who governed Cambodia as the Prime Minister of Democratic Kampuchea between 1976 and 1979.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pol_Pot_in_1978.jpg/220px-Pol_Pot_in_1978.jpg",
            wiki: "https://en.wikipedia.org/wiki/Pol_Pot",
            start: 1975,
            end: 1979
        },
        {
            name: "Pope Innocent III",
            dates: "r. 1198–1216",
            description: "One of the most powerful and influential popes, he exerted significant influence over European kings. [1] He initiated the Fourth Crusade and the Albigensian Crusade, and in 1215, he convened the Fourth Lateran Council, which issued important reforms for the church. [1, 6]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Innocent_III_SS_Speco.jpg/220px-Innocent_III_SS_Speco.jpg",
            wiki: "https://en.wikipedia.org/wiki/Pope_Innocent_III",
            start: 1198,
            end: 1216
        },
        {
            name: "Leopold II of Belgium",
            dates: "r. 1865–1909",
            description: "The second King of the Belgians, he founded and was the sole owner of the Congo Free State, a private project undertaken on his own behalf. He was responsible for the widespread atrocities and deaths of millions of Congolese people. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Leopold_ii_garter_knight.jpg/220px-Leopold_ii_garter_knight.jpg",
            wiki: "https://en.wikipedia.org/wiki/Leopold_II_of_Belgium",
            start: 1865,
            end: 1909
        },
        {
            name: "Gustavus Adolphus",
            dates: "r. 1611–1632",
            description: "King of Sweden from 1611 to 1632, he is credited for the rise of Sweden as a great European power. [3, 5] During the Thirty Years' War, he led his nation to military supremacy, and was a great military commander. [2, 5] He is often regarded as one of the greatest military commanders in modern history. [3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gustav_II_Adolf_of_Sweden_by_Jacob_Hoefnagel.jpg/220px-Gustav_II_Adolf_of_Sweden_by_Jacob_Hoefnagel.jpg",
            wiki: "https://en.wikipedia.org/wiki/Gustavus_Adolphus_of_Sweden",
            start: 1611,
            end: 1632
        },
        {
            name: "Frederick VI of Denmark",
            dates: "r. 1808–1839",
            description: "King of Denmark from 1808 to 1839 and of Norway from 1808 to 1814. [2, 4] He was regent of Denmark from 1784 and supported Napoleon during the Napoleonic Wars. [2, 4] After Napoleon's defeat, he was forced to cede Norway to Sweden. [4, 5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Frederik_VI_of_Denmark_by_C.A._Jensen.jpg/220px-Frederik_VI_of_Denmark_by_C.A._Jensen.jpg",
            wiki: "https://en.wikipedia.org/wiki/Frederick_VI_of_Denmark",
            start: 1808,
            end: 1839
        },
        {
            name: "Gustav III of Sweden",
            dates: "r. 1771–1792",
            description: "King of Sweden from 1771 until his assassination in 1792. [1, 2, 3] He was a patron of the arts and a supporter of the Enlightenment, founding the Swedish Academy. [3] In 1772, he seized power from the government in a coup d'état. [1, 5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gustav_III_of_Sweden_by_Alexander_Roslin.jpg/220px-Gustav_III_of_Sweden_by_Alexander_Roslin.jpg",
            wiki: "https://en.wikipedia.org/wiki/Gustav_III_of_Sweden",
            start: 1771,
            end: 1792
        },
        {
            name: "Joseph II, Holy Roman Emperor",
            displayName: "Joseph II",
            dates: "r. 1765–1790",
            description: "Holy Roman Emperor and ruler of the Habsburg lands from 1780 to 1790. He was an 'enlightened despot' who issued decrees that abolished serfdom and promoted religious toleration. [3, 4, 1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Joseph_II_by_Joseph_Hickel.jpg/220px-Joseph_II_by_Joseph_Hickel.jpg",
            wiki: "https://en.wikipedia.org/wiki/Joseph_II,_Holy_Roman_Emperor",
            start: 1765,
            end: 1790
        },
        {
            name: "Joseph I of Portugal",
            dates: "r. 1750–1777",
            description: "King of Portugal from 1750 until his death in 1777. His reign was marked by the 1755 Lisbon earthquake and the subsequent rebuilding of the city under the direction of his chief minister, the Marquis of Pombal. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/D._Jos%C3%A9_I_de_Portugal.jpg/220px-D._Jos%C3%A9_I_de_Portugal.jpg",
            wiki: "https://en.wikipedia.org/wiki/Joseph_I_of_Portugal",
            start: 1750,
            end: 1777
        },
        {
            name: "Maria Theresa",
            dates: "r. 1740–1780",
            description: "The only female ruler of the Habsburg dominions, she was the sovereign of Austria, Hungary, Croatia, Bohemia, and other territories. [1, 4] She was the mother of sixteen children, including Joseph II and Marie Antoinette. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Maria_Theresia_als_K%C3%B6nigin_von_Ungarn.jpg/220px-Maria_Theresia_als_K%C3%B6nigin_von_Ungarn.jpg",
            wiki: "https://en.wikipedia.org/wiki/Maria_Theresa",
            start: 1740,
            end: 1780
        },
        {
            name: "Alexander II of Russia",
            displayName: "Alexander II",
            dates: "r. 1855–1881",
            description: "Known as the 'Liberator' for his 1861 emancipation of Russia's serfs. [1] His reign also included major reforms in the judicial system, military, and local government. [1, 4] Despite these liberal reforms, he was assassinated by the revolutionary group Narodnaya Volya ('People's Will') in 1881. [2, 3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Alexander_II_of_Russia_by_T._Nebe.jpg/220px-Alexander_II_of_Russia_by_T._Nebe.jpg",
            wiki: "https://en.wikipedia.org/wiki/Alexander_II_of_Russia",
            start: 1855,
            end: 1881
        },
        {
            name: "George Washington",
            dates: "President 1789–1797",
            description: "The first president of the United States, Washington played a key role in shaping the office and the new nation. He established many presidential precedents, including the cabinet system, and oversaw the creation of the first national bank. [2, 4] He was unanimously elected twice. [1, 4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/220px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
            wiki: "https://en.wikipedia.org/wiki/George_Washington",
            start: 1789,
            end: 1797
        },
        {
            name: "Abraham Lincoln",
            dates: "President 1861–1865",
            description: "The 16th president of the United States, Lincoln led the country through the Civil War, preserving the Union and abolishing slavery. [4] He issued the Emancipation Proclamation in 1863 and was instrumental in the passage of the Thirteenth Amendment. [3, 5] He was assassinated in 1865. [2, 4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/220px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
            wiki: "https://en.wikipedia.org/wiki/Abraham_Lincoln",
            start: 1861,
            end: 1865
        },
        {
            name: "Franklin D. Roosevelt",
            displayName: "FDR",
            dates: "President 1933–1945",
            description: "The 32nd president of the United States, he led the country through the Great Depression and World War II. [1, 2] He implemented the New Deal to combat the economic crisis and was the only president to serve more than two terms. [1, 3, 4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/220px-FDR_1944_Color_Portrait.jpg",
            wiki: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
            start: 1933,
            end: 1945
        },
        {
            name: "Theodore Roosevelt",
            displayName: "Teddy Roosevelt",
            dates: "President 1901–1909",
            description: "The 26th president of the United States, known for his progressive reforms and 'trust-busting' of large corporate monopolies. [3, 4] A noted conservationist, he greatly expanded the national parks system. [1, 4] He also oversaw the beginning of construction on the Panama Canal. [4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/President_Theodore_Roosevelt%2C_1904.jpg/220px-President_Theodore_Roosevelt%2C_1904.jpg",
            wiki: "https://en.wikipedia.org/wiki/Theodore_Roosevelt",
            start: 1901,
            end: 1909
        },
        {
            name: "Thomas Jefferson",
            dates: "President 1801–1809",
            description: "The third president of the United States, he was the principal author of the Declaration of Independence. [1] His presidency is most known for the Louisiana Purchase, which doubled the size of the country. [3, 4] He also authorized the Lewis and Clark Expedition. [3, 5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rembrandt_Peale_-_Thomas_Jefferson_-_Google_Art_Project.jpg/220px-Rembrandt_Peale_-_Thomas_Jefferson_-_Google_Art_Project.jpg",
            wiki: "https://en.wikipedia.org/wiki/Thomas_Jefferson",
            start: 1801,
            end: 1809
        },
        {
            name: "John F. Kennedy",
            displayName: "JFK",
            dates: "President 1961–1963",
            description: "The 35th president of the United States, he navigated the Cuban Missile Crisis, established the Peace Corps, and championed the space race. [2] He was assassinated in November 1963. [2]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/220px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
            wiki: "https://en.wikipedia.org/wiki/John_F._Kennedy",
            start: 1961,
            end: 1963
        },
        {
            name: "Lyndon B. Johnson",
            displayName: "LBJ",
            dates: "President 1963–1969",
            description: "The 36th president, he took office after Kennedy's assassination. [4] He is known for his 'Great Society' legislation, which included the Civil Rights Act of 1964, Medicare, and Medicaid. [4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Lyndon_B._Johnson_in_1964.jpg/220px-Lyndon_B._Johnson_in_1964.jpg",
            wiki: "https://en.wikipedia.org/wiki/Lyndon_B._Johnson",
            start: 1963,
            end: 1969
        },
        {
            name: "Ronald Reagan",
            dates: "President 1981–1989",
            description: "The 40th president, his 'Reaganomics' policies, and a conservative resurgence, marked his time in office. [2] He played a pivotal role in the end of the Cold War. [2]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/220px-Official_Portrait_of_President_Reagan_1981.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ronald_Reagan",
            start: 1981,
            end: 1989
        },
        {
            name: "Dwight D. Eisenhower",
            displayName: "Ike",
            dates: "President 1953–1961",
            description: "A five-star general in the United States Army and Supreme Commander of the Allied Expeditionary Forces in Europe during WWII, he served as the 34th President. He ended the Korean War and launched the Interstate Highway System. [2]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg/220px-Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg",
            wiki: "https://en.wikipedia.org/wiki/Dwight_D._Eisenhower",
            start: 1953,
            end: 1961
        },
        {
            name: "Woodrow Wilson",
            dates: "President 1913–1921",
            description: "The 28th president, he led the United States through World War I. [1] A key advocate for the League of Nations, he also oversaw major progressive reforms, including the establishment of the Federal Reserve. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/President_Woodrow_Wilson_portrait_December_2_1912.jpg/220px-President_Woodrow_Wilson_portrait_December_2_1912.jpg",
            wiki: "https://en.wikipedia.org/wiki/Woodrow_Wilson",
            start: 1913,
            end: 1921
        },
        {
            name: "Harry S. Truman",
            dates: "President 1945–1953",
            description: "The 33rd president, he assumed office after the death of Franklin D. Roosevelt. He made the decision to use atomic weapons against Japan to end World War II and implemented the Marshall Plan to rebuild postwar Europe. [3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Harry_S._Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945.jpg/220px-Harry_S._Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945.jpg",
            wiki: "https://en.wikipedia.org/wiki/Harry_S._Truman",
            start: 1945,
            end: 1953
        },
        {
            name: "Kaarlo Juho Ståhlberg",
            dates: "President 1919–1925",
            description: "The first president of Finland, he played a critical role in the creation of the country's constitution. [5] He was elected by the parliament and appointed eight different governments during his six-year term, navigating the country through its early, turbulent years. [5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Kaarlo_Juho_St%C3%A5hlberg_in_1919.jpg/220px-Kaarlo_Juho_St%C3%A5hlberg_in_1919.jpg",
            wiki: "https://en.wikipedia.org/wiki/Kaarlo_Juho_St%C3%A5hlberg",
            start: 1919,
            end: 1925
        },
        {
            name: "Carl Gustaf Mannerheim",
            dates: "President 1944–1946",
            description: "A military leader and statesman, he was the commander-in-chief of the Finnish Defence Forces during World War II. [2] He was made president by a special act of parliament to manage the end of the war and the peace negotiations with the Soviet Union. [3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/C.G.E._Mannerheim_in_1940.jpg/220px-C.G.E._Mannerheim_in_1940.jpg",
            wiki: "https://en.wikipedia.org/wiki/Carl_Gustaf_Emil_Mannerheim",
            start: 1944,
            end: 1946
        },
        {
            name: "Urho Kekkonen",
            dates: "President 1956–1982",
            description: "Serving for 26 years, he was the longest-serving president of Finland. [6] His foreign policy, known as the 'Paasikivi-Kekkonen line', aimed to maintain Finland's independence and neutrality while fostering good relations with the Soviet Union. [3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Urho_Kekkonen_1966.jpg/220px-Urho_Kekkonen_1966.jpg",
            wiki: "https://en.wikipedia.org/wiki/Urho_Kekkonen",
            start: 1956,
            end: 1982
        },
        {
            name: "Mauno Koivisto",
            dates: "President 1982–1994",
            description: "The ninth president of Finland, he shifted the country's foreign policy towards greater openness with the West. [6] He led Finland into a period of economic growth in the 1980s and managed the country through the dissolution of the Soviet Union. [6]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mauno_Koivisto_1982.jpg/220px-Mauno_Koivisto_1982.jpg",
            wiki: "https://en.wikipedia.org/wiki/Mauno_Koivisto",
            start: 1982,
            end: 1994
        },
        {
            name: "Martti Ahtisaari",
            dates: "President 1994–2000",
            description: "The tenth president of Finland, he was the first to be elected by direct popular vote. [5] During his term, Finland joined the European Union. [5] He later received the Nobel Peace Prize in 2008 for his work in resolving international conflicts. ",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Martti_Ahtisaari_2008.jpg/220px-Martti_Ahtisaari_2008.jpg",
            wiki: "https://en.wikipedia.org/wiki/Martti_Ahtisaari",
            start: 1994,
            end: 2000
        },
        {
            name: "Tarja Halonen",
            dates: "President 2000–2012",
            description: "The eleventh and first female president of Finland, she served for two terms. [5] She was known for her interest in human rights and her high approval ratings. [5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tarja_Halonen_2011.jpg/220px-Tarja_Halonen_2011.jpg",
            wiki: "https://en.wikipedia.org/wiki/Tarja_Halonen",
            start: 2000,
            end: 2012
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117100;

    rulers.forEach(ruler => {
        const leftPosition = `calc((${ruler.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${ruler.end - ruler.start}) / ${totalYearsVar} * 100%)`;
        const displayName = ruler.displayName || ruler.name;

        const itemHTML = `
            <div class="timeline-item rulers" style="left: ${leftPosition}; width: ${itemWidth};">
                <div class="permanent-name">${ruler.name}</div>
                <div class="lifespan" style="width: 100%;"></div>
                <div class="marker"></div>
                <div class="timeline-content">
                    <img src="${ruler.img}" alt="${displayName}">
                    <h3>${displayName}</h3>
                    <p>${ruler.description}</p>
                    <p class="dates">${ruler.dates}</p>
                    <div class="links">
                        <a href="${ruler.wiki}" target="_blank" class="link wiki-link">Wiki</a>
                    </div>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', itemHTML);
    });
});
