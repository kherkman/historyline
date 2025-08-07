document.addEventListener('DOMContentLoaded', function() {
    const composers = [
        {
            name: "Enheduanna",
            dates: "c. 2285–2250 BC",
            description: "Enheduanna was the first known poet whose name has been recorded.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Disk_of_Enheduanna_%28detail_-_showing_Enheduanna_-_the_figure_with_the_flounced_dress%29.jpg/220px-Disk_of_Enheduanna_%28detail_-_showing_Enheduanna_-_the_figure_with_the_flounced_dress%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Enheduanna",
            start: -2285,
            end: -2250
        },
        {
            name: "Seikilos Epitaph",
            dates: "c. 1st Century AD",
            description: "The Seikilos epitaph is the oldest surviving complete musical composition, including musical notation, from anywhere in the world.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Seikilos_epitaph_from_Aidin.jpg/220px-Seikilos_epitaph_from_Aidin.jpg",
            spotify: "https://open.spotify.com/artist/7d3jP9n76B12n03iWc0VUn",
            wiki: "https://en.wikipedia.org/wiki/Seikilos_epitaph",
            start: 100,
            end: 101 // End year is 1 greater for a minimal width bar
        },
        {
            name: "Hildegard v. Bingen",
            dates: "1098-1179",
            description: "Hildegard of Bingen was a German Benedictine abbess and polymath active as a writer, composer, philosopher, mystic, visionary, and as a medical writer and practitioner during the High Middle Ages.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hildegard_von_Bingen.jpg/220px-Hildegard_von_Bingen.jpg",
            spotify: "https://open.spotify.com/artist/2xt1t3lf2BfkGVl1vQPVV7",
            wiki: "https://en.wikipedia.org/wiki/Hildegard_of_Bingen",
            start: 1098,
            end: 1179
        },
        {
            name: "G. de Machaut",
            dates: "c. 1300–1377",
            description: "Guillaume de Machaut was a French composer and poet who was the central figure of the ars nova style in late medieval music.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Machaut_on_a_red_background.jpg/220px-Machaut_on_a_red_background.jpg",
            spotify: "https://open.spotify.com/artist/262IPs3Guuh22T4o123gH6",
            wiki: "https://en.wikipedia.org/wiki/Guillaume_de_Machaut",
            start: 1300,
            end: 1377
        },
        {
            name: "John Dunstable",
            displayName: "John Dunstable",
            dates: "c. 1390-1453",
            description: "John Dunstable was an English composer who influenced the transition between late medieval and early Renaissance music.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dunstaple.jpg/220px-Dunstaple.jpg",
            spotify: "https://open.spotify.com/artist/3DL7TTcfjDA7SceS7g4aP7",
            wiki: "https://en.wikipedia.org/wiki/John_Dunstable",
            start: 1390,
            end: 1453
        },
        {
            name: "Josquin des Prez",
            displayName: "Josquin des Prez",
            dates: "c. 1450-1521",
            description: "Josquin des Prez was a Franco-Flemish composer of the Renaissance and the most famous European composer between Guillaume Dufay and Palestrina.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Josquin_des_Prez_by_an_unknown_16th_century_artist.jpg/220px-Josquin_des_Prez_by_an_unknown_16th_century_artist.jpg",
            spotify: "https://open.spotify.com/artist/31f23hmZawdqgp0sECAzE8",
            wiki: "https://en.wikipedia.org/wiki/Josquin_des_Prez",
            start: 1450,
            end: 1521
        },
        {
            name: "Monteverdi",
            dates: "1567-1643",
            description: "Claudio Giovanni Antonio Monteverdi was an Italian composer, choirmaster and string player.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Claudio_Monteverdi.jpg/220px-Claudio_Monteverdi.jpg",
            spotify: "https://open.spotify.com/artist/5iAhVgzxSvgMbyi7BDftQe",
            wiki: "https://en.wikipedia.org/wiki/Claudio_Monteverdi",
            start: 1567,
            end: 1643
        },
        {
            name: "Vivaldi",
            displayName: "Antonio Vivaldi",
            dates: "1678-1741",
            description: "Antonio Vivaldi was an Italian Baroque composer, virtuoso violinist, teacher and cleric. He is recognized as one of the greatest Baroque composers.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/g/g2/Vivaldi.jpg/220px-Vivaldi.jpg",
            spotify: "https://open.spotify.com/artist/2QOIawHpSlOwXDvSqQ9YJR",
            wiki: "https://en.wikipedia.org/wiki/Antonio_Vivaldi",
            start: 1678,
            end: 1741
        },
        {
            name: "Bach",
            displayName: "J.S. Bach",
            dates: "1685-1750",
            description: "Johann Sebastian Bach was a German composer and musician of the late Baroque period.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Johann_Sebastian_Bach.jpg/220px-Johann_Sebastian_Bach.jpg",
            spotify: "https://open.spotify.com/artist/5aIqB5nVVvmFsvSdQpccC0",
            wiki: "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
            start: 1685,
            end: 1750
        },
        {
            name: "Handel",
            displayName: "G. F. Handel",
            dates: "1685-1759",
            description: "George Frideric Handel was a German-British Baroque composer well-known for his operas, oratorios, anthems, and organ concerti. [5]",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/George_Frideric_Handel_by_Balthasar_Denner.jpg/220px-George_Frideric_Handel_by_Balthasar_Denner.jpg",
            spotify: "https://open.spotify.com/artist/1QL7yTHrdUjEiAuLSssY2Z",
            wiki: "https://en.wikipedia.org/wiki/George_Frideric_Handel",
            start: 1685.2,
            end: 1759
        },
        {
            name: "Haydn",
            displayName: "Joseph Haydn",
            dates: "1732-1809",
            description: "Joseph Haydn was an Austrian composer of the Classical period. He was instrumental in the development of chamber music such as the piano trio.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Joseph_Haydn.jpg/220px-Joseph_Haydn.jpg",
            spotify: "https://open.spotify.com/artist/656RXuyw7CE00lOP7zAskb",
            wiki: "https://en.wikipedia.org/wiki/Joseph_Haydn",
            start: 1732,
            end: 1809
        },
        {
            name: "Mozart",
            displayName: "W.A. Mozart",
            dates: "1756-1791",
            description: "Wolfgang Amadeus Mozart was a prolific and influential composer of the Classical period.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/220px-Wolfgang-amadeus-mozart_1.jpg",
            spotify: "https://open.spotify.com/artist/4NJhFmfw43RLBLjQvxDu1a",
            wiki: "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
            start: 1756,
            end: 1791
        },
        {
            name: "Beethoven",
            displayName: "Ludwig van Beethoven",
            dates: "1770-1827",
            description: "Ludwig van Beethoven was a German composer and pianist.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/220px-Beethoven.jpg",
            spotify: "https://open.spotify.com/artist/2wOqMjp9TyABs2BTsb2A6X",
            wiki: "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
            start: 1770,
            end: 1827
        },
        {
            name: "Chopin",
            displayName: "Frédéric Chopin",
            dates: "1810-1849",
            description: "Frédéric François Chopin was a Polish composer and a virtuoso pianist of the Romantic period.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Frederic_Chopin_photo.jpeg/220px-Frederic_Chopin_photo.jpeg",
            spotify: "https://open.spotify.com/artist/7y97mc3bZRFXzT2szRM4L4",
            wiki: "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin",
            start: 1810,
            end: 1849
        },
        {
            name: "Liszt",
            displayName: "Franz Liszt",
            dates: "1811-1886",
            description: "Franz Liszt was a Hungarian composer, virtuoso pianist, conductor, music teacher, arranger, and organist of the Romantic era.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Franz_Liszt_in_1858_by_Franz_Hanfstaengl.jpg/220px-Franz_Liszt_in_1858_by_Franz_Hanfstaengl.jpg",
            spotify: "https://open.spotify.com/artist/1385hLNbrvdFBwfQfM529r",
            wiki: "https://en.wikipedia.org/wiki/Franz_Liszt",
            start: 1811,
            end: 1886
        },
        {
            name: "Brahms",
            displayName: "Johannes Brahms",
            dates: "1833-1897",
            description: "Johannes Brahms was a German composer, pianist, and conductor of the Romantic period.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/JohannesBrahms.jpg/220px-JohannesBrahms.jpg",
            spotify: "https://open.spotify.com/artist/5wTAi7QkpP6eBv8kFFssIq",
            wiki: "https://en.wikipedia.org/wiki/Johannes_Brahms",
            start: 1833,
            end: 1897
        },
        {
            name: "Tchaikovsky",
            displayName: "Pyotr Tchaikovsky",
            dates: "1840-1893",
            description: "Pyotr Ilyich Tchaikovsky was a Russian composer of the Romantic period.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Pyotr_Ilyich_Tchaikovsky_by_Nikolai_Kuznetsov_1893.jpg/220px-Pyotr_Ilyich_Tchaikovsky_by_Nikolai_Kuznetsov_1893.jpg",
            spotify: "https://open.spotify.com/artist/3MKCzCnpzw3TjUYs2v7vDA",
            wiki: "https://en.wikipedia.org/wiki/Pyotr_Ilyich_Tchaikovsky",
            start: 1840,
            end: 1893
        },
        {
            name: "Debussy",
            displayName: "Claude Debussy",
            dates: "1862-1918",
            description: "Claude Debussy was a French composer. He is sometimes seen as the first Impressionist composer, although he vigorously rejected the term.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Claude_Debussy_ca_1908.jpg/220px-Claude_Debussy_ca_1908.jpg",
            spotify: "https://open.spotify.com/artist/1Uff91EOsvd99rtAupatMP",
            wiki: "https://en.wikipedia.org/wiki/Claude_Debussy",
            start: 1862,
            end: 1918
        },
        {
            name: "Sibelius",
            displayName: "Jean Sibelius",
            dates: "1865-1957",
            description: "Jean Sibelius was a Finnish composer of the late Romantic and early-modern periods. [28] He is widely regarded as his country's greatest composer.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jean_Sibelius_by_Daniel_Nyblin_in_1890.jpg/220px-Jean_Sibelius_by_Daniel_Nyblin_in_1890.jpg",
            spotify: "https://open.spotify.com/artist/7jzR5qj8vflt5hizjcae5P",
            wiki: "https://en.wikipedia.org/wiki/Jean_Sibelius",
            start: 1865,
            end: 1957
        },
        {
            name: "Rachmaninoff",
            displayName: "Sergei Rachmaninoff",
            dates: "1873-1943",
            description: "Sergei Rachmaninoff was a Russian composer, virtuoso pianist, and conductor of the late Romantic period.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sergei_Rachmaninoff_in_1910s.jpg/220px-Sergei_Rachmaninoff_in_1910s.jpg",
            spotify: "https://open.spotify.com/artist/0Kekt6CKSo0m5mivKcoH51",
            wiki: "https://en.wikipedia.org/wiki/Sergei_Rachmaninoff",
            start: 1873,
            end: 1943
        },
        {
            name: "Stravinsky",
            displayName: "Igor Stravinsky",
            dates: "1882-1971",
            description: "Igor Fyodorovich Stravinsky was a Russian composer, pianist and conductor, later of French and American citizenship.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Igor_Stravinsky_LOC_32392u.jpg/220px-Igor_Stravinsky_LOC_32392u.jpg",
            spotify: "https://open.spotify.com/artist/7oVMFD53T7yy6eF5hNCg7B",
            wiki: "https://en.wikipedia.org/wiki/Igor_Stravinsky",
            start: 1882,
            end: 1971
        },
        {
            name: "John Cage",
            displayName: "John Cage",
            dates: "1912-1992",
            description: "John Milton Cage Jr. was an American composer and music theorist. [45] A pioneer of indeterminacy in music, electroacoustic music, and non-standard use of musical instruments, Cage was one of the leading figures of the post-war avant-garde.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/John_Cage_in_1988.jpg/220px-John_Cage_in_1988.jpg",
            spotify: "https://open.spotify.com/artist/1Z3fF5l6CMVp2f7iTPOell",
            wiki: "https://en.wikipedia.org/wiki/John_Cage",
            start: 1912,
            end: 1992
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117100;

    composers.forEach(composer => {
        const leftPosition = `calc((${composer.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${composer.end - composer.start}) / ${totalYearsVar} * 100%)`;

        const displayName = composer.displayName || composer.name;

        // Generate Spotify link only if it exists
        const spotifyLink = composer.spotify 
            ? `<a href="${composer.spotify}" target="_blank" class="link spotify-link">${composer.name === 'Seikilos Epitaph' ? 'Listen' : 'Spotify'}</a>`
            : '';

        const itemHTML = `
            <div class="timeline-item composers" style="left: ${leftPosition}; width: ${itemWidth};">
                <div class="permanent-name">${composer.name}</div>
                <div class="lifespan" style="width: 100%;"></div>
                <div class="marker"></div>
                <div class="timeline-content">
                    <img src="${composer.img}" alt="${displayName}">
                    <h3>${displayName}</h3>
                    <p>${composer.description}</p>
                    <p class="dates">${composer.dates}</p>
                    <div class="links">
                        ${spotifyLink}
                        <a href="${composer.wiki}" target="_blank" class="link wiki-link">Wiki</a>
                    </div>
                </div>
            </div>
        `;
        
        // Use insertAdjacentHTML to add the new element inside the wrapper
        wrapper.insertAdjacentHTML('beforeend', itemHTML);
    });
});
