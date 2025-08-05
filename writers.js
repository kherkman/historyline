document.addEventListener('DOMContentLoaded', function() {
    const writers = [
        {
            name: "Homer",
            dates: "c. 8th Century BC",
            description: "Homer is the legendary author of the Iliad and the Odyssey, two epic poems that are the central works of ancient Greek literature.",
            img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Homer_British_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Homer",
            start: -800,
            end: -750
        },
        {
            name: "Dante Alighieri",
            dates: "1265–1321",
            description: "Dante Alighieri was an Italian poet, writer and philosopher.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Portrait_de_Dante.jpg/220px-Portrait_de_Dante.jpg",
            wiki: "https://en.wikipedia.org/wiki/Dante_Alighieri",
            start: 1265,
            end: 1321
        },
        {
            name: "Shakespeare",
            displayName: "William Shakespeare",
            dates: "1564–1616",
            description: "William Shakespeare was an English playwright, poet, and actor.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg",
            wiki: "https://en.wikipedia.org/wiki/William_Shakespeare",
            start: 1564,
            end: 1616
        },
        {
            name: "Jane Austen",
            dates: "1775–1817",
            description: "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique, and comment upon the British landed gentry at the end of the 18th century.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_transparent.png/220px-CassandraAusten-JaneAusten%28c.1810%29_transparent.png",
            wiki: "https://en.wikipedia.org/wiki/Jane_Austen",
            start: 1775,
            end: 1817
        },
        {
            name: "Leo Tolstoy",
            dates: "1828–1910",
            description: "Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer, who is regarded as one of the greatest authors of all time.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/220px-L.N.Tolstoy_Prokudin-Gorsky.jpg",
            wiki: "https://en.wikipedia.org/wiki/Leo_Tolstoy",
            start: 1828,
            end: 1910
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117025;

    writers.forEach(writer => {
        const leftPosition = `calc((${writer.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${writer.end - writer.start}) / ${totalYearsVar} * 100%)`;
        const displayName = writer.displayName || writer.name;

        const itemHTML = `
            <div class="timeline-item writer" style="left: ${leftPosition}; width: ${itemWidth};">
                <div class="permanent-name">${writer.name}</div>
                <div class="lifespan" style="width: 100%;"></div>
                <div class="marker"></div>
                <div class="timeline-content">
                    <img src="${writer.img}" alt="${displayName}">
                    <h3>${displayName}</h3>
                    <p>${writer.description}</p>
                    <p class="dates">${writer.dates}</p>
                    <div class="links">
                        <a href="${writer.wiki}" target="_blank" class="link wiki-link">Wiki</a>
                    </div>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', itemHTML);
    });
});