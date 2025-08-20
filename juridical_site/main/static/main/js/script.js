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




