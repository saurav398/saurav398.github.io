const menuBtn = document.querySelector('#manu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .contanor ul');
// open manu

menuBtn.addEventListener('click', () => {
    menu.style.display = "block"
    menuBtn.style.display = "none"
    closeBtn.style.display = "inline-block"
})
// close manu

closeBtn.addEventListener('click', () => {
    menu.style.display = "none"
    menuBtn.style.display = "inline-block"
    closeBtn.style.display = "none"
})




const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');

    })
}
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})



//read more about


const readMoreBtn=document.querySelector('.read-more');
const readMore=document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () =>{
    readMore.classList.toggle('show-content')
    if(readMore.classList.contains('show-content')){
        readMoreBtn.textContent="Show less"
    }
    else{
        readMoreBtn.textContent="Show more"
    }
})

//skills itms

const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})

//add box shadow on scroll


window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY>0)
})