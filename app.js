let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.List');
let thumbnailDom = document.querySelector('.thumnail');

nextDom.onclick = () => showSlider('next');
prevDom.onclick = () => showSlider('prev');

let timeRunning = 500;
let timeAuto = 5000;
let runTimeOut;
let runAutoRun;

function showSlider(type) {
    let items = document.querySelectorAll('.carousel .List .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumnail .item');

    if (type === 'next') {
        listItemDom.appendChild(items[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let lastItem = items.length - 1;
        listItemDom.prepend(items[lastItem]);
        thumbnailDom.prepend(itemThumbnail[lastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAuto);
}
