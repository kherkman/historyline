document.addEventListener('DOMContentLoaded', function() {
    const philosophers = [
        {
            name: "Socrates",
            dates: "c. 469–399 BC",
            description: "Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and among the first moral philosophers of the ethical tradition of thought.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/220px-Socrates_Louvre.jpg",
            wiki: "https://en.wikipedia.org/wiki/Socrates",
            start: -469,
            end: -399
        },
        {
            name: "Plato",
            dates: "c. 428–c. 348 BC",
            description: "Plato was a Greek philosopher born in Athens during the Classical period in Ancient Greece.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/220px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
            wiki: "https://en.wikipedia.org/wiki/Plato",
            start: -428,
            end: -348
        },
        {
            name: "Aristotle",
            dates: "384–322 BC",
            description: "Aristotle was a Greek philosopher and polymath during the Classical period in Ancient Greece.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
            wiki: "https://en.wikipedia.org/wiki/Aristotle",
            start: -384,
            end: -322
        },
        {
            name: "Seneca",
            displayName: "Seneca the Younger",
            dates: "c. 4 BC – AD 65",
            description: "Lucius Annaeus Seneca the Younger was a Roman Stoic philosopher, statesman, and dramatist.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Seneca_budapest.jpg/220px-Seneca_budapest.jpg",
            wiki: "https://en.wikipedia.org/wiki/Seneca_the_Younger",
            start: -4,
            end: 65
        },
        {
            name: "Augustine",
            displayName: "Augustine of Hippo",
            dates: "354–430",
            description: "Augustine of Hippo was a Roman African, early Christian theologian and philosopher from Numidia whose writings influenced the development of Western Christianity and Western philosophy.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Augustine_Lateran.jpg/220px-Augustine_Lateran.jpg",
            wiki: "https://en.wikipedia.org/wiki/Augustine_of_Hippo",
            start: 354,
            end: 430
        },
        {
            name: "Aquinas",
            displayName: "Thomas Aquinas",
            dates: "1225–1274",
            description: "Thomas Aquinas was an Italian Dominican friar, philosopher, Catholic priest, and Doctor of the Church. [4]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/St-thomas-aquinas.jpg/220px-St-thomas-aquinas.jpg",
            wiki: "https://en.wikipedia.org/wiki/Thomas_Aquinas",
            start: 1225,
            end: 1274
        },
        {
            name: "Machiavelli",
            displayName: "Niccolò Machiavelli",
            dates: "1469–1527",
            description: "Niccolò di Bernardo dei Machiavelli was an Italian diplomat, philosopher, and historian who lived during the Renaissance. [19]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg/220px-Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg",
            wiki: "https://en.wikipedia.org/wiki/Machiavelli",
            start: 1469,
            end: 1527
        },
        {
            name: "Descartes",
            displayName: "René Descartes",
            dates: "1596–1650",
            description: "René Descartes was a French philosopher, mathematician, scientist and lay Catholic who is considered to be one of the founders of modern philosophy.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/220px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
            wiki: "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes",
            start: 1596,
            end: 1650
        },
        {
            name: "John Locke",
            displayName: "John Locke",
            dates: "1632–1704",
            description: "John Locke was an English philosopher and physician, widely regarded as one of the most influential of the Enlightenment thinkers and commonly known as the 'Father of Liberalism'. [2]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/JohnLocke.jpg/220px-JohnLocke.jpg",
            wiki: "https://en.wikipedia.org/wiki/John_Locke",
            start: 1632,
            end: 1704
        },
        {
            name: "Kant",
            displayName: "Immanuel Kant",
            dates: "1724–1804",
            description: "Immanuel Kant was a German philosopher and one of the central Enlightenment thinkers.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Immanuel_Kant_%28painted_portrait%29.jpg/220px-Immanuel_Kant_%28painted_portrait%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Immanuel_Kant",
            start: 1724,
            end: 1804
        },
        {
            name: "Nietzsche",
            displayName: "Friedrich Nietzsche",
            dates: "1844–1900",
            description: "Friedrich Wilhelm Nietzsche was a German philosopher, cultural critic, and philologist whose work has exerted a profound influence on modern intellectual history.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/220px-Nietzsche187a.jpg",
            wiki: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
            start: 1844,
            end: 1900
        },
        {
            name: "Sartre",
            displayName: "Jean-Paul Sartre",
            dates: "1905–1980",
            description: "Jean-Paul Charles Aymard Sartre was a French philosopher, playwright, novelist, political activist, biographer, and literary critic. [3]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sartre_1967_crop.jpg/220px-Sartre_1967_crop.jpg",
            wiki: "https://en.wikipedia.org/wiki/Jean-Paul_Sartre",
            start: 1905,
            end: 1980
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117025;

    philosophers.forEach(philosopher => {
        const leftPosition = `calc((${philosopher.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${philosopher.end - philosopher.start}) / ${totalYearsVar} * 100%)`;
        const displayName = philosopher.displayName || philosopher.name;

        const itemHTML = `
            <div class="timeline-item philosopher" style="left: ${leftPosition}; width: ${itemWidth};">
                <div class="permanent-name">${philosopher.name}</div>
                <div class="lifespan" style="width: 100%;"></div>
                <div class="marker"></div>
                <div class="timeline-content">
                    <img src="${philosopher.img}" alt="${displayName}">
                    <h3>${displayName}</h3>
                    <p>${philosopher.description}</p>
                    <p class="dates">${philosopher.dates}</p>
                    <div class="links">
                        <a href="${philosopher.wiki}" target="_blank" class="link wiki-link">Wiki</a>
                    </div>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', itemHTML);
    });
});