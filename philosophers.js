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
            name: "Confucius",
            displayName: "Confucius",
            dates: "551–479 BC",
            description: "Confucius was a Chinese philosopher and politician of the Spring and Autumn period who is traditionally considered the paragon of Chinese sages.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Confucius_the_philosopher.jpg/220px-Confucius_the_philosopher.jpg",
            wiki: "https://en.wikipedia.org/wiki/Confucius",
            start: -551,
            end: -479
        },
        {
            name: "Avicenna",
            displayName: "Avicenna (Ibn Sina)",
            dates: "c. 980–1037",
            description: "Ibn Sina, known as Avicenna in the West, was a Persian polymath who is regarded as one of the most significant physicians, astronomers, thinkers and writers of the Islamic Golden Age.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Avicenna_Portrait.jpg/220px-Avicenna_Portrait.jpg",
            wiki: "https://en.wikipedia.org/wiki/Avicenna",
            start: 980,
            end: 1037
        },
        {
            name: "Spinoza",
            displayName: "Baruch Spinoza",
            dates: "1632–1677",
            description: "Baruch Spinoza was a Dutch philosopher of Portuguese Sephardi origin. One of the foremost exponents of 17th-century Rationalism, his work has been highly influential in modern philosophy.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Spinoza.jpg/220px-Spinoza.jpg",
            wiki: "https://en.wikipedia.org/wiki/Baruch_Spinoza",
            start: 1632,
            end: 1677
        },
        {
            name: "Voltaire",
            displayName: "Voltaire",
            dates: "1694–1778",
            description: "François-Marie Arouet, known by his nom de plume Voltaire, was a French Enlightenment writer, historian, and philosopher famous for his wit and his advocacy of freedom of speech and religion.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire%2C_d%C3%A9tail_%28mus%C3%A9e_Carnavalet%29.jpg/220px-Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire%2C_d%C3%A9tail_%28mus%C3%A9e_Carnavalet%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Voltaire",
            start: 1694,
            end: 1778
        },
        {
            name: "Wollstonecraft",
            displayName: "Mary Wollstonecraft",
            dates: "1759–1797",
            description: "Mary Wollstonecraft was an English writer, philosopher, and advocate of women's rights. She is best known for her work 'A Vindication of the Rights of Woman'.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg/220px-Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Mary_Wollstonecraft",
            start: 1759,
            end: 1797
        },
        {
            name: "Kierkegaard",
            displayName: "Søren Kierkegaard",
            dates: "1813–1855",
            description: "Søren Aabye Kierkegaard was a Danish philosopher, theologian, poet, social critic and religious author who is widely considered to be the first existentialist philosopher.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/S%C3%B8ren_Kierkegaard_portrait.jpg/220px-S%C3%B8ren_Kierkegaard_portrait.jpg",
            wiki: "https://en.wikipedia.org/wiki/S%C3%B8ren_Kierkegaard",
            start: 1813,
            end: 1855
        },
        {
            name: "De Beauvoir",
            displayName: "Simone de Beauvoir",
            dates: "1908–1986",
            description: "Simone de Beauvoir was a French writer, intellectual, existentialist philosopher, political activist, feminist, and social theorist. She is best known for her 1949 treatise 'The Second Sex'.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Simone_de_Beauvoir2.jpg/220px-Simone_de_Beauvoir2.jpg",
            wiki: "https://en.wikipedia.org/wiki/Simone_de_Beauvoir",
            start: 1908,
            end: 1986
        },
        {
            name: "Camus",
            displayName: "Albert Camus",
            dates: "1913–1960",
            description: "Albert Camus was a French philosopher, author, and journalist. His views contributed to the rise of the philosophy known as absurdism. He was a key figure in 20th-century literature and philosophy.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche.jpg/220px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche.jpg",
            wiki: "https://en.wikipedia.org/wiki/Albert_Camus",
            start: 1913,
            end: 1960
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
    const totalYearsVar = 117100;

    philosophers.forEach(philosopher => {
        const leftPosition = `calc((${philosopher.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${philosopher.end - philosopher.start}) / ${totalYearsVar} * 100%)`;
        const displayName = philosopher.displayName || philosopher.name;

        const itemHTML = `
            <div class="timeline-item philosophers" style="left: ${leftPosition}; width: ${itemWidth};">
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
