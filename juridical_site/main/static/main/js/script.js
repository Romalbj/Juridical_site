//Поиск категории в url
const activePage = window.location.pathname;
const Path_list = activePage.split("/");
if(Path_list.includes("home"))
    {Path_category = "home";
    helpPathCategory = 'home'};

if(Path_list.includes("team"))
    {Path_category = "team";
    helpPathCategory = 'team'};

if(Path_list.includes("about"))
    {Path_category = "about";
    helpPathCategory = 'about'};

if(Path_list.includes("practice"))
    {Path_category = "practice";
    helpPathCategory = 'practice'};

if(Path_list.includes("practice_detail"))
    {Path_category = "practice";
    helpPathCategory = 'practice_detail'};

if(Path_list.includes("work"))
    {Path_category = "work";
    helpPathCategory = 'work'};

if(Path_list.includes("worker"))
    {Path_category = "worker";
    helpPathCategory = 'worker'};

console.log(Path_category);
console.log(activePage);
const navLinks = document.querySelectorAll('.nav_link');
//console.log(navLinks);
navLinks.forEach (link => {
    if(link.href.includes(`${Path_category}`))
        link.classList.add('active');
//        console.log(link);
})



const vw = window.innerWidth / 100;
const vh = window.innerHeight / 100;

const html = document.documentElement
const body = document.querySelector('body')
const main = document.querySelector('main')

const header = document.querySelector('.nav_container')
const burgerIcon = document.querySelector('.nav_icon')
const burgerIconLines = document.querySelectorAll('.nav_icon span')
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
        header.style.backgroundColor = 'var(--whiteish)';

//        console.log('nav_active добавлен, исходный фон сохранён:', prevBackgroundColor);
    }
});



const bookingText = document.querySelector('.booking_text')


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
const headerSpans = document.querySelectorAll('.nav_name')

const cons = document.querySelector('.cons')
const iconsCards = document.querySelector('.icons_cards')
const consCardsHeader = document.querySelector('.cons .wrapper .heading p')
const consCardsMoreInfo = document.querySelector('.cons .wrapper .more_info')
const consMoreInfoBlocks = document.querySelectorAll('.cons .wrapper .more_info .block')

const footer = document.querySelector('footer')

if (Path_category === 'home') {
    setTimeout(() => {
        bookingText.style.transform = 'translateY(0)'
        bookingText.style.filter = 'blur(0)'
    }, 275)


    html.style.scrollSnapType = 'y mandatory'
    window.addEventListener('scroll', () => {
        if (pageYOffset > window.innerHeight) {
            statisticsBlock.style.backgroundAttachment = 'local';
        }

        else if (pageYOffset < window.innerHeight) {
            statisticsBlock.style.backgroundAttachment = 'fixed';
            header.style.backgroundColor = 'transparent';
        }

        if (pageYOffset > window.innerHeight*0.5) {
            header.style.backgroundColor = 'var(--black-color)';
            const timerIdZero = setTimeout(() => {
                aboutUs.style.opacity = '1';
                aboutUs.style.scale = '1';
            }, 200);

            const timerIdOne = setTimeout(() => {
                statisticsOne.style.opacity = '1';
            }, 400);

            const timerIdTwo = setTimeout(() => {
                statisticsTwo.style.opacity = '1';
            }, 550);

            const timerIdThree = setTimeout(() => {
                statisticsThree.style.opacity = '1';
            }, 700);

            const timerIdFour = setTimeout(() => {
                statisticsFour.style.opacity = '1';
            }, 850);


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
                }, 400);

                const timerCardITwo = setTimeout(() => {
                    cardFour.style.opacity = '1';
                }, 400);

                const timerCardIThree = setTimeout(() => {
                    cardSeven.style.opacity = '1';
                }, 400);

                const timerCardIFour = setTimeout(() => {
                    cardTwo.style.opacity = '1';
                }, 550);

                const timerCardIFive = setTimeout(() => {
                    cardFive.style.opacity = '1';
                }, 550);

                const timerCardISix = setTimeout(() => {
                    cardEight.style.opacity = '1';
                }, 550);

                const timerCardISeven = setTimeout(() => {
                    cardThree.style.opacity = '1';
                }, 700);

                const timerCardIdEight = setTimeout(() => {
                    cardSix.style.opacity = '1';
                }, 700);

                const timerCardINine = setTimeout(() => {
                    cardNine.style.opacity = '1';
                }, 700);
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
            }, 200);

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
            }, 200);
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
            }, 300);

            const timerMoreInfo = setTimeout(() => {
                consCardsMoreInfo.style.opacity = '1';
            }, 550);
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
    const bigBlocksItem = document.querySelectorAll('.big_blocks_list li');
    const vw = window.innerWidth / 100;
    const vh = window.innerHeight / 100;
    const bigBlocksHeader = document.querySelector('.big_blocks_container h1')
    const aboutContainer = document.querySelector('.about_container');
    const bigBlocksContainer = document.querySelector('.big_blocks_container');
    const carouselList = document.querySelector('.carousel_list');
    const carouselListItem = document.querySelector('.carousel_list .carousel_item');
    const arrow_backward = document.getElementById('arrow_backward');
    const arrow_forward = document.getElementById('arrow_forward');
    header.style.backgroundColor = 'var(--black-color)';
    footer.style.border =  '0px';

    window.addEventListener('scroll', () => {
        if (pageYOffset > aboutContainer.offsetHeight - vw * 1) {
            header.style.backgroundColor = 'var(--background-grey)';
        } else {
            header.style.backgroundColor = 'var(--black-color)';
        }

         if (pageYOffset > aboutContainer.offsetHeight - vw * 5 + bigBlocksContainer.offsetHeight) {
            header.style.backgroundColor = 'var(--black-color)';
        } else {
            header.style.backgroundColor = 'var(background-grey)'

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

    if (innerWidth < 640) {
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
        const itemsPerRow = window.innerWidth > 990 ? 4 : 2;

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


//if (Path_category === 'worker') {
//    const bioHeader = document.querySelector('.bio_header')
//    const vw = window.innerWidth / 100;
//    const vh = window.innerHeight / 100;
//
////        navLinks.forEach(link => {
////            link.addEventListener('mouseover', function(e) {
////            if (link) {
////                link.style.color = 'white';
////            }
////        });
////        link.addEventListener('mouseout', function(e) {
////            if (link) {
////                link.style.color = 'var(--black-color)';
////            }
////        });
////    })
//
//    window.addEventListener('scroll', () => {
//        if (pageYOffset > window.innerHeight - vw * 5) {
//            header.style.backgroundColor = 'var(--whiteish)';
//            header.style.borderBottom = '0.5px solid var(--black-color)';
//            navLinks.forEach(link => {
//                link.style.color = 'var(--black-color)'
//                link.addEventListener('mouseover', function(e) {
//                    if (link) {
//                        link.style.color = 'white';
//                    }
//                });
//            })
//        } else {
//            header.style.backgroundColor = 'var(--black-color)';
//            header.style.borderBottom = '0.5px solid rgba(255, 255, 255, 0.4)';
//            navLinks.forEach(link => {
//                link.style.color = 'rgba(255, 255, 255, 1)';
//            })
//        }
//     })
//}




if (Path_category === 'worker') {
    const bioHeader = document.querySelector('.bio_header');

    const workerTitle = document.querySelector('.worker_container .person_title')
    const workerCity = document.querySelector('.worker_container .person_contacts_practice .person_city')
    const workerNumber = document.querySelector('.worker_container .person_contacts_practice .person_number')
    const workerMail = document.querySelector('.worker_container .person_contacts_practice .person_mail')
    const workerPracticePC = document.querySelector('.worker_container .worker_practice')


    const workerContainer = document.querySelector('.worker_container')
    const mobilePractice = document.querySelector('.worker_practice_mobile')
    const mobilePracticeItems = document.querySelectorAll('.worker_practice_mobile p')
    const workerBioProjects = document.querySelector('.worker_bio_projects')

    const workerBioContainer = document.querySelector('.worker_bio_projects .worker_bio')
    const workerBio = document.querySelector('.worker_bio_projects .bio p')
    const workerBioHeader = document.querySelector('.worker_bio_projects .bio_header')
    const workerBioImage = document.querySelector('.worker_bio_projects .bio_image')
    const workerProjectsContainer = document.querySelector('.worker_bio_projects .worker_projects')
    const workerProjects = document.querySelector('.worker_bio_projects .worker_projects ul')
    const workerProjectsHeader = document.querySelector('.worker_bio_projects .worker_projects h3')

    header.style.backgroundColor = 'var(--black-color)';

    setTimeout(() => {
            workerTitle.style.opacity = '1'
            workerTitle.style.transform = 'translateY(0)'
        }, 275);


    setTimeout(() => {
        workerCity.style.opacity = '1'
        workerCity.style.transform = 'translateY(0)'

        workerNumber.style.opacity = '1'
        workerNumber.style.transform = 'translateY(0)'

        workerMail.style.opacity = '1'
        workerMail.style.transform = 'translateY(0)'

    }, 475);

//    mobilePracticeItems.forEach(item => {
//        setTimeout(() => {
//            item.style.opacity = '1'
//            item.style.transform = 'translateX(0)'
//        }, 275);
//    })

    setTimeout(() => {
        workerPracticePC.style.opacity = '1'
        workerPracticePC.style.transform = 'translateY(0)'
    }, 675);


    if (innerWidth > 990) {

        // Функция, которая проверяет, находятся ли мы после скролла
        function isScrolled() {
            return pageYOffset > window.innerHeight - vw * 5;
        }

        // Устаналиваем базовые цвета в зависимости от scroll
        function updateLinkColors() {
            if (isScrolled()) {
                header.style.backgroundColor = 'var(--whiteish)';
                header.style.borderBottom = '0.5px solid var(--black-color)';
                navLinks.forEach(link => {
                    link.style.color = 'var(--black-color)';
                });
            } else {
                header.style.backgroundColor = 'var(--black-color)';
                header.style.borderBottom = '0.5px solid rgba(255, 255, 255, 0.4)';
                navLinks.forEach(link => {
                    link.style.color = 'rgba(255, 255, 255, 1)';
                });
            }
        }

        // Изначальная установка цветов
        updateLinkColors();

//        old hover nav_link
        // Навешиваем обработчики один раз
//        navLinks.forEachworker_practice_mobile(link => {
//            link.addEventListener('mouseover', () => {
//                link.style.color = 'white';
//            });
//            link.addEventListener('mouseout', () => {
//                // Восстанавливаем цвет в зависимости от того, прокручен ли сайт
//                if (isScrolled()) {
//                    link.style.color = 'var(--black-color)';
//                } else {
//                    link.style.color = 'white';
//                }
//            });
//        });

        // Обработчик scroll
        window.addEventListener('scroll', () => {
            updateLinkColors();
        });
    } else {
        setTimeout(() => {
            workerBio.style.opacity = '1'
            workerBio.style.transform = 'translateY(0)'
            workerBioHeader.style.opacity = '1'
            workerBioHeader.style.transform = 'translateY(0)'
        }, 675);

        burgerIcon.addEventListener('click', () => {
            if (burgerIcon.classList.contains('nav_active')) {
                burgerIconLines.forEach(line => {
                    line.style.backgroundColor = 'var(--red-color-v3)';
                });
            } else {
                burgerIconLines.forEach(line => {
                    line.style.backgroundColor = 'var(--whiteish)';
                });
            }
        });
    }

    if (mobilePracticeItems.length === 1) {
        mobilePractice.style.gridTemplateColumns = 'repeat(1, 1fr)';
        mobilePracticeItems.forEach(item => {
            item.style.border = '0px';
            item.style.justifyContent = 'center';
            item.style.alignItems = 'center';
            item.style.fontSize = '1.1rem'
        })
    }

    if (mobilePracticeItems.length === 2) {
        let counter = 0
        mobilePractice.style.gridTemplateColumns = 'repeat(2, 1fr)';
        mobilePracticeItems.forEach(item => {
            item.style.justifyContent = 'center';
            item.style.textAlign = 'center';
            item.style.alignItems = 'center';
            if (counter === 0) {
                counter += 1;
            } else {item.style.border = '0px';}
        })
    }


    header.style.borderBottom = '0.5px solid rgba(255, 255, 255, 0.4)';

    window.addEventListener('scroll', () => {

        if (window.innerWidth < 640) {
            if (workerProjectsHeader.getBoundingClientRect().bottom <= window.innerHeight - 5 * vh) {
                workerProjectsHeader.style.opacity = '1'
                workerProjectsHeader.style.transform = 'translateY(0)'

                setTimeout(() => {
                    workerProjects.style.opacity = '1'
                    workerProjects.style.transform = 'translateY(0)'
                }, 275);
            }

            if (pageYOffset >= workerContainer.offsetHeight - 17 * vw) {
                header.style.backgroundColor = 'var(--whiteish)';
                header.style.borderBottom = '0.5px solid var(--black-color)';
                burgerIconLines.forEach(line => {
                    line.style.backgroundColor = 'var(--red-color-v3)';
                });

                burgerIcon.addEventListener('click', () => {
                    if (burgerIcon.classList.contains('nav_active')) {
                      burgerIconLines.forEach(line => {
                          line.style.backgroundColor = 'var(--red-color-v3)';
                          header.style.borderBottom = '0.5px solid rgba(255, 255, 255, 0.4)';
                      });
                  } else {
                      burgerIconLines.forEach(line => {
                          line.style.backgroundColor = 'var(--red-color-v3)';
                      });
                      header.style.borderBottom = '0.5px solid var(--black-color)';
                  }
              });

          }
          else {
              // этот else относится к условию pageYOffset >= ...
              header.style.backgroundColor = 'var(--black-color)';
              header.style.borderBottom = '0.5px solid rgba(255, 255, 255, 0.4)';
              burgerIconLines.forEach(line => {
                  line.style.backgroundColor = 'var(--whiteish)';
              });
              burgerIcon.addEventListener('click', () => {
                  if (burgerIcon.classList.contains('nav_active')) {
                      burgerIconLines.forEach(line => {
                          line.style.backgroundColor = 'var(--red-color-v3)';
                      });
                  } else {
                      burgerIconLines.forEach(line => {
                          line.style.backgroundColor = 'var(--whiteish)';
                      });
                  }
              });
          }
            if (pageYOffset >= workerContainer.offsetHeight + workerBioContainer.offsetHeight) {
                header.style.backgroundColor = 'transparent';
                header.style.borderBottom = '0.5px solid rgba(255, 255, 255, 0.4)';
            }
      }
      else if (window.innerWidth < 990) {

            if (workerProjectsHeader.getBoundingClientRect().bottom <= window.innerHeight - 5 * vh) {
                workerProjectsHeader.style.opacity = '1'
                workerProjectsHeader.style.transform = 'translateY(0)'

                setTimeout(() => {
                    workerProjects.style.opacity = '1'
                    workerProjects.style.transform = 'translateY(0)'
                }, 275);
            }

            if (pageYOffset >= workerContainer.offsetHeight - 10 * vw) {
                header.style.backgroundColor = 'var(--whiteish)';
                header.style.borderBottom = '0.5px solid var(--black-color)';
                burgerIconLines.forEach(line => {
                  line.style.backgroundColor = 'var(--red-color-v3)';
                })

                burgerIcon.addEventListener('click', () => {
                    if (burgerIcon.classList.contains('nav_active')) {
                        burgerIconLines.forEach(line => {
                            line.style.backgroundColor = 'var(--red-color-v3)';
                            header.style.borderBottom = '0.5px solid var(--black-color)';
                        });
                    } else {
                        burgerIconLines.forEach(line => {
                            line.style.backgroundColor = 'var(--red-color-v3)';
                        });
                        header.style.borderBottom = '0.5px solid var(--black-color)';
                    }
                });
            } else {
                header.style.backgroundColor = 'var(--black-color)';
                burgerIconLines.forEach(line => {
                  line.style.backgroundColor = 'var(--whiteish)';
                })

                burgerIcon.addEventListener('click', () => {
                    if (burgerIcon.classList.contains('nav_active')) {
                        burgerIconLines.forEach(line => {
                            line.style.backgroundColor = 'var(--red-color-v3)';
                        });
                        header.style.border = '0px';
                    } else {
                        burgerIconLines.forEach(line => {
                            line.style.backgroundColor = 'var(--whiteish)';
                        });
                    }
                });
            }

            if (pageYOffset >= workerContainer.offsetHeight + workerBioContainer.offsetHeight) {
                header.style.backgroundColor = 'transparent';
                header.style.borderBottom = '0.5px solid rgba(255, 255, 255, 0.4)';
            }
      }
        else if (window.innerWidth > 990) {

            if (workerBioHeader.getBoundingClientRect().bottom <= window.innerHeight - 10 * vh) {
                workerBioHeader.style.opacity = '1'
                workerBioHeader.style.transform = 'translateY(0)'

                setTimeout(() => {
                    workerBio.style.opacity = '1'
                    workerBio.style.transform = 'translateY(0)'
                    workerBioImage.style.opacity = '1'
                    workerBioImage.style.transform = 'translateY(0)'
                }, 275);
            }

            if (workerProjectsHeader.getBoundingClientRect().bottom <= window.innerHeight - 5 * vh) {
                workerProjectsHeader.style.opacity = '1'
                workerProjectsHeader.style.transform = 'translateY(0)'

                setTimeout(() => {
                    workerProjects.style.opacity = '1'
                    workerProjects.style.transform = 'translateY(0)'
                }, 275);
            }

            if (workerProjectsContainer.getBoundingClientRect().bottom <= window.innerHeight - 12 * vh)  {
                header.style.backgroundColor = 'transparent';
                header.style.borderBottom = '0.5px solid rgba(255, 255, 255, 0.4)';

                navLinks.forEach(link => {
                    link.style.color = 'var(--whiteish)';
                });
            }
        }
    })

}


if (helpPathCategory === 'practice') {

    const practiceHeaderContainer = document.querySelector('.practice_container')
    const practiceList = document.querySelectorAll('.practice_list_container .practice_list li')

    main.style.backgroundImage = 'linear-gradient(90deg,var(--black-color) 11%, var(--background-grey) 85%)';
    main.style.backgroundColor = 'transparent';


    let counter = 0
    practiceList.forEach(card => {
        counter += 1
        if (counter <= 2) {
            setTimeout(() => {
                card.style.transition = 'opacity 1s ease, transform 1s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 275);
        }
    })


    window.addEventListener('scroll', () => {
        if(pageYOffset > practiceHeaderContainer.offsetHeight - 5 * vw) {
            header.style.backgroundColor = 'var(--black-color)';
        }
        else {
            header.style.backgroundColor = 'transparent';
        }

        let counter = 0
        practiceList.forEach(card => {
            counter += 1
             if (counter > 2) {
                 if (window.innerWidth > 640) {
                     if (card.getBoundingClientRect().bottom <= window.innerHeight + 30 * vh) {
                         card.style.transition = 'opacity .5s ease, transform .5s ease';
                         card.style.opacity = '1';
                         card.style.transform = 'scale(1)';
                     }
                 } else {
                     if (card.getBoundingClientRect().bottom <= window.innerHeight + 15 * vh) {
                         card.style.transition = 'opacity .5s ease, transform .5s ease';
                         card.style.opacity = '1';
                         card.style.transform = 'scale(1)';
                     }
                 }
             }
        })
    })

}

if (helpPathCategory === 'practice_detail') {
    const practiceDetailContents = document.querySelector('.practice_contents')
    const practiceFirstParagraph = document.querySelector('.practice_contents :nth-child(1)')
    const practiceSecondParagraph = document.querySelector('.practice_contents :nth-child(2)')
    const practiceContentsParagraph = document.querySelectorAll('.practice_contents p')
    const practiceDetailHeader = document.querySelector('.practice_detail_header')

    const workersCarouselList = document.querySelector('.practice_detail_workers .wrapper ul');
    const workersCarouselItem = document.querySelector('.practice_detail_workers .wrapper ul li');
    const workersInfo = document.querySelectorAll('.practice_detail_workers .wrapper ul li .worker_info');
    const workersPhoto = document.querySelectorAll('.practice_detail_workers .wrapper ul li .worker_photo_link');
    const workersCarouselItems = document.querySelectorAll('.practice_detail_workers .wrapper ul li');
    const workerArrows = document.querySelector('.practice_detail_workers .wrapper .arrows');
    const arrow_backward = document.getElementById('workers_arrow_backward');
    const arrow_forward = document.getElementById('workers_arrow_forward');


    if (window.innerWidth > 640) {
        if (practiceContentsParagraph.length <= 2) {
            practiceSecondParagraph.style.gridArea = '1 / 2 / 1 / 3';
        }
    } else {
        const practiceThirdParagraph = document.querySelector('.practice_contents :nth-child(3)')
        practiceDetailContents.style.gridTemplateColumns = '1fr';
        practiceFirstParagraph.style.gridArea = '1 / 1 / 1 / 3';
        practiceSecondParagraph.style.gridArea = '2 / 1 / 2 / 3';
        if(practiceThirdParagraph) {
            practiceThirdParagraph.style.gridArea = '3 / 1 / 3 / 3';
        }
    }


        window.addEventListener('scroll', () => {
        if(pageYOffset > practiceDetailHeader.offsetHeight - 5 * vw) {
            header.style.backgroundColor = 'var(--black-color)';
        }
        else {
            header.style.backgroundColor = 'transparent';
        }
    })


    arrow_backward.style.display = 'none'
    arrow_forward.style.display = 'none'


    function animateArrow(arrow) {
        arrow.classList.add('arrow-click');
  // Удаляем класс после завершения анимации, чтобы можно было повторить
        arrow.addEventListener('animationend', () => {
            arrow.classList.remove('arrow-click');
        }, { once: true });
    }


    if (workersCarouselItems.length > 4) {
        arrow_backward.style.display = 'inline-block'
        arrow_forward.style.display = 'inline-block'
//        workerArrows.style.margin = '5vw 0 5vw 0'

        workersCarouselList.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            workersCarouselList.scrollLeft += evt.deltaY;
            workersCarouselList.style.scrollBehavior = 'auto';
        });

        if (window.innerWidth > 990) {
            const workersCarouselItemWidth = workersCarouselItem.offsetWidth
            console.log(workersCarouselItemWidth)
            arrow_forward.addEventListener('click', () => {
                animateArrow(arrow_forward);
                workersCarouselList.style.scrollBehavior = 'smooth';
                workersCarouselList.scrollLeft += workersCarouselItemWidth * 4;
            });
            arrow_backward.addEventListener('click', () => {
                animateArrow(arrow_backward);
                workersCarouselList.style.scrollBehavior = 'smooth';
                workersCarouselList.scrollLeft -= workersCarouselItemWidth * 4;
            });
        } else {
            const workersCarouselItemWidth = workersCarouselItem.offsetWidth
            console.log(workersCarouselItemWidth)
            arrow_forward.addEventListener('click', () => {
                animateArrow(arrow_forward);
                workersCarouselList.style.scrollBehavior = 'smooth';
                workersCarouselList.scrollLeft += workersCarouselItemWidth * 2;
            });
            arrow_backward.addEventListener('click', () => {
                animateArrow(arrow_backward);
                workersCarouselList.style.scrollBehavior = 'smooth';
                workersCarouselList.scrollLeft -= workersCarouselItemWidth * 2;
            });
        }

    } else if (workersCarouselItems.length === 4) {
        if (window.innerWidth > 990) {
            workersCarouselList.style.display = 'grid';
            workersCarouselList.style.gridTemplateColumns = 'repeat(4, 1fr)';
            workersCarouselItems.forEach (item => {
                item.style.minWidth = '100%';
            })
        } else {
            arrow_backward.style.display = 'inline-block'
            arrow_forward.style.display = 'inline-block'
//            workerArrows.style.margin = '2vw 0 0 0'

            workersCarouselList.addEventListener('wheel', (evt) => {
                evt.preventDefault();
                workersCarouselList.scrollLeft += evt.deltaY;
                workersCarouselList.style.scrollBehavior = 'auto';
            });

            const workersCarouselItemWidth = workersCarouselItem.offsetWidth
            console.log(workersCarouselItemWidth)
            arrow_forward.addEventListener('click', () => {
                animateArrow(arrow_forward);
                workersCarouselList.style.scrollBehavior = 'smooth';
                workersCarouselList.scrollLeft += workersCarouselItemWidth * 2;
            });
            arrow_backward.addEventListener('click', () => {
                animateArrow(arrow_backward);
                workersCarouselList.style.scrollBehavior = 'smooth';
                workersCarouselList.scrollLeft -= workersCarouselItemWidth * 2;
            });
        }

    } else if (workersCarouselItems.length === 3) {


        if (window.innerWidth > 990) {

            workersCarouselItems.forEach(item => {
                item.style.height = '42vw';
            })

            workersCarouselList.style.display = 'grid';
            workersCarouselList.style.gridTemplateColumns = 'repeat(3, 1fr)';
            workersCarouselItems.forEach (item => {
                item.style.minWidth = '100%';
            })
        } else {
            workersCarouselItems.forEach(item => {
                item.style.height = '80vw';
            })

            arrow_backward.style.display = 'inline-block'
            arrow_forward.style.display = 'inline-block'
//            workerArrows.style.margin = '2vw 0 0 0'

            workersCarouselList.addEventListener('wheel', (evt) => {
                evt.preventDefault();
                workersCarouselList.scrollLeft += evt.deltaY;
                workersCarouselList.style.scrollBehavior = 'auto';
            });

            const workersCarouselItemWidth = workersCarouselItem.offsetWidth
            console.log(workersCarouselItemWidth)
            arrow_forward.addEventListener('click', () => {
                animateArrow(arrow_forward);
                workersCarouselList.style.scrollBehavior = 'smooth';
                workersCarouselList.scrollLeft += workersCarouselItemWidth * 2;
            });
            arrow_backward.addEventListener('click', () => {
                animateArrow(arrow_backward);
                workersCarouselList.style.scrollBehavior = 'smooth';
                workersCarouselList.scrollLeft -= workersCarouselItemWidth * 2;
            });
        }


    }  else if (workersCarouselItems.length === 2) {
        workersCarouselList.style.display = 'grid';
        workersCarouselList.style.gridTemplateColumns = 'repeat(2, 1fr)';
        workersCarouselItems.forEach (item => {
            item.style.minWidth = '50%';
        })

        workersCarouselItems.forEach(item => {
            if (window.innerWidth > 990) {
                item.style.height = '42vw';
            } else {item.style.height = '83vw';}
        })

//        workersInfo.forEach(info => {
//            info.style.bottom = '-3vw';
//        })
    } else if (workersCarouselItems.length === 1) {
        workersCarouselItem.style.minWidth = '100%';

        workersCarouselItems.forEach(item => {
            if (window.innerWidth > 990) {
                item.style.height = '42vw';
            } else {item.style.height = '93vw';}
        })
    }

}



if (Path_category === 'work') {
    const jobsContainer= document.querySelector('.jobs_container')
    const dropDownButton= document.querySelectorAll('.show')
    const longView = document.querySelector('.long_view')
    const jobCards= document.querySelectorAll('.job_card')


    jobCards.forEach(card => {
      // Ищем кнопку в пределах текущей карточки
        const button = card.querySelector('.show_button'); // может быть <input type="checkbox"> или <button>
        const shortView = card.querySelector('.short_view');
        const emptySpace = card.querySelector('.empty');
        const emptySpaceText = card.querySelector('.empty p');
        const feedbackButton = card.querySelector('.button');
        const feedbackButtonLabel = card.querySelector('.button label');

        const offset = 5 * vw;
        const rect = card.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = scrollTop + rect.top - offset;


      if (!button || !shortView) return; // Защита на случай, если элемент не найден

        button.addEventListener('change', () => {
        if (button.checked) {
            shortView.style.position = 'sticky';
            shortView.style.top = '5vw';
            shortView.style.backgroundColor = 'var(--grey-blueish)';
            emptySpace.style.display = 'flex';
            emptySpace.style.borderTop = '1px solid rgba(255, 255, 255, 0.3)';
            card.style.padding = '0vw 5vw 7vw 5vw'
            emptySpaceText.style.opacity = '0';
            feedbackButton.style.opacity = '1';
            feedbackButton.style.pointerEvents = 'auto';



            header.style.backgroundColor = 'var(--black-color)';
        } else {
            shortView.style.position = 'relative';
            shortView.style.top = '';
            shortView.style.backgroundColor = '';
            emptySpace.style.borderTop = '';
            card.style.padding = '0vw 5vw 0vw 5vw';
            html.style.scrollBehaviour = 'auto !important'
            body.style.scrollBehaviour = 'auto !important'
            window.scrollTo({ top: targetPosition, behavior: 'auto' });
            emptySpace.style.display = 'none';
            emptySpaceText.style.opacity = '0';
            feedbackButton.style.opacity = '0';
            feedbackButton.style.pointerEvents = 'none';

            header.style.backgroundColor = 'transparent';
        }
      });
    });



}
