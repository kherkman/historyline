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
        }
    ];

    const wrapper = document.querySelector('.timeline-wrapper');
    const startYearVar = -115000;
    const totalYearsVar = 117025;

    rulers.forEach(ruler => {
        const leftPosition = `calc((${ruler.start} - ${startYearVar}) / ${totalYearsVar} * 100%)`;
        const itemWidth = `calc((${ruler.end - ruler.start}) / ${totalYearsVar} * 100%)`;
        const displayName = ruler.displayName || ruler.name;

        const itemHTML = `
            <div class="timeline-item ruler" style="left: ${leftPosition}; width: ${itemWidth};">
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