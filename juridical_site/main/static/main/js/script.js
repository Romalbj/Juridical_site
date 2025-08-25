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

//доделать
const statisticsBlock = document.querySelector('.statistics')
const logo = document.querySelector('.logo')
const aboutUs = document.querySelector('.statistics .statistics_wrapper .heading p')
const statistics = document.querySelector('.statistics .statistics_wrapper ul')
const statisticsOne = document.getElementById('1')
const statisticsTwo = document.getElementById('2')
const statisticsThree = document.getElementById('3')
const statisticsFour = document.getElementById('4')

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

window.addEventListener('scroll', () => {
    if (pageYOffset > window.innerHeight) {
        statisticsBlock.style.backgroundAttachment = 'local';
    }

    else if (pageYOffset < window.innerHeight) {
        statisticsBlock.style.backgroundAttachment = 'fixed';
    }


    if (pageYOffset > window.innerHeight*0.5) {
        const timerIdZero = setTimeout(() => {
          aboutUs.style.opacity = '1';
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
        aboutUs.style.opacity = '0';
        statisticsOne.style.opacity = '0';
        statisticsTwo.style.opacity = '0';
        statisticsThree.style.opacity = '0';
        statisticsFour.style.opacity = '0';

        aboutUs.style.transition = '.1s';
        statisticsOne.style.transition = '.1s';
        statisticsTwo.style.transition = '.1s';
        statisticsThree.style.transition = '.1s';
        statisticsFour.style.transition = '.1s';


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
        const timerCardIDZero = setTimeout(() => {
          cardHeader.style.opacity = '1';
        }, 300);

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

        logo.addEventListener('mouseover', function(e) {
            if (logo) logo.style.boxShadow = '0px 5px 25px 0.7px rgba(96, 33, 33, 0.5)';
        });
          logo.addEventListener('mouseout', function(e) {
            if (logo) {
                logo.style.boxShadow = '0px 0px 0px 0px transparent';
            }
        });

        cardHeader.style.transition = '2s';
        cardOne.style.transition = '2s';
        cardTwo.style.transition = '2s';
        cardThree.style.transition = '2s';
        cardFour.style.transition = '2s';
        cardFive.style.transition = '2s';
        cardSix.style.transition = '2s';
        cardSeven.style.transition = '2s';
        cardEight.style.transition = '2s';
        cardNine.style.transition = '2s';
    }

    else if (pageYOffset < window.innerHeight*1.5) {
        cardHeader.style.transition = '0.1s';
        cardOne.style.transition = '0.1s';
        cardTwo.style.transition = '0.1s';
        cardThree.style.transition = '0.1s';
        cardFour.style.transition = '0.1s';
        cardFive.style.transition = '0.1s';
        cardSix.style.transition = '0.1s';
        cardSeven.style.transition = '0.1s';
        cardEight.style.transition = '0.1s';
        cardNine.style.transition = '0.1s';

        cardHeader.style.opacity = '0';
        cardOne.style.opacity = '0';
        cardTwo.style.opacity = '0';
        cardThree.style.opacity = '0';
        cardFour.style.opacity = '0';
        cardFive.style.opacity = '0';
        cardSix.style.opacity = '0';
        cardSeven.style.opacity = '0';
        cardEight.style.opacity = '0';
        cardNine.style.opacity = '0';
    }




});