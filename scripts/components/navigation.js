document.write(`
<nav class="navigation-section">
<div class="container">
    <div class="navigation-section__content">
        <div class="navigation-section__content--logo">
            <a href="./index" class="logo">
                <img src="./assets/svg/logo/logo-hat.svg" alt="comapny-logo">
            </a>
        </div>
        <div class="navigation-section__content--navigation">
            <button class="hamburger-button">
                <div class="line"></div>
                <div class="line"></div>
                
                <div class="x-button">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </button>
        </div>
    </div>
</div>
<div class="nav-list-content">
    <div class="list-container">
        <ul class="nav-list">
            <li>
                <a href="./index" class="nav-link">home</a>
            </li>
            <li>
                <a href="./oferta" class="nav-link">oferta</a>
            </li>
            <li>
                <a href="./galeria" class="nav-link">galeria</a>
            </li>
            <li>
                <a href="./kontakt" class="nav-link">kontakt</a>
            </li>
        </ul>
    </div>
</div>
</nav>
`);






const menuButton = document.querySelector('.hamburger-button');
const navContainer = document.querySelector('.navigation-section');

const openMenu = () => {
    navContainer.classList.toggle('navigation-section--active');

}



menuButton.addEventListener('click', openMenu);