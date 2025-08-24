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

//const header = document.querySelector('.nav_name')


window.addEventListener('scroll', () => {
    if (pageYOffset > window.innerHeight) {
        statisticsBlock.style.backgroundAttachment = 'local';
    }

    else if (pageYOffset > window.innerHeight*0.5) {
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

    else if (pageYOffset < window.innerHeight) {
        statisticsBlock.style.backgroundAttachment = 'fixed';
    }
});