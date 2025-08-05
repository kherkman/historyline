document.addEventListener('DOMContentLoaded', function() {
    const crises = [
        {
            name: "Tulip Mania",
            dates: "1637",
            wiki: "https://en.wikipedia.org/wiki/Tulip_mania",
            start: 1637,
            end: 1638
        },
        {
            name: "South Sea Bubble",
            dates: "1720",
            wiki: "https://en.wikipedia.org/wiki/South_Sea_Company",
            start: 1720,
            end: 1721
        },
        {
            name: "Long Depression",
            dates: "1873–1879",
            wiki: "https://en.wikipedia.org/wiki/Long_Depression",
            start: 1873,
            end: 1879
        },
        {
            name: "Great Depression",
            dates: "1929–1939",
            wiki: "https://en.wikipedia.org/wiki/Great_Depression",
            start: 1929,
            end: 1939
        },
        {
            name: "1973 Oil Crisis",
            dates: "1973",
            wiki: "https://en.wikipedia.org/wiki/1973_oil_crisis",
            start: 1973,
            end: 1974
        },
        {
            name: "Asian Financial Crisis",
            dates: "1997-1998",
            wiki: "https://en.wikipedia.org/wiki/1997_Asian_financial_crisis",
            start: 1997,
            end: 1998
        },
        {
            name: "Fall of the Western Roman Empire",
            dates: "476",
            wiki: "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire",
            start: 476,
            end: 477
        },
        {
            name: "Fall of Constantinople",
            dates: "1453",
            wiki: "https://en.wikipedia.org/wiki/Fall_of_Constantinople",
            start: 1453,
            end: 1454
        },
        {
            name: "The Crusades",
            dates: "1095–1291",
            wiki: "https://en.wikipedia.org/wiki/Crusades",
            start: 1095,
            end: 1291
        },
        {
            name: "Thirty Years' War",
            dates: "1618–1648",
            wiki: "https://en.wikipedia.org/wiki/Thirty_Years%27_War",
            start: 1618,
            end: 1648
        },
        {
            name: "French Revolution",
            dates: "1789–1799",
            wiki: "https://en.wikipedia.org/wiki/French_Revolution",
            start: 1789,
            end: 1799
        },
        {
            name: "Napoleonic Wars",
            dates: "1803–1815",
            wiki: "https://en.wikipedia.org/wiki/Napoleonic_Wars",
            start: 1803,
            end: 1815
        },
        {
            name: "American Civil War",
            dates: "1861–1865",
            wiki: "https://en.wikipedia.org/wiki/American_Civil_War",
            start: 1861,
            end: 1865
        },
        {
            name: "World War I",
            dates: "1914–1918",
            wiki: "https://en.wikipedia.org/wiki/World_War_I",
            start: 1914,
            end: 1918
        },
        {
            name: "World War II",
            dates: "1939–1945",
            wiki: "https://en.wikipedia.org/wiki/World_War_II",
            start: 1939,
            end: 1945
        },
        {
            name: "Korean War",
            dates: "1950–1953",
            wiki: "https://en.wikipedia.org/wiki/Korean_War",
            start: 1950,
            end: 1953
        },
        {
            name: "Vietnam War",
            dates: "1955–1975",
            wiki: "https://en.wikipedia.org/wiki/Vietnam_War",
            start: 1955,
            end: 1975
        },
        {
            name: "Fall of the Akkadian Empire",
            dates: "c. 2154 BC",
            wiki: "https://en.wikipedia.org/wiki/Akkadian_Empire#Collapse",
            start: -2154,
            end: -2153
        },
        {
            name: "Battle of Kadesh",
            dates: "c. 1274 BC",
            wiki: "https://en.wikipedia.org/wiki/Battle_of_Kadesh",
            start: -1274,
            end: -1273
        },
        {
            name: "Trojan War",
            dates: "c. 1194–1184 BC",
            wiki: "https://en.wikipedia.org/wiki/Trojan_War",
            start: -1194,
            end: -1184
        },
        {
            name: "Fall of the Hittite Empire",
            dates: "c. 1180 BC",
            wiki: "https://en.wikipedia.org/wiki/Hittites#Fall_of_the_Hittite_Empire",
            start: -1180,
            end: -1179
        },
        {
            name: "Late Bronze Age Collapse",
            dates: "c. 1200–1150 BC",
            wiki: "https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse",
            start: -1200,
            end: -1150
        },
        {
            name: "Plague of Justinian",
            dates: "541–549",
            wiki: "https://en.wikipedia.org/wiki/Plague_of_Justinian",
            start: 541,
            end: 549
        },
        {
            name: "The Black Death",
            dates: "1346–1353",
            wiki: "https://en.wikipedia.org/wiki/Black_Death",
            start: 1346,
            end: 1353
        },
        {
            name: "Spanish Flu",
            dates: "1918–1920",
            wiki: "https://en.wikipedia.org/wiki/Spanish_flu",
            start: 1918,
            end: 1920
        },
        {
            name: "Minoan Eruption of Thera",
            dates: "c. 1600 BC",
            wiki: "https://en.wikipedia.org/wiki/Minoan_eruption",
            start: -1600,
            end: -1599
        },
        {
            name: "Eruption of Mount Vesuvius",
            dates: "79 AD",
            wiki: "https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79",
            start: 79,
            end: 80
        },
        {
            name: "1556 Shaanxi Earthquake",
            dates: "1556",
            wiki: "https://en.wikipedia.org/wiki/1556_Shaanxi_earthquake",
            start: 1556,
            end: 1557
        },
        {
            name: "1755 Lisbon Earthquake",
            dates: "1755",
            wiki: "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
            start: 1755,
            end: 1756
        },
        {
            name: "2004 Indian Ocean Tsunami",
            dates: "2004",
            wiki: "https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake_and_tsunami",
            start: 2004,
            end: 2005
        },
        {
            name: "Great Famine of 1315–1317",
            dates: "1315–1317",
            wiki: "https://en.wikipedia.org/wiki/Great_Famine_of_1315%E2%80%931317",
            start: 1315,
            end: 1317
        },
        {
            name: "Great Irish Famine",
            dates: "1845–1852",
            wiki: "https://en.wikipedia.org/wiki/Great_Famine_(Ireland)",
            start: 1845,
            end: 1852
        },
        {
            name: "Great Chinese Famine",
            dates: "1959–1961",
            wiki: "https://en.wikipedia.org/wiki/Great_Chinese_Famine",
            start: 1959,
            end: 1961
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117025;

    crises.forEach(crisis => {
        const leftPosition = `calc((${crisis.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${crisis.end - crisis.start}) / ${totalYearsVar} * 100%)`;

    const itemHTML = `
        <div class="timeline-item crises" style="left: ${leftPosition}; width: ${itemWidth};">
        <div class="permanent-name">${crisis.name}</div>
        <div class="lifespan" style="width: 100%;"></div>
        <div class="marker"></div>
            <div class="timeline-content">
                <div class="event-details">
                    <h3>${crisis.name}</h3>
                    <p>${crisis.dates}</p>
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