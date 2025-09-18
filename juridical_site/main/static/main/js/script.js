//Поиск категории в url
const activePage = window.location.pathname;
const Path_list = activePage.split("/");
if(Path_list.includes("home"))
    {Path_category = "home"};

if(Path_list.includes("team"))
    {Path_category = "team"};

if(Path_list.includes("about"))
    {Path_category = "about"};

if(Path_list.includes("practice"))
    {Path_category = "practice"};

if(Path_list.includes("work"))
    {Path_category = "work"};

console.log(Path_category);
console.log(activePage);
const navLinks = document.querySelectorAll('.nav_link');
//console.log(navLinks);
navLinks.forEach (link => {
    if(link.href.includes(`${Path_category}`))
        link.classList.add('active');
//        console.log(link);
})

const html = document.documentElement

const header = document.querySelector('.nav_container')
const burgerIcon = document.querySelector('.nav_icon')
let prevBackgroundColor = null;

burgerIcon.addEventListener('click', () => {
    // Текущий цвет хедера перед изменением
    const computedStyle = window.getComputedStyle(header);
    const currentBackgroundColor = computedStyle.getPropertyValue("background-color");

    if (burgerIcon.classList.contains('nav_active')) {
        // nav_active есть — нужно убрать и вернуть сохранённый фон
        burgerIcon.classList.remove("nav_active");

        // Восстанавливаем предыдущий цвет, сохранённый до включения nav_active
        if (prevBackgroundColor !== null) {
            header.style.backgroundColor = prevBackgroundColor;
        }

        // Сбрасываем prevBackgroundColor, чтобы при следующем клике снова сохранить
        prevBackgroundColor = null;

//        console.log('nav_active убран, фон восстановлен:', header.style.backgroundColor);

    } else {
        // nav_active отсутствует — добавляем и сохраняем цвет до изменения в prevBackgroundColor
        prevBackgroundColor = currentBackgroundColor;

        burgerIcon.classList.add("nav_active");

        // Меняем цвет фона header на белый
        header.style.backgroundColor = 'white';

//        console.log('nav_active добавлен, исходный фон сохранён:', prevBackgroundColor);
    }
});




const statisticsBlock = document.querySelector('.statistics')
const logo = document.querySelector('.logo')
const aboutUs = document.querySelector('.statistics .statistics_wrapper .heading')
const statistics = document.querySelector('.statistics .statistics_wrapper ul')
const statisticsOne = document.getElementById('1')
const statisticsTwo = document.getElementById('2')
const statisticsThree = document.getElementById('3')
const statisticsFour = document.getElementById('4')

const directions = document.querySelector('.directions')
const directionsCards = document.querySelectorAll('.directions li')
const cardHeader = document.getElementById('card_header')
const cardOne = document.getElementById('card_1')
const cardTwo = document.getElementById('card_2')
const cardThree = document.getElementById('card_3')
const cardFour = document.getElementById('card_4')
const cardFive = document.getElementById('card_5')
const cardSix = document.getElementById('card_6')
const cardSeven = document.getElementById('card_7')
const cardEight = document.getElementById('card_8')
const cardNine = document.getElementById('card_9')
//const header = document.querySelector('.nav_name')

const cons = document.querySelector('.cons')
const iconsCards = document.querySelector('.icons_cards')
const consCardsHeader = document.querySelector('.cons .wrapper .heading p')
const consCardsMoreInfo = document.querySelector('.cons .wrapper .more_info')
const consMoreInfoBlocks = document.querySelectorAll('.cons .wrapper .more_info .block')

const footer = document.querySelector('footer')

if (Path_category === 'home') {
    html.style.scrollSnapType = 'y mandatory'
    window.addEventListener('scroll', () => {
        if (pageYOffset > window.innerHeight) {
            statisticsBlock.style.backgroundAttachment = 'local';
        }

        else if (pageYOffset < window.innerHeight) {
            statisticsBlock.style.backgroundAttachment = 'fixed';
            header.style.backgroundColor = 'var(--background-grey)';
        }

        if (pageYOffset > window.innerHeight*0.5) {
            header.style.backgroundColor = 'var(--black-color)';
            const timerIdZero = setTimeout(() => {
                aboutUs.style.opacity = '1';
                aboutUs.style.scale = '1';
            }, 300);

            const timerIdOne = setTimeout(() => {
                statisticsOne.style.opacity = '1';
            }, 675);

            const timerIdTwo = setTimeout(() => {
                statisticsTwo.style.opacity = '1';
            }, 800);

            const timerIdThree = setTimeout(() => {
                statisticsThree.style.opacity = '1';
            }, 925);

            const timerIdFour = setTimeout(() => {
                statisticsFour.style.opacity = '1';
            }, 1050);


            aboutUs.style.transition = '3s ';
            statisticsOne.style.transition = '2s';
            statisticsTwo.style.transition = '2s';
            statisticsThree.style.transition = '2s';
            statisticsFour.style.transition = '2s';


            logo.addEventListener('mouseover', function(e) {
                if (logo) logo.style.boxShadow = '0px 5px 25px 0.7px rgba(171, 63, 44, 0.6)';
            });
            //        glow 0 0 5px red, 0 0 10px red, 0 0 20px red, 0 0 50px red, 0 0 100px red
            logo.addEventListener('mouseout', function(e) {
                if (logo) {
                    logo.style.boxShadow = '0px 0px 0px 0px transparent';
                }
            });
        }

        else if (pageYOffset < window.innerHeight*0.5) {
//            aboutUs.style.opacity = '0';
//            statisticsOne.style.opacity = '0';
//            statisticsTwo.style.opacity = '0';
//            statisticsThree.style.opacity = '0';
//            statisticsFour.style.opacity = '0';

//            aboutUs.style.transition = '.1s';
//            statisticsOne.style.transition = '.1s';
//            statisticsTwo.style.transition = '.1s';
//            statisticsThree.style.transition = '.1s';
//            statisticsFour.style.transition = '.1s';


            logo.addEventListener('mouseover', function(e) {
                if (logo) logo.style.boxShadow = '0px 5px 25px 0.7px rgba(96, 33, 33, 0.5)';
            });
            logo.addEventListener('mouseout', function(e) {
                if (logo) {
                    logo.style.boxShadow = '0px 0px 0px 0px transparent';
                }
            });
        }

        if (pageYOffset > window.innerHeight*1.5) {
            header.style.backgroundColor = 'var(--background-grey)';

//            if (innerWidth < 990) {
//                //            console.log(`The inner width of the page is: ${window.innerWidth} pixels`)
//                const timerCardIOne1 = setTimeout(() => {
//                    cardOne.style.opacity = '1';
//                }, 675);
//
//                const timerCardITwo2 = setTimeout(() => {
//                    cardTwo.style.opacity = '1';
//                }, 725);
//
//                const timerCardIThree3 = setTimeout(() => {
//                    cardThree.style.opacity = '1';
//                }, 875);
//
//                const timerCardIFour4 = setTimeout(() => {
//                    cardFour.style.opacity = '1';
//                }, 925);
//
//                const timerCardIFive5 = setTimeout(() => {
//                    cardFive.style.opacity = '1';
//                }, 1075);
//
//                const timerCardISix6 = setTimeout(() => {
//                    cardSix.style.opacity = '1';
//                }, 1225);
//
//                const timerCardISeven7 = setTimeout(() => {
//                    cardSeven.style.opacity = '1';
//                }, 1475);
//
//                const timerCardIdEight8 = setTimeout(() => {
//                    cardEight.style.opacity = '1';
//                }, 1625);
//
//                const timerCardINine9 = setTimeout(() => {
//                    cardNine.style.opacity = '1';
//                }, 1875);
//
//            }

            if (innerWidth > 990) {
                cardOne.style.transition = '2s';
                cardTwo.style.transition = '2s';
                cardThree.style.transition = '2s';
                cardFour.style.transition = '2s';
                cardFive.style.transition = '2s';
                cardSix.style.transition = '2s';
                cardSeven.style.transition = '2s';
                cardEight.style.transition = '2s';
                cardNine.style.transition = '2s';

                const timerCardIOne = setTimeout(() => {
                    cardOne.style.opacity = '1';
                }, 675);

                const timerCardITwo = setTimeout(() => {
                    cardFour.style.opacity = '1';
                }, 675);

                const timerCardIThree = setTimeout(() => {
                    cardSeven.style.opacity = '1';
                }, 675);

                const timerCardIFour = setTimeout(() => {
                    cardTwo.style.opacity = '1';
                }, 800);

                const timerCardIFive = setTimeout(() => {
                    cardFive.style.opacity = '1';
                }, 800);

                const timerCardISix = setTimeout(() => {
                    cardEight.style.opacity = '1';
                }, 800);

                const timerCardISeven = setTimeout(() => {
                    cardThree.style.opacity = '1';
                }, 925);

                const timerCardIdEight = setTimeout(() => {
                    cardSix.style.opacity = '1';
                }, 925);

                const timerCardINine = setTimeout(() => {
                    cardNine.style.opacity = '1';
                }, 925);
            } else {
                let counter = 0;
                directionsCards.forEach(card => {
                    counter += 1;
                    if (counter <= 7) {
                        setTimeout(() => {
                            card.style.transition = 'opacity 1s ease, transform 1s ease';
                            card.style.opacity = '1';
                            card.style.scale = '1';
                        }, 375);
                    } else {
                        if (card.getBoundingClientRect().bottom <= window.innerHeight - 10) {
                            card.style.transition = 'opacity .5s ease, transform .5s ease';
                            card.style.opacity = '1';
                            card.style.scale = '1';
                        }
                    }
                });
            }

            const timerCardIDZero = setTimeout(() => {
                cardHeader.style.opacity = '1';
                cardHeader.style.scale = '1';
            }, 300);

            logo.addEventListener('mouseover', function(e) {
                if (logo) logo.style.boxShadow = '0px 5px 25px 0.7px rgba(96, 33, 33, 0.5)';
            });
            logo.addEventListener('mouseout', function(e) {
                if (logo) {
                    logo.style.boxShadow = '0px 0px 0px 0px transparent';
                }
            });

            cardHeader.style.transition = '1s';

        }

        else if (pageYOffset < window.innerHeight*1.5) {
            if (innerWidth > 990) {
//                cardHeader.style.transition = '0.1s';
//                cardOne.style.transition = '0.1s';
//                cardTwo.style.transition = '0.1s';
//                cardThree.style.transition = '0.1s';
//                cardFour.style.transition = '0.1s';
//                cardFive.style.transition = '0.1s';
//                cardSix.style.transition = '0.1s';
//                cardSeven.style.transition = '0.1s';
//                cardEight.style.transition = '0.1s';
//                cardNine.style.transition = '0.1s';

//                cardHeader.style.opacity = '0';
//                cardOne.style.opacity = '0';
//                cardTwo.style.opacity = '0';
//                cardThree.style.opacity = '0';
//                cardFour.style.opacity = '0';
//                cardFive.style.opacity = '0';
//                cardSix.style.opacity = '0';
//                cardSeven.style.opacity = '0';
//                cardEight.style.opacity = '0';
//                cardNine.style.opacity = '0';
            }
        }

//        if (consCardsHeader.getBoundingClientRect().bottom <= window.innerHeight-700) {
//            consCardsHeader.style.opacity = '0';
//            consCardsHeader.style.scale = '0.05';
//        } else {
//            consCardsHeader.style.opacity = '1';
//            consCardsHeader.style.scale = '1';
//        }
        if (pageYOffset > window.innerHeight*1.2 + directions.offsetHeight) {
            header.style.backgroundColor = 'var(--black-color)';
            const timerIconCardsHeaderID = setTimeout(() => {
                consCardsHeader.style.opacity = '1';
                consCardsHeader.style.scale = '1';
            }, 675);
        }

        if (consCardsHeader.getBoundingClientRect().bottom <= window.innerHeight-600) {
            html.style.scrollSnapType = 'none'
//            header.style.backgroundColor = 'var(--black-color)';


            iconsCards.style.transition = '2s';
            consCardsMoreInfo.style.transition = '2s';
//            consCardsHeader.style.opacity = '0';
//            const timerIconCardsHeaderID = setTimeout(() => {
//                consCardsHeader.style.opacity = '1';
//                consCardsHeader.style.scale = '1';
//            }, 300);

            const timerIconCardsID = setTimeout(() => {
                iconsCards.style.opacity = '1';
            }, 675);

            const timerMoreInfo = setTimeout(() => {
                consCardsMoreInfo.style.opacity = '1';
            }, 675);
            if (innerWidth < 990){
                consCardsMoreInfo.style.opacity = '1';
                consMoreInfoBlocks.forEach(block => {
//                    block.style.opacity = '0';
//                    block.style.scale = '0.95';
                    block.style.animation = 'none';
                    if (block.getBoundingClientRect().bottom <= window.innerHeight - 10) {
                        block.style.opacity = '1';
                        block.style.scale = '1';
                        }
                    })
            }
//            consCardsMoreInfo.style.opacity = '0';

            logo.addEventListener('mouseover', function(e) {
                if (logo) logo.style.boxShadow = '0px 5px 25px 0.7px rgba(171, 63, 44, 0.6)';
            });
            //        glow 0 0 5px red, 0 0 10px red, 0 0 20px red, 0 0 50px red, 0 0 100px red
            logo.addEventListener('mouseout', function(e) {
                if (logo) {
                    logo.style.boxShadow = '0px 0px 0px 0px transparent';
                }
            });
        }

        else  {
            html.style.scrollSnapType = 'y mandatory'
//            iconsCards.style.opacity = '0';
            iconsCards.style.transition = '0.1s';

//            consCardsHeader.style.opacity = '0';
//            consCardsHeader.style.scale = '0.95';
//            consCardsHeader.style.transition = '0.1s';

//            consCardsMoreInfo.style.opacity = '0';
            consCardsMoreInfo.style.transition = '0.1s';
        }
    });
}


if (Path_category === 'about') {
    const bigBlocksItem = document.querySelectorAll('.big_blocks_list li')
    const bigBlocksHeader = document.querySelector('.big_blocks_container h1')
    let aboutContainer = document.querySelector('.about_container');
    let carouselList = document.querySelector('.carousel_list');
    let carouselListItem = document.querySelector('.carousel_list .carousel_item');
    let arrow_backward = document.getElementById('arrow_backward');
    let arrow_forward = document.getElementById('arrow_forward');
    header.style.backgroundColor = 'var(--black-color)';
    footer.style.border =  '0px';

    window.addEventListener('scroll', () => {
        if (pageYOffset > aboutContainer.offsetHeight - 60) {
            header.style.backgroundColor = 'var(--background-grey)';
        } else {
            header.style.backgroundColor = 'var(--black-color)';
        }
        if (innerWidth < 990) {
            bigBlocksHeader.style.animation = 'none';
            bigBlocksItem.forEach (item => {
                item.style.animation = 'none';
                if (item.getBoundingClientRect().bottom <= window.innerHeight - 50) {
                    item.style.opacity = '1';
                    item.style.scale = '1';
                }
            })
            if (bigBlocksHeader.getBoundingClientRect().bottom <= window.innerHeight - 50) {
                bigBlocksHeader.style.opacity = '1';
                bigBlocksHeader.style.scale = '1';
            }
        } else {
            bigBlocksItem.forEach (item => {
                item.style.opacity = '1';
                item.style.scale = '1';
            })
            bigBlocksHeader.style.opacity = '1';
            bigBlocksHeader.style.scale = '1';
        }
    })


    carouselList.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        carouselList.scrollLeft += evt.deltaY;
        carouselList.style.scrollBehavior = 'auto';
    });

    if (innerWidth < 600) {
        arrow_forward.addEventListener('click', () => {
        carouselList.style.scrollBehavior = 'smooth';
        carouselList.scrollLeft += carouselListItem.offsetWidth + 30;
    });

    arrow_backward.addEventListener('click', () => {
        carouselList.style.scrollBehavior = 'smooth';
        carouselList.scrollLeft -= carouselListItem.offsetWidth + 30;
    });
    } else {
        const carouselListItemWidth = carouselListItem.offsetWidth
        arrow_forward.addEventListener('click', () => {
        carouselList.style.scrollBehavior = 'smooth';
        carouselList.scrollLeft += carouselListItemWidth + 50;
    });

        arrow_backward.addEventListener('click', () => {
        carouselList.style.scrollBehavior = 'smooth';
        carouselList.scrollLeft -= carouselListItemWidth + 50;
    });
    }

}


if (Path_category === 'team') {
    header.style.backgroundColor = 'var(--black-color)';
    footer.style.border =  '0px';

    window.addEventListener('load', () => {
        const items = document.querySelectorAll('.team_list .team_item');
        const itemsPerRow = 4;

        for (let i = 0; i < items.length; i += itemsPerRow) {
            const rowItems = Array.from(items).slice(i, i + itemsPerRow);
            let maxHeight = 0;

        // Сбросить height у .worker_info для пересчёта
            rowItems.forEach(item => {
                const workerInfo = item.querySelector('.worker_info');
                if (workerInfo) {
                    workerInfo.style.height = 'auto';
                }
            });

        // Найти максимальную высоту среди .worker_info в строке
            rowItems.forEach(item => {
                const workerInfo = item.querySelector('.worker_info');
                if (workerInfo) {
                    const h = workerInfo.offsetHeight;
                    if (h > maxHeight) maxHeight = h;
                }
            });

        // Добавить снизу запас 2vw (переведём в пиксели)
            const vw = window.innerWidth / 100;
            maxHeight += 2 * vw;

        // Установить одинаковую высоту всем .worker_info в текущей строке
            rowItems.forEach(item => {
                const workerInfo = item.querySelector('.worker_info');
                if (workerInfo) {
                    workerInfo.style.height = maxHeight + 'px';
                }
            });
        }
    });
};