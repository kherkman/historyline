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
    const totalYearsVar = 117025;

    scientists.forEach(scientist => {
        const leftPosition = `calc((${scientist.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${scientist.end - scientist.start}) / ${totalYearsVar} * 100%)`;
        const displayName = scientist.displayName || scientist.name;

        const itemHTML = `
            <div class="timeline-item scientist" style="left: ${leftPosition}; width: ${itemWidth};">
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