const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav')

burger.onclick = () => {
    burger.classList.toggle('ic-times')
    nav.classList.toggle('active')
}