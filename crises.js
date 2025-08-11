document.addEventListener('DOMContentLoaded', function() {
    const crises = [
        {
            name: "Tulip Mania",
            description: "A period during the Dutch Golden Age when contract prices for some bulbs of the recently introduced and fashionable tulip reached extraordinarily high levels and then dramatically collapsed.",
            dates: "1637",
            wiki: "https://en.wikipedia.org/wiki/Tulip_mania",
            start: 1637,
            end: 1638
        },
        {
            name: "South Sea Bubble",
            description: "A speculative bubble in the early 18th century involving the South Sea Company, a British joint-stock company whose shares soared in value before collapsing, causing a major economic crisis.",
            dates: "1720",
            wiki: "https://en.wikipedia.org/wiki/South_Sea_Company",
            start: 1720,
            end: 1721
        },
        {
            name: "Long Depression",
            description: "A worldwide price and economic recession, beginning in 1873 and running through 1879. It was the longest-lasting contraction identified by the NBER, eclipsing the Great Depression.",
            dates: "1873–1879",
            wiki: "https://en.wikipedia.org/wiki/Long_Depression",
            start: 1873,
            end: 1879
        },
        {
            name: "Great Depression",
            description: "A severe worldwide economic depression that took place mostly during the 1930s, beginning in the United States.",
            dates: "1929–1939",
            wiki: "https://en.wikipedia.org/wiki/Great_Depression",
            start: 1929,
            end: 1939
        },
        {
            name: "1973 Oil Crisis",
            description: "Began in October 1973 when the members of OAPEC proclaimed an oil embargo. The embargo was targeted at nations perceived as supporting Israel during the Yom Kippur War.",
            dates: "1973",
            wiki: "https://en.wikipedia.org/wiki/1973_oil_crisis",
            start: 1973,
            end: 1974
        },
        {
            name: "Asian Financial Crisis",
            description: "A period of financial crisis that gripped much of East and Southeast Asia beginning in July 1997 and raised fears of a worldwide economic meltdown due to financial contagion.",
            dates: "1997-1998",
            wiki: "https://en.wikipedia.org/wiki/1997_Asian_financial_crisis",
            start: 1997,
            end: 1998
        },
        {
            name: "Fall of the Western Roman Empire",
            description: "The loss of central political control in the Western Roman Empire, a process in which the Empire failed to enforce its rule, and its vast territory was divided into several successor polities.",
            dates: "476",
            wiki: "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire",
            start: 476,
            end: 477
        },
        {
            name: "Fall of Constantinople",
            description: "The capture of the capital of the Byzantine Empire by the Ottoman Empire on 29 May 1453. This event marked the end of the Roman Empire, which had lasted for nearly 1,500 years. [9, 28, 34, 35, 41]",
            dates: "1453",
            wiki: "https://en.wikipedia.org/wiki/Fall_of_Constantinople",
            start: 1453,
            end: 1454
        },
        {
            name: "The Crusades",
            description: "A series of religious wars initiated, supported, and at times directed by the Latin Church in the medieval period. The best known of these were the campaigns in the Holy Land. [2, 13, 19, 36, 39]",
            dates: "1095–1291",
            wiki: "https://en.wikipedia.org/wiki/Crusades",
            start: 1095,
            end: 1291
        },
        {
            name: "Thirty Years' War",
            description: "One of the longest and most destructive conflicts in European history, it was a major continental European war that took place from 1618 to 1648.",
            dates: "1618–1648",
            wiki: "https://en.wikipedia.org/wiki/Thirty_Years%27_War",
            start: 1618,
            end: 1648
        },
        {
            name: "French Revolution",
            description: "A period of radical political and societal change in France that began with the Estates General of 1789 and ended with the formation of the French Consulate in November 1799.",
            dates: "1789–1799",
            wiki: "https://en.wikipedia.org/wiki/French_Revolution",
            start: 1789,
            end: 1799
        },
        {
            name: "Napoleonic Wars",
            description: "A series of major conflicts pitting the French Empire and its allies, led by Napoleon I, against a fluctuating array of European powers formed into various coalitions.",
            dates: "1803–1815",
            wiki: "https://en.wikipedia.org/wiki/Napoleonic_Wars",
            start: 1803,
            end: 1815
        },
        {
            name: "American Civil War",
            description: "A civil war in the United States between the Union and the Confederacy, which was formed by states that had seceded. The central cause of the war was the dispute over whether slavery would be permitted to expand into the western territories. [6, 12, 16, 20, 25]",
            dates: "1861–1865",
            wiki: "https://en.wikipedia.org/wiki/American_Civil_War",
            start: 1861,
            end: 1865
        },
        {
            name: "World War I",
            description: "A global war originating in Europe that lasted from 28 July 1914 to 11 November 1918. It was one of the deadliest conflicts in history.",
            dates: "1914–1918",
            wiki: "https://en.wikipedia.org/wiki/World_War_I",
            start: 1914,
            end: 1918
        },
        {
            name: "World War II",
            description: "A global war that lasted from 1939 to 1945, involving the vast majority of the world's countries—including all of the great powers—forming two opposing military alliances: the Allies and the Axis.",
            dates: "1939–1945",
            wiki: "https://en.wikipedia.org/wiki/World_War_II",
            start: 1939,
            end: 1945
        },
        {
            name: "Korean War",
            description: "A war between North Korea (with the support of China and the Soviet Union) and South Korea (with the support of the United Nations, principally the United States).",
            dates: "1950–1953",
            wiki: "https://en.wikipedia.org/wiki/Korean_War",
            start: 1950,
            end: 1953
        },
        {
            name: "Vietnam War",
            description: "A conflict in Vietnam, Laos, and Cambodia from 1 November 1955 to the fall of Saigon on 30 April 1975.",
            dates: "1955–1975",
            wiki: "https://en.wikipedia.org/wiki/Vietnam_War",
            start: 1955,
            end: 1975
        },
        {
            name: "Fall of the Akkadian Empire",
            description: "The collapse of the first ancient empire of Mesopotamia, after a period of decline attributed to factors including climate change, internal rebellions, and invasions.",
            dates: "c. 2154 BC",
            wiki: "https://en.wikipedia.org/wiki/Akkadian_Empire#Collapse",
            start: -2154,
            end: -2153
        },
        {
            name: "Battle of Kadesh",
            description: "A battle between the Egyptian Empire under Ramesses II and the Hittite Empire under Muwatalli II. It is the earliest battle in recorded history for which details of tactics and formations are known. [7, 14, 18, 37, 43]",
            dates: "c. 1274 BC",
            wiki: "https://en.wikipedia.org/wiki/Battle_of_Kadesh",
            start: -1274,
            end: -1273
        },
        {
            name: "Trojan War",
            description: "A legendary war waged by the Achaeans (Greeks) against the city of Troy after Paris of Troy took Helen from her husband Menelaus, king of Sparta.",
            dates: "c. 1194–1184 BC",
            wiki: "https://en.wikipedia.org/wiki/Trojan_War",
            start: -1194,
            end: -1184
        },
        {
            name: "Fall of the Hittite Empire",
            description: "The collapse of the Hittite Empire, a major power in the ancient Near East, likely due to a combination of factors including invasion, internal strife, and climate change.",
            dates: "c. 1180 BC",
            wiki: "https://en.wikipedia.org/wiki/Hittites#Fall_of_the_Hittite_Empire",
            start: -1180,
            end: -1179
        },
        {
            name: "Late Bronze Age Collapse",
            description: "A time of widespread societal collapse, associated with the end of the Bronze Age in the Near East and Eastern Mediterranean.",
            dates: "c. 1200–1150 BC",
            wiki: "https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse",
            start: -1200,
            end: -1150
        },
        {
            name: "Plague of Justinian",
            description: "The first major bubonic plague pandemic, affecting the Byzantine Empire and Mediterranean port cities.",
            dates: "541–549",
            wiki: "https://en.wikipedia.org/wiki/Plague_of_Justinian",
            start: 541,
            end: 549
        },
        {
            name: "The Black Death",
            description: "A devastating global epidemic of bubonic plague that struck Europe and Asia in the mid-1300s, killing an estimated 30-60% of Europe's population. [4, 30, 32, 45, 46]",
            dates: "1346–1353",
            wiki: "https://en.wikipedia.org/wiki/Black_Death",
            start: 1346,
            end: 1353
        },
        {
            name: "Spanish Flu",
            description: "An unusually deadly influenza pandemic, the first of the two pandemics involving H1N1 influenza virus.",
            dates: "1918–1920",
            wiki: "https.wikipedia.org/wiki/Spanish_flu",
            start: 1918,
            end: 1920
        },
        {
            name: "Minoan Eruption of Thera",
            description: "A catastrophic volcanic eruption that devastated the Aegean island of Thera (modern Santorini). The eruption was one of the largest volcanic events in human history. [3, 26, 42, 48, 50]",
            dates: "c. 1600 BC",
            wiki: "https://en.wikipedia.org/wiki/Minoan_eruption",
            start: -1600,
            end: -1599
        },
        {
            name: "Eruption of Mount Vesuvius",
            description: "A catastrophic eruption of Mount Vesuvius that buried the Roman cities of Pompeii and Herculaneum under massive pyroclastic flows and ash deposits.",
            dates: "79 AD",
            wiki: "https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79",
            start: 79,
            end: 80
        },
        {
            name: "1556 Shaanxi Earthquake",
            description: "The deadliest earthquake in recorded history, it occurred in the Shaanxi province of China and is estimated to have killed around 830,000 people.",
            dates: "1556",
            wiki: "https.wikipedia.org/wiki/1556_Shaanxi_earthquake",
            start: 1556,
            end: 1557
        },
        {
            name: "1755 Lisbon Earthquake",
            description: "A major earthquake, followed by a tsunami and fires, that almost totally destroyed Lisbon and adjoining areas.",
            dates: "1755",
            wiki: "https.wikipedia.org/wiki/1755_Lisbon_earthquake",
            start: 1755,
            end: 1756
        },
        {
            name: "2004 Indian Ocean Tsunami",
            description: "An undersea megathrust earthquake that triggered a series of devastating tsunamis along the coasts of most landmasses bordering the Indian Ocean.",
            dates: "2004",
            wiki: "https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake_and_tsunami",
            start: 2004,
            end: 2005
        },
        {
            name: "Great Famine of 1315–1317",
            description: "The first of a series of large-scale crises that struck Europe early in the fourteenth century, causing millions of deaths over an extended number of years and marking a clear end to the period of growth and prosperity from the eleventh to the thirteenth centuries.",
            dates: "1315–1317",
            wiki: "https://en.wikipedia.org/wiki/Great_Famine_of_1315%E2%80%931317",
            start: 1315,
            end: 1317
        },
        {
            name: "Great Irish Famine",
            description: "A period of mass starvation and disease in Ireland from 1845 to 1849, during which the population of Ireland was reduced by 20 to 25 percent.",
            dates: "1845–1852",
            wiki: "https.wikipedia.org/wiki/Great_Famine_(Ireland)",
            start: 1845,
            end: 1852
        },
        {
            name: "Great Chinese Famine",
            description: "A period of catastrophic famine in the People's Republic of China between 1959 and 1961, during which tens of millions of people are estimated to have died.",
            dates: "1959–1961",
            wiki: "https://en.wikipedia.org/wiki/Great_Chinese_Famine",
            start: 1959,
            end: 1961
        },
        {
            name: "Megafauna Extinction",
            description: "The extinction of numerous large animal species around the world during the Quaternary Period, linked to climate change and human hunting.",
            dates: "c. 50,000–10,000 BC",
            wiki: "https://en.wikipedia.org/wiki/Quaternary_extinction_event",
            start: -50000,
            end: -10000
        },
        {
            name: "Neanderthal Extinction",
            description: "The disappearance of Neanderthals from the fossil record, likely due to a combination of factors including competition with modern humans and climate change.",
            dates: "c. 40,000 BC",
            wiki: "https://en.wikipedia.org/wiki/Neanderthal_extinction",
            start: -40000,
            end: -39999
        },
        {
            name: "Denisovan Extinction",
            description: "The disappearance of Denisovans, an archaic human species that interbred with modern humans. The reasons for their extinction are still largely unknown.",
            dates: "c. 50,000-30,000 BC",
            wiki: "https://en.wikipedia.org/wiki/Denisovan",
            start: -50000,
            end: -30000
        },
        {
            name: "Homo erectus Extinction",
            description: "The extinction of one of the longest-lived early human species, possibly due to an inability to adapt to changing environments.",
            dates: "c. 117,000-108,000 BC",
            wiki: "https://en.wikipedia.org/wiki/Homo_erectus#Extinction",
            start: -117000,
            end: -108000
        },
        {
            name: "Homo floresiensis Extinction",
            description: "The extinction of a species of small archaic human that inhabited the island of Flores, Indonesia, possibly due to competition with modern humans.",
            dates: "c. 50,000 BC",
            wiki: "https://en.wikipedia.org/wiki/Homo_floresiensis#Extinction",
            start: -50000,
            end: -49999
        },
        {
            name: "Barringer Crater Impact",
            description: "A meteorite impact event that created the Barringer Meteor Crater in Arizona, USA. It is one of the best-preserved impact craters on Earth.",
            dates: "c. 48,000 BC",
            wiki: "https://en.wikipedia.org/wiki/Meteor_Crater",
            start: -48000,
            end: -47999
        },
        {
            name: "Doggerland Flooding",
            description: "A gradual process of sea-level rise that submerged a large landmass that once connected Great Britain to continental Europe.",
            dates: "c. 8000–5000 BC",
            wiki: "https://en.wikipedia.org/wiki/Doggerland",
            start: -8000,
            end: -5000
        },
        {
            name: "Neolithic Wars",
            description: "Conflicts during the Neolithic period, marked by increasing evidence of organized warfare, likely driven by competition for resources and land.",
            dates: "c. 8000–3000 BC",
            wiki: "https://en.wikipedia.org/wiki/Prehistoric_warfare#Neolithic",
            start: -8000,
            end: -3000
        },
        {
            name: "Toba Supereruption",
            description: "A supervolcanic eruption that occurred at the site of present-day Lake Toba in Sumatra, Indonesia. It is one of the Earth's largest known explosive eruptions.",
            dates: "c. 72,000 BC",
            wiki: "https://en.wikipedia.org/wiki/Toba_catastrophe_theory",
            start: -72000,
            end: -71999
        },
        {
            name: "Laacher See Eruption",
            description: "A major volcanic eruption in the Eifel volcanic field in western Germany, which created the Laacher See caldera.",
            dates: "c. 10,900 BC",
            wiki: "https://en.wikipedia.org/wiki/Laacher_See",
            start: -10900,
            end: -10899
        },
        {
            name: "Mount Mazama Eruption (Crater Lake)",
            description: "A major volcanic eruption in southern Oregon that led to the formation of Crater Lake. It was one of the largest eruptions in the Cascade Range in the last million years.",
            dates: "c. 5700 BC",
            wiki: "https://en.wikipedia.org/wiki/Mount_Mazama",
            start: -5700,
            end: -5699
        },
        {
            name: "Mongolian Conquests",
            description: "A series of invasions and conquests by the Mongol Empire that created the largest contiguous empire in history.",
            dates: "1206–1368",
            wiki: "https://en.wikipedia.org/wiki/Mongol_invasions_and_conquests",
            start: 1206,
            end: 1368
        },
        {
            name: "Alexander the Great's Wars",
            description: "A series of conquests by Alexander the Great of Macedon, which resulted in the creation of one of the largest empires of the ancient world.",
            dates: "336–323 BC",
            wiki: "https://en.wikipedia.org/wiki/Wars_of_Alexander_the_Great",
            start: -336,
            end: -323
        },
        {
            name: "Dot Com Bubble",
            description: "A stock market bubble caused by excessive speculation in internet-related companies in the late 1990s, a period of massive growth in the use and adoption of the Internet. [10, 15, 21, 29, 31]",
            dates: "1995–2002",
            wiki: "https://en.wikipedia.org/wiki/Dot-com_bubble",
            start: 1995,
            end: 2002
        },
        {
            name: "Global Financial Crisis",
            description: "A severe worldwide economic crisis that occurred in the late 2000s and early 2010s. It was the most serious financial crisis since the Great Depression.",
            dates: "2007–2008",
            wiki: "https://en.wikipedia.org/wiki/Global_financial_crisis",
            start: 2007,
            end: 2008
        },
        {
            name: "Russo-Ukrainian War",
            description: "An ongoing war between Russia and Ukraine, which began in February 2014. The war has been focused on the status of Crimea and parts of the Donbas, which are internationally recognized as part of Ukraine.",
            dates: "2014–Present",
            wiki: "https://en.wikipedia.org/wiki/Russo-Ukrainian_War",
            start: 2014,
            end: 2025
        },
        {
            name: "Punic Wars",
            description: "A series of three wars fought between Rome and Carthage from 264 BC to 146 BC. They were some of the largest wars of the ancient world.",
            dates: "264–146 BC",
            wiki: "https://en.wikipedia.org/wiki/Punic_Wars",
            start: -264,
            end: -146
        },
        {
            name: "Caesar's Civil War",
            description: "One of the last politico-military conflicts in the Roman Republic before the establishment of the Roman Empire. It was fought between Julius Caesar and his political opponents.",
            dates: "49–45 BC",
            wiki: "https://en.wikipedia.org/wiki/Caesar%27s_Civil_War",
            start: -49,
            end: -45
        },
        {
            name: "Wars of the Roses",
            description: "A series of English civil wars for control of the throne of England, fought between supporters of two rival cadet branches of the royal House of Plantagenet: the House of Lancaster and the House of York.",
            dates: "1455–1487",
            wiki: "https://en.wikipedia.org/wiki/Wars_of_the_Roses",
            start: 1455,
            end: 1487
        },
        {
            name: "Hyksos Invasion of Egypt",
            description: "The migration of the Hyksos, a people of Asiatic origin, into the eastern Nile Delta, which led to their rule over Lower and Middle Egypt during the Second Intermediate Period.",
            dates: "c. 1650 BC",
            wiki: "https://en.wikipedia.org/wiki/Hyksos",
            start: -1650,
            end: -1649
        },
        {
            name: "Assyrian Conquest of Egypt",
            description: "The conquest of Egypt by the Neo-Assyrian Empire, which resulted in the destruction of the Kushite Empire's control over Egypt.",
            dates: "677–663 BC",
            wiki: "https://en.wikipedia.org/wiki/Assyrian_conquest_of_Egypt",
            start: -677,
            end: -663
        },
        {
            name: "Collapse of the Assyrian Empire",
            description: "The fall of the Neo-Assyrian Empire, brought about by a coalition of subject peoples, including the Babylonians and the Medes.",
            dates: "c. 627–609 BC",
            wiki: "https://en.wikipedia.org/wiki/Medo-Babylonian_conquest_of_the_Assyrian_Empire",
            start: -627,
            end: -609
        },
        {
            name: "Warring States Period",
            description: "An era in ancient Chinese history characterized by warfare, as well as bureaucratic and military reforms and consolidation. It followed the Spring and Autumn period and concluded with the Qin wars of conquest that saw the annexation of all other contender states. [8, 17, 23, 24, 27]",
            dates: "475–221 BC",
            wiki: "https://en.wikipedia.org/wiki/Warring_States_period",
            start: -475,
            end: -221
        },
        {
            name: "An Lushan Rebellion",
            description: "A devastating rebellion against the Tang dynasty of China from 755 to 763. It significantly weakened the dynasty and led to the loss of the Western Regions.",
            dates: "755–763",
            wiki: "https://en.wikipedia.org/wiki/An_Lushan_Rebellion",
            start: 755,
            end: 763
        },
        {
            name: "First Chechen War",
            description: "A conflict between the Russian Federation and the Chechen Republic of Ichkeria from 1994 to 1996, which resulted in a de facto independence for Chechnya. [1, 11, 22, 38, 44]",
            dates: "1994–1996",
            wiki: "https://en.wikipedia.org/wiki/First_Chechen_War",
            start: 1994,
            end: 1996
        },
        {
            name: "Second Chechen War",
            description: "An armed conflict in Chechnya and the border regions of the North Caucasus between the Russian Federation and the Chechen Republic of Ichkeria, from August 1999 to April 2009.",
            dates: "1999–2009",
            wiki: "https://en.wikipedia.org/wiki/Second_Chechen_War",
            start: 1999,
            end: 2009
        },
        {
            name: "American Revolutionary War",
            description: "An insurrection by American Patriots in the 13 colonies to British rule, resulting in American independence.",
            dates: "1775–1783",
            wiki: "https://en.wikipedia.org/wiki/American_Revolutionary_War",
            start: 1775,
            end: 1783
        },
        {
            name: "War of 1812",
            description: "A conflict fought between the United States and its allies, and the United Kingdom and its dependent colonies in North America and its allies.",
            dates: "1812–1815",
            wiki: "https://en.wikipedia.org/wiki/War_of_1812",
            start: 1812,
            end: 1815
        },
        {
            name: "Mexican-American War",
            description: "An armed conflict between the United States and Mexico from 1846 to 1848. It followed in the wake of the 1845 U.S. annexation of Texas, which Mexico considered part of its territory.",
            dates: "1846–1848",
            wiki: "https.en.wikipedia.org/wiki/Mexican%E2%80%93American_War",
            start: 1846,
            end: 1848
        },
        {
            name: "Viking Raids on Ireland",
            dates: "c. 795–902 AD",
            description: "Beginning with raids on coastal monasteries, Vikings later established fortified settlements (longphorts) and founded Ireland's first major towns, including Dublin.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/The_marriage_of_Aoife_and_Strongbow.jpg/300px-The_marriage_of_Aoife_and_Strongbow.jpg",
            wiki: "https://en.wikipedia.org/wiki/Early_Scandinavian_Dublin",
            start: 795,
            end: 902
        },
        {
            name: "Great Heathen Army in England",
            dates: "865–878 AD",
            description: "A large coalition of Viking warriors who invaded England, conquering several Anglo-Saxon kingdoms. This led to the establishment of the Danelaw, a region under Viking control.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/The_Great_Heathen_Army.jpg/300px-The_Great_Heathen_Army.jpg",
            wiki: "https://en.wikipedia.org/wiki/Great_Heathen_Army",
            start: 865,
            end: 878
        },
        {
            name: "Founding of Normandy",
            dates: "c. 911 AD",
            description: "The Viking leader Rollo was granted the territory of Normandy by the Frankish king Charles the Simple in exchange for protecting the kingdom from other Viking raiders.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Charles_III_of_France_and_Rollo_of_Normandy%2C_1911.jpg/300px-Charles_III_of_France_and_Rollo_of_Normandy%2C_1911.jpg",
            wiki: "https://en.wikipedia.org/wiki/Duchy_of_Normandy",
            start: 911,
            end: 912
        },
        {
            name: "Viking Conquest of England",
            dates: "1013–1016 AD",
            description: "Sweyn Forkbeard, King of Denmark, became the first Viking king to conquer all of England in 1013. His son, Cnut the Great, solidified this rule, creating a North Sea Empire.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Cnut_the_Great_in_his_court.jpg/300px-Cnut_the_Great_in_his_court.jpg",
            wiki: "https://en.wikipedia.org/wiki/Cnut_the_Great#King_of_England",
            start: 1013,
            end: 1016
        },
        {
            name: "Persian Constitutional Revolution",
            dates: "c. 1905–1911 AD",
            description: "A revolution that led to the establishment of a parliament in Persia (Iran) and the country's first constitution.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Constitutional_Revolution_Gathering.jpg/300px-Constitutional_Revolution_Gathering.jpg",
            wiki: "https://en.wikipedia.org/wiki/Persian_Constitutional_Revolution",
            start: 1905,
            end: 1911
        },
        {
            name: "White Revolution",
            dates: "1963–1979 AD",
            description: "A series of far-reaching reforms in Iran launched by the Shah, Mohammad Reza Pahlavi, aimed at modernizing the country.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/White_Revolution_referendum_1963.jpg/300px-White_Revolution_referendum_1963.jpg",
            wiki: "https://en.wikipedia.org/wiki/White_Revolution",
            start: 1963,
            end: 1979
        },
        {
            name: "Iranian Revolution",
            dates: "1978–1979 AD",
            description: "A series of events that resulted in the overthrow of the Pahlavi dynasty and the establishment of the Islamic Republic of Iran.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Protests_in_Tehran%2C_1978.jpg/300px-Protests_in_Tehran%2C_1978.jpg",
            wiki: "https://en.wikipedia.org/wiki/Iranian_Revolution",
            start: 1978,
            end: 1979
        },
        {
            name: "Spanish-American War",
            description: "A conflict fought between Spain and the United States in 1898. The war began in the aftermath of the internal explosion of the USS Maine in Havana Harbor in Cuba, leading to U.S. intervention in the Cuban War of Independence.",
            dates: "1898",
            wiki: "https://en.wikipedia.org/wiki/Spanish%E2%80%93American_War",
            start: 1898,
            end: 1899
        },
        {
            name: "First Opium War",
            description: "A conflict between Britain and China from 1839 to 1842 that arose from China's attempts to suppress the illegal opium trade. [1, 4, 5, 7]",
            dates: "1839–1842",
            wiki: "https://en.wikipedia.org/wiki/First_Opium_War",
            start: 1839,
            end: 1842
        },
        {
            name: "Second Opium War",
            description: "A war from 1856 to 1860, pitting the British Empire and the French Empire against the Qing dynasty of China. The conflict was a continuation of the First Opium War. [1, 2, 3, 5]",
            dates: "1856–1860",
            wiki: "https://en.wikipedia.org/wiki/Second_Opium_War",
            start: 1856,
            end: 1860
        },
        {
        name: "Spanish Civil War",
        description: "A military revolt, led by General Francisco Franco, against the Republican government of Spain. The conflict ended with a Nationalist victory and Franco ruling Spain as a dictator until his death in 1975. [1, 4, 5, 6, 7]",
        dates: "1936–1939",
        wiki: "https://en.wikipedia.org/wiki/Spanish_Civil_War",
        start: 1936,
        end: 1939
        },
        {
            name: "Russo-Japanese War",
            description: "A military conflict between the Russian Empire and the Empire of Japan from 1904 to 1905, primarily over rival imperial ambitions in Manchuria and Korea.",
            dates: "1904–1905",
            wiki: "https://en.wikipedia.org/wiki/Russo-Japanese_War",
            start: 1904,
            end: 1905
        },
        {
            name: "Sino-Japanese War",
            description: "A conflict between China and Japan from 1937 to 1945, which was part of the larger conflict of World War II. It resulted in significant territorial losses for China and marked Japan's rise as a major military power.",
            dates: "1937–1945",
            wiki: "https://en.wikipedia.org/wiki/Sino-Japanese_War_(1937%E2%80%931945)",
            start: 1937,
            end: 1945
        },
        {
        name: "Italo-Turkish War",
        description: "A conflict fought between the Kingdom of Italy and the Ottoman Empire from September 29, 1911, to October 18, 1912. [2, 5] Italy's primary motivation was to gain colonies in North Africa by conquering the Turkish provinces of Tripolitana and Cyrenaica, which constitute modern Libya. [6] The war ended with the Treaty of Lausanne, in which Turkey conceded its rights over Tripoli and Cyrenaica to Italy. [6]",
        dates: "1911–1912",
        wiki: "https://en.wikipedia.org/wiki/Italo-Turkish_War",
        start: 1911,
        end: 1912
        },
        {
            name: "Gulf War",
            description: "A conflict between Iraq and a coalition of 35 nations led by the United States, following Iraq's invasion of Kuwait in 1990. The war resulted in the liberation of Kuwait and significant damage to Iraq's military infrastructure.",
            dates: "1990–1991",
            wiki: "https://en.wikipedia.org/wiki/Gulf_War",
            start: 1990,
            end: 1991
        },
        {
            name: "Iraq War",
            description: "A protracted armed conflict that began with the invasion of Iraq by a United States-led coalition in March 2003, resulting in the toppling of Saddam Hussein's regime.",
            dates: "2003–2011",
            wiki: "https://en.wikipedia.org/wiki/Iraq_War",
            start: 2003,
            end: 2011
        },
        {
            name: "Syrian Civil War",
            description: "An ongoing multi-sided armed conflict in Syria, which began in 2011 as part of the wider wave of the Arab Spring protests. The war has resulted in significant loss of life and displacement of people.",
            dates: "2011–Present",
            wiki: "https://en.wikipedia.org/wiki/Syrian_Civil_War",
            start: 2011,
            end: 2025
        },
        {
            name: "Yugoslav Wars",
            description: "A series of ethnically-based wars and conflicts fought in the former Yugoslavia from 1991 to 2001, following the breakup of the country.",
            dates: "1991–2001",
            wiki: "https://en.wikipedia.org/wiki/Yugoslav_Wars",
            start: 1991,
            end: 2001
        },
        {
            name: "Russian Civil War",
            description: "A multi-party war in the former Russian Empire fought between the Bolshevik Red Army and a loose confederation of anti-Bolshevik groups known as the White Army.",
            dates: "1917–1922",
            wiki: "https://en.wikipedia.org/wiki/Russian_Civil_War",
            start: 1917,
            end: 1922
        },
        {
            name: "Xinhai Revolution",
            description: "The revolution that overthrew China's last imperial dynasty, the Qing dynasty, and led to the establishment of the Republic of China.",
            dates: "1911–1912",
            wiki: "https://en.wikipedia.org/wiki/Xinhai_Revolution",
            start: 1911,
            end: 1912
        },
        {
            name: "Franco-Prussian War",
            description: "A conflict between the Second French Empire and the North German Confederation led by the Kingdom of Prussia. The decisive German victory brought about the final unification of Germany and the fall of the French Empire.",
            dates: "1870–1871",
            wiki: "https://en.wikipedia.org/wiki/Franco-Prussian_War",
            start: 1870,
            end: 1871
        },
        {
            name: "Crimean War",
            description: "A military conflict fought from October 1853 to February 1856 in which Russia lost to an alliance of the Ottoman Empire, France, Britain and Sardinia.",
            dates: "1853–1856",
            wiki: "https://en.wikipedia.org/wiki/Crimean_War",
            start: 1853,
            end: 1856
        },
        {
            name: "Russo-Turkish War (1828–1829)",
            description: "Sparked by the Greek War of Independence, this war resulted in a Russian victory and the signing of the Treaty of Adrianople, which gave Russia new territory on the Black Sea coast.",
            dates: "1828–1829",
            wiki: "https://en.wikipedia.org/wiki/Russo-Turkish_War_(1828%E2%80%931829)",
            start: 1828,
            end: 1829
        },
        {
            name: "Russo-Turkish War (1877–1878)",
            description: "A conflict between the Ottoman Empire and a coalition led by the Russian Empire, which resulted in the independence of Romania, Serbia and Montenegro from Ottoman rule.",
            dates: "1877–1878",
            wiki: "https://en.wikipedia.org/wiki/Russo-Turkish_War_(1877%E2%80%931878)",
            start: 1877,
            end: 1878
        },
        {
            name: "Swedish War of Liberation",
            description: "A rebellion and civil war in which the Swedish nobleman Gustav Vasa successfully deposed King Christian II, ending the Kalmar Union and leading to Sweden's independence. [7, 17, 18]",
            dates: "1521–1523",
            wiki: "https://en.wikipedia.org/wiki/Swedish_War_of_Liberation",
            start: 1521,
            end: 1523
        },
        {
            name: "Great Northern War",
            description: "A conflict in which a coalition led by the Tsardom of Russia successfully contested the supremacy of the Swedish Empire in Northern, Central and Eastern Europe. [5, 8, 11]",
            dates: "1700–1721",
            wiki: "https://en.wikipedia.org/wiki/Great_Northern_War",
            start: 1700,
            end: 1721
        },
        {
            name: "Franco-Swedish War",
            description: "Sweden's first involvement in the Napoleonic Wars, joining the Third Coalition in an effort to defeat France under Napoleon Bonaparte. [6]",
            dates: "1805–1810",
            wiki: "https://en.wikipedia.org/wiki/Franco-Swedish_War",
            start: 1805,
            end: 1810
        },
        {
            name: "Finnish War",
            description: "A conflict fought between the Kingdom of Sweden and the Russian Empire, as a part of the Napoleonic Wars, which resulted in the eastern third of Sweden being established as the autonomous Grand Duchy of Finland within the Russian Empire. [13, 16]",
            dates: "1808–1809",
            wiki: "https://en.wikipedia.org/wiki/Finnish_War",
            start: 1808,
            end: 1809
        },
        {
            name: "Swedish–Norwegian War",
            description: "A war fought between Sweden and Norway in the summer of 1814, resulting in Norway entering into a personal union with Sweden. [13, 23]",
            dates: "1814",
            wiki: "https://en.wikipedia.org/wiki/Swedish%E2%80%93Norwegian_War_(1814)",
            start: 1814,
            end: 1815
        },
        {
            name: "Wall Street Crash of 1929",
            dates: "1929 AD",
            description: "A major American stock market crash that occurred in the autumn of 1929. [1] It started in September and ended late in October, when share prices on the New York Stock Exchange collapsed. [5] The crash signaled the beginning of the 10-year Great Depression that affected all Western industrialized countries. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Crowd_gathering_on_Wall_Street_after_the_1929_crash.jpg/220px-Crowd_gathering_on_Wall_Street_after_the_1929_crash.jpg",
            wiki: "https://en.wikipedia.org/wiki/Wall_Street_crash_of_1929",
            start: 1929,
            end: 1930
        }

    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117100;

    crises.forEach(crisis => {
        const leftPosition = `calc((${crisis.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${crisis.end - crisis.start}) / ${totalYearsVar} * 100%)`;

    const itemHTML = `
        <div class="timeline-item crises" style="left: ${leftPosition}; width: ${itemWidth};">
        <div class="permanent-name">${crisis.name}</div>
        <div class="lifespan" style="width: 100%;"></div>
        <div class="marker"></div>
            <div class="timeline-content">
                ${crisis.img ? `<img src="${crisis.img}" alt="${crisis.name}" class="crises">` : ''}
                <div class="event-details">
                    <h3>${crisis.name}</h3>
                    <p class="dates">${crisis.dates}</p>
                    <p>${crisis.description || ''}</p>
                    <div class="links">
                        <a href="${crisis.wiki}" target="_blank" class="link wiki-link">Wiki</a>
                    </div>
                </div>
            </div>
        </div>
    `;
        wrapper.insertAdjacentHTML('beforeend', itemHTML);
    });
});
