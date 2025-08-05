document.addEventListener('DOMContentLoaded', function() {
    const eras = [
        {
            name: "Last Glacial Period",
            dates: "c. 115,000 – 9,700 BC",
            description: "The most recent glacial period, colloquially known as the 'Ice Age.' Vast ice sheets covered large parts of the world. [2]",
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
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117025;

    eras.forEach(era => {
        const leftPosition = `calc((${era.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${era.end - era.start}) / ${totalYearsVar} * 100%)`;
        const displayName = era.displayName || era.name;

        const itemHTML = `
            <div class="timeline-item era" style="left: ${leftPosition}; width: ${itemWidth};">
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