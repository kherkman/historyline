document.addEventListener('DOMContentLoaded', function() {
    const eras = [
        {
            name: "Last Glacial Period",
            dates: "c. 115,000 – 9,700 BC",
            description: "The most recent glacial period, colloquially known as the 'Ice Age.' Vast ice sheets covered large parts of the world.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nasa_giss_lgm_temperature_map_and_ice_sheets.jpeg/220px-Nasa_giss_lgm_temperature_map_and_ice_sheets.jpeg",
            wiki: "https://en.wikipedia.org/wiki/Last_Glacial_Period",
            start: -115000,
            end: -9700
        },
        {
            name: "Holocene",
            dates: "c. 9,700 BC – present",
            description: "The current geological epoch, which began after the Last Glacial Period. It is a relatively warm period and has seen the development of human civilization. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VeyoVolcano.jpg/220px-VeyoVolcano.jpg",
            wiki: "https://en.wikipedia.org/wiki/Holocene",
            start: -9700,
            end: 2025
        },
        {
            name: "First Human Settlement of Africa",
            dates: "c. 300,000 BC",
            description: "Our species, Homo sapiens, originated in Africa. A combination of genetic and fossil evidence indicates that the earliest humans emerged in Africa about 300,000 years ago. [19]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VeyoVolcano.jpg/220px-VeyoVolcano.jpg",
            wiki: "https://en.wikipedia.org/wiki/Human_evolution#Homo_sapiens",
            start: -300000,
            end: -299999
        },
        {
            name: "First Human Settlement of Asia",
            dates: "c. 70,000 BC",
            description: "The recent African origin theory suggests that the anatomically modern humans outside of Africa descend from a population of Homo sapiens migrating from East Africa roughly 70–50,000 years ago and spreading along the southern coast of Asia. [3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VeyoVolcano.jpg/220px-VeyoVolcano.jpg",
            wiki: "https://en.wikipedia.org/wiki/Early_human_migrations#Coastal_route",
            start: -70000,
            end: -69999
        },
        {
            name: "First Human Settlement of Europe",
            dates: "c. 45,000 BC",
            description: "Modern humans entered Europe around 45,000 years ago, and soon after replaced Neanderthals. [20]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Skara_Brae_-_5th_August_2007.jpg/320px-Skara_Brae_-_5th_August_2007.jpg",
            wiki: "https://en.wikipedia.org/wiki/Early_European_modern_humans",
            start: -45000,
            end: -44999
        },
        {
            name: "First Human Settlement of Australia",
            dates: "c. 50,000 BC",
            description: "The first humans are thought to have arrived in Australia around 50,000 years ago. [3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Skara_Brae_-_5th_August_2007.jpg/320px-Skara_Brae_-_5th_August_2007.jpg",
            wiki: "https://en.wikipedia.org/wiki/Prehistory_of_Australia",
            start: -50000,
            end: -49999
        },
        {
            name: "First Human Settlement of North America",
            dates: "c. 20,000 BC",
            description: "Academics generally believe that humans reached North America south of the Laurentide Ice Sheet at some point between 15,000 and 20,000 years ago. [5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Skara_Brae_-_5th_August_2007.jpg/320px-Skara_Brae_-_5th_August_2007.jpg",
            wiki: "https://en.wikipedia.org/wiki/Peopling_of_the_Americas",
            start: -20000,
            end: -19999
        },
        {
            name: "First Human Settlement of South America",
            dates: "c. 14,500 BC",
            description: "Amongst the oldest evidence for human presence in South America is the Monte Verde II site in Chile, suggested to date to around 14,500 years ago. [44]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Skara_Brae_-_5th_August_2007.jpg/320px-Skara_Brae_-_5th_August_2007.jpg",
            wiki: "https://en.wikipedia.org/wiki/History_of_South_America#Earliest_inhabitants",
            start: -14500,
            end: -14499
        },
        {
            name: "First Agricultural Revolution",
            dates: "c. 10,000 BC",
            description: "The prehistoric transition from hunting and gathering to settled agriculture (also known as the Neolithic Revolution). [4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Skara_Brae_-_5th_August_2007.jpg/320px-Skara_Brae_-_5th_August_2007.jpg",
            wiki: "https://en.wikipedia.org/wiki/Neolithic_Revolution",
            start: -10000,
            end: -9999
        },
        {
            name: "Building of Stonehenge",
            dates: "c. 3000-1500 BC",
            description: "Stonehenge was built in six stages between 3000 and 1520 bce, during the transition from the Neolithic Period (New Stone Age) to the Bronze Age. [16]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mont-Saint-Michel_3.jpg/220px-Mont-Saint-Michel_3.jpg",
            wiki: "https://en.wikipedia.org/wiki/Stonehenge",
            start: -3000,
            end: -1500
        },
        {
            name: "Building of the Pyramids of Giza",
            dates: "c. 2589-2503 BC",
            description: "The Giza pyramid complex was constructed during the 4th Dynasty of the Old Kingdom of ancient Egypt, between 2589 and 2503 BC.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/220px-The_Parthenon_in_Athens.jpg",
            wiki: "https://en.wikipedia.org/wiki/Giza_pyramid_complex",
            start: -2589,
            end: -2503
        },
        {
            name: "Building of the Great Wall of China",
            dates: "c. 7th century BC – 17th century AD",
            description: "The Great Wall was continuously built from the 3rd century BC to the 17th century AD on the northern border of the country as the great military defence project of successive Chinese Empires. [22]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hochdorf_Chieftain%27s_Grave_kettle.jpg/220px-Hochdorf_Chieftain%27s_Grave_kettle.jpg",
            wiki: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
            start: -700,
            end: 1699
        },
        {
            name: "Neolithic Europe",
            dates: "c. 7000–1700 BC",
            description: "The European Neolithic is the period when Neolithic (New Stone Age) technology was present in Europe, c. 7000 BC (the approximate time of the first farming societies in Greece) until c. 2000–1700 BC. [2]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Skara_Brae_-_5th_August_2007.jpg/320px-Skara_Brae_-_5th_August_2007.jpg",
            wiki: "https://en.wikipedia.org/wiki/Neolithic_Europe",
            start: -7000,
            end: -1700
        },
        {
            name: "Chalcolithic Europe",
            dates: "c. 5000–2000 BC",
            description: "The Chalcolithic (also Eneolithic, Copper Age) period of Prehistoric Europe lasted roughly from 5000 to 2000 BC, developing from the preceding Neolithic period and followed by the Bronze Age. [1]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Varna_chalcolithic_necropolis_finds.jpg/220px-Varna_chalcolithic_necropolis_finds.jpg",
            wiki: "https://en.wikipedia.org/wiki/Chalcolithic_Europe",
            start: -5000,
            end: -2000
        },
        {
            name: "Viking Age",
            dates: "c. 793–1066 AD",
            description: "A period of Scandinavian expansion, characterized by raids, trade, and settlement across Europe and the North Atlantic. The era began with the raid on Lindisfarne monastery and ended with the Battle of Stamford Bridge. [4, 8, 15]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Vikings_at_the_Volkhov_River_by_Nicholas_Roerich.jpg/300px-Vikings_at_the_Volkhov_River_by_Nicholas_Roerich.jpg",
            wiki: "https://en.wikipedia.org/wiki/Viking_Age",
            start: 793,
            end: 1066
        },
        {
            name: "Bronze Age",
            dates: "c. 3200–800 BC",
            description: "This era is defined by the use of bronze, the rise of warrior elites, and the development of trade networks across Europe.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nebra_Scheibe.jpg/220px-Nebra_Scheibe.jpg",
            wiki: "https://en.wikipedia.org/wiki/Bronze_Age_Europe",
            start: -3200,
            end: -800
        },
        {
            name: "Iron Age",
            dates: "c. 800–1 BC",
            description: "Characterized by the adoption of iron metallurgy, this period saw the emergence of Celtic cultures like Hallstatt and La Tène.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hochdorf_Chieftain%27s_Grave_kettle.jpg/220px-Hochdorf_Chieftain%27s_Grave_kettle.jpg",
            wiki: "https://en.wikipedia.org/wiki/Iron_Age_Europe",
            start: -800,
            end: -1
        },
        {
            name: "Classical Antiquity",
            dates: "c. 800 BC–476 AD",
            description: "This period encompasses the intertwined civilizations of ancient Greece and Rome, which laid the foundations of Western civilization.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/220px-The_Parthenon_in_Athens.jpg",
            wiki: "https://en.wikipedia.org/wiki/Classical_antiquity",
            start: -800,
            end: 476
        },
        {
            name: "Arab Agricultural Revolution",
            dates: "8th–13th century",
            description: "The spread of new crops and advanced techniques in the Muslim world. [4, 33]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mont-Saint-Michel_3.jpg/220px-Mont-Saint-Michel_3.jpg",
            wiki: "https://en.wikipedia.org/wiki/Arab_Agricultural_Revolution",
            start: 700,
            end: 1300
        },
        {
            name: "Middle Ages",
            dates: "c. 476–1500 AD",
            description: "Spanning from the fall of the Western Roman Empire to the Renaissance, this period is divided into the Early, High, and Late Middle Ages.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mont-Saint-Michel_3.jpg/220px-Mont-Saint-Michel_3.jpg",
            wiki: "https://en.wikipedia.org/wiki/Middle_Ages",
            start: 476,
            end: 1400
        },
        {
            name: "Renaissance",
            dates: "c. 1400–1600 AD",
            description: "A fervent period of European cultural, artistic, political and economic 'rebirth' following the Middle Ages, promoting the rediscovery of classical philosophy, literature and art.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Leonardo_da_Vinci_-_Mona_Lisa.jpg/220px-Leonardo_da_Vinci_-_Mona_Lisa.jpg",
            wiki: "https://en.wikipedia.org/wiki/Renaissance",
            start: 1400,
            end: 1600
        },
        {
            name: "Early Modern Period",
            dates: "c. 1500–1800 AD",
            description: "A period of exploration, scientific revolution, and intellectual change with the Reformation, and Enlightenment.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Frontispiece_to_the_Encyclop%C3%A9die.jpg/220px-Frontispiece_to_the_Encyclop%C3%A9die.jpg",
            wiki: "https://en.wikipedia.org/wiki/Early_modern_period",
            start: 1500,
            end: 1800
        },
        {
            name: "British Agricultural Revolution",
            dates: "17th–19th century",
            description: "An unprecedented increase in agricultural productivity in Great Britain (also known as the Second Agricultural Revolution). [4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coalbrookdale_by_Night.jpg/220px-Coalbrookdale_by_Night.jpg",
            wiki: "https://en.wikipedia.org/wiki/British_Agricultural_Revolution",
            start: 1600,
            end: 1900
        },
        {
            name: "Scottish Agricultural Revolution",
            dates: "17th–19th century",
            description: "The transformation into a modern and productive system. [4, 29]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coalbrookdale_by_Night.jpg/220px-Coalbrookdale_by_Night.jpg",
            wiki: "https://en.wikipedia.org/wiki/Scottish_Agricultural_Revolution",
            start: 1600,
            end: 1900
        },
        {
            name: "Book Printing",
            dates: "c. 1440 AD",
            description: "Johannes Gutenberg's invention of the mechanical movable-type printing press started the Printing Revolution, making books and knowledge widely accessible. [7, 8, 11]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gutenberg_press.jpg/220px-Gutenberg_press.jpg",
            wiki: "https://en.wikipedia.org/wiki/Printing_press",
            start: 1440,
            end: 1441
        },
        {
            name: "Bookkeeping",
            dates: "c. 1494 AD",
            description: "Luca Pacioli published the first detailed description of the double-entry bookkeeping system, which became the foundation for modern accounting. [2, 15]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Pacioli.jpg/220px-Pacioli.jpg",
            wiki: "https://en.wikipedia.org/wiki/Double-entry_bookkeeping",
            start: 1494,
            end: 1495
        },
        {
            name: "Witch Hunts",
            dates: "c. 1450–1750 AD",
            description: "A period of intense persecution of people accused of witchcraft in Europe and Colonial America, resulting in an estimated 35,000 to 60,000 executions. [3, 4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Witches_on_the_way_to_the_Sabbath_by_Luis_Ricardo_Falero.jpg/220px-Witches_on_the_way_to_the_Sabbath_by_Luis_Ricardo_Falero.jpg",
            wiki: "https://en.wikipedia.org/wiki/Witch-hunt",
            start: 1450,
            end: 1750
        },
        {
            name: "Enlightenment",
            dates: "c. 1685–1815 AD",
            description: "An intellectual and philosophical movement emphasizing reason, individualism, and skepticism. It challenged traditional authority and inspired revolutions. [12, 20]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Frontispiece_to_the_Encyclop%C3%A9die.jpg/220px-Frontispiece_to_the_Encyclop%C3%A9die.jpg",
            wiki: "https://en.wikipedia.org/wiki/Age_of_Enlightenment",
            start: 1685,
            end: 1815
        },
        {
            name: "Industrial Revolution",
            dates: "c. 1760–1840 AD",
            description: "The Industrial Revolution was a period of major industrialization and innovation that took place during the late 18th and early 19th centuries. It began in Great Britain and quickly spread throughout the world. [3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coalbrookdale_by_Night.jpg/220px-Coalbrookdale_by_Night.jpg",
            wiki: "https://en.wikipedia.org/wiki/Industrial_Revolution",
            start: 1760,
            end: 1840
        },
        {
            name: "Modern Period",
            dates: "c. 1800–2000 AD",
            description: "Marked by industrialization, global conflicts, and rapid technological advancement, shaping the world as we know it today.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_engine_in_action.gif/220px-Steam_engine_in_action.gif",
            wiki: "https://en.wikipedia.org/wiki/Modern_history",
            start: 1800,
            end: 2000
        },
        {
            name: "Third Agricultural Revolution",
            dates: "1930s–1960s",
            description: "An increase in agricultural production, especially in the developing world (also known as the Green Revolution). [4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_engine_in_action.gif/220px-Steam_engine_in_action.gif",
            wiki: "https://en.wikipedia.org/wiki/Green_Revolution",
            start: 1930,
            end: 1969
        },
                {
            name: "Discovery of Gold at Varna, Bulgaria",
            dates: "c. 4600-4200 BC",
            description: "The Varna Necropolis in Bulgaria contains the oldest gold treasure in the world, dating back to 4600–4200 BC. [29] This discovery provides evidence of one of the world's earliest and most sophisticated civilizations with a clear social hierarchy.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Varna_chalcolithic_necropolis_finds.jpg/220px-Varna_chalcolithic_necropolis_finds.jpg",
            wiki: "https://en.wikipedia.org/wiki/Varna_Necropolis",
            start: -4600,
            end: -4200
        },
        {
            name: "Discovery of Copper on the Keweenaw Peninsula, USA",
            dates: "c. 4000 BC",
            description: "Native Americans began mining copper on the Keweenaw Peninsula and Isle Royale in Michigan around 4000 BC. [27] These were some of the earliest known metalworkers in North America, and they created a variety of tools and ornaments from the nearly pure copper found in the region. [27]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/NatCopper.jpg/220px-NatCopper.jpg",
            wiki: "https://en.wikipedia.org/wiki/Old_Copper_Complex",
            start: -4000,
            end: -3999
        },
        {
            name: "Discovery of Tin in Cornwall, England",
            dates: "c. 2150 BC",
            description: "The tin mines in Cornwall and Devon, England, were major sources of tin for the ancient world, with some estimates placing the start of mining as early as 2150 BC. [2, 15] This tin was crucial for the production of bronze and was traded extensively throughout Europe and the Mediterranean. [2]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cassiterite-233157.jpg/220px-Cassiterite-233157.jpg",
            wiki: "https://en.wikipedia.org/wiki/Tin_mining_in_Britain",
            start: -2150,
            end: -2149
        },
        {
            name: "Discovery of Bronze at Pločnik, Serbia",
            dates: "c. 4500 BC",
            description: "The archaeological site of Pločnik in modern-day Serbia has yielded the earliest evidence of tin bronze production, dating to around 4500 BC. [25] This discovery pushed back the beginning of the Bronze Age and highlighted the advanced metallurgical skills of the Vinča culture.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nebra_Scheibe.jpg/220px-Nebra_Scheibe.jpg",
            wiki: "https://en.wikipedia.org/wiki/Plo%C4%8Dnik",
            start: -4500,
            end: -4499
        },
        {
            name: "Discovery of Iron in Anatolia, Turkey",
            dates: "c. 3000 BCE",
            description: "The Hittites in Anatolia (modern-day Turkey) are credited with being among the first to smelt iron from ore around 1500 BCE. [8] However, iron artifacts from as early as 3000 BCE suggest that knowledge of iron was present much earlier. [40]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Natural_History_Museum_of_London_-_Iron_Meteorite.jpg/220px-Natural_History_Museum_of_London_-_Iron_Meteorite.jpg",
            wiki: "https://en.wikipedia.org/wiki/Hittites",
            start: -3000,
            end: -2999
        },
        {
            name: "Discovery of Coal in Richmond, Virginia, USA",
            dates: "1701 AD",
            description: "The first discovery of coal in the United States was recorded near Richmond, Virginia, in 1701. [6] By 1748, the first commercial coal production in the U.S. began from this area, supplying fuel for the growing colonies. [6]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Coal_bituminous.jpg/220px-Coal_bituminous.jpg",
            wiki: "https://en.wikipedia.org/wiki/Richmond,_Virginia",
            start: 1701,
            end: 1702
        },
        {
            name: "Discovery of Diamonds in India",
            dates: "c. 4th Century BC",
            description: "The earliest known diamond discoveries were in India during the 4th century BC, where they were gathered from rivers and streams. [14, 23] For centuries, India was the world's primary source of diamonds. [23]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rough_diamond.jpg/220px-Rough_diamond.jpg",
            wiki: "https://en.wikipedia.org/wiki/History_of_diamonds",
            start: -400,
            end: -399
        },
        {
            name: "First Oil Well in Titusville, Pennsylvania, USA",
            dates: "1859 AD",
            description: "The modern petroleum industry began in 1859 when Edwin Drake drilled the first commercially successful oil well in Titusville, Pennsylvania. [7, 11] This event triggered an oil rush and laid the foundation for the widespread use of petroleum.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Drake_Well_Museum_2016_01.jpg/220px-Drake_Well_Museum_2016_01.jpg",
            wiki: "https://en.wikipedia.org/wiki/Drake_Well",
            start: 1859,
            end: 1860
        },
        {
            name: "Discovery of Static Electricity in Ancient Greece",
            dates: "c. 600 BC",
            description: "The ancient Greeks are credited with the earliest observations of electricity, specifically static electricity. [35] Around 600 BC, Thales of Miletus noted that rubbing amber with fur would cause it to attract light objects. [33]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Benjamin_Franklin_-_Join_or_Die.jpg/220px-Benjamin_Franklin_-_Join_or_Die.jpg",
            wiki: "https://en.wikipedia.org/wiki/History_of_electricity",
            start: -600,
            end: -599
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117100;

    eras.forEach(era => {
        const leftPosition = `calc((${era.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${era.end - era.start}) / ${totalYearsVar} * 100%)`;
        const displayName = era.displayName || era.name;

        const itemHTML = `
            <div class="timeline-item eras" style="left: ${leftPosition}; width: ${itemWidth};">
                <div class="permanent-name">${era.name}</div>
                <div class="lifespan" style="width: 100%;"></div>
                <div class="marker"></div>
                <div class="timeline-content">
                    <img src="${era.img}" alt="${displayName}">
                    <h3>${displayName}</h3>
                    <p>${era.description}</p>
                    <p class="dates">${era.dates}</p>
                    <div class="links">
                        <a href="${era.wiki}" target="_blank" class="link wiki-link">Wiki</a>
                    </div>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', itemHTML);
    });
});
